const {User} = require('../models');

const getUsers = async (req, res) => {
    try {
        const user = await User.findAll(
            {
                where: {
                    confirmed: true
                }
            }
        );
        return res.status(201).json({
            users
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getUsers
};