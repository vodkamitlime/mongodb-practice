const { User } = require('./models/users')

module.exports = { 

    getUser: async (req, res) => {

        try {
            
            const foundUser = await User.find({
                user_email: req.body.user_email
            })
    
            return res.send(`Found: ${foundUser.user_email}`)

        } catch (err) {

            return res.send(err)

        }

    }

}