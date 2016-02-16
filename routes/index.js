var express = require('express');
var router = express.Router(),
ProfController=require('../controllers/ProfController'),
CoursController=require('../controllers/CoursController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})
.get('/profs', ProfController.getAllProfs)
//.post('/profs',ProfController.ajouterProf)
.get('/profs/:profId',ProfController.getProf)
//.get('/profs/:profId/cours',ProfController.getAllCoursByProfId)
//cours
.get('/cours',CoursController.getAllCours)
.post('/cours',CoursController.ajouterCours)
.get('/cours/:no',CoursController.getCours);

module.exports = router;
