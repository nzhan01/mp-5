import {MongoClient, Db, Collection} from 'mongodb';


const MONGO_URI = process.env.MONGO_URI as string;

if(!MONGO_URI) {
    throw new Error('MongoDB URI environment variable must be a mongo URI');
}

const DB_NAME = "cs391-mp5"
export const POSTS_COLLECTION = "posts";


let client: MongoClient | null = null;  //must also initialize as potentially null
let db: Db | null = null;

async function connect(): Promise<Db> {
    // if 'client' is not yet initialized, create a new MongoClient instance
    if (!client) {
        client = new MongoClient(MONGO_URI);
        await client.connect();
    }
    // return the database instance for the  specified database name
    return client.db(DB_NAME);

}
//retrieve specific collection from the db
// 'collectionName' is passed as a parameter to specific which collection
// return of type Collection
export default async function getCollection(collectionName: string,): Promise<Collection>{
    // if db is not initialized, call 'connect' to establish connection
    if (!db){
        db = await connect();
    }
    return db.collection(collectionName);
}

