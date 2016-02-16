var Prof=require('../models/Prof'),
    Cours=require('../models/Cours');

var sendJSONresponse=function(res,status,content){
  res.status(status);
  res.json(content);
};


module.exports={
  getAllProfs:function(req,res){
    Prof.findAll({order:[['nom','ASC']]}).then(function(data){
      sendJSONresponse(res,200,data);
    },function(err){
      sendJSONresponse(res,404,err);
    });
  },
  getProf:function(req,res,content){
    if(!req.params.profId){
      sendJSONresponse(res,400,{message:'Vous devez fournir un id prof dans la requête'});
    }
    Prof.findById(req.params.profId).then(function(data){
      if(data){
        sendJSONresponse(res,200,data.dataValues);
      }else{
        sendJSONresponse(res,404,{message:'Aucun enseignant trouvé avec ce id'});
      }
    },function(err){
      sendJSONresponse(res,400,err);
    });
    //sendJSONresponse(res,200,res);
  },
  ajouterProf:function(req,res){
    if(!req.body.prenom || !req.body.nom){
      sendJSONresponse(res,400,{message:'Tous les champs sont requis'});
      return;
    }

    var prof=Prof.create({prenom:req.body.prenom,nom:req.body.nom})
    .then(function(data){
      sendJSONresponse(res,200,data.dataValues);
    },function(err){
      sendJSONresponse(res,404,err);
    });
  },

  // Cours
  getAllCoursByProfId:function(req,res){
    if(!req.params.profId){
      sendJSONresponse(res,400,{message:'Vous devez fournir un id prof dans la requête'});
    }
      Prof.find({where:{id:req.params.profId},include:[Cours]}).then(function(data){
      sendJSONresponse(res,200,data.dataValues.Cours);
    },function(err){
      sendJSONresponse(res,404,err);
    });
  },
  getCours:function(req,res,content){
    if(!req.params.profId){
      sendJSONresponse(res,400,{message:'Vous devez fournir un id prof dans la requête'});
    }
    Prof.findById(req.params.profId).then(function(data){
      sendJSONresponse(res,200,data.dataValues);
    },function(err){
      sendJSONresponse(res,400,err);
    });
  },
  ajouterCours:function(req,res){
    if(!req.params.profId){
      sendJSONresponse(res,400,{message:'Vous devez fournir un id prof dans la requête'});
    }

    if(!req.body.titre || !req.body.no || !req.body.description || !req.body.ProfId){
      sendJSONresponse(res,400,{message:'Tous les champs sont requis'});
      return;
    }

    var cours=Cours.create({titre:req.body.titre,no:req.body.no,description:req.body.description,ProfId:req.params.profId})
    .then(function(data){
      sendJSONresponse(res,200,data.dataValues);
    },function(err){
      sendJSONresponse(res,404,err);
    });
  },
};
