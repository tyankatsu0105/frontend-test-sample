import * as DateFNS from "date-fns";

export const format = (date: string, formatString: string) => {
  return DateFNS.format(new Date(date), formatString);
};
