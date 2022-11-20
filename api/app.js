require('dotenv').config();     //this makes you able to use .env files
const express = require("express");
const expressSession = require("express-session");
// const morgan = require("morgan");
const passport = require("./middleware/passport-config");
// const path = require("path");
const cors = require("cors");
const { sequelize, user } = require("./models");
const app = express();
const PORT = process.env.PORT;
const secret = process.env.SESSION_SECRET;

app.use(express.json())


//Middlewares

app.use(     //protects from attacks. And makes things safer.
    cors({
      origin: "http://localhost:3000", // <-- location of the react app were connecting to
      credentials: true,
    })
);

// setup passport and session cookies
app.use(
    expressSession({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 3600000,
        // secure : true       uncomment when its in production
      }
})
);


app.use(passport.initialize());
app.use(passport.session());

// this mounts controllers/index.js at the route `/api`
app.use("/api", require("./controllers"));


// app.post('/users', async(req, res) => {
//     const{firstName, lastName, age, weight, email, password} = req.body;

//     try{
//         const users = await user.create({ firstName, lastName, age, weight, email, password });

//         return res.json(users)
//     }catch(err) {
//         console.log(err);
//         return res.status(500).json(err)
//     }
// })

// app.get('/users', async (req,res) => {
//     try {
//         const users = await user.findAll()

//         return res.json(users)
//     }catch(err) {
//         console.log(err)
//         return res.status(500).json({error: 'something went wrong'})
//     }
// })

// app.get('/users/:uuid', async (req,res) => {
//     const uuid = req.params.uuid
//     try {
//         const users = await user.findOne({
//             where: {uuid},
//         })

//         return res.json(users)
//     }catch(err) {
//         console.log(err)
//         return res.status(500).json({error: 'something went wrong'})
//     }
// })
sequelize.authenticate()

app.listen(process.env.PORT || 5000, () => {
    console.log('Sever up on http://localhost:5000');
    console.log('Database connected!')
})

