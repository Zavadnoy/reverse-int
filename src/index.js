module.exports = function reverse (n) {
  let out=0;
  n = Math.abs(n);
  while (n > 0) {
    out = n % 10 + out * 10;
    n = Math.floor(n / 10);
  }
  return out;
}
