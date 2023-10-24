const dateTime = dayjs().format('dddd <br> hh:mm a');
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

  $('.repo').on('click', function () { 
    var obj = document.createElement('audio');
    obj.src = './assets/audio/click.wav'; 
    obj.play(); 
  });