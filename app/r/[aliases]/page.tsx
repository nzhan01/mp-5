import getPostByAlias from "@/lib/getPostByAlias";
import { redirect } from "next/navigation";



export default async function FullPostPage({ params }: {params:Promise<{alias:string}>}) {
    const { alias } = await params;
    const post = await getPostByAlias(alias);

    if (!post) {
        redirect("/error");
    }

    redirect(post.url);
}
