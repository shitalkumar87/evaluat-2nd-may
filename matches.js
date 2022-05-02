// write js code here corresponding to matches.html






var mplarr=JSON.parse(localStorage.getItem("matchlist"))
var matchesarr=JSON.parse(localStorage.getItem("milepoint"))||[];

    // filter by venue
      

     function  venueplace(){
         var mat=document.getElementById("filterVenue").value;
         var filterlist=matchesarr.filter(function(elem){
             return elem.venueplace==mat;
         });
            displaydata(filterlist)
     }

    displaydata(mplarr)
 function displaydata(mplarr){
     document.querySelector("tbody").innerHTML=""
     mplarr.forEach(function(elem){
         
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
            td6.innerText="Favourites"
            td6.style.color="red"
            td6.style.cursor="pointer"

            td6.addEventListener("click",function(){
             matches(elem)
            });
        box.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(box)

    
     })
 }

 function matches(elem){
      matchesarr.push(elem)
      localStorage.setItem("milepoint",JSON.stringify(matchesarr))
 }
