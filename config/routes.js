//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
module.exports = function(app){

  app.get('/homepage', template.index);

  app.get('/companyprofile/:id', template.getOne);

  app.post('/homepage', template.create);

  app.post('/companyprofile/:id', template.complete);


    app.get('/companyprofile/edit/:id', template.editOne);

}
