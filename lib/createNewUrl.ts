"use server";
import {PostProps} from "@/types";
import getCollection, {POSTS_COLLECTION} from "@/db";
import getPostByAlias from "@/lib/getPostByAlias";


export default async function createNewUrl( url:string, alias:string):Promise<{post?:PostProps , error?:string }>{

    //regex testing function found via https://www.freecodecamp.org/news/how-to-validate-urls-in-javascript/#heading-how-to-use-regex-to-validate-urls
    function isValidHttpUrl(str:string) {
        const pattern = new RegExp(
            '^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', // fragment locator
            'i'
        );
        return pattern.test(str);
    }

    console.log("checking Regex")
    if (!isValidHttpUrl(url)) {
        console.log("website didn't pass regex test");
        return {error: "Invalid URL"};
    }
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