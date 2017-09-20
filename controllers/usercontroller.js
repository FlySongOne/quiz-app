//controller
// import model
const User = require('../models/user')
//declare an empty usersController object
const usersController = {};

usersController.index = (req, res) => {
  User.findAll()
    .then(users=> {
        res.render('users/users-index',{
        message: 'ok',
        data: users,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

usersController.show = (req,res) => {
   User.findById(req.params.id)
   .then(users =>{
      res.render('users/users-single',{
         message:'ok',
         data: users,
      });
   }).catch(err=>{
      console.log(err);
      res.status(500).json(err);
   })
};

usersController.create = (req, res) => {
   User.create({
     username: req.body.username,
     password: req.body.password,
     name: req.body.name
   }).then(users => {

     res.redirect('/users');
   }).catch(err => {
     console.log(err);
     res.status(500).json(err);
   });
};
usersController.update = (req, res) => {
   User.update({
     username: req.body.username,
     password: req.body.password,
     name: req.body.name,
   }, req.params.id).then(user => {
     res.redirect('/users');
   }).catch(err => {
     console.log(err);
     res.status(500).json(err);
   })
};

usersController.delete = (req, res) => {
   User.destroy(req.params.id)
     .then(() => {
       res.redirect('/user');
     }).catch(err => {
       console.log(err);
      res.status(500).json(err);
     });
};

module.exports = usersController;

