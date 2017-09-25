//controller
// import model
const User = require('../models/user')
//declare an empty usersController object
const usersController = {};

usersController.index = (req, res) => {
  User.findAll()
    .then(users=> {
        res.json({
        message: 'ok',
        data: { users },
      });
    }).catch(err => {
      console.log(err);
      res.status(400).json({message: '400',err});
    });
}

usersController.show = (req,res) => {
   User.findById(req.params.id)
   .then(users =>{
      res.json({
         message:'ok',
         data: { users },
      });
   }).catch(err=>{
      console.log(err);
      res.status(400).json({message:'400',err});
   })
};

usersController.create = (req, res) => {
   User.create({
     username: req.body.username,
     password: req.body.password,
     name: req.body.name
   }).then(users => {
     res.json({ message: 'ok', data: { users } });

   }).catch(err => {
     console.log(err);
     res.status(400).json({message:'400',err});
   });
};

usersController.delete = (req, res) => {
  console.log("this is delete params ", req.params.id)
   User.destroy(req.params.id)
     .then(() => {
       res.json({message:'ok'})
     }).catch(err => {
       console.log(err);
      res.status(400).json({message:'400',err});
     });
};

module.exports = usersController;

