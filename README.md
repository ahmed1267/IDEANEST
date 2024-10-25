Node.js Microservice Boilerplate

This repository provides a boilerplate for creating Node.js microservices using Express, Mongoose, and Docker. The microservice architecture adheres to DDD (Domain-Driven Design) principles and includes JWT authentication for secure inter-service communication.
Features

    Node.js with Express for building REST APIs
    MongoDB with Mongoose for data modeling and interaction
    JWT authentication for secure inter-service communication
    Docker and Docker Compose for containerization
    Winston for logging
    Environment-based configuration

Prerequisites

    Node.js
    Docker

Getting Started  
    Local Development  

Install dependencies:  
  
```
npm install
```  
Create an .env file (based on .env.docker.staging):
    
```
MONGO_URI=mongodb://localhost:27017/test
``` 
   
Run MongoDB locally (if not using Docker):  
```
docker run -d -p 27017:27017 --name local-mongo mongo
```  
    
Start the application:  
```
npm run start
```  
  
Docker Development  
  Create an .env.docker.staging file with the following content:  
```  
MONGO_URI=mongodb://mongo:27017/test
 ```  
    
Build and run the services:  
```
docker-compose up --build
```  
  
Logging  
  
The application uses Winston for logging. By default, it logs to the console. In production, you can configure it to log to files or other logging services.


Health Check

To check service health visit https://localhost:3000/health