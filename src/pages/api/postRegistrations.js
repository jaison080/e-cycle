import connectMongo from '../../utils/mongodb';
import Retailer from '../../models/retailers';
export default async function handler(req,res){
    await connectMongo();
    try{
        let retailer = new Retailer(req.body)
        await retailer.save();
        res.status(200).send(retailer)
    }
    catch(err){
        console.log(err);
        res.status(500).send(err)
    }
}