

import {PostProps} from "@/types";

    export default function ShortUrl({post}: {post: PostProps}) {
        //const shortURL = `http://localhost:3000/r/${post.alias}`
        const shortURL = `https://mp-5-orpin-six.vercel.app/r/${post.alias}`

        return (
            <>
                <div className=" align-middle max-w-md shadow-lg bg-sky-300 p-4 rounded-xl border-2 m-5">
                <h2 className="text-white font-bold text-1.5xl ">
                    Your shortened URL:
                </h2>
                <a href={shortURL}
                    target="_blank"
                    className="underline text-white text-1xl" >
                    {shortURL}
                </a>
                </div>


            </>

        )
    }