// app/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "./layout/Container";
import { Heart } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-stone-200">
            <Container className="flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="#inicio" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl text-white">
                        <Image
                            src="/logo-cra.png"
                            alt="Logo Centro de Rescate Animal"
                            width={1024}
                            height={1024}
                            priority
                            className="h-10 w-auto object-contain"
                        />
                    </div>
                    <div className="leading-tight">
                        <p className="text-sm font-bold text-stone-900">CRA</p>
                        <p className="text-[11px] text-stone-500 -mt-1">
                            Centro de Rescate Animal
                        </p>
                    </div>
                </Link>

                {/* Navegación */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-700">
                    <Link href="#animales" className="hover:text-orange-700 transition">
                        Animales
                    </Link>
                    <Link href="#como-ayudar" className="hover:text-orange-700 transition">
                        Cómo ayudar
                    </Link>
                    <Link href="#sobre-nosotros" className="hover:text-orange-700 transition">
                        Quiénes somos
                    </Link>
                    <Link href="#contacto" className="hover:text-orange-700 transition">
                        Contacto
                    </Link>
                </nav>

                {/* CTA */}
                <div className="flex items-center gap-3">
                    <Link
                        href="#como-ayudar"
                        className="hidden sm:inline-flex items-center gap-2 rounded-full bg-rose-400 px-4 py-2 text-xs font-semibold text-white hover:bg-rose-500 transition"
                    >
                        <Heart className="h-4 w-4" />
                        Donar
                    </Link>

                    <Link
                        href="#animales"
                        className="inline-flex items-center justify-center rounded-full bg-orange-700 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-600 transition"
                    >
                        Adoptar
                    </Link>
                </div>
            </Container>
        </header>
    );
}
