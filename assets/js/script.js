const dateTime = dayjs().format('dddd  h:m a');
const timeEl = document.querySelector('#time');

timeEl.innerHTML = dateTime ;