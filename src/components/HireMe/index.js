import Link from "next/link";
import { CircularText } from "../Icons";

const HireMe = () => {
    return(
        <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
            <div className="w-48 h-a flex items-center justify-center relative">
                <CircularText className={"fill-dark animate-spin-slow dark:fill-light"}/>
                <Link
                    href={"mailto:omerakkoca1042@gmail.com"}
                    className="flex items-center justify-center absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] bg-dark text-light
                        shadow-md border border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark
                        dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light
                    "
                >
                    Hire Me
                </Link>
            </div>
        </div>
    )
}

export { HireMe };