# mern-image-boundary-application

## Project: MERN Stack Assignment with Image Upload and Boundary Detection

This project is a complete MERN stack-based assignment, focusing on user authentication, image upload, boundary detection and editing using OpenCV or TensorFlow.js, and a frontend with canvas-based editing using fabric.js or Konva.js. It offers a dynamic solution for managing images with boundary detection features, making it ideal for applications in fields like image analysis, security, or content moderation.

---

## Features

- **User Authentication**: Users can register, login, and manage their account with JWT-based authentication.
- **Image Upload**: Allows users to upload images, which are stored and processed for boundary detection.
- **Boundary Detection & Editing**: Uses OpenCV or TensorFlow.js to detect and highlight boundaries in images. Users can also edit these boundaries using a canvas-based interface.
- **Frontend**: Built using React, fabric.js or Konva.js for interactive image editing on the web frontend.
- **Backend**: A Node.js-based server using Express.js and MongoDB for user data and image storage.

---

## Installation

### Prerequisites

- Node.js
- MongoDB (or a cloud MongoDB service like MongoDB Atlas)
- OpenCV or TensorFlow.js (depending on which you choose for boundary detection)
- Fabric.js or Konva.js for frontend image editing

### Steps to Run Locally

1. Clone the repository:

    ```bash
    git clone https://github.com/Rajan9918/mern-image-boundary-application.git
    ```

2. Navigate into the project folder:

    ```bash
    cd mern-image-boundary-application
    ```

3. Install the backend dependencies:

    ```bash
    cd backend
    npm install
    ```

4. Install the frontend dependencies:

    ```bash
    cd frontend
    npm install
    ```

5. Start the backend server:

    ```bash
    cd backend
    npm start
    ```

6. Start the frontend:

    ```bash
    cd frontend
    npm start
    ```

Now, the application should be running locally!

---

## Usage

1. **Sign Up/Login**: First, create an account or log in to access the image upload and boundary detection features.
2. **Upload Image**: Upload your image through the user interface.
3. **Boundary Detection**: The system will automatically process the image for boundary detection. You can adjust or edit the boundaries if necessary.
4. **Save and View**: Save your modified image and view the results.

---

## Tech Stack

- **Frontend**: React.js, fabric.js, Konva.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Image Processing**: OpenCV or TensorFlow.js

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
