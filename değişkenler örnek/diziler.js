var meyveler=["elma","muz","armut","çilek"]
console.log(meyveler.length)
console.log(meyveler[0]+" "+ meyveler[meyveler.length-1])
console.log(meyveler.includes("elma"))
meyveler.push("kiraz")
console.log(meyveler)
meyveler.splice(meyveler.length-3,2)
console.log(meyveler)
ogr1=["a",2010,[70,60,80]]
ogr2=["b",2012,[80,80,90]]
ogr3=["c",2009,[60,60,70]]
var simdi=new Date().getFullYear()
console.log(simdi-ogr1[1])
console.log(simdi-ogr2[1])
console.log(simdi-ogr3[1])