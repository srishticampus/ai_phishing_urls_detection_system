
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
        "id": 1,
        "username": "john_doe",
        "email": "john.doe@example.com",
        "first_name": "John",
        "last_name": "Doe",
        "is_active": true,
        "user_type": "user"
    },
    "phone_number": "1234567890",
    "gender": "M",
    "photo": "http://127.0.0.1:8000/media/profile_photos/john_doe.jpg",
    "interests": []
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
        "id": 1,
        "username": "john_doe",
        "email": "john.doe@example.com",
        "first_name": "John",
        "last_name": "Doe",
        "is_active": true,
        "user_type": "user"
    },
    "phone_number": "1234567890",
    "gender": "M",
    "photo": "http://127.0.0.1:8000/media/profile_photos/john_doe.jpg",
    "interests": [
        {
            "interest": {
                "id": 1,
                "name": "Technology",
                "icon": "http://127.0.0.1:8000/media/interest_icons/tech.png"
            },
            "added_on": "2024-01-01T12:00:00Z"
        },
        {
            "interest": {
                "id": 2,
                "name": "Health & Wellness",
                "icon": "http://127.0.0.1:8000/media/interest_icons/health.png"
            },
            "added_on": "2024-01-02T12:00:00Z"
        }
    ]
}
```

#### **Error Responses**:  
- **Code**: 404 Not Found  
```json
{
    "error": "Profile does not exist."
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
        "id": 1,
        "username": "john_doe",
        "email": "john.doe@example.com",
        "first_name": "John",
        "last_name": "Doe",
        "is_active": true,
        "user_type": "user"
    },
    "phone_number": "1234567890",
    "gender": "M",
    "photo": "http://127.0.0.1:8000/media/profile_photos/john_doe.jpg",
    "interests": []
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
Retrieves details of all users, including their profiles and interests.
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
            "id": 1,
            "username": "john_doe",
            "email": "john.doe@example.com",
            "first_name": "John",
            "last_name": "Doe",
            "is_active": true,
            "user_type": "user"
        },
        "phone_number": "1234567890",
        "gender": "M",
        "photo": "http://127.0.0.1:8000/media/profile_photos/john_doe.jpg",
        "interests": [
            {
                "interest": {
                    "id": 1,
                    "name": "Technology",
                    "icon": "http://127.0.0.1:8000/media/interest_icons/tech.png"
                },
                "added_on": "2024-01-01T12:00:00Z"
            },
            {
                "interest": {
                    "id": 2,
                    "name": "Health & Wellness",
                    "icon": "http://127.0.0.1:8000/media/interest_icons/health.png"
                },
                "added_on": "2024-01-02T12:00:00Z"
            }
        ]
    },
    {
        "id": 2,
        "username": "jane_doe",
        "email": "jane.doe@example.com",
        "is_active": true,
        "user_type": "user"
    }
  ]
  ```
#### **Error Responses** 
- **Code:** 204 No Content
```json
{
    "message": "No users found."
}
```
- **Code:** 500 Internal Server Error
```json
{
    "error": "An unexpected error occurred.",
    "details": "<error_message>"
}
```

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
        "id": 1,
        "username": "advertiser001",
        "email": "advertiser001@example.com",
        "is_active": true,
        "user_type": "advertiser",
        "contact_number": "9495211402",
        "business_name": "Advertisers Paradise",
        "business_type": {
            "id": 1,
            "name": "Personal Development",
            "icon": "http://127.0.0.1:8000/media/interest_icons/Frame_427319157.png"
        },
        "profile_image": null
    },
    {
        "id": 2,
        "username": "advertiser002",
        "email": "advertiser002@example.com",
        "is_active": false,
        "user_type": "advertiser",
        "contact_number": null,
        "business_name": null,
        "business_type": null,
        "profile_image": null
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
        "id": 1,
        "username": "advertiser001",
        "email": "advertiser001@example.com",
        "is_active": false,
        "user_type": "advertiser",
        "contact_number": "9495211402",
        "business_name": "Advertisers Paradise",
        "business_type": {
            "id": 1,
            "name": "Personal Development",
            "icon": "/media/interest_icons/Frame_427319157.png"
        },
        "profile_image": null
  },
  {
        "id": 2,
        "username": "advertiser002",
        "email": "advertiser002@example.com",
        "is_active": false,
        "user_type": "advertiser",
        "contact_number": "1234567890",
        "business_name": "Tech Solutions",
        "business_type": {
            "id": 1,
            "name": "Personal Development",
            "icon": "/media/interest_icons/Frame_427319157.png"
        },
        "profile_image": "/media/advertiser_profile_photos/14.png"
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
### **17. Advertiser View, Create, Update, or Delete Advertisements**  
Retrieves all advertisements created by the currently logged-in advertiser.
- **URL**: `api/advertisements/`  
- **Method**: `GET`  
- **Permission**: Allows an authenticated advertiser to add a new advertisement.

#### **Success Response**:  
- **Code**: 200 OK 
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
- **Code:204 No Content**  
  ```json
  {
    "message": "No advertisements found."
  }

  ```
  - **Code: 403 Forbidden**  
  ```json
  {
    "error": "Only advertisers can view advertisements."
  }
  ```
- **Code: 500 Internal Server Error**  
  ```json
  {
  "error": "An unexpected error occurred.",
  "details": "Error message describing the issue."
  }
  ```
## ** View Single Advertisement**  
Retrieve details of a specific advertisement by its ID.
- **URL**: `api/advertisements/<int:advertisement_id>/`  
- **Method**: `GET`  
- **Permission**: Allows an authenticated advertiser to view a  advertisement.

#### **Success Response**:  
- **Code**: 200 OK 
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
- **Code:204 No Content**  
  ```json
  {
    "message": "Advertisement not found or you do not have permission to access it.."
  }

  ```
  - **Code: 403 Forbidden**  
  ```json
  {
    "error": "Only advertisers can view advertisements."
  }
  ```
- **Code: 500 Internal Server Error**  
  ```json
  {
  "error": "An unexpected error occurred.",
  "details": "Error message describing the issue."
  }
  ```
 ## **Create Advertisement
- **URL**: `api/advertisements/`  
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
- **Code: 201 Created**  
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
### **18. Admin View All Advertisements**  
Allows an admin to view all advertisements in the system.

- **URL**: `api/admin/advertisements/`  
- **Method**: `GET`  
- **Permission**: Requires authentication and admin privileges.

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
    "error": "Only admins - authenticated can access it"
  }

  ```
