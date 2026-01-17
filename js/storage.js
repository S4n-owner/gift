// Luu n?i dung textarea vao localStorage
function saveNote(key) {
  const note = document.getElementById('note').value;
  localStorage.setItem(key, note);
  alert('Da luu');
}

// T?i n?i dung t? localStorage len textarea
function loadNote(key) {
  const saved = localStorage.getItem(key);
  document.getElementById('note').value = saved ? saved : '';
}
