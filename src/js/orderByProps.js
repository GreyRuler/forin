export default function orderByProps(obj, sort) {
  const value = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      value.push({ key, value: obj[key] });
    }
  }
  value.sort((a, b) => (a.key < b.key ? -1 : 1));
  sort.reverse().forEach((element) => {
    const index = value.findIndex((item) => item.key === element);
    value.splice(0, 0, value.splice(index, 1)[0]);
  });
  return value;
}
