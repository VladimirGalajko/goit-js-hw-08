import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CUR_TIME = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(data => {
    const currentTime = data.seconds;
    if (currentTime <= 2) {
      clearLocalStorage();
    } else {
      localStorage.setItem(CUR_TIME, currentTime); // Обновляем текущее время в localStorage
    }
  }, 1000)
);

const savedTime = Number(localStorage.getItem(CUR_TIME));

player
  .setCurrentTime(savedTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

function clearLocalStorage() {
  localStorage.removeItem(CUR_TIME);
}
