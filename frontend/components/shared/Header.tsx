import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

const Header = () => {
    return (
        <header className="w-full bg-secondary sticky top-0 z-50">
            <div className="wrapper flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex gap-x-4 items-center">
                    <Image
                        src="/assets/images/favicon.ico"
                        width={48}
                        height={48}
                        alt="LM_logo"
                        priority={true}
                    />
                    <div>
                        Local Marketplace
                    </div>
                </Link>

                {/* Signin or "Create & Profile" */}
                <div className="flex gap-3">

                    {/*  */}
                    <SignedIn>
                        <div className="md:flex-between hidden w-full max-w-xs gap-x-4">
                            <Link 
                                href={"/services/create"} 
                                className="text-primary-foreground/80 flex-center p-medium-16 whitespace-nowrap">
                                    + Create new service
                            </Link>
                            <UserButton afterSignOutUrl="/" />
                        </div>
                    </SignedIn>

                    <SignedOut>
                        <Button asChild className="rounded-full bg-primary/70" size="lg">
                            <Link href="/sign-in">
                                Sign in
                            </Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    )
}

export default Header