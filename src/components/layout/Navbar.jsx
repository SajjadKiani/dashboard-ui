import Logo from "./Logo";
import { Button } from "../ui/button";

export default function Navbar () {

    return (
        <header className="flex justify-between items-center">
            <Logo />
            <div className="flex-1 mx-36">
                <h1 className="font-bold text-xl">
                    Hello Saji!
                </h1>
                <p className="font-light">
                    Welcome to Dsahboard
                </p>
            </div>

            <div>
                <Button>
                    Login
                </Button>
            </div>
        </header>
    )
}