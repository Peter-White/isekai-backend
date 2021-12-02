const {User} = require('../models');

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

module.exports = {
    getUsers,
    getUser
};