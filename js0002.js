let n = 4;

for (let i = n; i >= 0; i--) {
  let row = "";

  for (let s = 0; s < n - i; s++) {
    row += " ";
  }

  let num = 1;

  for (let j = 0; j <= i; j++) {
    row += num + " ";
    num = (num * (i - j)) / (j + 1);
  }

  console.log(row.trimEnd());
}
