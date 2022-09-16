var sayilar=[1,5,7,15,3,25]
for(let sayi of sayilar){
    console.log(Math.pow(sayi,2))
}

for(let sayi of sayilar){
    if(sayi%5==0){
        console.log(sayi)
    }
}
var toplam =0

for(let sayi of sayilar){
    if(sayi%2==0){
        toplam+=sayi
    }
}

var urunler=["iphone 12","samsung s22","iphone 13","samsung s23"]
for(let urun of urunler){
    console.log(urun.toUpperCase())
}
toplam=0
for(let urun of urunler){
   if(urun.includes("samsung")){
    toplam++;
   }
}
console.log(toplam)


let ogrenciler = [
    {"ad":"yiğit", "soyad": "bilgi", "notlar": [60,70,60]},
    {"ad":"ada", "soyad": "bilgi", "notlar": [80,70,80]},
    {"ad":"çınar", "soyad": "turan", "notlar": [10,20,60]}
];
toplam=0
var notlar=[ ]
for(var ogrenci of ogrenciler){
    for(var not of ogrenci.notlar){
        toplam+=not
    }
    notlar.push(toplam)
    toplam=0
}
console.log(notlar)
ortalama=[ ]

for( var not of notlar){
    ortalama.push(not/3)
}
console.log(ortalama)
