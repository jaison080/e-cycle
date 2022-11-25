import connectMongo from '../../utils/mongodb';
import Product from '../../models/product'; 
export default async function handler(req,res){
    try{
        await connectMongo();
        let parts = await Product.find({disposalMethod:'2'});
        res.status(200).send(parts)
    }
    catch(err){
        console.log(err);
        res.status(500).send(err)
    }

}