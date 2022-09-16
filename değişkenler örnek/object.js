var siparis1={
    "siparis_id" : 101,
     "siparis_tarihi":"21.12.2022",
     "ödeme_sekli":"kredi kartı",
     "kargo_adresi":"yahya kaptan mah",
     "alinan_urunler":[
        {
        "urun_id":5,
        "urun_basligi":"iphone 13 pro",
        "urun_url":"abc",
        "urun_fiyati":2200 
        },
        {
            "urun_id":6,
            "urun_basligi":"iphone 13 pro max",
            "urun_url":"abc",
            "urun_fiyati":2500 
        }
     ],
     "musteri":
        {
            "id":12
        }
     ,
     "satici":
        {
            "id":34,
            "Ad":"Apple turkiye"
        }
}
var siparis2={
    "siparis_id" : 102,
     "siparis_tarihi":"30.12.2022",
     "ödeme_sekli":"kredi kartı",
     "kargo_adresi":"yahya kaptan mah",
     "alinan_urunler":
        {
        "urun_id":6,
        "urun_basligi":"iphone 13 pro max",
        "urun_url":"abc",
        "urun_fiyati":2500 
        },
     
     "musteri":
        {
            "id":12
        }
     ,
     "satici":
        {
            "id":34,
            "Ad":"Apple turkiye"
        }
     
}

var siparisler=[siparis1,siparis2]
console.log(((siparisler[0].alinan_urunler[0].urun_fiyati+siparisler[0].alinan_urunler[1].urun_fiyati))*(18/100))
console.log(siparisler[1].alinan_urunler.urun_fiyati+(siparisler[1].alinan_urunler.urun_fiyati*(0.18)))