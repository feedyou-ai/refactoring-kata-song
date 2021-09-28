import { getSong } from "../song";

describe("song", () => {
  describe("getSong", () => {
    it("returns song for default animals", () => {
      const actual = getSong();
      
      expect(actual).toMatchSnapshot();
    });

    it("returns for one animal", () => {
      const actual = getSong(['bug']);
      
      expect(actual).toMatchSnapshot();
    });
  });
});
