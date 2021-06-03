// tidak bisa di reassign
const nama = 'sandi'
// nama = 'budi' // matikan comment -> TypeError: Assignment to constant variable

const mahasiswa = {
    nim : 1,
    nama : 'andi'
}

console.log(mahasiswa) // nim : 1

// mutable 
// artinya bisa diubah atau menambahkan data di dalamnya
mahasiswa.nim = 2 

console.log(mahasiswa) // nim : 2

mahasiswa.umur = 20
console.log(mahasiswa) // Akan ada data baru, umur : 20


