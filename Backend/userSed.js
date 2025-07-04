import User from '../Backend/src/models/User.js';
import bcrypt from 'bcrypt';
import connectToDatabase from '../Backend/src/databases/db.js'

const userRegister = async () => {
    connectToDatabase();
    try{
        const hashedPassword = await bcrypt.hash("admin",10);
        const newUser = new User({
            name: "admin",
            email:"admin@gmail.com",
            password:hashedPassword,
            role : "admin",
        });
        await newUser.save();
    }catch(error){
        console.log(error)
    }
}

 userRegister();