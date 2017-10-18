const knex = require("../db/knex.js");

module.exports = {
  // Main Page
  index: function(req, res) {
    knex('companies').then((result) => {

      res.render('HomePage', {companies: result})
    })
    .catch((err) => {
      console.error(err)
    });
  },
//Company Profile


    // GET ONE COMPANY
 getOne: function(req, res){
   knex('companies')
     .where('id', req.params.id)
     .then((companyResults)=>{
       knex('members')
       .where('company_id', req.params.id)
       .then((memberResults)=>{
         res.render('CompanyProfile', {companies: companyResults[0], members: memberResults});
       })
     })
     .catch((err) => {
       console.error(err)
     });
 },
//adding a company
    create: function(req, res){

  knex('companies')
    .insert({
      name: req.body.name,
      description: req.body.description,
      suiteNumber: req.body.suiteNumber
    }, "*")
    .then((result)=>{
      console.log(result);
      res.redirect("/homepage")
    })
    .catch((err) => {
      console.error(err)
    });

},

//adding a memberResults
complete: function(req, res){

knex('members')
.insert({
  first_name: req.body.first_name,
  last_name: req.body.last_name,
  position: req.body.position,
  email: req.body.email
}, "*")
.then((result)=>{
  console.log(result);
  res.redirect("/homepage");
})
.catch((err) => {
  console.error(err)
});

},

  }
