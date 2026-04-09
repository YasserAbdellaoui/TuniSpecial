# TuniSpecial

TuniSpecial is a full-stack web application designed as a community platform with user authentication, content sharing, event management, and donation features. It serves multiple user roles including simple users, professional users, health professionals, and administrators.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

### User Management

- User registration and authentication
- Multiple user roles: Simple Users, Professional Users, Health Professionals, Administrators
- User profile management
- Role-based access control (RBAC)

### Content & Community

- Create and share posts
- Comment on posts
- Share educational videos
- Read news and updates
- Browse events
- View user profiles

### Engagement

- Donation system
- Event listings and management
- About Us information
- Contact form
- News section

## Tech Stack

### Frontend

- **Framework**: React 18.2.0
- **Routing**: React Router v6.19.0
- **Styling**: Tailwind CSS 3.3.5 + Bootstrap 5.3.2
- **Package Manager**: npm
- **Build Tool**: Create React App with react-scripts 5.0.1

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js 4.18.2
- **Database**: MySQL with Sequelize ORM 6.35.1
- **Authentication**: JWT (jsonwebtoken 9.0.2)
- **CORS**: Enabled for cross-origin requests
- **Environment**: dotenv 16.3.1
- **Dev Tool**: nodemon 3.0.1

## Project Structure

```text
TuniSpecial/
├── frontend/                 # React frontend application
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   │   ├── Navbar/
│   │   │   ├── Footer/
│   │   │   ├── AboutUs.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Donate.jsx
│   │   │   ├── Events.jsx
│   │   │   ├── News.jsx
│   │   │   ├── VideoForm.jsx
│   │   │   └── CardItems.js
│   │   ├── pages/           # Page components
│   │   │   ├── Home/
│   │   │   ├── Login/
│   │   │   └── Register/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── tailwind.config.js
│   └── package.json
│
└── backend/                  # Node.js/Express backend
    ├── configuration/       # Database configuration
    │   └── connectDB.js
    ├── controllers/         # Route controllers
    │   └── userController.js
    ├── middleware/          # Authentication & authorization
    │   ├── isAuth.js
    │   ├── isAutho.js
    │   └── checkEmailExistence.js
    ├── models/              # Sequelize ORM models
    │   ├── user.js
    │   ├── post.js
    │   ├── comment.js
    │   ├── donation.js
    │   ├── event.js
    │   ├── educationalvideo.js
    │   ├── administrator.js
    │   ├── professionaluser.js
    │   ├── simpleuser.js
    │   ├── healthprofinfo.js
    │   └── init-models.js
    ├── routes/              # API routes
    │   └── userRoute.js
    ├── index.js             # Server entry point
    └── package.json
```

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)
- **MySQL** (v5.7 or higher)
- **Git** (for version control)

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/TuniSpecial.git
cd TuniSpecial
```

### 2. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

### 3. Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd ../frontend
npm install
```

## Configuration

### Backend Configuration

Create a `.env` file in the `backend/` directory with the following variables:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=tunispecial
DB_DIALECT=mysql
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### Database Setup

1. Create a MySQL database:

```sql
CREATE DATABASE tunispecial;
```

2. Update the database credentials in your `.env` file

3. The Sequelize models will auto-sync with the database (ensure `force: false` in production)

### Frontend Configuration (Optional)

If your backend runs on a different host/port, update the API base URL in your frontend code. Typically in an API service file or config:

```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

## Running the Application

### Start the Backend Server

```bash
cd backend
npm start
# or with nodemon for development
npx nodemon index.js
```

The backend server will run on `http://localhost:5000` (or your configured PORT)

### Start the Frontend Development Server

In a new terminal:

```bash
cd frontend
npm start
```

The frontend will open automatically at `http://localhost:3000`

### Build for Production

Frontend build:

```bash
cd frontend
npm run build
```

This creates an optimized production build in the `build/` directory.

## API Documentation

### Authentication Endpoints

#### Sign In

- **POST** `/api/signIn`
- Request body:

  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

- Returns JWT token for authenticated requests

### User Endpoints

#### Get All Users

- **GET** `/api/user`
- Returns list of all users

#### Get Single User

- **GET** `/api/user/:id`
- Requires: JWT token (isAuth middleware)
- Role required: Simple User or higher
- Returns: User details

#### Create User

- **POST** `/api/user`
- Request body:

  ```json
  {
    "email": "newuser@example.com",
    "password": "password123",
    "firstName": "John",
    "lastName": "Doe",
    "role": "Simple"
  }
  ```

#### Update User

- **PUT** `/api/user/:id`
- Requires: JWT token
- Updates user information

#### Delete User

- **DELETE** `/api/user/:id`
- Requires: JWT token (isAuth middleware)
- Role required: Professional User

## Usage

### For End Users

1. **Register**: Create a new account on the Register page
2. **Login**: Sign in with your credentials
3. **Explore**: Browse home page, news, and events
4. **Contribute**: Create posts, comments, and share videos
5. **Donate**: Support the platform through donations
6. **Contact**: Reach out through the contact form

### For Developers

- Frontend components are modular and reusable
- Backend follows MVC pattern with clear separation of concerns
- Middleware enforces authentication and authorization
- Database models are defined in Sequelize for easy migration and scaling

## Contributing

We welcome contributions! See the [CONTRIBUTING](CONTRIBUTING.md) file for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For issues, questions, or suggestions, please:

- Open an Issue on GitHub
- Contact the maintainers
- Check the existing documentation

---

**Happy Coding! 🚀**
