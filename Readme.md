#Ai Phishing URL detection System (React + Django)

#setup for .env
create a .env.development file and add below variable

VITE_API_URL=http://127.0.0.1:8000/api

create a .env.production file and add below variable

VITE_API_URL=https://your-production-domain.com/api


#Example for using the api from .env

const apiUrl = import.meta.env.VITE_API_URL;

const fetchData = async () => {
  try {
    const response = await fetch(`${apiUrl}/your-endpoint`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();

#Instruction for running Django Backend

for first time running install python 
install virtual environment venv
after that open the virtual environment - 
    source venv_folder/bin/activate
install all the required dependencies listed in the requirements.txt file
    pip install -r requirements.txt
Command to run 
    python manage.py runserver

