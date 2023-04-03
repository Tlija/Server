const express=require('express')
const { addProd, getAllProds, getOneProduct, deleteOneProduct,updateOneProduct} = require('../controllers/productControllers')
const { isadmin } = require('../middlewares/isadmin')
const isauth = require('../middlewares/isauth')
const router=express.Router()
//addProduct
/**
 * @method POST /product/add
 * @description add new product
 * @acces public
 */
router.post('/add',addProd)

//getProduct
/**
 * @method GET /product/
 * @description get all products
 * @acces public
 */
router.get('/',getAllProds)

//getOneProduct
/**
 * @method GET /product/:id
 * @description get one product
 * @acces public
 */
router.get('/:id',getOneProduct)

//deleteOneProduct
/**
 * @method DELETE /product/:id
 * @description delete one product
 * @acces public
 */
router.delete('/:id',deleteOneProduct)


//updateOneProduct
/**
 * @method PUT /product/:id
 * @description update one product
 * @acces prorected
 */
router.put('/:id',updateOneProduct);


module.exports=router