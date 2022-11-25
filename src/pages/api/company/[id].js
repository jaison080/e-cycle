import connectMongo from '../../../utils/mongodb';
import Product from '../../../models/product'; 
export default async function handler(req,res){
    try{
        await connectMongo();
        const {id} = req.query
        let company = await Product.find({brand:id})
        res.status(200).send(company)
    }
    catch(err){
        console.log(err);
        res.status(500).send(err)
    }

}