import moment from "moment";

export const DateToday = () => {
  return moment().format("YYYY-MM-DD");
};
