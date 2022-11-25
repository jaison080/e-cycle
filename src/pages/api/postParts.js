import connectMongo from '../../utils/mongodb';
import Parts from '../../models/parts';
export default async function handler(req,res){
    await connectMongo();
    try{
        let parts = new Parts(req.body)
        await parts.save();
        res.status(200).send(parts);
    }
    catch(err){
        console.log(err);
        res.status(500).send(err)
    }
}