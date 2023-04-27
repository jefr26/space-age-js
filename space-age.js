export function age(planet, age) {
  const earthSeconds = 31557600
  let response = 0

  switch (planet.toLowerCase()) {
    case 'earth':
      response = age / earthSeconds
      break
    case 'mercury':
      response = age / (earthSeconds * 0.2408467)
      break
    case 'venus':
      response = age / (earthSeconds * 0.61519726)
      break
    case 'mars':
      response = age / (earthSeconds * 1.8808158)
      break
    case 'jupiter':
      response = age / (earthSeconds * 11.862615)
      break
    case 'saturn':
      response = age / (earthSeconds * 29.447498)
      break
    case 'uranus':
      response = age / (earthSeconds * 84.016846)
      break
    case 'neptune':
      response = age / (earthSeconds * 164.79132)
      break
  }

  return parseFloat(response.toFixed(2))
}
