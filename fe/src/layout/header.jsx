import { User } from "lucide-react";

function Header() {
    return (
        <header className="w-full bg-gray-800 px-6 py-4 shadow-md">
            <div className="flex justify-end items-center">
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full"> {/* Bulatan untuk ikon */}
                        <User size={25} className="text-white" /> {/* Ikon User */}
                    </div>
                    <span className="text-white font-semibold">Admin</span> {/* Nama Admin */}
                </div>
            </div>
        </header>
    );
}

export default Header;
