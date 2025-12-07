export function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")                  // separa acentos
    .replace(/[\u0300-\u036f]/g, "")   // elimina acentos
    .replace(/[^a-z0-9]+/g, "-")       // reemplaza espacios/caracteres por guiones
    .replace(/^-+|-+$/g, "");          // elimina guiones iniciales y finales
}
