const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
    //check the token in request header
    //validate this token
    // Check if the token is present
    // Check if the token present is a valid token
    // Return a different error message in both these cases
    let token = req.headers["x-auth-token"]
    if(!token) {return res.send({status: false, msg: "token must be present in the request header"})}
    
     try{jwt.verify(token, 'functionup-uranium');}
     catch (err){ return res.send({status: false, msg:"token is not valid"})}
     let decodedToken = jwt.verify(token, 'functionup-uranium')
    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
    
    // If a token is present then decode the token with verify function
    // verify takes two inputs:
    // Input 1 is the token to be decoded
    // Input 2 is the same secret with which the token was generated
    // Check the value of the decoded token yourself
    // let decodedToken = jwt.verify(token, "functionup-thorium");
    // if (!decodedToken)
    //   return res.send({ status: false, msg: "token is invalid" });

    next()
} 
module.exports.authenticate = authenticate;


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let token = req.headers["x-auth-token"]
    let decodedToken = jwt.verify(token, 'functionup-uranium')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
    //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified !== userLoggedIn){ return res.send({status: false, msg: 'User logged is not allowed to the requested users data'})
}
next()
}
module.exports.authorise = authorise;