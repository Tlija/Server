const productModel=require('../models/productModel')


//addProdut

const addProd=async(req,res)=>{
    try {
        const prod=new productModel({...req.body})
        const existProduct= await productModel.findOne({title:prod.title})
       if (existProduct) {
        return res.status(400).send({msg:"produit deja exist"})
       }
       await prod.save() 
        res.send({msg:"produit added successfully"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }

}

// getAllProds
const getAllProds=async(req,res)=>{
    
    try {        
        const products=await productModel.find({})

       res.send({products})
    } catch (error) {
        res.send({msg:error.message})
}
}

// getOneProduct

const getOneProduct=async(req,res)=>{
    const{id}=req.params
    try {
        const product=await productModel.findById(id)
        res.send({product})
    } catch (error) {
        res.send({msg:error.message})
    }
}

// deleteOneProduct

const deleteOneProduct=async(req,res)=>{
    const{id}=req.params
    try {
        await productModel.findByIdAndRemove(id)
        res.send({msg:'product successfully deleted'})
    } catch (error) {
        res.send({msg:error.message})
    }
}

const updateOneProduct=async(req,res)=>{

    const{id}=req.params
    try {
       const updatedProduct= await productModel.findOneAndUpdate({_id:id},{...req.body} ,{new:true},)
        res.send({msg:'product successfully updated'})
    } catch (error) {
        res.send({msg:error.message})
    }
}
  

module.exports={addProd,getAllProds,getOneProduct,deleteOneProduct,updateOneProduct}