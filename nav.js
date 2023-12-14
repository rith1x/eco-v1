function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("tapHider").style.display = "block";
    document.getElementById("main").style.filter = "blur(9px)";
    // document.getElementById("main").style.transform = "scale(0.8)";
  
    // document.getElementsByClassName("oreon").style.opacity = "1";

    
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("tapHider").style.display = "none";
    document.getElementById("main").style.filter = "none";
    // document.getElementById("main").style.transform = "scale(1)";
    
    // document.getElementsByClassName("oreon").style.opacity = "0";
  }
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeNav();
    }
  });
  document.addEventListener('keydown', function(event) {
    if (event.key === '`') {
      // Call your function here
      openNav();``
    }
  });

const navname = document.getElementById('namex');
const nameOfUser = localStorage.getItem('userDetails');
// console.log(nameOfUser["name"]);
const dxb = JSON.parse(nameOfUser)
navname.textContent ='Hi, ' + dxb.name;
