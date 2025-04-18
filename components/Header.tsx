
import Link from "next/link";

export default function Header() {
    const linkStyling = " p-1 m-2 text-xl hover:underline text-black"
    return(
        <header className="flex justify-between items-center  h-20 bg-white">
            <h2 className = "text-4xl font-semibold p-4 text-black">MP5 URL Shortener App</h2>
            <nav className = "p-2 m-4">
                <Link href="/" className = {linkStyling}>
                    Home
                </Link>
            </nav>
        </header>
    );
}