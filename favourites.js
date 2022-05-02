// write js code here corresponding to favourites.html

var mplarr=JSON.parse(localStorage.getItem("milepoint"))





    displaydata(mplarr)
 function displaydata(mplarr){
     
     mplarr.forEach(function(elem,index){
          
        var box=document.createElement("tr")


        var td1=document.createElement("td")
         td1.innerText=elem.matchnum
        var td2=document.createElement("td")
            td2.innerText=elem.teama

        var td3=document.createElement("td")
            td3.innerText=elem.teamb
        var td4=document.createElement("td")
           td4.innerText=elem.Date
        var td5=document.createElement("td")
           td5.innerText=elem.place
        var td6=document.createElement("td")
            td6.innerText="Delete"
            td6.style.color="red"
            td6.style.cursor="pointer"

            td6.addEventListener("click",function(){
             deleteitem(elem)
            });
        box.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(box)

    
     })
 }

 function deleteitem(index){
      mplarr.splice(index,1)
      localStorage.setItem("milepoint",JSON.stringify(mplarr))
      window.location.reload()
 }
