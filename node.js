/***************************************************************/
// Global Variables
/***************************************************************/

// Define a global variable in NodeJS
global.myVariable = 'Hello World';

// __dirname 
console.log(__dirname);
// __filename 
console.log(__filename);


/***************************************************************/
// Modules
/***************************************************************/

// Modules in node is a reusable block of code to perform a specific set of tasks (variables/objects/functions/classes), and the purpose of using modules in node is to help organize code into smaller pieces.

// helloModule.js (module)
function sayHello(name){
 console.log(`Hello ${name}`);
}
module.exports = sayHello

// app.js / server.js
const sayHello = require('./hello.js');

sayHello('John');
sayHello('Peter');
sayHello('Rohit');



// # Build in modules:-

/* 1. OS : provide information about operating system */
const os = require('os');
/* 
arch()	Returns the operating system CPU architecture
constants	Returns an object containing the operating system's constants for process signals, error cotes etc.
cpus()	Returns an array containing information about the computer's CPUs
endianness()	Returns the endianness of the CPU
EOL	Returns the end-of-line marker for the current operating system
freemem()	Returns the number of free memory of the system
hostname()	Returns the hostname of the operating system
loadavg()	Returns an array containing the load averages, (1, 5, and 15 minutes)
networkInterfaces()	Returns the network interfaces that has a network address
platform()	Returns information about the operating system's platform
release()	Returns information about the operating system's release
tmpdir()	Returns the operating system's default directory for temporary files
totalmem()	Returns the number of total memory of the system
type()	Returns the name of the operating system
uptime()	Returns the uptime of the operating system, in seconds
userInfo()	Returns information about the current user 
*/

/* 2. PATH : provides utility functions for working with file paths */
const path = require('path')
/* 
basename()	Returns the last part of a path
delimiter	Returns the delimiter specified for the platform
dirname()	Returns the directories of a path
extname()	Returns the file extension of a path
format()	Formats a path object into a path string
isAbsolute()	Returns true if a path is an absolute path, otherwise false
join()	Joins the specified paths into one
normalize()	Normalizes the specified path
parse()	Formats a path string into a path object
posix	Returns an object containing POSIX specific properties and methods
relative()	Returns the relative path from one specified path to another specified path
resolve()	Resolves the specified paths into an absolute path
sep	Returns the segment separator specified for the platform
win32	Returns an object containing Windows specific properties and methods
*/

/* 3. FS : file system operations (Reading/Writing/Deleting) */
const fs = require('fs');

// write a file
fs.writeFile('node_cheatsheet.txt', 'node is super cool :)', (err) => {
 if (err) {
  throw new Error(err);
 } else {
  console.log('File was written successfully');
 }
})

// reading a file 
fs.readFile('node_cheatsheet.txt', 'utf8', (err, data) => {
 if (err) {
  throw new Error(err);
 } else {
  console.log('File content is:', data);
 }
})

