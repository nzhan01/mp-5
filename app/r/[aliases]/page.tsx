import getPostByAlias from "@/lib/getPostByAlias";
import { redirect } from "next/navigation";



export default async function FullPostPage({ params }: {params:Promise<{id:string}>}) {
    const { id } = await params;
    const post = await getPostByAlias(id);

    if (!post) {
        return redirect("/error");
    }

    return redirect(post.url);
}
