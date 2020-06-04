import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

import {DB_URI, DB} from '../configs/index.ts';

const client = new MongoClient();
client.connectWithUri(DB_URI);

console.log(DB_URI, 'DB_URL');

const db = client.database(DB);
const users = db.collection("users");

export {
  users
};