//controller
// import model
const Question = require('../models/user')
//declare an empty questionController object
const questionsController = {};

questionsController.index = (req, res) => {
  Question.findAll()
    .then(questions=> {
        res.json({
        message: 'ok',
        data: { questions },
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

questiosController.show = (req,res) => {
   Question.findById(req.params.id)
   .then(questions =>{
      res.json({
         message:'ok',
         data: { questions },
      });
   }).catch(err=>{
      console.log(err);
      res.status(400).json({message: '400' ,err});
   })
};

questionsController.create = (req, res) => {
   Question.create({
     question: req.body.question,
     answer: req.body.answer,

   }).then(questions => {

     res.json({message: 'ok', data: {questions}});
   }).catch(err => {
     console.log(err);
     res.status(500).json({message:'400',err});
   });
};

module.exports = questionController;
