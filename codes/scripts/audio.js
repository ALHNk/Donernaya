window.onload = function () {
  const audio = document.getElementById("myAudio");
  let currentSource = ""; // Track the currently playing source

  // Function to toggle audio play/pause based on the same source
  function toggleAudio(source) {
      if (currentSource === source && !audio.paused) {
          audio.pause(); // Pause if clicking on the same source
      } else {
          audio.pause(); // Pause any ongoing audio
          audio.currentTime = 0; // Reset to start
          audio.querySelector("source").src = source; // Change source
          audio.load(); // Load new source
          audio.play(); // Play the new audio
          currentSource = source; // Set the new current source
      }
  }

  // Attach event listeners to each question
  document.getElementById("q1").addEventListener("click", () => toggleAudio("audio/answer1.mp3"));
  document.getElementById("q2").addEventListener("click", () => toggleAudio("audio/answer2mp3.mp3"));
  document.getElementById("q3").addEventListener("click", () => toggleAudio("audio/answer3og.ogg"));
  document.getElementById("q4").addEventListener("click", () => toggleAudio("audio/answer4.mp3"));
  document.getElementById("q5").addEventListener("click", () => toggleAudio("audio/answer5.mp3"));
  document.getElementById("q6").addEventListener("click", () => toggleAudio("audio/siu.wav"));
};