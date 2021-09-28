import { getSong, getHuntingLine, getVerse, getBody } from "../song";

describe("song", () => {
  const animals = ["fly", "spider", "bird", "cat"];

  describe("getHuntingLine", () => {
    it("returns line with hunter and prey", () => {
      const hunter = "cat";
      const prey = "bird";

      const actual = getHuntingLine(hunter, prey);

      expect(actual).toBe("She swallowed the cat to catch the bird");
    });
  });

  describe("getVerse", () => {
    it("returns hunting lines in single string", () => {
      const actual = getVerse(animals);

      console.log(actual);

      expect(typeof actual).toBe("string");
      expect(actual).toBe(`There was an old lady who swallowed a cat;
      I don't know how she swallowed a cat!
      She swallowed the spider to catch the fly,
      She swallowed the bird to catch the spider,
      She swallowed the cat to catch the bird;
      I don't know why she swallowed a fly - perhaps she'll die!
      `);
    });
  });

  describe("getBody", () => {
    it("returns body of the song", () => {
      const actual = getBody(animals);

      expect(typeof actual).toBe("string");
      expect(actual).toBe(
        `There was an old lady who swallowed a spider;
        I don't know how she swallowed a spider!
        She swallowed the spider to catch the fly;
        I don't know why she swallowed a fly - perhaps she'll die!
      
        There was an old lady who swallowed a bird;
        I don't know how she swallowed a bird!
        She swallowed the spider to catch the fly,
        She swallowed the bird to catch the spider;
        I don't know why she swallowed a fly - perhaps she'll die!
        
        There was an old lady who swallowed a cat;
        I don't know how she swallowed a cat!
        She swallowed the spider to catch the fly,
        She swallowed the bird to catch the spider,
        She swallowed the cat to catch the bird;
        I don't know why she swallowed a fly - perhaps she'll die!
      `
      );
    });
  });

  describe("getSong", () => {
    it("returns song for array of animals", () => {
      const actual = getSong(animals);

      expect(typeof actual).toBe("string");
      expect(actual).toBe(`There was an old lady who swallowed a fly.
      I don't know why she swallowed a fly - perhaps she'll die!
      
      There was an old lady who swallowed a spider;
      I don't know how she swallowed a spider!
      She swallowed the spider to catch the fly;
      I don't know why she swallowed a fly - perhaps she'll die!
      
      There was an old lady who swallowed a bird;
      I don't know how she swallowed a bird!
      She swallowed the spider to catch the fly,
      She swallowed the bird to catch the spider;
      I don't know why she swallowed a fly - perhaps she'll die!
      
      There was an old lady who swallowed a cat;
      I don't know how she swallowed a cat!
      She swallowed the spider to catch the fly,
      She swallowed the bird to catch the spider,
      She swallowed the cat to catch the bird;
      I don't know why she swallowed a fly - perhaps she'll die!
      
      There was an old lady who swallowed a cat...
      ...She's dead, of course!`);
    });
  });
});
