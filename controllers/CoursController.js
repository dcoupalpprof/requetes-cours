var Cours=require('../models/Cours');

var sendJSONresponse=function(res,status,content){
  res.status(status);
  res.json(content);
};


module.exports={
  getAllCours:function(req,res,content){
    Cours.findAll().then(function(data){
      sendJSONresponse(res,200,data);
    },function(err){
      sendJSONresponse(res,400,err);
    });
  },
  ajouterCours:function(req,res){
    if(!req.body.titre || !req.body.no || !req.body.description || !req.body.ProfId){
      sendJSONresponse(res,400,{message:'Tous les champs sont requis'});
      return;
    }
    var cours=Cours.create({titre:req.body.titre,no:req.body.no,description:req.body.description,ProfId:req.body.ProfId})
    .then(function(data){
      sendJSONresponse(res,200,data.dataValues);
    },function(err){
      sendJSONresponse(res,404,err);
    });
  },
  getCours:function(req,res,content){
    if(!req.params.coursId){
      sendJSONresponse(res,400,{message:'Vous devez fournir un id cours dans la requête'});
    }
    Cours.findById(req.params.coursId).then(function(data){
      sendJSONresponse(res,200,data.dataValues);
    },function(err){
      sendJSONresponse(res,400,err);
    });
  }
};
