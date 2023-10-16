const dateTime = dayjs().format('dddd <br> h:mm a');
const timeEl = document.querySelector('#time');

timeEl.innerHTML = dateTime ;

$('.link-item').on('click', function () { 
    var obj = document.createElement('audio');
    obj.src = './assets/audio/click2.wav'; 
    obj.play(); 
  });
  
  $('.link').on('click', function () { 
    var obj = document.createElement('audio');
    obj.src = './assets/audio/click.wav'; 
    obj.play(); 
  });