

export default function MainBox() {




    return (


        <>
            <div className="w-full max-w-md shadow-lg bg-white p-4 rounded-xl border-2 m-5">
                <div className="text-center">
                    <h2 className="text-3xl font-bold p-2, text-black">
                        URL Shortener
                    </h2>
                    <p className="text-neutral-500">
                        Enter a URL and alias to shorten
                    </p>
                </div>
                <div>
                    <form
                          className="">
                        <div className="space-y-2">

                            <div className="relative text-black text-xl font-semibold">
                                <h3>Your URL</h3>
                                <input className="border-2 w-full p-2 rounded-lg text-black"
                                       id="url"

                                       placeholder="https://example.com/path/to/other"

                                       />
                                <h3>Alias</h3>
                                <input className="border-2 w-full p-2 rounded-lg text-black"
                                       id="alias"

                                       placeholder="your alias"

                                />
                            </div>
                        </div>
                        <button className="w-full text-white font-bold  bg-green-500 hover:bg-green-400 transition-colors  rounded-lg text-sm px-5 py-2.5 text-center me-2 my-2"
                                type="submit">
                                Shorten URL
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}