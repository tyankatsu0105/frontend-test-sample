import * as Feature from "./date";

describe("date", () => {
  describe("format", () => {
    it("should format a date string", () => {
      const date = "2022-08-28T12:32:06.156Z";
      const formatString = "yyyy/MM/dd";

      const result = Feature.format(date, formatString);

      expect(result).toEqual("2022/08/28");
    });
  });
});
