import Link from "next/link"

const Header = () => {
    const navItems = (
        <>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/profile">Profile</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/logout">Log Out</Link></li>
        </>
    )

    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-2 z-50">
                            {navItems}
                        </ul>
                    </div>
                    <Link href='/' className="text-xl ms-4 md:ms-0 font-semibold">Next Blog</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-6">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header