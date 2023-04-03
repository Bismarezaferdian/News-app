// 1.Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

const str = "NEGIE1";
let alpha = "";
for (let i = 0; i < str.length; i++) {
//cek jika str[i] huruf push ke variable alpha
if (isNaN(parseInt(str[i]))) {
alpha += str[i];
}
}
//convert string ke array lalu reverse
const reverse= alpha.split("").reverse()//["E", "I", "G", "E", "N"]
console.log(reverse.join("")); //"EIGEN"
