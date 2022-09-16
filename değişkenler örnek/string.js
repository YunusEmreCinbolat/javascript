let url="https://sadikturan.com/"
let kursAdi="Komple Web Geliştirme Kursu"
console.log(url.length)
var sonuc=kursAdi.slice(" ")
console.log(sonuc.length)
console.log(url.startsWith("https"))
console.log(kursAdi.includes("eğitim"))
kursAdi2=kursAdi.replaceAll(" ","-")
console.log(url+kursAdi2)