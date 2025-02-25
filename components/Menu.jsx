"use client";
import Link from 'next/link';

const Menu = () => {
    return (
        <nav className="bg-gradient-to-r from-pink-500 to-pink-700 text-white font-sans font-medium">
            <ul className="flex justify-center items-center p-4 space-x-8">
                <li>
                    <Link href="/clientes" className="hover:underline">
                        Clientes
                    </Link>
                </li>
                <li>
                    <Link href="/agentes" className="hover:underline">
                        Agentes
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;