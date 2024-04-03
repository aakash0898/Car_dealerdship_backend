/*import mongodb from 'mongodb';

const { MongoClient } = mongodb;
const DB_URI = process.env.DB_URI;

let db;

export async function connectDB() {
  const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

export function getDB() {
  return db;
}
*/

/*const mongodb = require('mongodb');

const { MongoClient } = mongodb;
const DB_URI = process.env.DB_URI;

let db;

async function connectDB() {
  const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

function getDB() {
  return db;
}

module.exports = { connectDB, getDB };*/


/*import mongodb from 'mongodb';

const { MongoClient } = mongodb;
const DB_URI = process.env.DB_URI;

let db;

export async function connectDB() {
  const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

export function getDB() {
  return db;
}
*/

import mongodb from 'mongodb';

const { MongoClient } = mongodb;
const DB_URI = process.env.DB_URI;
let db;

export async function connectDB() {
  const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db(); // Assign the database to the 'db' variable
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

export function getDB() {
  return db; // Return the database object
}
