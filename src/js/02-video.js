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

function clearLocalStorage() {
  localStorage.removeItem(CUR_TIME);
}
