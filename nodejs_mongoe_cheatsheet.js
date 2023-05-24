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


// EVENT BUS (server.js) Single file : [ its use to distribute single route /events to a deferent endpoints]
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const timeout = require('connect-timeout')
const axios = require('axios')
const port = 7900
const app = express()
app.use(cors())
app.use(timeout('5s'))
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}))
const events = [];
app.post('/events', (req, res) => {
    const event = req.body;
    events.push(event);
    // endpoint - 1
    axios.post('http://localhost:7500/events', event); // CENTRAL
    axios.post('http://localhost:7800/events', event); // QUERY
    // endpoint - 2
    axios.post('http://localhost:7800/events', event); // QUERY
    // endpoint - 3
    axios.post('http://localhost:7800/events', event); // QUERY
    res.send({ status: 'OK' });
});
app.get('/events', (req, res) => {
    es.send(events);
});
app.listen(port, () => {
    console.log(`server running at port ${port}`)
})


// -----------------------------------------------------------------------------------------------------------
// EXAMPLE (2): 
// File Structure:
/* 
    # my-app
        # api
            - getInTouch.js
        # models
            - getInTouch.js
        # utils
            - email.js
        - .env
        - server.js
*/

// Server.js
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
var timeout = require('connect-timeout')
const helmet = require("helmet");

const port = 4001
const app = express()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database connected'))

app.use(cors())
app.use(timeout('120s'))
app.use(fileUpload({ useTempFiles: true, limits: { fileSize: 100 * 1024 * 1024 } }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(express.json())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(helmet());

app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.send('Hello Nathan HR - ERP!')
})

// API: Get in touch
const getInTouchRouter = require('./api/getInTouch')
app.use('/get-in-touch', getInTouchRouter)

// API: Employer Info
const employerInfoRouter = require('./api/employerInfo')
app.use('/employer-info', employerInfoRouter)

// API: Employer Personal Info
const employerPersonalInfoRouter = require('./api/employerPersonalInfo')
app.use('/employer-personal-info', employerPersonalInfoRouter)

// API: Config
const configRouter = require('./api/config')
app.use('/configurator', configRouter)


const expressServer = app.listen(port, () => {
  console.log(`server running at port ${port}`)
})


// API
const express = require("express")
const router = express.Router()
const GetInTouchModel = require("../models/getInTouch")
const Config = require("../models/config")
const {dispatchEmail} = require("../utils/email")
const { ObjectId } = require("mongodb")

router.post("/", async (req, res) => {
    
    try {
        
        let info = await GetInTouchModel.create(req.body)
        let emailbody = `
            <!doctype html>
            <html>
            <body>
                <p>Hi,</p>
                <p>${info.fullname} wants to get in touch.</p>
                <p><b>Message:</b> ${info.message}</p> 
                <p><b>Email:</b> ${info.email}</p> 
                <p><b>Phone:</b> ${info.phone}</p> 
            </body>
            </html>
        `
        let emailList = await Config.findOne({version:1},{websiteSenderEmailsList:1})
        let email = await dispatchEmail(emailList.websiteSenderEmailsList, "Get in Touch", emailbody)
        res.status(201).json({
            status: "ok",
            statusCode: 201,
            message: "Information saved successfully.",
            data: info
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            statusCode: 400,
            message: "Unable to save information.",
            error: error
        })
    }
})


router.get("/",async (req,res)=>{
    let info = await GetInTouchModel.find({})

    res.status(201).json({
        status: "ok",
        statusCode: 200,
        message: "Fetched Successfully.",
        data: info
    })
})

module.exports = router


// Models
const mongoose = require("mongoose")

const getInTouchSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v)
            },
            message: props => `${props.value} is not a valid email.`
        },
        required: [true, 'Email is required.']
    },
    phone: {
        type: String,
        required: [true, 'Phone Number is required.'],
    },
    urgent: {
        type: String,
    },
    message: {
        type: String,
    }
})

module.exports = mongoose.model("get_in_touch", getInTouchSchema)

// Utils
const { SESV2 } = require("aws-sdk");
const AWS = require("aws-sdk")

const ses = new AWS.SES({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY_AWS,
    region: "eu-central-1",
})


const dispatchEmail = async (emailArray,emailSubject,emailBody) => {
    const params = {
        Source: "donotreply@nathanhr.ae",
        Destination: {
            ToAddresses: emailArray,
        },
        Message: {
            Body: {
                Html: {
                    Data: emailBody,
                    Charset: "UTF-8",
                }
            },
            Subject: {
                Data: emailSubject,
                Charset: "UTF-8",
            }
        },
    };
    
    
    let dispatchedEmail = await ses.sendEmail(params).promise();
    return dispatchedEmail
}


