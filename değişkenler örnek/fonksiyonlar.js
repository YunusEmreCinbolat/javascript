function kereyaz(msg,adet){
    for(var i=0;i<adet;i++){
    console.log(`${msg}`)
    }
}
kereyaz("yunus",3)

function hesapla(kk,bk){
    console.log(`kenar toplamı ${(kk+bk)*2}`)
    console.log(`alan ${(kk.bk)}`)
}
hesapla(5,9)


function tambol(sayi){
    var tambolen=[]
    for(var i=1;i<=sayi;i++){
         if(sayi%i==0){
          tambolen.push(i)
         }
    }
    return tambolen
}
var tambole=tambol(50)
console.log(tambole)

function yazitura(){
    var sonuc=Math.random()
    if(sonuc<0.5){
        console.log("yazı")
    }
    else{
        console.log("tura")
    }
}

yazitura()

function toplam(){
    var toplam=0;
    for(var i=0;i<arguments.length;i++){
        toplam+=arguments[i]
    }
    return toplam
}

console.log(toplam(5,7,8,9))