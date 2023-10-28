function a(){
    for (const element of document.querySelectorAll("a")) {
        element.addEventListener("mouseenter", (e) => { dotSize(hoverSize) });
        element.addEventListener("mouseleave", (e) => { dotSize(baseSize) });
    }    
}

document.getElementById("phone-icon").addEventListener("click", function() {
  var phone_frame = document.getElementById("content-frame");
  phone_frame.classList.remove("content-desktop");
  phone_frame.classList.remove("content-tablet");
  phone_frame.classList.add("content-phone");

    console.log("click");
  });
  
  document.getElementById("tablet-icon").addEventListener("click", function() {
    var tablet_frame = document.getElementById("content-frame");
    tablet_frame.classList.remove("content-desktop");
    tablet_frame.classList.remove("content-phone");
    tablet_frame.classList.add("content-tablet");
  
    console.log("click");
  });
  
  document.getElementById("laptop-icon").addEventListener("click", function() {
    var desktop_frame = document.getElementById("content-frame");
    desktop_frame.classList.remove("content-tablet");
    desktop_frame.classList.remove("content-phone");
    desktop_frame.classList.add("content-desktop");
    console.log("click");

  });
  document.getElementById("drop-icon").addEventListener("click", function() {
    document.querySelector("header").remove();
    window.location.href = "saturn.html";
    var Nav = document.getElementById("navbar");
    Nav.classList.replace("pt-5","pt-1");
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
