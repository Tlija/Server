const usermodel = require("../models/user");

exports.getallusers = async (req, res) => {
  try {
    const users = await usermodel.find({});
    res.send({ users: users });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};
//get user details

exports.getuser = async (req, res) => {
  try {
    const { iduser } = req.params;
    const userdetails = await usermodel.findById(iduser);
    userdetails.password = undefined;
    res.send({ user: userdetails });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

//addnew user

exports.adduser=async(req,res)=>{
  try {
      const user=new usermodel({...req.body})

     await user.save() 
      res.send({msg:"user added successfully"})
  } catch (error) {
      res.status(400).send({msg:error.message})
  }

}

