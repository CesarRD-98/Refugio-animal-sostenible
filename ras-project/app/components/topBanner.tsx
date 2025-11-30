// app/components/TopBanner.tsx
import Link from "next/link";
import { Megaphone } from "lucide-react";

export function TopBanner() {
    return (
        <div className="bg-amber-600 text-white text-xs sm:text-sm">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                    <Megaphone className="h-4 w-4" />
                    <p>
                        Prototipo CRA – Imagina una jornada de adopción abierta al público.
                    </p>
                </div>
                <Link
                    href="#como-ayudar"
                    className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium hover:bg-white/20 transition"
                >
                    Ver cómo puedes ayudar
                </Link>
            </div>
        </div>
    );
}
