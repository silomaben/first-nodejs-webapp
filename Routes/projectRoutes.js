const {Router} = require('express');
const { createProject, getProjects, getOneProject, updateProject, deleteProject } = require('../controllers/projectController');

const projectrouter = Router();

projectrouter.post('/',createProject);
projectrouter.get('/', getProjects);
projectrouter.get('/:id', getOneProject);
projectrouter.put('/:id', updateProject);
projectrouter.delete('/:id', deleteProject);

module.exports={
    projectrouter
}