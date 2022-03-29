let nombrePlanetas = Array ('Tierra', 'Marte')
let distancia = [6,7, '67']
const tamaño = []

// let i = 0
// while (i <= nombrePlanetas.length -1) {
//   console.log(i)
//   console.log(nombrePlanetas[i])
//   i++
// }

// for (let index = 0; index < nombrePlanetas.length; index++) {
//   console.log(nombrePlanetas[index])
// }

for (const planeta of nombrePlanetas) {
  console.log(planeta)
}

for (const key in distancia) {
  if (distancia[key] === '5') {
    console.log('Se encontró la distancia ')
  } else {
    console.log('No se encontró la distancia')
  }
}