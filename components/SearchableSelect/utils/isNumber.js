export default function isNumber(x) {
  return typeof x === "number" && !isNaN(x);
}
