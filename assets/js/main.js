AOS.init({
    duration: 1200,
  })
  
  function toggle() {
    var el = document.getElementById("theme_change");
    if (el.href.match("assets/css/dark_styles.css")) {
        el.href = "assets/css/white_styles.css";    
    }
    else {
        el.href = "assets/css/dark_styles.css";  
    }

    var al = document.getElementById("change_img");
    if (al.src.match("/assets/img/sun.png")) {
        al.src = "/assets/img/moon.png";    
    }
    else {
        al.src = "/assets/img/sun.png";  
    }
}
 