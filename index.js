// write js code here corresponding to index.html
// You should add submit event on the form

var mplarr=JSON.parse(localStorage.getItem("matchlist"))||[];
document.querySelector("#masaiForm").addEventListener("submit",masaimatch)

function masaimatch(){
    event.preventDefault();


    var matchobj = {
                    matchnum:masaiForm.matchNum.value,
                    teama :masaiForm.teamA.value,
                    teamb:masaiForm.teamB.value,
                    Date:masaiForm.date.value,
                    place:masaiForm.venue.value,


    };

    mplarr.push(matchobj)
    console.log(mplarr)

    localStorage.setItem("matchlist",JSON.stringify(mplarr));

    window.location.href="matches.html"
}
