import Link from "next/link";
import { navLinks } from "./Navbar";



interface MobileNavProps {
    navOpen: boolean
    setNavOpen: (open: boolean) => void
}

export default function MobileNav({ navOpen, setNavOpen }: MobileNavProps) {

    const showMobileNav = navOpen ? 'translate-x-0' : 'translate-x-[100%]'

    return (
        <>
            {/* insetbackground */}
            {navOpen && (
                <div onClick={() => setNavOpen(false)} className="fixed inset-0 right-0 z-50 bg-black opacity-30 w-full h-screen transition-all duration-500"></div>
            )}

            {/* navLinks */}

            <ul className={`fixed flex items-center justify-center text-white flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-slate-800 space-y-1 z-50 right-0 top-0 ${showMobileNav}`}>
                {navLinks.map((link) => {
                    return (
                        <li key={link.url} className="w-full">
                            <Link href={link.url} className="flex justify-center items-center text-xl font-medium text-white py-4 px-6 rounded-lg hover:bg-slate-700/50 hover:text-cyan-300 transition-all duration-300 border-b border-slate-700/30 w-full text-center" onClick={() => setNavOpen(false)}>
                                {link.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>

        </>
    )
}
