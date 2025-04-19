import getPostByAlias from "@/lib/getPostByAlias";
import { redirect } from "next/navigation";

export default async function FullPostPage({params}: {params:Promise<{aliases:string}>}) {

    const {aliases} =  await params;
    console.log("this is the id ",aliases);

        const post = await getPostByAlias(aliases);

        console.log("this is the post " ,post);
        //console.log(post.url);
        if (post === null) {
            console.log("routing to error because post === null");
            return redirect("/error");
        }
        if (post.url !== undefined) {
            console.log("this is the url", post.url);
            console.log("routing to " ,post.url);
            //const url = post.url;
            return redirect(post.url);
        }



//    catch (error) {
     //   console.error("this is the error", error);
        //return redirect("/error");


}
