
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
VITE_API_URL=http://127.0.0.1:8000/
```

### **Production Environment**  
Create a `.env.production` file in the root of your React project and add the following:  
```plaintext
VITE_API_URL=https://your-production-domain.com/
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
  "password": "password123",
  "user_type": "user"
}
```
"user_type" can take values user,advertiser,

#### **Success Response**:  
- **Code**: 201 Created  
```json
{
  "message": "User registered successfully!",
  "user": {
    "username": "john_doe",
    "email": "john@example.com",
    "user_type": "user"
  }
}
```

#### **Error Responses**:  
- **Code**: 400 Bad Request  
```json
{
  "errors": {
    "username": ["This field is required."],
    "email": ["Enter a valid email address."],
    "user_type": ["This field is required."],
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
  "password": "password123",
  "user_type": "user"
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
  },
  "user_type": "user"
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

- **URL**: `api/user-profile/add/`  
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
    "user": {
        "username": "sample123",
        "email": "sample@123gmail.com",
        "first_name": "John",
        "last_name": "Doe",
        "user_type": "user"
    },
    "phone_number": "9495211413",
    "gender": "M",
    "photo": "http://127.0.0.1:8000/media/profile_photos/94605_6FYifMb.jpg"
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

- **URL**: `api/user-profile/view/`  
- **Method**: `GET`  
- **Permission**: Authenticated  

#### **Success Response**:  
- **Code**: 200 OK  
```json
{
    "user": {
        "username": "sample123",
        "email": "sample@123gmail.com",
        "first_name": "John",
        "last_name": "Doe",
        "user_type": "user"
    },
    "phone_number": "9495211413",
    "gender": "M",
    "photo": "http://127.0.0.1:8000/media/profile_photos/94605_6FYifMb.jpg"
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

- **URL**: `api/user-profile/edit/`  
- **Method**: `PUT`  
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
    "user": {
        "username": "sample123",
        "email": "sample@123gmail.com",
        "first_name": "John",
        "last_name": "Doe",
        "user_type": "user"
    },
    "phone_number": "9495211443",
    "gender": "M",
    "photo": "http://127.0.0.1:8000/media/profile_photos/94605_6FYifMb.jpg"
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
### **8. Get Interests**  
Retrieves a list of available interests. 

- **URL**: `api/interests/`  
- **Method**: `GET`  
- **Permission**: Public  

#### **Success Response**:  
- **Code**: 200 OK  
```json
[
    {
        "id": 1,
        "name": "Personal Development",
        "icon": "/media/interest_icons/12.png"
    },
    {
        "id": 2,
        "name": "Technology",
        "icon": "/media/interest_icons/14.png"
    }
]
```

#### **Error Responses**:  
- **Code**: 500 Internal Server Error 
```json
{
  "errors": {
    "detail": "An unexpected error occurred."
  }
}
```
### 9. Get All Blogs or a Single Blog

**URL:** `/api/blogs/`  
**Method:** `GET`  
**Description:** Retrieves a list of all blogs or a single blog if an `id` is provided.  

#### Parameters
- **id** (optional, integer): The ID of the blog to retrieve.

#### Responses
- **200 OK:**  
  if fetching all blogs.
```json
 [
    {
        "id": 1,
        "title": "Sample Blog",
        "content": "This is a sample blog content.",
        "image": "http://127.0.0.1:8000/media/blog_images/sample.png",
        "interests": [
            {
                "id": 3,
                "name": "Technology",
                "icon": "http://127.0.0.1:8000/media/interest_icons/tech.png"
            }
        ],
        "created_at": "2023-12-30T12:00:00Z",
        "updated_at": "2023-12-30T14:00:00Z"
    }
 ]
```
  If fetching a single blog:
```json
 {
    "id": 1,
    "title": "Sample Blog",
    "content": "This is a sample blog content.",
    "image": "http://127.0.0.1:8000/media/blog_images/sample.png",
    "interests": [
        {
            "id": 3,
            "name": "Technology",
            "icon": "http://127.0.0.1:8000/media/interest_icons/tech.png"
        }
    ],
    "created_at": "2023-12-30T12:00:00Z",
    "updated_at": "2023-12-30T14:00:00Z"
}
```
- **204 No Content:**  
  ```json
  {
      "message": "No blogs"
  }
  ```

- **404 Not Found:**  
  ```json
  {
      "error": "Blog does not exist"
  }
  ```

---

### 10. Create a New Blog

**URL:** `/api/blogs/`  
**Method:** `POST`  
**Description:** Creates a new blog.  

#### Request Body
- **title** (string): Title of the blog.  
- **content** (string): Content of the blog.  
- **image**  (file, optional): Image file for the blog. 
- **interest_id**  (string): Interest id. 

#### Responses
- **201 Created:**  
  ```json
  {
    "id": 1,
    "title": "Sample Blog",
    "content": "This is a sample blog content.",
    "image": "http://127.0.0.1:8000/media/blog_images/sample.png",
    "interests": [
       {
            "id": 3,
            "name": "Technology",
            "icon": "http://127.0.0.1:8000/media/interest_icons/tech.png"
        }
    ],
    "created_at": "2023-12-30T12:00:00Z",
    "updated_at": "2023-12-30T12:00:00Z"
  }
  ```
- **400 Bad Request:**  
  ```json
  {
      "title": ["This field is required."]
  }
  ```

---

### 11. Update a Blog

**URL:** `/api/blogs/<id>/`  
**Method:** `PUT`  
**Description:** Updates an existing blog by ID.  

#### Parameters
- **id** (required, integer): The ID of the blog to update.

#### Request Body
- **title** (string): Updated title of the blog.  
- **content** (string): Updated content of the blog.  
- **image**  (file, optional): Image file for the blog. 

#### Responses
- **200 OK:**  
  ```json
  {
    "id": 2,
    "title": "Reactjs",
    "content": "djasldkalskdl",
    "image": "http://127.0.0.1:8000/media/blog_images/12_Y0ew5D5.png",
    "interests": {
        "id": 3,
        "name": "Health & Wellness",
        "icon": "http://127.0.0.1:8000/media/interest_icons/Frame_427319158_s38yLhr.png"
    },
    "created_at": "2025-01-08T08:32:07.893220Z",
    "updated_at": "2025-01-08T08:32:07.893243Z"
  }
  ```
- **400 Bad Request:**  
  ```json
  {
      "title": ["This field is required."]
  }
  ```
- **404 Not Found:**  
  ```json
  {
      "error": "Blog does not exist."
  }
  ```

---

### 12. Delete a Blog

**URL:** `/api/blogs/<id>/`  
**Method:** `DELETE`  
**Description:** Deletes an existing blog by ID.  

#### Parameters
- **id** (required, integer): The ID of the blog to delete.

#### Responses
- **200 OK:**  
  ```json
  {
      "message": "Blog deleted successfully"
  }
  ```
- **404 Not Found:**  
  ```json
  {
      "error": "Blog does not exist."
  }
  ```
- **400 Bad Request:**  
  ```json
  {
      "error": "Please provide an id, for it is required for deleting blog."
  }
  ```

---

## Authentication
- **Required Permissions:** Admin access for `POST`, `PUT`, and `DELETE` methods.
- **Public Access:** `GET` method for viewing blogs.

### **13. Admin View Users**

**URL:** `/api/admin-view-users/`  
**Method:** `GET`  
**Description:** Retrieves details of all users with `user_type='user'`, including their profiles if available. Users without profiles are also included.

---

#### **Success Responses**  

- **Code:** 200 OK  
  If users with profiles are found:
  ```json
  [
      {
          "user": {
              "username": "john_doe",
              "email": "john.doe@example.com",
              "first_name": "John",
              "last_name": "Doe",
              "user_type": "user"
          },
          "phone_number": "1234567890",
          "gender": "M",
          "photo": "/media/profile_photos/john_doe.jpg"
      },
      {
          "username": "jane_doe",
          "email": "jane.doe@example.com",
          "user_type": "user"
      }
  ]

### **13. AdminToggleUserActivation API**
## Overview
This API allows an admin to toggle the activation status of a user. When called, it activates a deactivated user or deactivates an active user.

---

## Endpoint
**URL**: `/api/toggle-user-activation/<int:user_id>/`

**Method**: `PATCH`

**Permission**: Admin-only (requires `IsAdmin` permission)

---

## Request Parameters

| Parameter    | Type   | Description                     |
|--------------|--------|---------------------------------|
| `user_id`    | `int`  | The ID of the user to toggle.   |

---

## Headers

| Header            | Value                  | Required |
|--------------------|------------------------|----------|
| `Authorization`    | `Bearer <token>`       | Yes      |

---

## Response

### Success (200 OK)
The API returns a success message indicating whether the user was activated or deactivated.

#### Example Response:
```json
{
    "message": "User '007jithinjose' has been activated."
}
```
### **14. Advertiser Registration**  
Registers a new advertiser along with their profile.

- **URL**: `api/register-advertiser/`  
- **Method**: `POST`  
- **Permission**: Public  

#### **Request Body (JSON)**:  
| Field            | Type    | Required | Description                                   |
|------------------|---------|----------|-----------------------------------------------|
| username         | string  | Yes      | Unique username for the advertiser            |
| email            | string  | Yes      | Email address of the advertiser               |
| password         | string  | Yes      | Password for the advertiser's account         |
| user_type        | string  | Yes      | Type of user (`advertiser`)                   |
| business_name    | string  | Yes      | Name of the advertiser's business             |
| business_type_id | integer | Yes      | ID of the business type                       |
| contact_number   | string  | Yes      | Contact number of the advertiser              |
| address          | string  | Yes      | Address of the advertiser's business          |
| profile_image    | file    | No       | Profile image of the advertiser (image file)  |

#### **Success Response**:  
- **Code**: 201 Created  
```json
{
    "message": "Advertiser registered successfully.",
    "data": {
        "user": {
            "username": "advertiser123",
            "email": "advertiser@example.com",
            "user_type": "advertiser"
        },
        "advertiser_profile": {
            "id": 1,
            "business_name": "Sample Business",
            "business_type": {
                "id": 3,
                "name": "Retail"
            },
            "contact_number": "1234567890",
            "address": "123 Sample Street",
            "profile_image": "http://127.0.0.1:8000/media/advertiser_profiles/sample_image.jpg"
        }
    }
}
```
- **400 Bad Request:**  
  ```json
  {
  "errors": {
    "username": ["This field is required."],
    "email": ["Enter a valid email address."]
  }
  }
  ```
- **Code: 500 Internal Server Error**  
  ```json
  {
  "error": "An unexpected error occurred.",
  "details": "Error message describing the issue."
  }

  ```
### **15. Admin View All Advertisers**  
Retrieve a list of all advertisers, including their profiles if available.

- **URL**: `api/admin-view-advertisers/`  
- **Method**: `GET`  
- **Permission**: Admin-only: Requires the user to have admin privileges.

#### **Success Response**:  
- **Code**: 200 OK 
```json
[
    {
        "id": 7,
        "user": 11,
        "business_name": "Tech Solutions",
        "business_type": {
            "id": 1,
            "name": "Personal Development",
            "icon": "/media/interest_icons/Frame_427319157_ieJrjHP.png"
        },
        "contact_number": "1234567890",
        "address": "123 Business Street, City, Country",
        "profile_image": "/media/advertiser_profile_photos/14_onn45xS.png"
    },
    {
        "id": 11,
        "username": "advertiser001",
        "email": "advertiser001@example.com",
        "is_active": true,
        "user_type": "advertiser"
    }
]

```
- **Code: 500 Internal Server Error**  
  ```json
  {
  "error": "An unexpected error occurred.",
  "details": "Error message describing the issue."
  }

  ```
### **16. Admin View New Advertisers**  
Retrieve a list of all new advertisers whose accounts are inactive (is_active=false).

- **URL**: `api/admin-view-new-advertisers/`  
- **Method**: `GET`  
- **Permission**: Admin-only: Requires the user to have admin privileges.

#### **Success Response**:  
- **Code**: 200 OK 
```json
[
    {
        "id": 7,
        "user": 11,
        "business_name": "Tech Solutions",
        "business_type": {
            "id": 1,
            "name": "Personal Development",
            "icon": "/media/interest_icons/Frame_427319157_ieJrjHP.png"
        },
        "contact_number": "1234567890",
        "address": "123 Business Street, City, Country",
        "profile_image": "/media/advertiser_profile_photos/14_onn45xS.png"
    },
    {
        "id": 11,
        "username": "advertiser001",
        "email": "advertiser001@example.com",
        "is_active": true,
        "user_type": "advertiser"
    }
]

```
- **Code: 204 No Content**  
  ```json
  {
  "error": "An unexpected error occurred.",
  "details": "Error message describing the issue."
  }

  ```
- **Code: 500 Internal Server Error**  
  ```json
  {
  "error": "An unexpected error occurred.",
  "details": "Error message describing the issue."
  }

  ```
### **17. Advertiser Add Advertisements**  
Retrieve a list of all new advertisers whose accounts are inactive (is_active=false).

- **URL**: `api/add-advertisement/`  
- **Method**: `POST`  
- **Permission**: Allows an authenticated advertiser to add a new advertisement.

#### **Request Body (JSON)**:  
| Field            | Type               | Required |Description                                    |
|------------------|--------------------|----------|-----------------------------------------------|
| ad_image         | File               | Yes      | The image file for the advertisement.         |
| title            | string             | Yes      | The title of the advertisement.               |
| link             | URL                | Yes      | The URL associated with the advertisement.    |
| start_date       | Date (DD-MM-YYYY)  | Yes      | The start date of the advertisement campaign. |
| end_date         | Date (DD-MM-YYYY)  | Yes      | The end date of the advertisement campaign    |

#### **Success Response**:  
- **Code**: 201 Created 
```json
{
    "id": 1,
    "ad_image": "https://example.com/media/advertisements/ad_image.jpg",
    "title": "Winter Sale",
    "link": "https://example.com/winter-sale",
    "start_date": "2024-01-01",
    "end_date": "2024-01-31",
    "created_at": "2024-12-30T10:00:00Z",
    "updated_at": "2024-12-30T10:00:00Z"
}

```
- **Code: 400 Bad Request**  
  ```json
  {
    "ad_image": ["This field is required."],
    "title": ["This field is required."]
  }
  ```
  - **Code: 403 Forbidden**  
  ```json
  {
    "error": "Only advertisers can add advertisements."
  }
  ```
- **Code: 500 Internal Server Error**  
  ```json
  {
  "error": "An unexpected error occurred.",
  "details": "Error message describing the issue."
  }

  ```
### **18. Advertiser View My Advertisements**  
Retrieves all advertisements created by the currently logged-in advertiser.

- **URL**: `api/my-advertisements/`  
- **Method**: `GET`  
- **Permission**: Admin-only: Requires the user to have admin privileges.

#### **Success Response**:  
- **Code**: 200 OK 
```json
[
    {
        "id": 1,
        "ad_image": "https://example.com/media/advertisements/ad_image1.jpg",
        "title": "Winter Sale",
        "link": "https://example.com/winter-sale",
        "start_date": "2024-01-01",
        "end_date": "2024-01-31",
        "created_at": "2024-12-30T10:00:00Z",
        "updated_at": "2024-12-30T10:00:00Z"
    },
    {
        "id": 2,
        "ad_image": "https://example.com/media/advertisements/ad_image2.jpg",
        "title": "Summer Bonanza",
        "link": "https://example.com/summer-bonanza",
        "start_date": "2024-06-01",
        "end_date": "2024-06-30",
        "created_at": "2024-06-01T08:00:00Z",
        "updated_at": "2024-06-01T08:00:00Z"
    }
]

```
- **Code: 204 No Content**  
  ```json
  {
    "message": "No advertisements found."
  }

  ```
  - **Code: 403 Forbidden**  
  ```json
  {
    "error": "Only advertisers can view their advertisements."
  }

  ```
- **Code: 500 Internal Server Error**  
  ```json
  {
  "error": "An unexpected error occurred.",
  "details": "Error message describing the issue."
  }

  ```
---

