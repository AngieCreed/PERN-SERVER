var router = require('express').Router();   
var Chem = require('../db').import('../models/chem');
var validateSession = require('../middleware/validate-session');




router.get('/', validateSession, (req, res) => {

    Chem.findAll()
    
    .then(chem => res.status(200).json(chem))
    .catch(err => res.status(500).json({error: err}))

})


router.post('/add', validateSession, (req, res) => {
    if(!req.errors) {
        const chemFromRequest ={
            fcLevel: req.body.chem.fcLevel,
            phLevel: req.body.chem.phLevel,
            taLevel: req.body.chem.taLevel,
            cyaLevel: req.body.chem.cyaLevel,
            chLevel: req.body.chem.chLevel
         }

    Chem.create(chemFromRequest)
        .then(chem => res.status(200).json(chem))
        .catch(err => res.send(err))

    } else {
        res.status(500).json(req.errors)
    }
})

router.put('/:id', validateSession, (req, res) => {
    if (!req.errors) {
        Chem.update(req.body.chem, {where: {id: req.params.id}})
        .then(chem => res.status(200).json(chem))
    } else {
        res.status(500).json(req.errors)
    }
})

router.delete('/:id', validateSession, (req, res) => {
    Chem.destroy({where: {id: req.params.id}})
    .then(chem => res.status(200).json(pie))
    .catch(err => res.status(500).json({ error: err}) )
})

module.exports = router;