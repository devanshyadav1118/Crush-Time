$('#no-btn').on('mouseover', function() {
  $(this).css({
    'top': Math.random() * 500 + "px",
    'left': Math.random() * 500 + "px"
  });
})


window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 0.2;
  audio.play();
});



$('#yes-btn').on('click', function(){
  var audio = document.getElementById("audio");
  audio.setAttribute("src", "snap-happy.mp3");
  audio.play();

  document.getElementById("pyro").style.display = "block";
  document.getElementById("body").style.backgroundColor = "#000000";

  document.getElementById("cat").setAttribute("src", "https://media.tenor.com/P-8ZvqnS4AwAAAAC/dancing-cat-dancing-kitten.gif");
  document.getElementById("no-btn").style.display = "none";
  document.getElementById("yes-btn").style.display = "none";

  document.getElementById("cat").className = "center shake-strong-anim";
});