- **Code: 500 Internal Server Error**  
  ```json
  {
  "error": "An unexpected error occurred.",
  "details": "Error message describing the issue."
  }

  ```
### **19. Add User Interests**  
Allows a user to add multiple interests to their profile.
- **URL**: `api/add-user-interests/`  
- **Method**: `POST`  
- **Permission**: Requires authentication.

#### **Request Body (JSON)**: 
```json
 {
  "interest_ids": [1, 2, 3]
 }
```
#### **Success Response**:
- **Code**: 200 OK 
```json
{
  "message": "Interests added successfully."
}
```
- **Code: 400 Bad Request**  
  ```json
  {
  "errors": {
    "interest_ids": ["One or more interest IDs are invalid."]
  }
  }

  ```
  - **Code: 404 Not Found**  
  ```json
  {
  "error": "User profile does not exist."
  }

  ```
- **Code: 500 Internal Server Error**  
  ```json
  {
  "error": "An unexpected error occurred.",
  "details": "Error message describing the issue."
  }

  ```
### **22. User Interest Advertisements**
Retrieves advertisements that match the user's selected interests.

- **URL**: `api/advertisements/matching-interests/` 
- **Method**: `GET` 
- **Permission**: Requires authentication.
#### **Success Response**:
- **Code**: 200 OK 
```json
[
  {
    "id": 1,
    "ad_image": "http://example.com/media/advertisements/ad1.jpg",
    "title": "Tech Gadgets Sale",
    "link": "http://example.com/tech-sale",
    "start_date": "2024-01-01",
    "end_date": "2024-01-31",
    "created_at": "2024-12-30T10:00:00Z",
    "updated_at": "2024-12-30T10:00:00Z"
  },
  {
    "id": 2,
    "ad_image": "http://example.com/media/advertisements/ad2.jpg",
    "title": "Sports Gear Discount",
    "link": "http://example.com/sports-discount",
    "start_date": "2024-02-01",
    "end_date": "2024-02-28",
    "created_at": "2024-12-30T10:00:00Z",
    "updated_at": "2024-12-30T10:00:00Z"
  }
]
```
#### **Error Response**:
- **Code: 204 No Content**  
```json
{
  "message": "No advertisements found matching your interests."
}
```
- **Code: 404 Not Found:**  
```json
{
  "error": "User profile does not exist."
}
```
- **Code: 500 Internal Server Error:** 
```json
{
  "error": "An unexpected error occurred.",
  "details": "Error message describing the issue."
}
```
### **23. Check Advertiser Malicious Links**
Checks if a specific advertiser has posted any malicious links in their advertisements.

- **URL**: `/ml/check-malicious-links/<int:advertiser_id>/` 
- **Method**: `GET` 
- **Permission**: Admin-only (requires IsAdmin permission).
#### **Success Response**:
- **Code**: 200 OK 
If malicious links are found:
```json
{
    "message": "Malicious links found.",
    "advertiser_id": 1,
    "advertiser_username": "advertiser1",
    "is_malicious": true,
    "malicious_links": [
        {
            "advertisement_id": 1,
            "title": "Special Offer!",
            "link": "http://malicious-link.com",
            "prediction": "Phishing"
        },
        {
            "advertisement_id": 2,
            "title": "Free Gift!",
            "link": "http://another-malicious-link.com",
            "prediction": "Malware"
        }
    ]
}
```
If no malicious links are found:
```json
{
    "message": "No malicious links found for this advertiser.",
    "advertiser_id": 1,
    "advertiser_username": "advertiser1",
    "is_malicious": false
}
```
#### **Error Response**:
- **Code: 404 Not Found:**  
```json
{
    "error": "Advertiser not found."
}
```
- **Code: 500 Internal Server Error:** 
```json
{
    "error": "An unexpected error occurred.",
    "details": "<error_message>"
}
```
---



