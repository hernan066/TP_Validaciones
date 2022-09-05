const { validationResult } = require("express-validator");

module.exports = {
  index: (req, res) => {
    return res.render("index");
  },
  register: (req, res) => {
    let errors = validationResult(req);
    if(errors.isEmpty()){
       return res.send("Registro correcto")
    }else{
        return res.render('index',{
           errors : errors.mapped(),
            old : req.body
        })
    }
  },
};