/*
access()	Checks if a user has access to this file or directory
accessSync()	Same as access(), but synchronous instead of asynchronous
appendFile()	Appends data to a file
appendFileSync()	Same as appendFile(), but synchronous instead of asynchronous
chmod()	Changes the mode of a file
chmodSync()	Same as chmod(), but synchronous instead of asynchronous
chown()	Changes the owner of a file
chownSync()	Same as chown(), but synchronous instead of asynchronous
close()	Closes a file
closeSync()	Same as close(), but synchronous instead of asynchronous
constants	Returns an object containing constant values for the file system
createReadStream()	Returns a new stream object
createWriteStream()	Returns a new writeable stream object
exists()	Deprecated. Checks if a file or folder exists
existsSync()	Same as exists(), but synchronous instead of asynchronous. This method is NOT deprecated
fchmod()	Changes the mode of a file
fchmodSync()	Same as fchmod(), but synchronous instead of asynchronous
fchown()	Changes the owner of a file
fchownSync()	Same as fchown(), but synchronous instead of asynchronous
fdatasync()	Syncronizes a file with the one stored on the computer
fdatasyncSync()	Same as fdatasync(), but synchronous instead of asynchronous
fstat()	Returns the status of a file
fstatSync()	Same as fstat(), but synchronous instead of asynchronous
fsync()	Syncronizes a file with the one stored on the computer
fsyncSync()	Same as fsync(), but synchronous instead of asynchronous
ftruncated()	Truncates a file
ftruncatedSync()	Same as ftruncated(), but synchronous instead of asynchronous
futimes()	Change the timestamp of a file
futimesSync()	Same as futimes(), but synchronous instead of asynchronous
lchmod()	Changes the mode of a file, for Mac OS X
lchmodSync()	Same as lchmod(), but synchronous instead of asynchronous
lchown()	Changes the owner of a file, for Mac OS X
lchownSync()	Same as lchown(), but synchronous instead of asynchronous
link()	Makes an addition name for a file. Both the old and the new name may be used
linksync()	Same as link(), but synchronous instead of asynchronous
lstat()	Returns the status of a file
lstatSync()	Same as lstat(), but synchronous instead of asynchronous
mkdir()	Makes a new directory
mkdirSync()	Same as mkdir(), but synchronous instead of asynchronous
mkdtemp()	Makes a new temporary directory
mkdtempSync()	Same as mktemp(), but synchronous instead of asynchronous
open()	Opens a file
openSync()	Same as open(), but synchronous instead of asynchronous
read()	Reads the content of a file
readdir()	Reads the content of a directory
readdirSync()	Same as readdir(), but synchronous instead of asynchronous
readFile()	Reads the content of a file
readFileSync()	Same as readFile(), but synchronous instead of asynchronous
readlink()	Reads the value of a link
readlinkSync()	Same as readlink(), but synchronous instead of asynchronous
realpath()	Returns the absolute pathname
realpathSync()	Same as realpath(), but synchronous instead of asynchronous
rename()	Renames a file
renameSync()	Same as rename(), but synchronous instead of asynchronous
rmdir()	Removes a directory
rmdirSync()	Same as rmdir(), but synchronous instead of asynchronous
stat()	Returns the status of a file
statSync()	Same as stat(), but synchronous instead of asynchronous
symlink()	Makes a symbolic name for a file
symlinkSync()	Same as symlink(), but synchronous instead of asynchronous
truncate()	Truncates a file
truncateSync()	Same as truncate(), but synchronous instead of asynchronous
unlink()	Removes a link
unlinkSync()	Same as unlink(), but synchronous instead of asynchronous
unwatchFile()	Stops watching for changes on a filename
utimes()	Change the timestamp of a file
utimesSync()	Same as utimes(), but synchronous instead of asynchronous
watch()	Watch for changes of a filename or directoryname
watchFile()	Watch for changes of a filename
write()	Writes buffer to a file
write()	Writes data to a file
writeFile()	Writes data to a file
writeFileSync()	Same as writeFile(), but synchronous instead of asynchronous
writeSync()	Same as write(); writes buffer to a file synchronous instead of asynchronous
writeSync()	Same as write(); writes data to a file synchronous instead of asynchronous
*/

/* 4. Events : provides a way of working with events. */
var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('scream', function() {
console.log('A scream is detected!');
});
eventEmitter.emit('scream');

/*
addListener()	Adds the specified listener
defaultMaxListeners	Sets the maximum number of listeners allowed for one event. Default is 10
emit()	Call all the listeners registered with the specified name
eventNames()	Returns an array containing all registered events
getMaxListeners()	Returns the maximum number of listeners allowed for one event
listenerCount()	Returns the number of listeners with the specified name
listeners()	Returns an array of listeners with the specified name
on()	Adds the specified listener
once()	Adds the specified listener once. When the specified listener has been executed, the listener is removed
prependListener()	Adds the specified listener as the first event with the specified name
prependOnceListener()	Adds the specified listener as the first event with the specified name, once. When the specified listener has been executed, the listener is removed
removeAllListeners()	Removes all listeners with the specified name, or ALL listeners if no name is specified
removeListener()	Removes the specified listener with the specified name
setMaxListeners()	Sets the maximum number of listeners allowed for one event. Default is 10
*/

/* 5. HTTP : create http servers */
var http = require('http');
const { log } = require('console');

//create a server object
http.createServer(function (req, res) {
  res.write('Hello World!'); // write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080


/***************************************************************/
// DataBase [ Connect - CRUD ]
/***************************************************************/

// # Connect to the db (in app.js/server.js)
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Event handlers for connection success and error
db.on('error', (error) =>  console.error.bind('Connection error:', console));
db.once('open', () => { console.log('Connected to the database successfully!') });



// # Create db Schema (in ./models/emailModel.js)
const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
 email: {
  type: String,
  unique: true,
  required: [true, 'Email is required.'],
  validate: [
   {
    validator: (value) => { 
     return value.length >= 5;
    },
    message: 'Email must be at least 3 characters long.',
   },
   {
   validator: (value) => {
    return /^[A-Za-z]+$/.test(value);
    },
    message: 'Name must only contain letters.',
   },
  ]
 }
})

module.exports = mongoose.model('email_schema', emailSchema)



// # Insert Data into DataBase (inside ./api/email.js)
const express = require('express')
const emailModel = require('../models/emailModel.js') // import email db schema to allow u to add/edit/delete/view data from the database.

const app = express()

// get document
app.get('/email', async (req, res) => {
 let email = await emailModel.find({})
 
 res.status(201).json({
  statusL: 'ok',
  statusCode: 200,
  message: 'Fetched Successfully',
  data: email
 })
})

