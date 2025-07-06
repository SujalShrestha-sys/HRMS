import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* This verifyUser function is a middleware that:
 
hecks for a JWT token sent from the frontend.
 
erifies the token to make sure it’s real and not expired.
 
ses the token to find the user in the database.
 
asses that user forward for further use in protected routes. */

const verifyUser = async (req, res, next) => {
    try {
        console.log("Incoming Headers:", req.headers);
        const token = req.headers.authorization.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                error: "Token not provided",
            });
        }

        /* This is the core JWT step:
            It checks if the token is valid (not expired, not fake).
            It returns the data stored in the token, usually the user's _id. */
        const decoded = jwt.verify(token, process.env.JWT_KEY);

        if (!decoded) {
            return res.status(404).json({
                success: false,
                error: "Token not valid",
            });
        }

        /*Looks up the user by ID from the token.
        .select("-password") excludes the password from the result.*/
        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                error: "User not found",
            });
        }

        /* 
        --You're attaching the found user to req.user — so future middleware or route handlers can access req.user.
        --next() passes control to the next part of the route. */
        req.user = user;
        next();
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            success: false,
            error: "Server side error",
        });
    }
};

export default verifyUser;
