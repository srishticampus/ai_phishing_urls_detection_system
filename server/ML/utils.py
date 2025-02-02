#ML/utils.py
"""
This module contains the function to analyze a given URL and predict its category.
"""
import pickle
import os
import validators
from ML.src.pipeline.predict_pipeline import PredictPipeline

# Load ML model
model_path = os.path.join(os.path.dirname(__file__), "src/rf.pkl")
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
