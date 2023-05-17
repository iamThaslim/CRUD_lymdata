# Employee Management System

## The Employee Management System is a web application that allows users to manage employee data efficiently. The system provides features such as user authentication, employee creation, updating and deletion, employee search, and pagination. It is built using React.js for the frontend, Node.js for the backend, and PostgreSQL as the database. The frontend and backend communicate through RESTful API endpoints, and Sequelize is used as the ORM (Object-Relational Mapping) library for database operations.

## Installation

1.clone the repository:

git clone https://github.com/iamThaslim/CRUD_lymdata.git

2. Navigate to the project directory
   {backend}:
   2.1 cd backend
   2.2 npm install
   2.3 create a .env file, add  
   JWT_SECRET= mysecretkey
   JWT_EXPIRES_IN= 3d
   2.4 Add this code in userModel.js and employeeModel.js

User.sync()
.then(() => {
console.log('User table created');
})
.catch((error) => {
console.error('Error creating User table', error);
});

Employee.sync()
.then(() => {
console.log('Employee table created');
})
.catch((error) => {
console.error('Error creating Employee table', error);
});

# Now start the server

npm run server

# User table and employee table will be created. Now you can remove the above code from each model.

3. open new terminal and navigate to directory
   3.1 cd frontend
   3.2 npm start.

4. Login page credentials:
   {
   "email": "test2@gmail.com",
   "password": "Test@002"
   }
5. employees data:
   {
   "employees": {
   "count": 12,
   "rows": [
   {
   "id": 2,
   "name": "Bhaskar",
   "email": "bhaskar@gmail.com",
   "phone": "1234567892",
   "country": "India",
   "createdAt": "2023-05-17T06:31:55.354Z",
   "updatedAt": "2023-05-17T06:31:55.354Z"
   },
   {
   "id": 4,
   "name": "Roshan",
   "email": "roshan@gmail.com",
   "phone": "1234567894",
   "country": "China",
   "createdAt": "2023-05-17T06:32:57.042Z",
   "updatedAt": "2023-05-17T06:32:57.042Z"
   },
   {
   "id": 6,
   "name": "Simi",
   "email": "simi@gmail.com",
   "phone": "1234567895",
   "country": "India",
   "createdAt": "2023-05-17T07:17:27.263Z",
   "updatedAt": "2023-05-17T07:17:27.263Z"
   },
   {
   "id": 8,
   "name": "asif",
   "email": "asif@gmail.com",
   "phone": "1234567898",
   "country": "India",
   "createdAt": "2023-05-17T07:18:09.018Z",
   "updatedAt": "2023-05-17T07:18:09.018Z"
   },
   {
   "id": 9,
   "name": "Riswan",
   "email": "riswan@gmail.com",
   "phone": "1234567899",
   "country": "India",
   "createdAt": "2023-05-17T07:18:30.548Z",
   "updatedAt": "2023-05-17T07:18:30.548Z"
   },
   {
   "id": 10,
   "name": "Anu",
   "email": "anu@gmail.com",
   "phone": "1234567800",
   "country": "India",
   "createdAt": "2023-05-17T07:18:48.844Z",
   "updatedAt": "2023-05-17T07:18:48.844Z"
   },
   {
   "id": 11,
   "name": "Aslam",
   "email": "aslam@gmail.com",
   "phone": "1234567801",
   "country": "Japan",
   "createdAt": "2023-05-17T07:19:20.643Z",
   "updatedAt": "2023-05-17T07:19:20.643Z"
   },
   {
   "id": 13,
   "name": "Rehil",
   "email": "rehil@gmail.com",
   "phone": "1234567803",
   "country": "India",
   "createdAt": "2023-05-17T09:50:11.110Z",
   "updatedAt": "2023-05-17T09:50:11.110Z"
   },
   {
   "id": 14,
   "name": "Banu",
   "email": "banu@gmail.com",
   "phone": "1234567820",
   "country": "India",
   "createdAt": "2023-05-17T12:59:23.888Z",
   "updatedAt": "2023-05-17T12:59:23.888Z"
   },
   {
   "id": 12,
   "name": "Hari",
   "email": "hari@gmail.com",
   "phone": "1234567802",
   "country": "USA",
   "createdAt": "2023-05-17T07:19:45.574Z",
   "updatedAt": "2023-05-17T13:44:57.497Z"
   },
   {
   "id": 16,
   "name": "Rajan",
   "email": "rajan@gmail.com",
   "phone": "1234578030",
   "country": "Japan",
   "createdAt": "2023-05-17T16:12:52.798Z",
   "updatedAt": "2023-05-17T16:12:52.798Z"
   },
   {
   "id": 1,
   "name": "arun",
   "email": "arun@gmail.com",
   "phone": "1234567890",
   "country": "India",
   "createdAt": "2023-05-17T06:31:08.358Z",
   "updatedAt": "2023-05-17T16:13:34.812Z"
   }
   ]
   }
   }

# All api tested using POSTMAN API
