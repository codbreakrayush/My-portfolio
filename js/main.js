function myFunction() {
    var x = document.getElementById("myLinks");
    var y=document.getElementById("nav");
    if (x.style.display === "flex") {
      x.style.display = "none";
      y.style.height = "50px"
    } else {
      x.style.display = "flex";
      x.style.flexDirection = "column";
      y.style.height = "auto"
    }

  }