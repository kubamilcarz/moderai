import Image from "next/image";


export default function Footer() {
    return (
        <footer id="footer" className="bg-gray-900 p-10">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-10 space-y-10">
                    <ul className="w-full flex-1 space-y-5">
                        <Image src={"/logo.png"} alt={""} width="100" height="50" />
                        {/* <li><p className="font-bold text-lg">Code it. We&apos;ll mode it.</p></li> */}
                        {/* <li className="flex flex-row justify-start items-center space-x-2">
                            <p>Threads</p>
                            <p>Insta</p>
                        </li> */}
                    </ul>

                    <ul className="w-full flex-1 space-y-2">
                        <li><a href="mailto:contact@moderai.app">Write to us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>

                <div className="text-center mt-5">
                    <p className="text-gray-500 text-sm">&copy; ModerAI 2025</p>
                </div>
            </div>
        </footer>
    );
}