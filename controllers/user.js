const {User} = require('../models');
const fs = require('fs')

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll(
            {
                where: {
                    confirmed: true
                }
            }
        );
        return res.status(201).json(users);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);

        if(!user.confirmed) {
            return res.status(403).json({ error: "User has not confirmed their account" })
        }

        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const register = async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            createdAt: new Date(),
            confirmed: false,
            updatedAt: new Date()
        });

        return res.status(201).json({success: "account created"});
    } catch(error) {
        return res.status(403).json({ error: error.message });
    }
};

const confirmUser = async(req, res) => {
    const data = fs.readFileSync('/config/secret.txt', 'utf8');
    console.log(data);
    
    return res.status(201).json({success: "account confirmed"});
};

module.exports = {
    getUsers,
    getUser,
    register,
    confirmUser
};