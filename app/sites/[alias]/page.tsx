

import ShortUrl from "@/components/ShortUrl";

import getPostByAlias from "@/lib/getPostByAlias";

import {redirect} from "next/navigation";

export default async function FullPostPage({params}: {params:Promise<{id:string}>}) {

    const {id} = await params;

    try {
        const post = await getPostByAlias(id);
        if (post === null) {
            return redirect("/error");
        }

        return <ShortUrl post={post}/> // need to add componenet that returns shortened link
    }

    catch (error) {
        console.error(error);
        return redirect("/error");
    }

}