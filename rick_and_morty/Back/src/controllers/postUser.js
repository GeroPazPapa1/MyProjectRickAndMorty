const {User} = require('../DB_connection');

const postUser = async (req,res) =>{
    const {email, password} = req.body
    if (!email || !password)  res.status(400).send("Faltan datos")
    try {
        const newUser = await User.findOrCreate({where: {email: email},defaults:{password:password}});
        res.status(200).json(newUser)        
    } catch (error) {
        res.status(500).json(error.message)
    }
    


}

module.exports = postUser