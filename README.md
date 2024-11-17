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

#Quick Start for Development
Clone the repository:

git clone <repository-url>
cd <project-directory>


for first time running install python 
install virtual environment venv
after that open the virtual environment - 
    source venv_folder/bin/activate

Install dependencies:

pip install -r requirements.txt

Apply migrations:

python manage.py migrate

Start the server:

python manage.py runserver


#API Documentation

1. User Registration
Registers a new user.

URL: api/register/
Method: POST
Permission: Public
Request Body (JSON):
  {
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
  }
Success Response:
Code: 201 Created
Body:
  {
  "message": "User registered successfully!",
  "user": {
    "username": "john_doe",
    "email": "john@example.com"
  }
  }

Error Responses:
Code: 400 Bad Request
Body:
  {
  "errors": {
    "username": ["This field is required."],
    "email": ["Enter a valid email address."]
    }
  }

2. User Login
Authenticates a user and generates JWT tokens.

URL: api/login/
Method: POST
Permission: Public
Request Body (JSON):
  {
  "username": "john_doe",
  "password": "password123"
  }

Success Response:
Code: 200 OK
Body:
  {
  "message": "Login successful!",
  "token": {
    "access": "jwt-access-token",
    "refresh": "jwt-refresh-token",
    "username": "john_doe",
    "email": "john@example.com"
    }
  }

Error Responses:
Code: 401 Unauthorized
Body:
  {
  "errors": {
    "non_field_errors": ["No active account found with the given credentials."]
  }
}

Authorization
To access protected endpoints, include the Authorization header with the access token:

Authorization: Bearer <jwt-access-token>

Token Expiry
Access Token: Expires after 30 minutes.
Refresh Token: Expires after 1 day.

Refreshing Access Token
URL: api/token/refresh/
Method: POST
Request Body (JSON):
  {
  "refresh": "jwt-refresh-token"
  }

Success Response:
Code: 200 OK
Body:
  {
  "access": "new-jwt-access-token"
  }

