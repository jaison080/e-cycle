import connectMongo from '../../utils/mongodb';
import Product from '../../models/product';
export default async function handler(req,res){
    try{
        await connectMongo();
        let product = new Product(req.body)
        await product.save();
        res.status(200).send(product)
    }
    catch(err){
        console.log(err);
        res.status(500).send(err)
    }

}