module.exports = {
    dispatchEmail
}


// >>>>>>>>>>>>>>>>>>>>>>>>>>> Examples <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// # an endpoint for receiving contact form req and save it to db

// serer.js
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
var timeout = require('connect-timeout')
const helmet = require("helmet");
const port = 4001
const app = express()
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database connected'))
app.use(cors())
app.use(timeout('120s'))
app.use(fileUpload({ useTempFiles: true, limits: { fileSize: 100 * 1024 * 1024 } }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(express.json())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(helmet());
app.disable('x-powered-by')
app.get('/', (req, res) => {
  res.send('Hello Nathan HR - ERP!')
})
// API: Get in touch
const getInTouchRouter = require('./api/getInTouch')
app.use('/get-in-touch', getInTouchRouter)
// API: Employer Info
const employerInfoRouter = require('./api/employerInfo')
app.use('/employer-info', employerInfoRouter)
// API: Employer Personal Info
const employerPersonalInfoRouter = require('./api/employerPersonalInfo')
app.use('/employer-personal-info', employerPersonalInfoRouter)
// API: Config
const configRouter = require('./api/config')
app.use('/configurator', configRouter)
const expressServer = app.listen(port, () => {
  console.log(`server running at port ${port}`)
})

// @/[api folder]

// getInTouch.js
const express = require("express")
const router = express.Router()
const GetInTouchModel = require("../models/getInTouch")
const Config = require("../models/config")
const {dispatchEmail} = require("../utils/email")
const { ObjectId } = require("mongodb")
router.post("/", async (req, res) => {
    
    try {
        
        let info = await GetInTouchModel.create(req.body)
        let emailbody = `
            <!doctype html>
            <html>
            <body>
                <p>Hi,</p>
                <p>${info.fullname} wants to get in touch.</p>
                <p><b>Message:</b> ${info.message}</p> 
                <p><b>Email:</b> ${info.email}</p> 
                <p><b>Phone:</b> ${info.phone}</p> 
            </body>
            </html>
        `
        let emailList = await Config.findOne({version:1},{websiteSenderEmailsList:1})
        let email = await dispatchEmail(emailList.websiteSenderEmailsList, "Get in Touch", emailbody)
        res.status(201).json({
            status: "ok",
            statusCode: 201,
            message: "Information saved successfully.",
            data: info
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            statusCode: 400,
            message: "Unable to save information.",
            error: error
        })
    }
})
router.get("/",async (req,res)=>{
    let info = await GetInTouchModel.find({})

    res.status(201).json({
        status: "ok",
        statusCode: 200,
        message: "Fetched Successfully.",
        data: info
    })
})
module.exports = router

// employerPersonalInformation.js
const express = require("express")
const router = express.Router()
const EmployerPersonalInfo = require("../models/employerPersonalInfo")
const Config = require("../models/config")
const { ObjectId } = require("mongodb")
const { uploadFile } = require("../utils/s3upload")
const {dispatchEmail} = require("../utils/email")
router.post("/", async (req, res) => {
    try {
        var doc = new EmployerPersonalInfo()
        doc.fullname = req.body.fullname
        doc.phone = req.body.phone
        doc.email = req.body.email
        doc.occupation = req.body.occupation
        doc.files = {
            passport_copy: req.files.passport_copy.name || null,
            visa_copy: req.files.visa_copy.name || null,
            emirates_id: req.files.emirates_id.name || null,
        }
        await doc.validate()
        if (req.files.passport_copy) {
            let uploadedFile = await uploadFile(req.files.passport_copy)
            doc.files.passport_copy = uploadedFile.Location
        }
        if (req.files.visa_copy) {
            let uploadedFile = await uploadFile(req.files.visa_copy)
            doc.files.visa_copy = uploadedFile.Location
        }
        if (req.files.emirates_id) {
            let uploadedFile = await uploadFile(req.files.emirates_id)
            doc.files.emirates_id = uploadedFile.Location
        }
        let info = await doc.save()
        let emailbody = `
            <!doctype html>
            <html>
            <body>
                <p>Hi,</p>
                <p>${info.fullname} has filled the Employer Personal Information form.</p>
                <p>Please check the portal.</p>
                <p>Thank You.</p>
            </body>
            </html>
        `
        let emailList = await Config.findOne({version:1},{websiteSenderEmailsList:1})
        let email = await dispatchEmail(emailList.websiteSenderEmailsList, "Employer Personal Information", emailbody)
        res.status(201).json({
            status: "ok",
            statusCode: 201,
            message: "Information saved successfully.",
            data: info
        })
    } catch (error) {
        console.log("Error# ",error)
        res.status(400).json({
            status: "fail",
            statusCode: 400,
            message: "Unable to save information.",
            error: error
        })
    }
})
router.get("/",async (req,res)=>{
    let info = await EmployerPersonalInfo.find({})
    res.status(200).json({
        status: "ok",
        statusCode: 200,
        message: "Fetched Successfully.",
        data: info
    })
})
module.exports = router

// config.js
const express = require("express")
const router = express.Router()
const Config = require("../models/config")
const { ObjectId } = require("mongodb")
router.post("/set-website-sender-emails-list",async(req,res)=>{
    try {
        let config = await Config.findOneAndUpdate({ version: 1 }, { websiteSenderEmailsList: req.body.list }, { upsert: true, runValidators: true, new: true })
        res.status(201).json({
            status: "ok",
            statusCode: 201,
            message: "Config Set Successfully.",
            data: config
        })
    } catch (error) {
        res.status(201).json({
            status: "fail",
            statusCode: 201,
            message: "Something went wrong.",
            error: error
        })
    }
})
router.get("/get-all-config",async(req,res)=>{
    try {
        let config = await Config.findOne({ version: 1 })
        res.status(201).json({
            status: "ok",
            statusCode: 201,
            message: "Config Fetched Successfully.",
            data: config
        })
    } catch (error) {
        res.status(201).json({
            status: "fail",
            statusCode: 201,
            message: "Something went wrong.",
            error: error
        })
    }
})
module.exports = router


// @/ [models folder]

// getInTouch.js (models)
const mongoose = require("mongoose")

const getInTouchSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v)
            },
            message: props => `${props.value} is not a valid email.`
        },
        required: [true, 'Email is required.']
    },
    phone: {
        type: String,
        required: [true, 'Phone Number is required.'],
    },
    urgent: {
        type: String,
    },
    message: {
        type: String,
    }
})
module.exports = mongoose.model("get_in_touch", getInTouchSchema)

