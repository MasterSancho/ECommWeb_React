import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import digital_card from './data/digitalcard.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import DigitalCard from './models/digitalCardModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
 try {
  await Product.deleteMany();
  await User.deleteMany();
  await DigitalCard.deleteMany();

  const createdUsers = await User.insertMany(users);

  const adminUser = createdUsers[0]._id;

  const sampleProducts = products.map((product) => {
   return { ...product, user: adminUser };
  });

  const sampleDigitalCard = {
   ...digital_card,
   user: adminUser,
  };

  await Product.insertMany(sampleProducts);
  await DigitalCard.insertMany(sampleDigitalCard);

  console.log('Data Imported!');
  process.exit();
 } catch (error) {
  console.error(`${error}`);
  process.exit(1);
 }
};

const destroyData = async () => {
 try {
  await Product.deleteMany();
  await User.deleteMany();
  await DigitalCard.deleteMany();

  console.log('Data Destroyed!');
  process.exit();
 } catch (error) {
  console.log(`${error}`);
  process.exit(1);
 }
};

if (process.argv[2] === '-d') {
 destroyData();
} else {
 importData();
}
