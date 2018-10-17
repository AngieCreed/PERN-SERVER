var router = require('express').Router();   
var Survey = require('../db').import('../models/survey');
// var validateSession = require('../middleware/validate-session');

router.get('/', (req, res) => {
    Survey.findAll()
    .then(survey => res.status(200).json(survey))
    .catch(err => res.status(500).json({error: err}))
})


router.post('/complete', (req, res) => {
    if(!req.errors) {
        var surveyFromPost = {
           easeofuse: req.body.survey.easeofuse,
           quality: req.body.survey.quality,
           meetsneed: req.body.survey.meetsneed,
           satisfaction: req.body.survey.satisfaction,
           feedback: req.body.survey.feedback,
         
        }

        Survey.create(surveyFromPost)
        .then(survey => res.status(200).json(survey))
        .catch(err => res.json(req.errors))

    } else {
        res.status(500).json(req.errors)
    }

})

module.exports = router;

