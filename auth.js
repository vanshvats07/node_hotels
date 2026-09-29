const passport=require('passport');
const LocalStrategy= require('passport-local').Strategy;
const Person=require('./models/Person');
const Menu = require('./models/Menu');

passport.use(new LocalStrategy(async(username,password,done)=>{
    try{
        console.log('received credentials')
        const user= await Person.findOne({username:username});
        if(!user){
            return done(null,false,{message: 'user not found'});
        }
        const ispasswordmatch = await user.comparePassword(password);
        if(ispasswordmatch){
            return done(null,user);
        }
        else{
            return done(null,false,{message: 'invalid password'});
        }
    }
    catch(err){
        return done(error);
    }
}))


passport.use(new LocalStrategy(async(username,password,done)=>{
   try {console.log('received credentials');
    const user= await Menu.findOne({username:username});
    if(!user){
        return done(null,false,{message: 'username does not match'})
    }
    const ispassword= user.password===password ? true : false;
    if(ispassword){
        return done(null,user);
    }else{
        return done(null,false,{message: 'password does not match'});
    }

}catch(err){
    return done(err);
}
}))




module.exports=passport;



