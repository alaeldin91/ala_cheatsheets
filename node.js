
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

