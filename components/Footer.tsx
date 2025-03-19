import Link from "next/link"

export default function Footer() {
    return (
    <footer className="w-full border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                © 2023 EmpowerFund. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
                <Link href="/terms" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                Terms
                </Link>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                Privacy
                </Link>
                <Link href="/contact" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                Contact
                </Link>
            </div>
            </div>
        </footer>
    )
}