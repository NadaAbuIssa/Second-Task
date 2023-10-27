function a(){
    for (const element of document.querySelectorAll("a")) {
        element.addEventListener("mouseenter", (e) => { dotSize(hoverSize) });
        element.addEventListener("mouseleave", (e) => { dotSize(baseSize) });
    }    
}

document.getElementById("phone-icon").addEventListener("click", function() {
    console.log("click");

    document.getElementById("content").style.transform = "scale(0.6)";
    console.log("click");
  });
  
  document.getElementById("tablet-icon").addEventListener("click", function() {
    console.log("click");

    document.getElementById("content").style.transform = "scale(0.9)";

  });
  
  document.getElementById("laptop-icon").addEventListener("click", function() {
    console.log("click");

    document.getElementById("content").style.transform = "scale(0.75)";
    console.log("click");

  });
  document.getElementById("drop-icon").addEventListener("click", function() {
    document.querySelector("header").remove();
  });
  window.addEventListener("scroll", function() {
    const navbar = document.getElementById("nav");
    const scrolled = window.scrollY > 0;
  
    if (scrolled) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
