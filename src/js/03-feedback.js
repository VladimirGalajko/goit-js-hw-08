const LOC_SAV = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', checkInput);
form.addEventListener('submit', checkButton);

let email = '';
let msg = '';

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
autoForm(form);

function checkInput(event) {
  const typeInput = event.srcElement.nodeName;
  typeInput === 'INPUT'
    ? (email = event.target.value)
    : (msg = event.target.value);
}

function checkButton(event) {
  event.preventDefault();
  const obj = { email, msg };
  if (obj.email != '' && obj.msg != '') {
    localStorage.setItem(LOC_SAV, JSON.stringify(obj));
  }
  console.log(`localStorage: ${localStorage.getItem(LOC_SAV)}
Email: ${obj.email}
Message: ${obj.msg}
  `);
  event.currentTarget.reset();
}
