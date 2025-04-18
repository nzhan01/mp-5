"use client";

import {useState} from "react";
import {Textarea} from "@mui/joy";
import {TextField} from "@mui/material";
import {Button, FormHelperText} from "@mui/material";
import createNewUrl from "@/lib/createNewUrl"
import ShortUrl from "@/components/ShortUrl"
import {PostProps} from "@/types";


export default function NewPostForm() {
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [result, setResult] = useState<PostProps | null>(null);
    const [error, setError] = useState <string | null>("");

    return(
        <>

        <form className = "w-96 rounded-xl p-4 bg-blue-300"

        onSubmit={async (event)=>{
            event.preventDefault();
                try {
                    const newPost = await createNewUrl(url, alias);
                    setResult(newPost);
                }
                catch(err){
                    if (err instanceof Error) {
                        console.log(err)
                        setError(err.message);
                    }
                    else{
                        setError("Something went wrong");
                    }
                    setResult(null);
        }
        }}
        >
            <TextField
                variant= "filled"
                sx ={{backgroundColor: "white", width: "100%"}}
                label="URL"
                value={url}
                onChange={(e) =>{
                    setError(null)
                    setUrl(e.target.value)}}/>
            <Textarea
                sx={{
                    padding: "0.5rem",
                    height: "50px",
                    width: "100%",
                    borderRadius: 0,

                }}
                variant="soft"
                placeholder = "Your Alias"
                value={alias}
                onChange={(e) =>{
                    setError(null)
                    setAlias(e.target.value)}}
                />
            <FormHelperText className="text-center">
                Enter a URL and custom alias to create a shortened URL</FormHelperText>
            <div className = "w-full flex justify-center">
                <Button
                    sx ={{width: "100px"}}
                    variant="contained"
                    type="submit"
                    disabled={url ==="" || alias ===""}>
                    Shorten URL
                </Button>

            </div>
        </form>
            {result && (<div>
                <ShortUrl post ={result}/>
            </div>   )  }

            {error &&  (
                <h3 className="text-red-500 text-2xl mt-2">
                    {error}
                </h3>
            )}
        </>
    );
}