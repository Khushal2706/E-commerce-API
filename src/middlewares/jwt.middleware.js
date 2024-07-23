import jwt from 'jsonwebtoken';

const jwtAuth =(req,res,next)=>{

    // 1. Read The Token
    const token = req.headers['authorization'];
   
    // 2. if no token ,, return the error
    if(!token){
        return res.status(401).send('UnAuthorized');
    }
    // 3. check if token is valid.
    try{
   const payLoad =  jwt.verify(token,"CevoGF1kWN0IYsCUJLSDxtWlTQcXVnGu");
   console.log(payLoad);
    }catch(err){
    // 4.Return error
        return res.status(401).send('UnAuthorized');
    }
    // 5. call next middleware.
    next();
}

export default jwtAuth;