// app/components/TopBanner.tsx
import Link from "next/link";
import { Megaphone } from "lucide-react";

export function TopBanner() {
    return (
        <div className="bg-amber-600 text-white text-xs sm:text-sm">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">

                {/* Mensaje */}
                <div className="flex items-center gap-2">
                    <Megaphone className="h-4 w-4" />
                    <p className="font-medium">
                        Únete como voluntario · Tu tiempo puede cambiar la vida de un peludito.
                    </p>
                </div>

                {/* CTA */}
                <Link
                    href="/voluntariado"
                    className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium hover:bg-white/20 transition"
                >
                    Quiero ser voluntario
                </Link>
            </div>
        </div>
    );
}
