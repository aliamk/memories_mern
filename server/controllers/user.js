import bcrypt from 'bcryptjs'       // Hash the passwords
import jwt from 'jsonwebtoken'      // Store the passwords in the browser
import User from '../models/user'

const secret = 'test';

// Signing IN
export const signin = async (req, res) => {
    // get the email and password from the request
    const { email, password } = req.body;
    try {
        // Check whether a user already exists in the database (has previously signed-up)
        const existingUser = await User.findOne({ email });
        // If that user isn't in the DB, return error message
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist" });
        // If the user does exist, check that the password matches the one in the DB
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        // If the password is not correct, return an error message
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
        // If the password is correct, construct a token
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secret, { expiresIn: "1h" });
        // Send the token to the frontend
        res.status(200).json({ result: existingUser, token });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

// Signing UP
export const signup = async (req, res) => {
    // Get the formData values from the request
    const { email, password, confirmPassword, firstName, lastName } = req.body;
    try {
        // Check whether a user already exists in the database (has previously signed-up) 
        const existingUser = await User.findOne({ email });
        // If user already exists, return an error message
        if (existingUser) return res.status(400).json({ message: "User already exists" });
        // If the user is new, check that the same password has been entered twice (if not, send error message)
        if(password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match" })
        // If password and confirmPassword match, hash the password
        const hashedPassword = await bcrypt.hash(password, 12);
        // Create the new user
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
        // Create a token
        const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
        // Send the result and token to the frontend
        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });        
        console.log(error);
    }
};