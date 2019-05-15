var Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create
}

function index(req,res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req,res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });
}

function newSkill(req,res) {
    res.render('skills/new');
}

function create(req, res) {
    req.body.learned = false;
    Skill.create(req.body);
    res.redirect('/skills');
  }
 