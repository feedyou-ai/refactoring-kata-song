import {compose, slice, reverse} from 'ramda';

const sliceAndReverseArray = (index) => compose(reverse, slice(0, index));

export const getFirstRow = (animals, animal, index) => {
    if (index === 1) {
        return `\nThere was an old lady who swallowed a ${animal};\nThat wriggled and wiggled and tickled inside her.`
    } else if (index === 2) {
        return `\nThere was an old lady who swallowed a ${animal};\nHow absurd to swallow a ${animal}.`
    } else if (index === 3) {
        return `\nThere was an old lady who swallowed a ${animal};\nFancy that to swallow a ${animal}!`
    } else if (index === 4) {
        return `\nThere was an old lady who swallowed a ${animal};\nWhat a hog, to swallow a ${animal}!`
    } else if (index === 5) {
        return `\nThere was an old lady who swallowed a ${animal};\nI don't know how she swallowed a ${animal}!`
    } else if (animals.length - 1 === index) {
        return `\nThere was an old lady who swallowed a ${animal}...\n...She's dead, of course!`
    } else {
        return `\nThere was an old lady who swallowed a ${animal}.`
    }
};

export const getMiddleRow = (animals, animalsIndex) => {
    if (animals.length - 1 !== animalsIndex) {
        const animalsSplice = sliceAndReverseArray(animalsIndex + 1)(animals);
        const middle = animalsSplice.map((animal, index) => {
            if (animalsIndex > 0 && index < animalsSplice.length - 1) {
                return `\nShe swallowed the ${animal} to catch the ${animalsSplice[index + 1]}`;
            }
        })
        return middle.toString();
    } else {
        return '';
    }
}

export const getLastRow = (animals, index) => {
    if (animals.length - 1 !== index) {
        return `\nI don't know why she swallowed a ${animals[0]} - perhaps she'll die!`;
    } else {
        return ''
    }
}

export const getSongByAnimals = (animals) => {
    const song = animals.map((animal, index) => `${getFirstRow(animals, animal, index)}${getMiddleRow(animals, index)} ${getLastRow(animals, index)}\n`)
    return song.toString();
}

export const getSong = () => `
  There was an old lady who swallowed a fly.
  I don't know why she swallowed a fly - perhaps she'll die!

  There was an old lady who swallowed a spider;
  That wriggled and wiggled and tickled inside her.
  She swallowed the spider to catch the fly;
  I don't know why she swallowed a fly - perhaps she'll die!

  There was an old lady who swallowed a bird;
  How absurd to swallow a bird.
  She swallowed the bird to catch the spider,
  She swallowed the spider to catch the fly;
  I don't know why she swallowed a fly - perhaps she'll die!

  There was an old lady who swallowed a cat;
  Fancy that to swallow a cat!
  She swallowed the cat to catch the bird,
  She swallowed the bird to catch the spider,
  She swallowed the spider to catch the fly;
  I don't know why she swallowed a fly - perhaps she'll die!

  There was an old lady who swallowed a dog;
  What a hog, to swallow a dog!
  She swallowed the dog to catch the cat,
  She swallowed the cat to catch the bird,
  She swallowed the bird to catch the spider,
  She swallowed the spider to catch the fly;
  I don't know why she swallowed a fly - perhaps she'll die!

  There was an old lady who swallowed a cow;
  I don't know how she swallowed a cow!
  She swallowed the cow to catch the dog,
  She swallowed the dog to catch the cat,
  She swallowed the cat to catch the bird,
  She swallowed the bird to catch the spider,
  She swallowed the spider to catch the fly;
  I don't know why she swallowed a fly - perhaps she'll die!

  There was an old lady who swallowed a horse...
  ...She's dead, of course!
`
