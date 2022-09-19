var language = [
    {
        name : 'PYTHON',
        image : 'img/python.jpeg',
        link : 'https://tr.wikipedia.org/wiki/Python'
    },
    {
        name : 'JAVA',
        image : 'img/java.jpg',
        link : 'https://www.java.com/tr/'
    },
    {
        name : 'C',
        image : 'img/c-programlama.png',
        link : 'https://istanbulbogazicienstitu.com/blog/c-programlama-dili-nedir'
    },
 
];
var index=0
var settings={
    "duration":1000,
    "random":false
}
var interval
init(settings)

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval)
    })
})

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        init(settings)
    })
})
    
function init(settings) {
    var prew
   interval= setInterval(function(){
     
     if(settings.random){
        do {
        index=Math.floor(Math.random() * language.length);
        }
        while(index==prew)
        prev=index 
    }
     
     
     else{
        if(language.length==index){
            index=0
        }
        
        slaytgoster(index)
        
        index++
     }
     
   

    },settings.duration)
}

document.querySelector(".fa-arrow-circle-left").addEventListener("click",function(){
if(index>0){
    index--
    slaytgoster(index)
}
else{
    index=language.length-1
    slaytgoster(index)
}

})

document.querySelector(".fa-arrow-circle-right").addEventListener("click",function(){

    if(index<language.length-1){
        index++
        slaytgoster(index)
    }
    else{
        index=0
        slaytgoster(index)
    }
})
function slaytgoster(index){

document.querySelector(".card-title").textContent=language[index].name
document.querySelector(".card-img").setAttribute("src",language[index].image)

document.querySelector(".card-link").setAttribute("href",language[index].link)
document.querySelector(".card-link").setAttribute("target","_blanck")
}