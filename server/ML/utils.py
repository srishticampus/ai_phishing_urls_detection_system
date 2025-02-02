# ML/utils.py
"""
This module contains the function to analyze a given URL and predict its category.
"""
import pickle
import os
import validators
import gdown  # Import gdown for downloading files from Google Drive
from ML.src.pipeline.predict_pipeline import PredictPipeline

# Define the Google Drive file ID and the local model path
MODEL_FILE_ID = "1rlLD-dbPXdHZQy_8TrdDIcpEbJBSqTPW"  # Replace with your Google Drive file ID
model_path = os.path.join(os.path.dirname(__file__), "src/rf.pkl")

# Function to download the model from Google Drive
def download_model_from_drive(file_id, destination):
    """Download a file from Google Drive using its file ID."""
    url = f"https://drive.google.com/uc?id={file_id}"
    gdown.download(url, destination, quiet=False)

# Check if the model file exists, if not, download it
if not os.path.exists(model_path):
    print("Model file not found. Downloading from Google Drive...")
    download_model_from_drive(MODEL_FILE_ID, model_path)

# Load ML model
with open(model_path, "rb") as f:
    model = pickle.load(f)

# Load prediction pipeline
pred = PredictPipeline()

def analyze_url(link):
    """
    Analyze a URL using a trained model and return the category.

    Parameters:
    - link (str): URL to analyze.

    Returns:
    - str: Prediction result.
    """
    if not validators.url(link):
        return "Invalid URL"

    sanitized_url = link.replace("https://", "").replace("http://", "")
    transformed_url = pred.transformURL(sanitized_url)
    prediction = model.predict([transformed_url])[0]

    categories = {
        0: "Benign",
        1: "Defacement",
        2: "Malware",
        3: "Phishing"
    }

    return categories.get(prediction, "Unknown")
