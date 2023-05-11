export function CIFValidator(cif: String) {
  const table = "ABCDEFGHPQSKX";
  const letra = cif.slice(0, 1);
  const cleanCIF = cif.slice(1, -1);
  const sumaPares =
    Number(cleanCIF[1]) + Number(cleanCIF[3]) + Number(cleanCIF[5]);
  const sumaImparesString =
    cleanCIF[0] + cleanCIF[2] + cleanCIF[4] + cleanCIF[6];
  let sumaTotal = sumaPares;
  for (let i = 0; i < sumaImparesString.length; i++) {
    const numMultiplicado = Number(sumaImparesString[i]) * 2;
    const decena = Number(numMultiplicado.toString()[0]);
    const unidad = numMultiplicado.toString()[1]
      ? Number(numMultiplicado.toString()[1])
      : Number(numMultiplicado.toString()[0]);
    sumaTotal = sumaTotal + decena + unidad;
  }
  const unidadFinal = sumaTotal.toString()[1];
  const total = 10 - Number(unidadFinal);
  return letra == table[total - 1] ? true : false;
}
