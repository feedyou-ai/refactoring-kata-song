export type Animal = {
	name: string,
	lineWhenSwallowed: string,
}

const getSwallowReason = (predatorName: string, preyName: string) => {
 return `She swallowed the ${predatorName} to catch the ${preyName}`
}

const getLastArrayMember = <T>(arr: T[]): T => arr[arr.length-1]

export const getVerse = (animals: Animal[], trailingVerseLine: string) => {
	const lastAnimal = getLastArrayMember(animals)
	const reverseIndices = animals.map((animal, index) => index).reverse()
	
	if(animals.length === 1) {
		return `There was an old lady who swallowed a ${lastAnimal.name}.\n${trailingVerseLine}`
	}
	
	const getSwallowReasonLine = (animalIdx: number) => {
		const predator = animals[animalIdx]
		const prey = animals[animalIdx -1]
		if(!prey) return null
		
		return `${getSwallowReason(predator.name, prey.name)}`
	}
	
	const getFirstLinePunctuationMark = () => {
		if(animals.length === 1) return '.'
		return ';'
	}
	
	return `There was an old lady who swallowed a ${lastAnimal.name}${getFirstLinePunctuationMark()}\n` +
		`${lastAnimal.lineWhenSwallowed}\n`+
		`${reverseIndices.map(getSwallowReasonLine).slice(0,-1).join(',\n')};\n` +
		trailingVerseLine
}

export const getAllVerses = (animals: Animal[], trailingVerseLine: string) => {
	return animals
		.map((animal, index) => animals.slice(0,index+1))
		.map((animalsForVerse) => getVerse(animalsForVerse, trailingVerseLine))
		.join('\n\n')
}

export const getSong = (animals: Animal[], trailingVerseLine: string, lastVerse: string) => {
	return`${getAllVerses(animals, trailingVerseLine)}\n\n${lastVerse}`
	
}
