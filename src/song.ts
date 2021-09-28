export function getHuntingLine(hunter: string, prey: string): string {
  return `She swallowed the ${hunter} to catch the ${prey}`;
}

export function getVerse(animals: string[]): string {
  const huntingLines = animals.map((animal, index) => {
    if (animals[index + 2]) {
      return getHuntingLine(animals[index + 1], animal) + ",\n";
    }
    if (animals[index + 1]) {
      return getHuntingLine(animals[index + 1], animal);
    }
    return ";\n";
  });

  const huntingLinesString = huntingLines.reduce((line, acc) => {
    return line + acc;
  }, "");

  const verseStart = `There was an old lady who swallowed a ${
    animals[animals.length - 1]
  };\nI don't know how she swallowed a ${animals[animals.length - 1]}!\n`;
  const verseEnd = `I don't know why she swallowed a ${animals[0]} - perhaps she'll die!\n\n`;

  return verseStart + huntingLinesString + verseEnd;
}

export function getBody(animals: string[]) {
  if (animals.length === 1) {
    return "";
  }

  const verse = getVerse(animals);

  animals.pop();

  return getBody(animals) + verse;
}

export function getStart(animal: string): string {
  return `There was an old lady who swallowed a ${animal}.\nI don't know why she swallowed a ${animal} - perhaps she'll die!\n\n`;
}

export function getEnd(animal: string): string {
  return `There was an old lady who swallowed a ${animal}...\n...She's dead, of course!`;
}

export function getSong(animals: string[]): string {
  const start = getStart(animals[0]);
  const end = getEnd(animals[animals.length - 1]);
  const body = getBody(animals);
  return start + body + end;
}
