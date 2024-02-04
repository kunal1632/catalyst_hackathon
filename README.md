# SkillFlow

## Team

- **Ayush Munot**
  - *Role:* Full-stack Developer 

- **Kunal Dhand**
  - *Role:* Frontend Developer

- **Lakshay Tyagi**
  - *Role:* Frontend Developer

- **Shashank Gulati**
  - *Role:* Backend Developer

## Tech Used

- **Frontend:** React.js
- **Backend:** Firebase
- **Database:** Firestore 
- **Deployment:** GitHub Pages
- **Version Control:** Git and GitHub

## Idea Description

SkillFlow is a dynamic web application designed to foster collaborative learning and knowledge exchange within a vibrant community. The platform addresses the challenges of fragmented skill acquisition by providing a centralized space for users to seamlessly share and acquire skills. Users can explore skills, document learning journeys, and connect with others who share similar interests. SkillSwapHub aims to create a rich tapestry of shared knowledge, empowering individuals to thrive together in a culture of continuous learning.

## How to Run the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/SkillSwapHub.git

2. **Navigate to the repository**
    ```bash
    cd SkillFlow

3. **Install Dependencies**
    ```bash
    npm install

4. **Run the project**
    ```bash
    npm start
The application will be accessible at http://localhost:3000.

## Deployment Link

[SkillFlow - Live Demo]()

## Explain the Core Code

One of the critical parts of our codebase is the integration with Firebase. Firebase serves as the backend, and Firestore is used as a NoSQL database to store skills, user information, and other relevant data. React.js powers the frontend, providing a dynamic and interactive user interface.

### Example of Firebase Firestore Integration:

    ```javascript
    // Firebase configuration
    const firebaseConfig = {
    apiKey: 'your-api-key',
    authDomain: 'your-auth-domain',
    projectId: 'your-project-id',
    storageBucket: 'your-storage-bucket',
    messagingSenderId: 'your-messaging-sender-id',
    appId: 'your-app-id',
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Access Firestore
    const db = firebase.firestore();



## Team Mates Details

- **Ayush Munot**
  - *Skills:* Full-stack development (MERN), Python, Django, Flutter, React Native, C/C++
  - *Background:* Computer Science Engineering student, experienced in a wide range of technologies.

- **Kunal Dhand**
  - *Skills:* Frontend development (React.js), Python, C/C++
  - *Background:* Computer Science Engineering student, specializes in creating intuitive user interfaces.

- **Lakshay Tyagi**
  - *Skills:* Frontend development (React.js), Node.js, Java
  - *Background:* Computer Science Engineering student, experienced in both frontend and backend technologies.

- **Shashank Gulati**
  - *Skills:* Backend development (MERN stack), C/C++
  - *Background:* Computer Science Engineering student, focused on backend technologies.