const ENDING_VIDEO_ID = "44NVVQoPBd8"; // replace with your YouTube video ID
const ACCEPTS = ["withp25"];

const input = document.getElementById("answer");
const btn = document.getElementById("submit");
const msg = document.getElementById("msg");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const endingFrame = document.getElementById("endingFrame");

function norm(s) {
  return s.toLowerCase().replace(/[\s\-_]/g, "");
}
function openEnding() {
  endingFrame.src = `https://www.youtube.com/embed/${ENDING_VIDEO_ID}?autoplay=1&rel=0`;
  modal.classList.add("open");
}
function closeEnding() {
  modal.classList.remove("open");
  endingFrame.src = "";
}
function check() {
  if (ACCEPTS.includes(norm(input.value))) {
    msg.textContent = "Unlocked! Enjoy the ending ✨";
    msg.classList.add("ok");
    openEnding();
  } else {
    msg.textContent = "Try again!";
    msg.classList.remove("ok");
  }
}
btn.addEventListener("click", check);
input.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
closeBtn.addEventListener("click", closeEnding);
modal.addEventListener("click", e => { if (e.target === modal) closeEnding(); });
