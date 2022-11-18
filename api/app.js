const express = require('express');


const { sequelize, user } = require("./models");

const app = express();
app.use(express.json())

app.post('/users', async(req, res) => {
    const{firstName, lastName, age, weight, email, password} = req.body;

    try{
        const users = await user.create({ firstName, lastName, age, weight, email, password });

        return res.json(users)
    }catch(err) {
        console.log(err);
        return res.status(500).json(err)
    }
})

app.get('/users', async (req,res) => {
    try {
        const users = await user.findAll()

        return res.json(users)
    }catch(err) {
        console.log(err)
        return res.status(500).json({error: 'something went wrong'})
    }
})

app.get('/users/:uuid', async (req,res) => {
    const uuid = req.params.uuid
    try {
        const users = await user.findOne({
            where: {uuid},
        })

        return res.json(users)
    }catch(err) {
        console.log(err)
        return res.status(500).json({error: 'something went wrong'})
    }
})


app.listen({port: 5000}, async () => {
    console.log('Sever up on http://localhost:5000');
    await sequelize.authenticate()
    console.log('Database connected!')
})

