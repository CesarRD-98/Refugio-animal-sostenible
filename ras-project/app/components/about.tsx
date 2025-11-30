// app/components/About.tsx
import { Section } from "./layout/Section";
import { HeartHandshake, Target, Leaf, Users } from "lucide-react";

export function About() {
  return (
    <Section
      id="sobre-nosotros"
      eyebrow="¿Quiénes somos?"
      title="Un refugio temporal con impacto sostenible."
      description="CRA – Centro de Refugio Animal nace como una iniciativa que combina rescate, adopción responsable y conciencia comunitaria para mejorar la vida de los animales y de las personas."
      className="bg-white"
    >
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        {/* Historia y enfoque */}
        <div className="space-y-4 text-sm sm:text-base text-stone-600">
          <p>
            CRA surge al reconocer una realidad imposible de ignorar:
            perros y gatos en situación de calle, expuestos al hambre,
            a los peligros de la ciudad y a la indiferencia. Lo que inició
            como una inquietud entre compañeros se transformó en una
            propuesta con propósito: crear un refugio sostenible que cuide
            a los animales y, al mismo tiempo, sensibilice a la comunidad.
          </p>
          <p>
            Desde esta idea, CRA se construye sobre la transparencia, la
            atención responsable y el trabajo colaborativo. Cada proceso,
            desde el rescate hasta la adopción, busca generar confianza,
            bienestar y cambios reales en la forma en que nos relacionamos
            con los animales.
          </p>
          <p>
            Este sitio funciona como un prototipo académico dentro de un proceso
            de Design Thinking, donde exploramos cómo una plataforma digital
            puede facilitar adopciones responsables, donaciones y voluntariado,
            alineándose con objetivos de sostenibilidad y convivencia armónica.
          </p>

          {/* Mini highlights para equilibrar la columna */}
          <div className="pt-3 border-t border-stone-200">
            <div className="grid gap-2 sm:grid-cols-3">
              <div className="rounded-xl bg-stone-100 border border-stone-200 px-3 py-3">
                <p className="text-[12px] font-semibold text-stone-900">
                  Refugio sostenible
                </p>
                <p className="mt-1 text-[12px] text-stone-500">
                  Cuidamos a los animales pensando también en el impacto en la comunidad y el entorno.
                </p>
              </div>
              <div className="rounded-xl bg-stone-100 border border-stone-200 px-3 py-3">
                <p className="text-[12px] font-semibold text-stone-900">
                  Perros y gatos
                </p>
                <p className="mt-1 text-[12px] text-stone-500">
                  Nos enfocamos en los animales con mayor presencia en las calles urbanas.
                </p>
              </div>
              <div className="rounded-xl bg-stone-100 border border-stone-200 px-3 py-3">
                <p className="text-[12px] font-semibold text-stone-900">
                  Prototipo académico
                </p>
                <p className="mt-1 text-[12px] text-stone-500">
                  Diseñado para explorar y validar ideas dentro de un proceso de Design Thinking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Misión, visión y valores */}
        <div className="space-y-4">
          {/* Misión */}
          <div className="rounded-2xl border border-stone-200 bg-stone-100 p-4">
            <div className="flex items-center gap-2">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-rose-400/10">
                <HeartHandshake className="h-4 w-4 text-rose-500" />
              </div>
              <h3 className="text-sm font-semibold text-stone-900">
                Misión
              </h3>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-stone-600">
              Brindar un espacio seguro a los animales en situación de calle,
              garantizando su bienestar, atención básica y promoviendo la
              adopción responsable en armonía con la comunidad.
            </p>
          </div>

          {/* Visión */}
          <div className="rounded-2xl border border-stone-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-yellow-100">
                <Target className="h-4 w-4 text-amber-600" />
              </div>
              <h3 className="text-sm font-semibold text-stone-900">
                Visión
              </h3>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-stone-600">
              Ser una institución referente a nivel nacional en el rescate y
              protección animal, promoviendo una comunidad consciente, empática
              y comprometida con la vida.
            </p>
          </div>

          {/* Valores */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-stone-100">
                  <Users className="h-4 w-4 text-stone-700" />
                </div>
                <h3 className="text-sm font-semibold text-stone-900">
                  Nuestros valores
                </h3>
              </div>
              <Leaf className="h-4 w-4 text-amber-600" />
            </div>
            <p className="mt-2 text-xs sm:text-sm text-stone-600">
              Cada decisión en CRA se inspira en principios que buscan equilibrio
              entre bienestar animal, comunidad y sostenibilidad.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Empatía",
                "Responsabilidad",
                "Transparencia",
                "Sostenibilidad",
                "Compromiso comunitario",
                "Integridad",
              ].map((value) => (
                <span
                  key={value}
                  className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-[11px] font-medium text-stone-700"
                >
                  {value}
                </span>
              ))}
            </div>

            <p className="mt-3 text-[11px] text-stone-500">
              Promoviendo el bienestar, comunidades
              sostenibles y un uso responsable de los recursos.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
