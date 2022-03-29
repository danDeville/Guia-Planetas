let nombrePlanetas = Array ('Tierra', 'Marte', 'Jupiter')
let distancia = [6,7, '67']
const tamaño = [10, 20, 30]

// let i = 0
// while (i <= nombrePlanetas.length -1) {
//   console.log(i)
//   console.log(nombrePlanetas[i])
//   i++
// }

// for (let index = 0; index < nombrePlanetas.length; index++) {
//   console.log(nombrePlanetas[index])
// }

// for Off
for (const planeta of nombrePlanetas) {
  console.log(planeta)
}

// for On
for (const key in distancia) {
  if (distancia[key] === '5') {
    console.log('Se encontró la distancia ')
  } else {
    console.log('No se encontró la distancia')
  }
}

// forEach
nombrePlanetas.forEach((value, index) => {
  console.log('planeta', index, value)
})

// Map
nombrePlanetas.map((planetas, index) => {
  return (
    console.log(`El planeta ${planetas} tiene un tamaño de ${tamaño[index]}`)
  )
})

let resultadoMap = nombrePlanetas.map((planetas, index) => {
  return (
    console.log(`El planeta ${planetas} tiene un tamaño de ${tamaño[index]}`)
  )
})