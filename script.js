const video = document.getElementById('video');
const roastText = document.getElementById('roastText');

const roasts = [
  "You're so bright, your screen dimmed itself.",
  "Even your reflection wants a refund.",
  "You make potatoes look charismatic.",
  "Your confidence is admirable, considering.",
  "The mirror cracked — it's protesting.",
  "Blink if you agree you're not the main character.",
  "You’re not ugly. You're just… ahead of your time.",
  "The camera needs therapy now.",
  "Your face launched a thousand pixels — all running away.",
  "Even AI is struggling to recognize this masterpiece.",
  "You look like a before picture.",
  "Your selfie stick just filed for divorce.",
  "You’re the reason they invented filters.",
  "Even your shadow is embarrassed to be seen with you.",
  "You look like you just lost a fight with a blender.",
  "Your face is like a software update — nobody wants it.",
  "You’re the reason why the front camera exists.",
];

navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    roastText.innerText = "Camera access blocked. Even your camera said no.";
    speakRoast("Camera access blocked. Even your camera said no.");
  });

function speakRoast(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.pitch = 1;
  utterance.rate = 1.1;
  utterance.volume = 1;
  speechSynthesis.cancel(); // Stop previous utterance if any
  speechSynthesis.speak(utterance);
}

function startRoasting() {
  setInterval(() => {
    const roast = roasts[Math.floor(Math.random() * roasts.length)];
    roastText.innerText = roast;
    speakRoast(roast);
  }, 4000); // New roast every 4 seconds
}

// Start roasting once voices are loaded
window.speechSynthesis.onvoiceschanged = () => {
  startRoasting();
};
