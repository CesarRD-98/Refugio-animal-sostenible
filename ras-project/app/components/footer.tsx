// app/components/Footer.tsx
import { Container } from "./layout/Container";

export function Footer() {
    return (
        <footer className="border-t border-stone-200 bg-white">
            <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-stone-500">
                    CRA – Centro de Refugio Animal · Prototipo académico.
                </p>
                <p className="text-[11px] text-stone-400">
                    Diseñado como ejercicio de Design Thinking para explorar una
                    experiencia digital de adopción, donación y voluntariado.
                </p>
            </Container>
        </footer>
    );
}
