// app/components/Footer.tsx
import Link from "next/link";
import { Container } from "./layout/Container";
import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <Container className="py-8 space-y-8 text-sm text-stone-600">
        {/* Bloque superior */}
        <div className="flex flex-col gap-4 lg:gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Logo + info CRA */}
          <div className="flex gap-3">
            <div className="space-y-2 max-w-md">
              <div className="space-y-1">
                <p className="text-base font-semibold text-stone-900">
                  CRA - Centro de Rescate Animal
                </p>
                <p className="text-sm text-stone-500">
                  Rescate, cuidado y adopción responsable de mascotas, con
                  enfoque en bienestar y transparencia.
                </p>
              </div>

              <div className="space-y-2 text-sm text-stone-600">
                <p className="font-semibold text-stone-700">UBICACIÓN</p>
                <p>
                  A la par del edificio Xcala, Av. América, Tegucigalpa,
                  Francisco Morazán, Honduras
                </p>
              </div>
            </div>
          </div>

          {/* Bloque de columnas derecha */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
            {/* Navegación */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-700">
                Navegación
              </h3>
              <nav className="flex flex-col gap-1 text-sm">
                <Link
                  href="/#inicio"
                  className="hover:text-orange-700 transition"
                >
                  Inicio
                </Link>
                <Link
                  href="/#mascotas"
                  className="hover:text-orange-700 transition"
                >
                  Mascotas
                </Link>
                <Link
                  href="/#como-ayudar"
                  className="hover:text-orange-700 transition"
                >
                  Cómo ayudar
                </Link>
                <Link
                  href="/#testimonios"
                  className="hover:text-orange-700 transition"
                >
                  Historias
                </Link>
                <Link
                  href="/#sobre-nosotros"
                  className="hover:text-orange-700 transition"
                >
                  Quiénes somos
                </Link>
                <Link
                  href="/#contacto"
                  className="hover:text-orange-700 transition"
                >
                  Contacto
                </Link>
              </nav>
            </div>

            {/* Contacto */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-700">
                Contacto
              </h3>
              <div className="flex flex-col gap-1 text-sm">
                <p>
                  <span className="font-medium">Correo: </span>
                  crahn@refugio.org
                </p>
                <p>
                  <span className="font-medium">Teléfono: </span>
                  +504 9999-8811
                </p>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-700">
                Redes sociales
              </h3>
              <div className="flex gap-3">
                <Link
                  href="#"
                  aria-label="Facebook del CRA"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 text-stone-500 hover:border-orange-700 hover:text-orange-700 transition"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram del CRA"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 text-stone-500 hover:border-orange-700 hover:text-orange-700 transition"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  aria-label="YouTube del CRA"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 text-stone-500 hover:border-orange-700 hover:text-orange-700 transition"
                >
                  <Youtube className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bloque inferior */}
        <div className="flex flex-col gap-2 border-t border-stone-100 pt-4 text-xs text-stone-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} CRA - Centro de Rescate Animal. Sitio
            demostrativo sin fines de lucro.
          </p>
          <p>
            Las imágenes y datos mostrados son representativos con fines
            demostrativos.
          </p>
        </div>
      </Container>
    </footer>
  );
}
