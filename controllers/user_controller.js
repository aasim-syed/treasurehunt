const User = require('../models/user');
const registrationMailer = require('../mailers/registration_mailer');

module.exports.wait = function(req, res){
    return res.render('wait',{title: 'wait'});
}

module.exports.signIn = function(req, res){
    if(req.isAuthenticated()){
        // return res.redirect('/playground');
        return res.redirect('/check');
    }
    return res.render('sign_in',{
        title: "innohunt sign-in"
    });
}
module.exports.info = function(req, res){
    if(!req.isAuthenticated()){
        // return res.redirect('/playground');
        return res.redirect('/playground/');
    }
    return res.render('add_info',{
        title: "Additional information"
    });
}
// module.exports.signUp = function(req, res){
//     if(req.isAuthenticated()){
//         return res.redirect('/playground/');

//     }

//     return res.render('sign_up',{
//         title: "innohunt sign-up"
//     });
// }


// get the sign up data
// module.exports.create = function(req, res){
//     if (req.body.password != req.body.confirm_password) {
//         return res.redirect('back');
//     }

//     User.findOne({email: req.body.email}, function(err, user){
//         if(err){console.log('Error in finding user in signing up'); return;}

//         if(!user) {
//             User.create(req.body, function(err, user){
//                 if(err){console.log('Error in creating user in signing up'); return;}
//                 // console.log('User created : ',user);
//                 // registrationMailer.accCreated(user);
//                 return res.redirect('/users/sign-in');
//             })
//         }else{
//             return res.redirect('back');
//         }

//     });
// }
// get the sign up data
module.exports.add = function(req, res){
   console.log(req.params);
    User.findByIdAndUpdate( {_id: req.user.id}, {name: req.name, rollno : req.rollno, phone: req.phone, degree: req.degree }, function(err, result){})
    return res.redirect('/playground');
}
// sign in  and create a session for user
module.exports.createSession = function(req, res){
    // return res.redirect('/playground');
    return res.redirect('/check/');

}

module.exports.destroySession = function(req, res){
    req.logout();

    return res.redirect('/users/sign-in');
}