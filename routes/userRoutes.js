const express=require('express')
const { getallusers, getuser, addUser  } = require('../controllers/userController')
const {admin}=require('../middlewares/isadmin')
// const isauth = require('../middlewares/isauth')
// const { isauthorized } = require('../middlewares/isauthorized')
const router=express.Router()



/**
 * @params GET /user/ 
 * @description get list of all users
 * @access protected(authentified+admin)
 */
router.get('/',getallusers)


/**
 * @params GET /user/:iduser 
 * @description get user details
 * @access protected(authorized+admin)
 */
router.get('/:iduser',getuser)


/**
 * @params POST /user/ 
 * @description add user 
 * @access protected(authorized+admin)
 */
// router.post('/add',addUser)

router.post('/add', function(req, res) {
    // code to handle the POST request
    adduser(req, res);
  });






module.exports=router