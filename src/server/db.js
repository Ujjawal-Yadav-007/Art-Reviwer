import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const uri = `mongodb+srv://ujjawaly59:tp3qDVpTBmAIhNNN@cluster0.bwv9n.mongodb.net/?appName=Cluster0`;

const dbConnect = () => {
      mongoose.connect(uri).then(() => {
        console.log('Connected');
      }).catch((err) => {
        console.error('Error :',err);
      })
  };
  export default dbConnect;


