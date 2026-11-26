type Punto = Readonly<{ este: number; norte: number }>;

function distanciaEnMetros(ruta: readonly Punto[]): number {
  let total = 0;

  for (let i = 1; i < ruta.length; i++) {
    const anterior = ruta[i - 1];
    const actual = ruta[i];
    total += Math.hypot(actual.este - anterior.este, actual.norte - anterior.norte);
  }

  return total;
}

const ruta: Punto[] = [
  { este: 0, norte: 0 },
  { este: 300, norte: 400 },
  { este: 300, norte: 700 },
];

console.log(`Distancia del recorrido: ${distanciaEnMetros(ruta)} m`);
