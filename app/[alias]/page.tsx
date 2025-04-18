


import getPostByAlias from "@/lib/getPostByAlias";

import {redirect} from "next/navigation";

export default  async function FullPostPage({params}: {params:{alias:string}}) {

        const {alias} =  params;

        const post = await getPostByAlias(alias);
        if (post === null) {
            return redirect("/error");
        }

        redirect(post.url);




}