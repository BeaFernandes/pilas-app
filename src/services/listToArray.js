export default function listToArray(list) {
  const keys = Object.keys(list);

  const array = keys.map((key) => {
    const value = list[key];
    return { key, ...value };
  });

  return array;
}
