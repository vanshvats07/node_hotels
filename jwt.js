const jwt=require('jsonwebtoken');
const jsonAuthMiddleware=(req,res,next)=>{
    const token=req.headers.authorization.split(' ')[1];
    if(!token){
        return res.status(401).json({error:'Unauthorized access'});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }
    catch(err){
        
        res.status(401).json({error:'Unauthorized access'});
    }

}
const generateToken=(userData)=>{
return jwt.sign(userData,process.env.JWT_SECRET,{expiresIn:30000});
}

module.exports={jwtAuthMiddleware,generateToken};
