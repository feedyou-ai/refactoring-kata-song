import { Animal } from "./types";

export const DEFUALT_VERISON = `
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
`;

const END = `
There was an old lady who swallowed a horse...
...She's dead, of course!
`;

const getVerseStart = (animalName: string, isFirst: boolean) => {
  return `There was an old lady who swallowed a ${animalName}${
    isFirst ? "." : ";"
  }`;
};

const getVerseMiddle = (
  previousAnimalName: string,
  animalName: string,
  isLast: boolean
) => {
  return `She swallowed the ${previousAnimalName} to catch the ${animalName}${
    isLast ? ";" : ","
  }`;
};

const getVerseEnd = (animalName: string) => {
  return `I don't know why she swallowed a ${animalName} - perhaps she'll die!`;
};

const getVerse = (mainAnimal: Animal, animals: Animal[]) => {
  let text = getVerseStart(mainAnimal.name, animals.length === 0);
  let previousAnimal: Animal = mainAnimal;

  if (animals.length === 0) {
    return `${text}\n${getVerseEnd(mainAnimal.name)}`;
  }

  text = `${text}\n${mainAnimal.introduction}`;

  animals.forEach((animal, index) => {
    text = `${text}\n${getVerseMiddle(
      previousAnimal.name,
      animal.name,
      index === animals.length - 1
    )}`;
    previousAnimal = animal;
  });

  text = `${text}\n${getVerseEnd(animals[animals.length - 1].name)}`;

  return text;
};

export const getSong = (animals: Animal[] = []) => {
  if (animals.length === 0) {
    return DEFUALT_VERISON;
  }

  let text = "";

  for (let i = 0; i < animals.length; i += 1) {
    if (i > 0) {
      text = `${text}\n`;
    }
    text = `${text}\n${getVerse(animals[i], animals.slice(0, i).reverse())}`;
  }

  text = `${text}\n${END}`;

  return text;
};
