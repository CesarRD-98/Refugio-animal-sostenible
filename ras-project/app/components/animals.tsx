import { Animal, AnimalCard } from "./animalsCard";
import { Section } from "./layout/Section";

const mockAnimals: Animal[] = [
    {
        id: 1,
        name: "Luna",
        age: "2 años",
        size: "Mediana",
        type: "Perro",
        status: "En adopción",
        description:
            "Luna es una perrita muy cariñosa, ideal para familias que disfruten de paseos y juegos al aire libre.",
    },
    {
        id: 2,
        name: "Milo",
        age: "1 año",
        size: "Pequeño",
        type: "Gato",
        status: "En adopción",
        description:
            "Milo es curioso y tranquilo. Le encanta dormir cerca de las ventanas y observar todo a su alrededor.",
    },
    {
        id: 3,
        name: "Canela",
        age: "3 años",
        size: "Grande",
        type: "Perro",
        status: "En recuperación",
        description:
            "Canela está en proceso de recuperación. Ha avanzado mucho y pronto estará lista para encontrar un hogar.",
    },
];

export function AnimalsSection() {
    return (
        <Section
            id="animales"
            eyebrow="Animales en adopción"
            title="Conoce algunos de nuestros peluditos"
            description="Estas tarjetas son un ejemplo de cómo se podrían mostrar los animales disponibles en el refugio, con información clara y fácil de entender."
            className="bg-stone-100"
        >
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {mockAnimals.map((animal) => (
                    <AnimalCard key={animal.id} animal={animal} />
                ))}
            </div>
        </Section>
    );
}