// employerPersonalInformation.js (models)
const mongoose = require("mongoose")
const employerPersonalInfoSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: [true, 'Phone Number is required.'],
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v)
            },
            message: props => `${props.value} is not a valid phone number.`
        }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v)
            },
            message: props => `${props.value} is not a valid email.`
        },
        required: [true, 'Email is required.']
    },
    occupation:{
        type: String,
        required: true
    },
    files: {
        type: new mongoose.Schema({
            passport_copy: {
                type: String,
                required: true
            },
            visa_copy: {
                type: String,
                required: true
            },
            emirates_id: {
                type: String,
                required: true
            }
        }, { _id: false })
    },
})
module.exports = mongoose.model("Employer_Personal_Info",employerPersonalInfoSchema)

// config.js (models)
const mongoose = require("mongoose")
const configSchema = new mongoose.Schema({
    websiteSenderEmailsList:{
        type: [String],
    },
    version: {
        type: Number,
        unique: true
    }
})
module.exports = mongoose.model("Configs",configSchema)

// @/ [ utils folder ]

// email.js
const { SESV2 } = require("aws-sdk");
const AWS = require("aws-sdk")
const ses = new AWS.SES({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY_AWS,
    region: "eu-central-1",
})
const dispatchEmail = async (emailArray,emailSubject,emailBody) => {
    const params = {
       Source: "donotreply@nathanhr.ae",
        Destination: {
            ToAddresses: emailArray,
        },
        Message: {
            Body: {
                Html: {
                    Data: emailBody,
                    Charset: "UTF-8",
                }
            },
            Subject: {
                Data: emailSubject,
                Charset: "UTF-8",
            }
        },
    };
    
    
    let dispatchedEmail = await ses.sendEmail(params).promise();
    return dispatchedEmail
}
module.exports = {
    dispatchEmail
}

// s3upload.js
const AWS = require("aws-sdk")
const fs = require('fs')
const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY_AWS,
});
const uploadFile = async function (file){
    const fileStream = fs.createReadStream(file.tempFilePath);
    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: `${Date.now()}_${file.name}`,
        Body: fileStream,
        ACL: 'public-read',
        ContentType: file.mimetype,
    };
    let uploadedFile = await s3.upload(params).promise()
    return uploadedFile
}
module.exports = {
    uploadFile
}


