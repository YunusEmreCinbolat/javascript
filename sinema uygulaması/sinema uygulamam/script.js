var container=document.querySelector(".container")
var count=document.getElementById("count")
var select=document.getElementById("movie")
var amount=document.getElementById("amount")
var seats=document.querySelectorAll(".seat:not(.reserved)")
getfromlocalstorge()
calculatetotal();
select.addEventListener("change",function(e){
    calculatetotal()
})

container.addEventListener("click",function(e){
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){
        e.target.classList.toggle("selected");
        calculatetotal()
       
    }
})

function calculatetotal(){
    let selectedseat=container.querySelectorAll(".seat.selected");
    var selectedseatarr=[]
    var seatsarr=[]
    selectedseat.forEach(function(seat){
        selectedseatarr.push(seat)
    })
    
    seats.forEach(function(seat){
        seatsarr.push(seat)
    })

    let selectedseatindexs=selectedseatarr.map(function(seat){
        return seatsarr.indexOf(seat)
    })

        
        
        count.innerText=selectedseat.length;
        
        amount.innerText= select.value*selectedseat.length;
       saveToLocalStorage(selectedseatindexs)
    }
    function saveToLocalStorage(index){
     localStorage.setItem("selectedseat",JSON.stringify(index))
     localStorage.setItem("selectedmovieindex",select.selectedIndex)
    }
    function getfromlocalstorge(){
    const selectedseats=JSON.parse(localStorage.getItem("selectedseat"))
    if(selectedseats!=null && selectedseats.length>-1){
        seats.forEach(function(seat,index){
            if(selectedseats.indexOf(index)>-1){
                seat.classList.add("selected")
            }
        })
    }

    const selectedmovieindex=localStorage.getItem("selectedmovieindex")
    }