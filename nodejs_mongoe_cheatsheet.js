// npm Pk
axios - body-parser - cors - express - mongoose - dotenv - nodemon

// File structure
api: []
models: [mongoose Schema for all models]
server: []
env: []

//          project/
//            ├── src/
//            |   ├── controllers/
//            |   |   ├── userController.js
//            |   |   └── ...
//            |   ├── models/
//            |   |   ├── userModel.js
//            |   |   └── ...
//            |   ├── routes/
//            |   |   ├── userRoutes.js
//            |   |   └── ...
//            |   └── utils/
//            |       ├── db.js
//            |       └── ...
//            ├── tests/
//            |   ├── unit/
//            |   ├── integration/
//            |   └── ...
//            ├── node_modules/
//            ├── package.json
//            ├── package-lock.json
//            ├── .env
//            ├── .gitignore
//            └── server.js
- .env file contains environment variables that the application needs to run.
- Server.js file is the entry point of the application that starts the server and initializes the application.
- Routes directory contains the route files that define the application's API endpoints.
- Models directory contains the model files that define the application's data schema and interact with the database.
- Utils directory contains utility functions that can be used across the application.
- Controllers directory contains the controller files that define the application's business logic.
- Tests directory contains all the test files for the application, organized into unit tests, integration tests, and other types of tests.


// .env (Environment variables) //
DATABASE_URL=mongodb+srv://app-2MMDDg5bA
MAIN_API_URL=http://localhost:7500
JWT_KEY=KeyName

// server.js (start the server init app) //
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')
const timeout = require('connect-timeout')
const fileUpload = require('express-fileupload');
const compression = require('compression')
const Sentry = require("@sentry/node");
// or use es6 import statements
// import * as Sentry from '@sentry/node';

const port = 7800
const app = express()

app.use(cors())
app.use(timeout('5s'))
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}))
app.use(compression({level:6}))
app.use(fileUpload({ useTempFiles: true, limits: { fileSize: 50 * 1024 * 1024 } }));
app.get('/', (req,res) => {
    res.send('Hello!')
})

// Models (import models that u want to us in this server or single routes)
const ExampleModel = require('./models/example')
const ModelName = require('./models/model_file_name')
const dummyData = {};

// Reusable fun for handling different request event (???)
const handleRequestEvent = (type, data) => {
    const { id } = data;
    dummyData[id] = { id, first_name, last_name, email };
    const requestDummyData = new RequestModel(data)
    const newRequest = await requestDummyData.save()
    logAction(newRequest._id, 'new request', data.created_by)
}

// GET Request (SEND/READ) for a targeted route [sending a data from the db to a route ]
app.get('/exampleRoute', (req, res) => {
    res.send(dummyData);
});
app.get('/route_name', (req, res) => {
    res.send(data);
});

// POST Request (RECEIVE/STORE/WRITE) from a route [saving a data coming from a route into the db]
app.post('/exampleRoute', (req, res) => {
    const { type, data } = req.body;
    handleRequestEvent(type, data);
    res.send({});
});

// Router ()
const requestsRouter = require('./api/requests')
app.use('/requests', requestsRouter)
const languagesRouter = require('./api/languages')
app.use('/languages', languagesRouter)

// Controller (???)
function logAction(request, status, user_id) {
    const action_log_data = new ActionLogsSchema({
        request_id: request,
        status: status,
        user_id: user_id
    })
    action_log_data.save()
}

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})


// models/exampleModel.js //
const mongoose = require('mongoose')
const ExampleSchema = new mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: { 
        type: String
    },
    email: {
        type: String, 
    },
}) 
module.exports = mongoose.model('Example', ExampleSchema)

// server.js //
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const port = 7800
const app = express()
const requests = {};
const handleRequestEvent = (type, data) => {
    if (type === 'PostCreated') {
        const { id, designation } = data;
        requests[id] = { id, designation, candidates: [] };
    }
}
app.get('/requests', (req, res) => {
    res.send(requests);
});
app.post('/requests', (req, res) => {
    const { type, data } = req.body;
    handleRequestEvent(type, data);
    res.send({});
});
app.listen(port, () => {
    console.log(`server running at port ${port}`)
})