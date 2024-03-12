import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import ProfileButton from "./ProfileButton"

const HomeHeader = () => {
    return (
        <header className="w-full bg-primary sticky top-0 z-50">
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
                        <div>Local</div>
                        <div>Marketplace</div>
                    </div>
                </Link>

                {/* Message Feature */}
                <div className="flex gap-4">
                    <Link href="/messages">
                        <Button asChild className="text-primary-foreground/80">
                            Messages
                        </Button>
                    </Link>
                </div>

                {/* Signin or "Create & Profile" */}
                <div className="flex gap-3">

                    {/* when signed in */}
                    <SignedIn>
                        <div className="md:flex-between hidden w-full max-w-xs gap-x-4">
                            {/* link to service page */}
                            <Link 
                                href={"/services/create"} 
                                className="text-primary-foreground/80 flex-center p-medium-16 whitespace-nowrap">
                                    + Create new service
                            </Link>
                            {/* Link to profile page */}       
                            <div className="w-12 h-12">
                                <ProfileButton />
                            </div>     
                            {/* Message */}
                            <Link href="/messages">
                                Messages
                            </Link>
                        </div>
                    </SignedIn>

                    {/*  when signed out */}
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

export default HomeHeader