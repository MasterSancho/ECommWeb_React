import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import digital_cards from './data/digital_cards.js';
import pictures from './data/pictures.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import DigitalCard from './models/digitalCardModel.js';
import Picture from './models/pictureModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
 try {
  await Product.deleteMany();
  await User.deleteMany();
  await DigitalCard.deleteMany();
  await Picture.deleteMany();

  const createdUsers = await User.insertMany(users);

  const adminUser = createdUsers[0]._id;

  const sampleProducts = products.map((product) => {
   return { ...product, user: adminUser };
  });

  const sampleDigitalCard = digital_cards.map((digital_card) => {
   return { ...digital_card, user: adminUser };
  });

  const samplePicture = pictures.map((picture) => {
   return { ...picture, user: adminUser };
  });

  await Product.insertMany(sampleProducts);
  await DigitalCard.insertMany(sampleDigitalCard);
  await Picture.insertMany(samplePicture);

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
  await Picture.deleteMany();

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
