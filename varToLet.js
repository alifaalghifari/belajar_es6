/* 
Sebelum ada es 6, kita menggunakan keyword var untuk membuat variabel
setelah es 6 kita dapat menggunakan keyword let

lalu apa bedanya ?
*/

/* --------------Redeclare-------------------- */

// var dapar dideklarasikan kembali
var minuman = 'jus jeruk'
var minuman = 'teh'

// let tidak dapat di deklarasikan kembali
let makanan = 'nasi goreng'
// let makanan = 'sate' // matikan comment -> SyntaxError : identifier 'makanan' has already been declared




/* --------------Scope-------------------- */

/* 
var itu functions scoped 
artinya jika masih dalam scoped utama yang sama berarti masih mengacu pada nilai yang sama
*/  

// secara tidak langsung, disini sudah dideklarasikan
// var nama
if(true){
    var nama = 'budi' 
    console.log(nama) // budi
}
console.log(nama) // budi

/* 
let itu block scope
artinya variabel itu hanya berlaku di dalam scope  yang mendekralasikannya
*/

if(true){
    let umur = 19 // umur hanya berlaku dalam scope ini
    console.log(umur)
}
// console.log(umur) // matikan coment -> ReferencesError: umur is not defined


/* --------------Kesimpulan-------------------- */

// Gunakan let sebagai ganti var