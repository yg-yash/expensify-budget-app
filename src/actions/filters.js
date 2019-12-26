//set-text-filter
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

//sortbyamount
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

//sortbydate
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

//setstartdate,
export const setStartDate = (date = undefined) => ({
  type: "SET_START_DATE",
  date
});

//setenddate
export const setEndDate = (date = undefined) => ({
  type: "SET_END_DATE",
  date
});
