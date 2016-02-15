var sequelize=require('./config'),
    Sequelize=require('Sequelize')
    Prof=require('./Prof');

var Cours=sequelize.define('Cours',{
  titre:Sequelize.STRING,
  no:Sequelize.STRING,
  description:Sequelize.STRING
},{
  classMethods:{
    associate:function(models){
      Cours.belongsTo(models.Prof);
    }
  }
});

module.exports=Cours;
