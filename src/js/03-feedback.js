const LOC_SAV = 'feedback-form-state';
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(checkEvent, 500));
form.addEventListener('submit', checkButton);

let msg = '';
let email = '';
autoForm(form);
function autoForm(data) {
  let dataStor = localStorage.getItem(LOC_SAV);
  if (dataStor != null) {
    dataStor = JSON.parse(dataStor);
    data.email.value = dataStor.email;
    data.message.value = dataStor.msg;
    email = dataStor.email;
    msg = dataStor.msg;
  }
}

let obj = { email, msg };
function checkEvent(event) {
  const typeInput = event.target.name;

  if (typeInput === 'email') {
    obj.email = event.target.value;
    localStorage.setItem(LOC_SAV, JSON.stringify(obj));
  }
  if (typeInput === 'message') {
    obj.msg = event.target.value;
    localStorage.setItem(LOC_SAV, JSON.stringify(obj));
  }
}

function checkButton(event) {
  event.preventDefault();
  console.log(obj);
  obj = { email:'', msg: ''}
  localStorage.removeItem(LOC_SAV)
  event.currentTarget.reset();
}
