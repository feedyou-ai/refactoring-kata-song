import { getSong } from "../song";

describe("song", () => {
  describe("getSong", () => {
    it("returns some string", () => {
      const actual = getSong(['fly', 'spider', 'bird', 'cat', 'dog', 'cow']);
      
      expect(actual).toMatchSnapshot();
    });
  });
});
