const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
require('dotenv').config()
const sequelize = require('./Express-Sequel-Passport/src/db/db')
const {DataTypes} = require("sequelize");
const User = require('./Express-Sequel-Passport/src/models/user')(sequelize, DataTypes);
const Workout = require('./Express-Sequel-Passport/src/models/workout')(sequelize, DataTypes);
const passport = require('passport')
require('./Express-Sequel-Passport/config/passport')
const session = require('express-session')

//Initializing express
const app = express()
const cors = require('cors');
app.use(cors());

//Express Middleware
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());




//Login Route
app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.status(200).send({ message: 'Logged In Successful' })
  })



//Logout Route
app.get('/logout', (req, res) => {
    req.logout();
    res.send({message: "Logged out"});
})

const isAuthenticated = (req,res,next) => {
    if(req.user)
       return next();
    else
       return res.status(401).json({
         error: 'User not authenticated'
       })
}

app.use(isAuthenticated);


const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'workout_videos',
    resource_type: 'video',
  },
});

const upload = multer({ storage: storage });

app.post('/workouts', upload.single('video'), async (req, res) => {
  try {
    const { title } = req.body;
    const videoUrl = req.file.path;
    const workout = await Workout.create({
      title,
      videoUrl,
      UserId: req.user.id,
    });
    res.status(201).send(workout);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error adding workout' });
  }
});


//Route
app.get('/', (req, res) => {
    res.send({message: 'Hello World'})
})

// Synchronize the models with the database
sequelize.sync({ alter: true }).then(() => {
  console.log('Connected to database');
}).catch((error) => {
  console.error(`Error: Cannot connect to database ${error}`);
});

app.listen(process.env.PORT, async () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})