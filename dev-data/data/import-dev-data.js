const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
let connectDB = async () => {
    await mongoose.connect(DB).then(con => console.log('DB Connection Successfully'));
}

// Read Json File
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));

// Import Data Into DB
const importData = async() => {
    try {
        await connectDB()
        await Tour.create(tours)
        console.log('Data Successfully loaded')
    } catch (err) {
        console.log(err)
    }
}

// Delete Data From DB
const deleteData = async() => {
    try {
        await connectDB()
        await Tour.deleteMany()
        console.log('Data Successfully deleted')
    } catch (err) {
        console.log(err)
    }
}

if(process.argv[2] === '--import'){
    importData();
} else if(process.argv[2] === '--delete'){
    deleteData()
}