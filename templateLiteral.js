/* 

Template literal atau template string adalah cara baru javascript dalam penulisan string

Sebelumnya kita hanya bisa menggunakan ' ' || " " (Kutip atau kutip dua)
Namun sekarang kita dapat menggunakan ` ` (backtick) dengan beberapa kelebihan

*/

// Multiline string

// sebelum es6
console.log("Hari ini cuaca\nsangat cerah") // jika kita memberi 'enter' pada kata yang ingin dipisah, akan terjadi error

// dengan es6
console.log(`Hari ini cuaca
sangat cerah`)



// string subtitutions

let nama = "Muh alif alghifari"
let pekerjaan = "Mahasiswa"

// sebelum es6
console.log("Nama saya " + nama + ", Saya seorang " + pekerjaan)

// dengan es6, kita dapat menggunakan `` backtick
// untuk memasukkan variabel tidak perlu concatenate ( + )
// kita dapat menggunakan ${ namaVariabel }
console.log(`Nama saya ${nama}, Saya seorang ${pekerjaan}`)



// Menambahkan fungsi matematika

let a = 10
let b = 12

// sebelum es6
console.log("Hasil dari " + a + " + " + b + " = " + (a + b))

// dengan es6
console.log(`Hasil dari ${a} + ${b} = ${a  + b}`)



// template literal dengan fungsi

let myFunc = (strings, hobi, umur) => {
    // strings akan menjadi array berisi tiap-tiap string yang bukan variabel dari parameter
    console.log(strings) // ['Saya suka ', ', dan berumur ', 'tahun']

    // hobi
    console.log(hobi) // ${hobi} dari template literal

    // umur
    console.log(umur) // ${umur} template literal

    umur += 10 // mengganti umur menjadi 30
    return `${strings[0]}${hobi}${strings[1]}${umur}${strings[2]}`
}
let hobi = "Membaca"
let umur = 20
let result = myFunc`Saya suka ${hobi}, dan berumur ${umur} tahun`

console.log(result) // Saya suka Membaca, dan berurmur 30 tahun