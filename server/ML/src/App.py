import streamlit as st
import pickle
import os
from src.pipeline.predict_pipeline import PredictPipeline
import validators
import mysql.connector
import streamlit_authenticator as stauth
import yaml
from yaml.loader import SafeLoader


mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="sql123",
    database="test"
)

# Create a cursor object
mycursor = mydb.cursor()
with open('rf.pkl','rb') as f:
    model = pickle.load(f)
pred = PredictPipeline()

with open('config.yaml') as file:
    config = yaml.load(file, Loader=SafeLoader)

authenticator = stauth.Authenticate(
    config['credentials'],
    config['cookie']['name'],
    config['cookie']['key'],
    config['cookie']['expiry_days'],
    config['preauthorized']
)

name, authentication_status, username = authenticator.login()

if username.isdigit():
    st.error('Username not be Numbers')
elif authentication_status == False:
    st.error('Username/password is incorrect')
elif authentication_status == None:
    st.warning('Please enter your username and password')
elif authentication_status:
    st.markdown('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">', unsafe_allow_html=True)

    # Define a container to hold the logo and title
    header_container = st.columns([1, 9])

    # Add the logo and title to the container
    with header_container[0]:
        st.markdown('<i class="fas fa-shield-alt fa-3x" style="line-height: 100px;"></i>', unsafe_allow_html=True)

    with header_container[1]:
        st.title('Malicious URL Detection')


    # Text input for URL
    url_input = st.text_input("Enter URL", "https://")

    if st.button('Check URL'):
        if validators.url(url_input):
            url_input = url_input.replace('https://', '')
            # Perform malware detection using your model
            transform_url=pred.transformURL(url_input)
            # transform_url=transform_url.reshape(1,-1)
            prediction=model.predict([transform_url])
            # st.write(prediction)
            # Display the result
            if prediction == 0:
                predicted_label = "Benign"
                st.markdown('<span style="color: green;">Benign</span>', unsafe_allow_html=True)
                st.info("No malicious activity detected. However, exercise caution and avoid downloading files or clicking on suspicious links.")
            elif prediction == 1:
                predicted_label = "Defacement"
                st.markdown('<span style="color: orange;">Defacement</span>', unsafe_allow_html=True)
                st.warning("The website might have been altered or defaced. Avoid interacting with it.")
            elif prediction == 2:
                predicted_label = "Malware"
                st.markdown('<span style="color: red;">Malware</span>', unsafe_allow_html=True)
                st.error("The website contains malware. Avoid visiting it and ensure your system is protected with updated antivirus software.")
                
            else:
                predicted_label = "Phishing"
                st.markdown('<span style="color: red;">Phishing</span>', unsafe_allow_html=True)
                st.error("The website may be attempting to steal your sensitive information. Do not enter any personal details and report it immediately.")
            sql = "INSERT INTO Malicious_URL_Detection (input_url, predicted_result) VALUES (%s, %s)"
            val = (url_input, predicted_label)
            mycursor.execute(sql, val)
            
        else:
            st.error('Please enter a valid URL.')

    # Commit changes
mydb.commit()

# Close the connection
mydb.close()