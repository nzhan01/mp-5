"use server";
import {PostProps} from "@/types";
import getCollection, {POSTS_COLLECTION} from "@/db";
import getPostByAlias from "@/lib/getPostByAlias";


export default async function createNewUrl( url:string, alias:string):Promise<PostProps>{


    const response = await fetch(url, { method: "HEAD", redirect: "follow" });
    if (!(response.status >= 200 && response.status < 400)) {
        throw new Error("Invalid URL");
    }

    const check = await(getPostByAlias(alias))
    if (check !== null){
        throw new Error("Alias already exists");
    }




    console.log("creating new posts...");
    const p={
        alias: alias,
        url: url
    };

    const postsCollection = await getCollection(POSTS_COLLECTION);
    const res = await postsCollection.insertOne({...p})

    if (!res.acknowledged){
        throw new Error ("DB insert failed");
    }
    return p;

}