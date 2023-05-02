

export default function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var object = document.getElementById("objectif");
  
    if (dots.style.display === "none") {
      dots.style.display = " inline";
      btnText.innerHTML = "Voir plus";
      moreText.style.display = "none";
      object.style.display="none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Voir moins";
      moreText.style.display = "inline";
      object.style.display="block";
    }
  }


  