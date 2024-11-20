
# **AI Phishing URL Detection System**  
### (React + Django)

This project is designed to detect phishing URLs using a Django backend and React frontend. Below are the instructions for setup, usage, and API documentation.

---

## **Table of Contents**  
1. [Setup for .env](#setup-for-env)  
2. [Instructions for Running Django Backend](#instructions-for-running-django-backend)  
3. [API Documentation](#api-documentation)  

---

## **Setup for .env**  
### **Development Environment**  
Create a `.env.development` file in the root of your React project and add the following:  
```plaintext
VITE_API_URL=http://127.0.0.1:8000/api
```

### **Production Environment**  
Create a `.env.production` file in the root of your React project and add the following:  
```plaintext
VITE_API_URL=https://your-production-domain.com/api
```

### **Using the API from `.env`**  
Example:  
```javascript
const apiUrl = import.meta.env.VITE_API_URL;

const fetchData = async () => {
  try {
    const response = await fetch(\`\${apiUrl}/your-endpoint\`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
```

---

## **Instructions for Running Django Backend**  

### **Quick Start for Development**  
1. **Clone the repository**:  
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Set up a virtual environment**:  
   ```bash
   python -m venv venv_folder
   source venv_folder/bin/activate  # Activate virtual environment
   ```

3. **Install dependencies**:  
   ```bash
   pip install -r requirements.txt
   ```

4. **Apply migrations**:  
   ```bash
   python manage.py migrate
   ```

5. **Start the server**:  
   ```bash
   python manage.py runserver
   ```

---

## **API Documentation**  

### **1. User Registration**  
Registers a new user.  

- **URL**: `api/register/`  
- **Method**: `POST`  
- **Permission**: Public  

#### **Request Body (JSON)**:  
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### **Success Response**:  
- **Code**: 201 Created  
```json
{
  "message": "User registered successfully!",
  "user": {
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

#### **Error Responses**:  
- **Code**: 400 Bad Request  
```json
{
  "errors": {
    "username": ["This field is required."],
    "email": ["Enter a valid email address."]
  }
}
```

---

### **2. User Login**  
Authenticates a user and generates JWT tokens.  

- **URL**: `api/login/`  
- **Method**: `POST`  
- **Permission**: Public  

#### **Request Body (JSON)**:  
```json
{
  "username": "john_doe",
  "password": "password123"
}
```

#### **Success Response**:  
- **Code**: 200 OK  
```json
{
  "message": "Login successful!",
  "token": {
    "access": "jwt-access-token",
    "refresh": "jwt-refresh-token",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

#### **Error Responses**:  
- **Code**: 401 Unauthorized  
```json
{
  "errors": {
    "non_field_errors": ["No active account found with the given credentials."]
  }
}
```

---

### **3. Forgot Password**  
Sends a password reset email to the user.  

- **URL**: `api/forgot-password/`  
- **Method**: `POST`  
- **Permission**: Public  

#### **Request Body (JSON)**:  
```json
{
  "email": "john@example.com"
}
```

#### **Success Response**:  
- **Code**: 200 OK  
```json
{
  "message": "Password reset email sent successfully!"
}
```

#### **Error Responses**:  
- **Code**: 404 Not Found  
```json
{
  "errors": {
    "email": ["No user found with this email address."]
  }
}
```

---

### **4. Reset Password**  
Allows a user to reset their password using a token.  

- **URL**: `api/reset-password/`  
- **Method**: `POST`  
- **Permission**: Public  

#### **Request Body (JSON)**:  
```json
{
  "token": "reset-token",
  "new_password": "newpassword123"
}
```

#### **Success Response**:  
- **Code**: 200 OK  
```json
{
  "message": "Password reset successfully!"
}
```

#### **Error Responses**:  
- **Code**: 400 Bad Request  
```json
{
  "errors": {
    "token": ["Invalid or expired token."],
    "new_password": ["This field is required."]
  }
}
```

---

### **5.Authorization**  
To access protected endpoints, include the Authorization header with the access token:  
```plaintext
Authorization: Bearer <jwt-access-token>
```

---

### **Token Expiry**  
- **Access Token**: Expires after 30 minutes.  
- **Refresh Token**: Expires after 1 day.  

---

### **6.Refreshing Access Token**  
Refresh the access token using the refresh token.  

- **URL**: `api/token/refresh/`  
- **Method**: `POST`  

#### **Request Body (JSON)**:  
```json
{
  "refresh": "jwt-refresh-token"
}
```

#### **Success Response**:  
- **Code**: 200 OK  
```json
{
  "access": "new-jwt-access-token"
}
```
# **7.Profile Add API**:

## Endpoint

**POST** `/api/profile/add/`

### Description
This API allows an authenticated user to create a profile, which includes personal details like `first_name`, `last_name`, `phone_number`, `gender`, and `photo`. If the user already has an existing profile, the API will return an error message.

### Permissions
- **Authenticated Users Only**: The user must be logged in to create a profile.

### Request Body

The request body must be sent as `multipart/form-data` to support file upload for the `photo` field.

| Field       | Type   | Description                          | Required |
|-------------|--------|--------------------------------------|----------|
| `first_name`| string | The user's first name                | Yes      |
| `last_name` | string | The user's last name                 | Yes      |
| `phone_number` | string | The user's phone number             | Yes      |
| `gender`    | string | The user's gender (e.g., `M` for Male, `F` for Female) | Yes      |
| `photo`     | file   | The user's profile photo             | No       |

#### Example Request Body (Postman)

In Postman, set the `Content-Type` to `multipart/form-data` and add the following form-data fields:

| Key            | Value              |
|----------------|--------------------|
| `phone_number` | `9495211403`       |
| `gender`       | `M`                |
| `first_name`   | `Jithin`           |
| `last_name`    | `Jose`             |
| `photo`        | (Select a file)    |

### Response

#### Success (201 Created)

If the profile is successfully created, the response will contain the user’s profile details, including the photo URL.

{
  "phone_number": "9495211403",
  "gender": "M",
  "first_name": "Jithin",
  "last_name": "Jose",
  "photo": "/media/photos/photo.jpg"  // or the appropriate media URL
}
### Error Codes

| **Code** | **Description**                                       |
|----------|-------------------------------------------------------|
| 400      | **Bad Request**: The request is malformed or invalid. |
| 401      | **Unauthorized**: The user is not authenticated.     |
| 409      | **Conflict**: Profile already exists.                |
| 415      | **Unsupported Media Type**: The media type of the request is not supported. |
| 422      | **Unprocessable Entity**: The server understands the content type of the request entity, but the server is unable to process the contained instructions. |
