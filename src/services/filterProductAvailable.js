import listToArray from "./listToArray";

export default function filterProductAvailable(list) {
  const array = listToArray(list);

  const filteredArray = [];
  array.forEach((item) => {
    if (item.amount != "0") filteredArray.push(item);
  });

  return filteredArray;
}
