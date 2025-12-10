"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Volver al inicio"
            className={`fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full 
      bg-orange-700 text-white shadow-lg transition-all hover:bg-orange-600 
      h-10 w-10 sm:h-12 sm:w-12 cursor-pointer
      ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
        >
            <ArrowUp className="h-5 w-5" />
        </button>
    );
}
