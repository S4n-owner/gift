function loadImage(event, key = 'image_default') {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    const base64 = reader.result;
    localStorage.setItem(key, base64);
    document.getElementById('preview').src = base64;
  };

  reader.readAsDataURL(file);
}

function loadSavedImage(key = 'image_default') {
  const img = localStorage.getItem(key);
  if (img) {
    document.getElementById('preview').src = img;
  }
}
function loadImage(event, key) {
  const reader = new FileReader();
  reader.onload = function () {
    localStorage.setItem(key, reader.result);
    document.getElementById('preview').src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

function loadSavedImage(key) {
  const img = localStorage.getItem(key);
  if (img) document.getElementById('preview').src = img;
}
