window.onload = function () {
  const audio = document.getElementById("myAudio");
  let currentSource = ""; 
  
  function toggleAudio(source) {
      if (currentSource === source && !audio.paused) {
          audio.pause(); 
      } else {
          audio.pause(); 
          audio.currentTime = 0; 
          audio.querySelector("source").src = source; 
          audio.load();
          audio.play();
          currentSource = source; 
      }
  }

  document.getElementById("q1").addEventListener("click", () => toggleAudio("audio/answer1.mp3"));
  document.getElementById("q2").addEventListener("click", () => toggleAudio("audio/answer2mp3.mp3"));
  document.getElementById("q3").addEventListener("click", () => toggleAudio("audio/answer3og.ogg"));
  document.getElementById("q4").addEventListener("click", () => toggleAudio("audio/answer4.mp3"));
  document.getElementById("q5").addEventListener("click", () => toggleAudio("audio/answer5.mp3"));
  document.getElementById("q6").addEventListener("click", () => toggleAudio("audio/siu.wav"));
};