const kalimat = "Saya sangat senang mengerjakan soal algoritma";
const kataArr = kalimat.split(" ");
let kataTerpanjang = kataArr[0];

for (let i = 1; i < kataArr.length; i++) {
  if (kataArr[i].length > kataTerpanjang.length) {
    kataTerpanjang = kataArr[i];
  }
}

console.log(kataTerpanjang); // "mengerjakan"
