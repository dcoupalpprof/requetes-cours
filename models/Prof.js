var sequelize=require('./config'),
    Sequelize=require('Sequelize'),
    Cours=require('./Cours');

var Prof=sequelize.define('Prof',{
  prenom:Sequelize.STRING,
  nom:Sequelize.STRING,
},{
  classMethods:{
    associate:function(models){
      Prof.hasMany(models.Cours);
    }
  }
});



Prof.hasMany(Cours);
Cours.belongsTo(Prof);

module.exports=Prof;
