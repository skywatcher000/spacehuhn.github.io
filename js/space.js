function changeImage() {
  document.getElementById("spacehuhngallery").src = "img/gallery/" + (Math.floor(Math.random() * (38 + 1))) + ".jpg";
}

function copyToClipboard(element) {
  var str = document.getElementById(element).innerHTML;

  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}


window.onload = function() {
  document.getElementById("profilepic").addEventListener('click', changeImage);
  document.getElementById("btc").addEventListener('click', copyToClipboard);
  document.getElementById("ltc").addEventListener('click', copyToClipboard);
  document.getElementById("eth").addEventListener('click', copyToClipboard);
};