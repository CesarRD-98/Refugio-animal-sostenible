// app/components/About.tsx
import { Section } from "./layout/Section";
import { HeartHandshake, Target, Leaf, Users } from "lucide-react";

export function About() {
  const valores = [
    "Empatía",
    "Responsabilidad",
    "Transparencia",
    "Sostenibilidad",
    "Compromiso comunitario",
    "Integridad",
  ];

  return (
    <Section
      id="sobre-nosotros"
      eyebrow="¿Quiénes somos?"
      title="Un refugio temporal con impacto sostenible."
      description="CRA – Centro de Refugio Animal combina rescate, adopción responsable y participación comunitaria para darle una segunda oportunidad a perros y gatos en situación de calle."
      className="bg-white"
    >
      <div className="grid gap-10 lg:grid-cols-[1.05fr,1fr] items-start">
        {/* HISTORIA */}
        <div className="relative">
          <div className="absolute -inset-x-6 -inset-y-4 rounded-3xl bg-gradient-to-b from-stone-50 via-white to-stone-50/60 pointer-events-none hidden sm:block" />

          <div className="relative rounded-3xl border border-stone-200 bg-white/85 px-4 py-5 sm:px-7 sm:py-7 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-3 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-medium uppercase tracking-wide text-stone-600">
                Nuestra historia
              </span>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-stone-600">
              <p>
                CRA nace al observar una realidad que no se puede ignorar:
                perros y gatos viviendo en la calle, expuestos al hambre, a
                la violencia y a la indiferencia. Lo que comenzó como una
                inquietud entre compañeros se convierte aquí en una propuesta
                organizada para ofrecer un refugio temporal digno.
              </p>
              <p>
                Este proyecto funciona como un prototipo académico dentro de un
                proceso de Design Thinking. A través de esta plataforma
                exploramos cómo una solución digital puede facilitar adopciones
                responsables, donaciones y voluntariado, siempre desde la
                transparencia, el cuidado responsable y el trabajo en equipo.
              </p>
            </div>

            {/* Chips visuales */}
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
                    className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-[11px] font-medium text-stone-700"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MISIÓN, VISIÓN Y VALORES – BLOQUE ÚNICO */}
        <div className="space-y-5">
          <div className="rounded-3xl border border-stone-200 bg-stone-50/90 p-5 sm:p-6 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-3 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span className="text-[11px] font-medium uppercase tracking-wide text-stone-600">
                Misión, visión y valores
              </span>
            </div>

            <div className="space-y-6">
              {/* Misión */}
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-2xl bg-rose-100 flex items-center justify-center">
                    <HeartHandshake className="h-5 w-5 text-rose-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-stone-900">
                    Misión
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600">
                    Brindar un espacio seguro a los animales en situación de calle,
                    garantizando su bienestar, atención básica y promoviendo la
                    adopción responsable en armonía con la comunidad.
                  </p>
                </div>
              </div>

              <div className="h-px bg-stone-200/80" />

              {/* Visión */}
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-2xl bg-amber-100 flex items-center justify-center">
                    <Target className="h-5 w-5 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-stone-900">
                    Visión
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600">
                    Ser una institución referente a nivel nacional en el rescate y
                    protección animal, promoviendo una comunidad consciente, empática
                    y comprometida con la vida.
                  </p>
                </div>
              </div>

              <div className="h-px bg-stone-200/80" />

              {/* Valores */}
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-stone-700" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-semibold text-stone-900">
                      Nuestros valores
                    </h3>
                    <Leaf className="h-4 w-4 text-amber-600" />
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-stone-600">
                    Cada decisión en CRA se inspira en principios que buscan equilibrio
                    entre bienestar animal, comunidad y sostenibilidad.
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {valores.map((value) => (
                      <span
                        key={value}
                        className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-[11px] sm:text-xs font-medium text-stone-700"
                      >
                        {value}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-[11px] sm:text-xs text-stone-500">
                    Promoviendo el bienestar, comunidades sostenibles y un uso responsable
                    de los recursos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
