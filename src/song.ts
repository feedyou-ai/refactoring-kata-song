export const getSong = (animals: string[]) => {
  const prev = []
  const rows = animals.reduce((rows, animal, index) => {
    prev.push(animal)
    return [...rows, ...getVers(index, animal, prev.slice(0, -1)), '']
  }, [])
  rows.push('There was an old lady who swallowed a horse...')
  rows.push(`...She's dead, of course!`)
  return rows.join('\n').trim()
}

const HLASKY = ['','That wriggled and wiggled and tickled inside her.', 'How absurd to swallow a bird.', 'Fancy that to swallow a cat!', 'What a hog, to swallow a dog!', `I don't know how she swallowed a cow!`]

function getVers(index, animal, previousAnimals): string[] {
  const rows = [`There was an old lady who swallowed a ${animal}${index === 0 ? '.' : ';'}`]
  
  const hlaska = HLASKY[index]
  hlaska && rows.push(hlaska)

  let prevPrevAnimal = animal
  for (const i in (previousAnimals.reverse()) ) {
    const prevAnimal = previousAnimals[i]
    rows.push(`She swallowed the ${prevPrevAnimal} to catch the ${prevAnimal}${parseInt(i) === (previousAnimals.length - 1) ? ';' : ','}`)
    prevPrevAnimal = prevAnimal
  }
  rows.push(`I don't know why she swallowed a fly - perhaps she'll die!`)
  return rows
}