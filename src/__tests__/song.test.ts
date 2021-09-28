import { getSong, DEFUALT_VERISON } from "../song";

const FLY_ONLY = `
There was an old lady who swallowed a fly.
I don't know why she swallowed a fly - perhaps she'll die!

There was an old lady who swallowed a horse...
...She's dead, of course!
`;

describe("song", () => {
  describe("getSong", () => {
    it("returns some default verison dy default", () => {
      const actual = getSong();

      expect(actual).toBe(DEFUALT_VERISON);
    });

    it("returns a verse for 1 animal", () => {
      const actual = getSong([
        {
          name: "fly",
          introduction: "I hate flies",
        },
      ]);

      expect(actual).toBe(FLY_ONLY);
    });

    it("returns some default verison dy specifiing all animals", () => {
      const actual = getSong([
        {
          name: "fly",
          introduction: "I hate flies",
        },
        {
          name: "spider",
          introduction: "That wriggled and wiggled and tickled inside her.",
        },
        {
          name: "bird",
          introduction: "How absurd to swallow a bird.",
        },
        {
          name: "cat",
          introduction: "Fancy that to swallow a cat!",
        },
        {
          name: "dog",
          introduction: "What a hog, to swallow a dog!",
        },
        {
          name: "cow",
          introduction: "I don't know how she swallowed a cow!",
        },
      ]);

      console.log(actual);

      expect(actual).toBe(DEFUALT_VERISON);
    });
  });
});
