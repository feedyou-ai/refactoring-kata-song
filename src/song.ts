const EXCLAMATIONS = [
  "",
  "That wriggled and wiggled and tickled inside her.",
  "How absurd to swallow a bird.",
  "Fancy that to swallow a cat!",
  "What a hog, to swallow a dog!",
  `I don't know how she swallowed a cow!`,
];

const LAST_VERSE = [
  `There was an old lady who swallowed a horse...`,
  `...She's dead, of course!`,
];

const FIRST_ROW = `There was an old lady who swallowed a`;

const LAST_ROW = `I don't know why she swallowed a fly - perhaps she'll die!`;

const MAIN_ROW = `She swallowed the $1 to catch the $2`;

export function getSong(allAnimals: string[]): string {
  let animals = [];
  let verses = [];

  allAnimals.forEach((animal, index) => {
    animals = [...animals, animal];
    verses = [...verses, ...getVerse(index, animal, animals.slice(0, -1)), ""];
  });

  return [...verses, ...LAST_VERSE].join("\n").trim();
}

function getVerse(
  index: number,
  currentAnimal: string,
  allAnimals: string[]
): string[] {
  const punctuation = index === 0 ? "." : ";";
  const rows = [`${FIRST_ROW} ${currentAnimal}${punctuation}`];

  const exclamation = EXCLAMATIONS[index];
  exclamation && rows.push(exclamation);

  let prevAnimal = currentAnimal;
  allAnimals.reverse().forEach((animal, index) => {
    const punctuation = index === allAnimals.length - 1 ? ";" : ",";
    rows.push(
      MAIN_ROW.replace("$1", prevAnimal).replace("$2", animal) + punctuation
    );

    prevAnimal = animal;
  });

  return [...rows, LAST_ROW];
}
