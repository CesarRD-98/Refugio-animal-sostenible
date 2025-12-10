// app/sobre-nosotros/page.tsx
import { Metadata } from "next";
import { Section } from "../components/layout/Section";
import {
  HeartHandshake,
  Target,
  Users,
  Leaf,
  PawPrint,
  HandHeart,
  ShieldCheck,
} from "lucide-react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scrollToTop";

export const metadata: Metadata = {
  title: "Sobre nosotros | CRA – Centro de Rescate Animal",
  description:
    "Conoce la historia, misión, visión y valores del CRA – Centro de Rescate Animal. Rescate, bienestar y adopciones responsables y transparentes.",
};

const valores = [
  "Empatía",
  "Responsabilidad",
  "Transparencia",
  "Sostenibilidad",
  "Compromiso comunitario",
  "Integridad",
];

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-stone-800">
      {/* HEADER (si ya lo manejas en layout, puedes quitar esto) */}
      <Header />

      <main className="flex-1">
        {/* HERO / INTRO */}
        <Section
          eyebrow="Sobre el CRA"
          title="Un refugio temporal con enfoque responsable y transparente."
          description="Somos el CRA – Centro de Rescate Animal, un espacio dedicado a rescatar, cuidar y acompañar a perros y gatos en situación de calle, conectándolos con familias dispuestas a ofrecerles un hogar responsable."
          className="bg-stone-50"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr,0.9fr] items-start">
            {/* HISTORIA */}
            <div className="relative rounded-md border border-stone-200 bg-white/90 px-4 py-5 sm:px-7 sm:py-7 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full py-1 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-sm font-medium uppercase tracking-wide font-semibold text-stone-500">
                  Nuestra historia
                </span>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-stone-700">
                <p>
                  CRA nace al observar una realidad imposible de ignorar:
                  perros y gatos viviendo en la calle, buscando comida entre
                  desechos, esquivando carros y dependiendo del gesto amable
                  de desconocidos. Esa rutina de sufrimiento silencioso
                  despertó una pregunta en nuestro equipo:{" "}
                  <strong>
                    ¿cómo podemos cambiar su destino de forma real y
                    sostenible?
                  </strong>
                </p>
                <p>
                  Lo que inició como una inquietud entre compañeros se
                  transformó en el Centro de Rescate Animal: un refugio que
                  combina rescate, atención básica y programas de{" "}
                  <strong>adopción responsable y transparente</strong>. Nuestro
                  enfoque es que cada animal reciba evaluación, cuidado y la
                  oportunidad de encontrar un hogar que comprenda sus
                  necesidades, mientras fortalecemos la conciencia y el
                  compromiso de la comunidad.
                </p>
                <p>
                  Cada caso atendido, cada adopción y cada familia que se suma
                  al CRA nos recuerda que{" "}
                  <strong>la compasión puede convertirse en acción</strong>.
                  No solo rescatamos animales; también ayudamos a construir
                  comunidades más empáticas, responsables y sostenibles.
                </p>
              </div>

              <div className="mt-5 border-t border-stone-200 pt-4 space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-500">
                  En pocas palabras
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Refugio temporal",
                    "Adopciones responsables",
                    "Conciencia comunitaria",
                  ].map((label) => (
                    <span
                      key={label}
                      className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-700"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* BLOQUE LATERAL: NÚMEROS / ENFOQUE RÁPIDO */}
            <div className="space-y-5">
              <div className="rounded-md border border-emerald-100 bg-emerald-50/80 p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <PawPrint className="h-5 w-5 text-emerald-700" />
                  <h3 className="text-base font-semibold text-stone-900">
                    Lo que nos mueve
                  </h3>
                </div>
                <p className="text-sm text-stone-700 mb-3">
                  Trabajamos para que ningún peludito vuelva a sentirse solo,
                  combinando rescate, bienestar integral y adopciones cuidadas.
                </p>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    <span>Rescate y atención básica de perros y gatos.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    <span>
                      Evaluación y acompañamiento para{" "}
                      <strong>adopciones responsables</strong>.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    <span>
                      Trabajo en comunidad para promover{" "}
                      <strong>respeto y empatía</strong> hacia los animales.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-md border border-stone-200 bg-white/80 p-4 sm:p-5 text-sm text-stone-600">
                <div className="flex gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <p>
                    La transparencia guía nuestras decisiones: desde el cuidado
                    que recibe cada animal hasta la forma en que se gestiona el
                    apoyo de la comunidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* SECCIÓN PROPUESTA DE VALOR + CÓMO TRABAJAMOS */}
        <Section
          eyebrow="Nuestro enfoque"
          title="Una propuesta de valor centrada en el bienestar animal y la comunidad."
          description="El CRA integra rescate, rehabilitación y adopción responsable con un acompañamiento cercano a las familias adoptantes y a las personas que desean ayudar."
          className="bg-white"
        >
          <div className="grid gap-8 md:grid-cols-[1.1fr,1fr] items-start">
            {/* PROPUESTA DE VALOR */}
            <div className="space-y-4">
              <div className="rounded-md border border-stone-200 bg-stone-50/75 p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <HandHeart className="h-5 w-5 text-rose-600" />
                  <h3 className="text-sm sm:text-base font-semibold text-stone-900">
                    Nuestra propuesta de valor
                  </h3>
                </div>
                <p className="text-sm text-stone-700 mb-3">
                  Ofrecemos un modelo de adopción donde el bienestar del animal
                  y la tranquilidad de la familia adoptante van de la mano.
                </p>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
                    <span>
                      <strong>Adopciones responsables y transparentes</strong>,
                      con información clara sobre la historia y estado del
                      animal.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
                    <span>
                      <strong>Acompañamiento antes y después</strong> de la
                      adopción para apoyar la adaptación del peludito al nuevo
                      hogar.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
                    <span>
                      <strong>Participación comunitaria</strong> a través de
                      voluntariado, donaciones y difusión responsable.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
                    <span>
                      Enfoque en <strong>sostenibilidad</strong>, promoviendo
                      respeto por la vida y el entorno.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CÓMO TRABAJAMOS (RESUMIDO) */}
            <div className="rounded-md border border-stone-200 bg-white p-5 sm:p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-stone-500 mb-3">
                Cómo trabajamos
              </p>
              <div className="space-y-3 text-sm text-stone-700">
                <p>
                  Cada caso inicia con la identificación de un animal en
                  riesgo. Luego se le brinda atención básica, valoración y se
                  registra su información para facilitar una adopción informada.
                </p>
                <p>
                  Antes de entregar a un peludito, se conversa con la familia,
                  se aclaran dudas y se refuerza el compromiso de cuidado
                  responsable. Después de la adopción, se mantiene un contacto
                  cercano para acompañar el proceso de adaptación.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* SECCIÓN MISIÓN, VISIÓN Y VALORES – NUEVO DISEÑO */}
        <Section
          eyebrow="Nuestra esencia"
          title="Misión, visión y valores que guían cada decisión."
          description="Detrás de cada rescate y cada adopción hay un marco de principios que orienta lo que hacemos y cómo lo hacemos."
          className=""
        >
          <div className="grid gap-6 md:grid-cols-[1.1fr,1fr] items-start">
            {/* COLUMNA IZQUIERDA: MISIÓN + VISIÓN (tarjetas apiladas) */}
            <div className="space-y-4">
              {/* Misión */}
              <div className="rounded-md border border-stone-200 bg-white p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-rose-100 flex items-center justify-center">
                    <HeartHandshake className="h-5 w-5 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-rose-600">
                      Misión
                    </p>
                    <h3 className="text-sm font-semibold text-stone-600">
                      Un refugio seguro para nuevos comienzos.
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-stone-700">
                  Brindar un espacio seguro a los animales en
                  situación de calle, garantizando su bienestar, atención básica
                  y promoviendo la adopción responsable en armonía con la
                  comunidad.
                </p>
              </div>

              {/* Visión */}
              <div className="rounded-md border border-stone-200 bg-white p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Target className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
                      Visión
                    </p>
                    <h3 className="text-sm font-semibold text-stone-600">
                      Un referente en protección y empatía.
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-stone-700">
                  Ser una institución referente a nivel
                  nacional en el rescate y protección animal, promoviendo una{" "}
                comunidad consciente, empática y comprometida
                  con la vida.
                </p>
              </div>
            </div>

            {/* COLUMNA DERECHA: VALORES COMO TARJETA DESTACADA */}
            <div className="rounded-md border border-stone-200 bg-white p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Users className="h-5 w-5 text-emerald-700" />
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                      Valores
                    </p>
                    <h3 className="text-sm font-semibold text-stone-600">
                      Principios que nos sostienen.
                    </h3>
                  </div>
                  <Leaf className="h-4 w-4 text-emerald-700" />
                </div>
              </div>

              <p className="text-sm text-stone-700">
                Cada decisión en CRA se inspira en principios que buscan
                equilibrio entre bienestar animal, comunidad y
                sostenibilidad.
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {valores.map((value) => (
                  <span
                    key={value}
                    className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-sm font-medium text-stone-600"
                  >
                    {value}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-xs text-stone-500">
                Promoviendo el <strong>bienestar</strong>, comunidades{" "}
                <strong>sostenibles</strong> y un{" "}
                <strong>uso responsable de los recursos</strong>.
              </p>
            </div>
          </div>
        </Section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
