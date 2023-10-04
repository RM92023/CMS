# Backend

What is an API?

An API (Application Programming Interface) is a set of rules that allows different programs to communicate with each other. It facilitates interaction and data exchange between applications and systems.

## What is done in each folder

### Config
In the config folder the connection of the bases is not mongodb relations and sending in console its respective url of the databases.

```
const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`MongoDB Conectado en: ${url} `);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = dbConnect;
```

### Controllers
The controlllers are methods or functions that will be used in a URL to give and obtain data from the pages.

```
const loginStatus = asyncHandler( async (req, res) => {
    const token = req.cookies.token;
    if(!token){
        return res.json(false);
    }

    //Verify Token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if(verified){
        return res.json(true);
    }
    return res.json(false);
});
```

### Middleware
Middleware are functions that are used for some specific tasks and also serves to make the code cleaner, organized and easier to find errors.

```
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode);

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "development" ? err.stack : null
    })
};

module.exports = errorHandler;
```

### Models
The models are the structure that will have the databases in which objects with their respective variables and values will be placed.

```
const mongoose = require('mongoose');

const tokenSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    expiresAt: {
        type: Date,
        required: true,
    },
});

const Token = mongoose.model('Token', tokenSchema);
module.exports = Token;
```

### Routes
The routes are for those working on routes which will call the methods of the controllers to be used in the different pages that are going to be specified and bring the data that will be requested.

```
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logout);
router.get('/getuser', protect, getUser);
router.get('/loggedin', loginStatus);
router.patch('/updateuser', protect, updateUser);
```

### Utils
The utils are the same as the middleware since they are functions that are used for a specific task and also so that the code is more readable and easy to debug.

```
const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0){
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return(
        parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index]
    );
  };
```

### How to run the program

```
npm run backend
```