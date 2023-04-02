//Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:
//Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

//diagonal pertama = 1 + 5 + 9 = 15 
//diagonal kedua = 0 + 5 + 7 = 12 

//maka hasilnya adalah 15 - 12 = 3

//jawab:
const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
const n = matrix.length;//3
//untuk menampung diagonal
let sumDiagonal1 = 0;
let sumDiagonal2 = 0;

//looping sebanyak matrik length
for (let i = 0; i < n; i++) {
  sumDiagonal1 += matrix[i][i];
  sumDiagonal2 += matrix[i][n - i - 1];
}

const result = sumDiagonal1 - sumDiagonal2;
console.log(result);
