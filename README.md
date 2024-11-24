
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

### **5. Profile Add**  
Allows an authenticated user to create a profile.  

- **URL**: `api/profile/add/`  
- **Method**: `POST`  
- **Permission**: Authenticated  

#### **Request Body (Form Data)**:  
| Field       | Type   | Required | Description            |
|-------------|--------|----------|------------------------|
| first_name  | string | Yes      | User's first name      |
| last_name   | string | Yes      | User's last name       |
| phone_number| string | Yes      | User's phone number    |
| gender      | string | Yes      | Gender (M/F)           |
| photo       | file   | No       | Profile photo (image)  |

#### **Success Response**:  
- **Code**: 201 Created  
```json
{
  "message": "Profile created successfully!",
  "profile": {
    "first_name": "John",
    "last_name": "Doe",
    "phone_number": "1234567890",
    "gender": "M",
    "photo": "/media/photos/photo.jpg"
  }
}
```

#### **Error Responses**:  
- **Code**: 400 Bad Request  
```json
{
  "errors": {
    "phone_number": ["This field is required."]
  }
}
```

---

### **6. Profile View**  
Retrieves the profile of the authenticated user.  

- **URL**: `api/profile/view/`  
- **Method**: `GET`  
- **Permission**: Authenticated  

#### **Success Response**:  
- **Code**: 200 OK  
```json
{
  "profile": {
    "first_name": "John",
    "last_name": "Doe",
    "phone_number": "1234567890",
    "gender": "M",
    "photo": "/media/photos/photo.jpg"
  }
}
```

#### **Error Responses**:  
- **Code**: 404 Not Found  
```json
{
  "errors": {
    "detail": "Profile not found."
  }
}
```

---

### **7. Profile Update**  
Updates the profile of the authenticated user.  

- **URL**: `api/profile/update/`  
- **Method**: `PATCH`  
- **Permission**: Authenticated  

#### **Request Body (JSON)**:  
| Field       | Type   | Required | Description            |
|-------------|--------|----------|------------------------|
| first_name  | string | No       | User's first name      |
| last_name   | string | No       | User's last name       |
| phone_number| string | No       | User's phone number    |
| gender      | string | No       | Gender (M/F)           |
| photo       | file   | No       | Profile photo (image)  |

#### **Success Response**:  
- **Code**: 200 OK  
```json
{
  "message": "Profile updated successfully!",
  "profile": {
    "first_name": "John",
    "last_name": "Doe",
    "phone_number": "9876543210",
    "gender": "M",
    "photo": "/media/photos/photo_updated.jpg"
  }
}
```

#### **Error Responses**:  
- **Code**: 400 Bad Request  
```json
{
  "errors": {
    "phone_number": ["Invalid phone number."]
  }
}
```

- **Code**: 404 Not Found  
```json
{
  "errors": {
    "detail": "Profile not found."
  }
}
```