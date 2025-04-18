"use server";
import {PostProps} from "@/types";
import getCollection, {POSTS_COLLECTION} from "@/db";
import getPostByAlias from "@/lib/getPostByAlias";


export default async function createNewUrl( url:string, alias:string):Promise<{post?:PostProps , error?:string }>{


    const response = await fetch(url, { method: "HEAD", redirect: "follow" });
    if (!(response.status >= 200 && response.status < 400)) {
        console.log("website didn't load");
        return {error: "Invalid URL"};
    }

    const check = await(getPostByAlias(alias))
    if (check !== null){
        console.log("alias already exists");
        return {error: "Alias already exists"};

    }




    console.log("creating new posts...");
    const p={
        alias: alias,
        url: url
    };

    const postsCollection = await getCollection(POSTS_COLLECTION);
    const res = await postsCollection.insertOne({...p})

    if (!res.acknowledged){
        return {error: "DB insertion failed"};
    }
    return {post:p};

}