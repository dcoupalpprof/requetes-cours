var Sequelize=require('Sequelize');

var sequelize=new Sequelize('tim','root','',{
  host:'localhost',
  dialect:'mysql',
  pool:{
    max:5,
    min:0,
    idle:10000
  }
});

//Migration
/*sequelize.sync({force:true})
.then(function(err){
  console.log('Migration complétée');
},function(err){
  console.log(err);
});*/

module.exports=sequelize;
