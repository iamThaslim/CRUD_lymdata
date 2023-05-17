const bcrypt = require('bcrypt');
const User = require("../models/userModel");
const jwt = require('jsonwebtoken');

const saltRounds = 10;

//user creation
const createUser = async(req, res) => {
    try{
        const { name, email, password} = req.body;
        //Password validation
        const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (!passwordRegx.test(password)) {
            return res.status(400).send({ message: 'Password should have minimum 8 characters, at least one capital letter, one number and one special character'})
        }
        //Hash password
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await User.create({
            name, 
            email, 
            password: hashedPassword,
        });
        res.status(201).send({ message: 'User created successfully', user})
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error creating user'})
    }
}

//Login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email }});

        if (!user) {
            return res.status(404).send({ message: 'User not found'})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send({ message: 'Invalid password' });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        res.status(200).send({
            message: 'Login Successfull',
            user: {
                name: user.name,
                email: user.email,
            },
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error logging in' });
    }
}


module.exports = {
    createUser,
    loginUser
}