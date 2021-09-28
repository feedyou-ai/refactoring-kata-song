const DEFAULT_ANIMALS = ["fly", "spider", "bird", "cat", "dog", "cow"];

const DEFAULT_OPTIONS = {
  exclamations: [
    "",
    "That wriggled and wiggled and tickled inside her.",
    "How absurd to swallow a bird.",
    "Fancy that to swallow a cat!",
    "What a hog, to swallow a dog!",
    `I don't know how she swallowed a cow!`,
  ],
  lastVerse: [
    `There was an old lady who swallowed a horse...`,
    `...She's dead, of course!`,
  ],
  firstRow: `There was an old lady who swallowed a`,
  lastRow: `I don't know why she swallowed a fly - perhaps she'll die!`,
  mainRow: `She swallowed the $1 to catch the $2`,
};

export function getSong(
  allAnimals: string[] = DEFAULT_ANIMALS,
  customOptions?: Partial<typeof DEFAULT_OPTIONS>
): string {
  const options = {...DEFAULT_OPTIONS, ...customOptions}
  let animals = [];
  let verses = [];

  allAnimals.forEach((animal, index) => {
    animals = [...animals, animal];
    verses = [
      ...verses,
      ...getVerse(index, animal, animals.slice(0, -1), options),
      "",
    ];
  });

  return [...verses, ...options.lastVerse].join("\n").trim();
}

function getVerse(
  index: number,
  currentAnimal: string,
  allAnimals: string[],
  { firstRow, exclamations, mainRow, lastRow }: typeof DEFAULT_OPTIONS
): string[] {
  const punctuation = index === 0 ? "." : ";";
  const rows = [`${firstRow} ${currentAnimal}${punctuation}`];

  const exclamation = exclamations[index];
  exclamation && rows.push(exclamation);

  let prevAnimal = currentAnimal;
  allAnimals.reverse().forEach((animal, index) => {
    const punctuation = index === allAnimals.length - 1 ? ";" : ",";
    rows.push(
      mainRow.replace("$1", prevAnimal).replace("$2", animal) + punctuation
    );

    prevAnimal = animal;
  });

  return [...rows, lastRow];
}
