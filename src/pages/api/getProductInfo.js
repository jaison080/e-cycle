import connectMongo from '../../utils/mongodb';
import Product from '../../models/product';
export default async function handler(req,res){
    await connectMongo();
    try{
        let product = await Product.find({})
        res.status(200).send(product)
    }
    catch(err){
        console.log(err);
        res.status(500).send(err)
    }

}