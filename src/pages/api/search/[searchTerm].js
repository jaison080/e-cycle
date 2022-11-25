import connectMongo from '../../../utils/mongodb';
import Parts from '../../../models/parts'; 
import Fuse from 'fuse.js';
export default async function handler(req,res){
    try{
        await connectMongo();
        const {searchTerm} = req.query
        const parts = await Parts.find({});
        const options = {
            keys: [
              "partName",
              "brand",
              "category",
              "modelNo"
            ]
          };

        const fuse = new Fuse(parts, options);
        const pattern = searchTerm
        res.status(200).send(fuse.search(pattern))
    }
    catch(err){
        console.log(err);
        res.status(500).send(err)
    }

}