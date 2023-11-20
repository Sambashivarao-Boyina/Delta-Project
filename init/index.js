const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const MONGO_URL='mongodb://127.0.0.1:27017/wanderlust';

async function main(){
    await mongoose.connect(MONGO_URL);
   }
   

main()
    .then(()=>{
        console.log("Connected to Database");
    })
    .catch((err)=>{
        console.log(err);
    });

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"65583d6205b9ac81b9f66e14"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();