import jwt from "jsonwebtoken";

// Authorising users to like posts etc.  
// If the middleware authorises the user then it calls next() which calls the like controller

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    // Get the token created for a user (token contains multiple properties, we only want the first)
    const token = req.headers.authorization.split(" ")[1];
    // Check whether the token is Google's or not (google's tokens are longer than 500)
    const isCustomAuth = token.length < 500;
    // Store the data we want from the token within the variable 'decodedData'
    let decodedData;
    // If token exists and is not google's
    if (token && isCustomAuth) {  
      // use jsonwebtoken to store the user data in decodedData
      decodedData = jwt.verify(token, secret);
      // match the decodedData ID to the requested user's ID
      req.userId = decodedData?.id;
    } else {
    // Else set decodedData to data in google's token
      decodedData = jwt.decode(token);
    // store the decoded ID to the request user's ID (sub is google's word for ID)
      req.userId = decodedData?.sub;
    }    
    // Next call the like controller etc
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;