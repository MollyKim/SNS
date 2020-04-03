const passport = require('passport');

module.exports = () => {

  passport.serializeUser(()=> { 
    return done(null,user.id);
  });

  passport.deserializeUser(async(id,done)=> {
    try {
      const user= await db.user.findOne({
        where: {id},
      });
      return done(null,user);
    } catch(e) {
      console.error(e);
      return done(e);
    }
  });
  local();
}