// add document
app.post('/email', async (req, res) => {
 try {
  let email = await emailModel.create(body)
  res.status(201).json({
   status: "ok",
   statusCode: 201,
   message: "Information saved successfully.",
   data: email
  })
 } catch (error) {
  console.log(error)
  res.status(400).json({
   status: "fail",
   statusCode: 400,
   message: "Unable to save information.",
   error: error
  })
 }
})

// edit document
emailModel.findById('ID#948933', (error, document) => {
 if (error) {
  console.error(error);
  return;
 }
 
 // add the new email
 document.email = 'bushra.ebox@gmial.com';

 // save the change
 document.save((error) => {
  if (error) {
   console.error(error);
  } else {
   console.log('Document updated successfully')
  }
 });

});

// delete document 
emailModel.findByIdAndRemove('ID#948933', (error, document) => {
 if (error) {
  console.error(error);
  return;
 }

 if (document) {
  console.log('Document deleted successfully');
 } else {
  console.log('Document not found');
 }
})

// delete document 2
emailModel.deleteOne({ email: 'test@gmail.com' }, (error) => {
 if (error) {
  console.error(error)
 } else {
  console.log('Document deleted successfully')
 }
})

module.exports = router




/***************************************************************/
// Auth
/***************************************************************/

// Hashing password
const bcrypt = require('bcrypt');
userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// UnHashing Password


/***************************************************************/
// Validation and Handling Errors
/***************************************************************/
// 1. Mongoose Validation => by using validation on the 'Schema'.
// 2. Custom Validation 
// this is a custom method to handle all the 'SignUp' errors like(invalid / duplicate Email or Password)
const handleErrors = (err) => {

  console.log(err.message, err.code);
  let errors = { email: '', password: '' };


  // 1. LogIn Errors

  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered';
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  // 2. SignUp Errors

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}


/***************************************************************/
// Node Middleware
/***************************************************************/

// middleware is

// apply a middleware on a route
app.get / post('/route_name', middleware_function, route_controller);

// apply one middleware for all GET req
app.get('*', checkUser)

/***************************************************************/
// Mongoose Hooks ( Middleware )
/***************************************************************/
// Recreance: https://mongoosejs.com/docs/middleware.html

/* Mongoose Middleware (also called pre and post hooks) : 
they are functions which are passed control during execution of asynchronous functions.
Middleware is specified on the schema level and is useful for writing plugins. */

// 1. Document middleware
/* 
validate
save
remove
updateOne
deleteOne
init
*/

// 2. Query middleware
/* 
count
countDocuments
deleteMany
deleteOne
estimatedDocumentCount
find
findOne
findOneAndDelete
findOneAndRemove
findOneAndReplace
findOneAndUpdate
remove
replaceOne
update
updateOne
updateMany
validate
*/

// 3.
/*  */
// 4.
/*  */


/***************************************************************/
// Cookies
/***************************************************************/
// cookies are set on the server and send to the browser and from the browser can send each time with POST/GET req to let us know who is the user in the frontend.

// npm install cookie-parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// set cookies
app.get('/set-cookies', (req, res) => {
  // res.setHeader('Set-Cookie', 'newUser=true');
  res.cookie('newUser', false);
  // maxAge defiant when this cookie expired
  res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });

  res.send('you got the cookies!');
});

// read cookies
app.get('/read-cookies', (req, res) => {
  const cookies = req.cookies;
  res.json(cookies);
});



/***************************************************************/
// JWT
/***************************************************************/

const jwt = require('jsonwebtoken');

// create JWT method
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'secret', {
    expiresIn: maxAge
  });
};

// create JWT in signup
try {
  const user = await User.create({ email, password });
  const token = createToken(user._id); // call createToken method to generate the token
  res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 }); // send the token in the cookie and set an expire time for it 3days
  res.status(201).json({ user: user._id });
}
catch(err) {
  const errors = handleErrors(err);
  res.status(400).json({ errors });
}

// replace jwt on logout
res.cookie('jwt', '', { maxAge: 1 }); // replace the token with name jwt to an empty string and 1 millisecond expire time

/***************************************************************/
// Protecting Route
/***************************************************************/

// Middleware check if the JWT token is exists and verified 
const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, 'net ninja secret', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/login');
  }
};

module.exports = { requireAuth };

// now use this middleware to protect routes that require auth users (server.js)
const { requireAuth } = require('./middleware/authMiddleware');
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));


// Check current login user ( Check Current User ) middleware
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, 'net ninja secret', async (err, decodedToken) => {
      if (err) {
        res.locals.user = null; // set the locals to null
        next();
      } else {
        let user = await User.findById(decodedToken.id); // find the user data in db
        res.locals.user = user; // return the user data to locals to allow u to access the current user data in the view
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

