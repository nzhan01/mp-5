import getCollection, {POSTS_COLLECTION} from "@/db";

import {ObjectId} from "mongodb";
import {PostProps} from "@/types";

export default async function getPostByAlias(
    alias: string,):
    Promise <PostProps |null> {

    const postId = ObjectId.createFromHexString(alias);
    const postsCollection = await getCollection(POSTS_COLLECTION);
    const data = await postsCollection.findOne({_alias: postId});


    if (data === null) {
        return null;
    }

    const post = {
        alias: alias,
        url: data.url

    }
    return post;
}










