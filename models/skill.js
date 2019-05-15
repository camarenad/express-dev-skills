const skills = [
    {skill: 'HTML', learned: true},
    {skill: 'CSS', learned: true},
    {skill: 'JS', learned: true},
    {skill: 'jQuery', learned: true},
    {skill: 'Python', learned: false},
    {skill: 'Ruby', learned: false},
    {skill: 'React', learned: false},
    {skill: 'Express', learned: true},
    {skill: 'EJS', learned: true},
]

module.exports = {
 getAll,
 getOne,
 create,
 deleteOne
};


function getOne(id) {
    return skills[id];
}

function getAll() {
    return skills;
}

function create(skill) {
    skills.push(skill)
}

function deleteOne(id) {
    skills.splice(id, 1);
  }