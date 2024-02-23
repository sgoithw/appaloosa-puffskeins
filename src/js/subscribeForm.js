import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { api } from './api';
//import { loader } from './loader';

const elements = {
  subscribeForm: document.querySelector('#subscribe-form'),
};

elements.subscribeForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = elements.subscribeForm.email.value.trim();
  const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (!emailPattern.test(email)) {
    iziToast.show({
      position: 'center',
      timeout: 5000,
      color: 'red',
      message: `Please enter valid email`,
    });
    return;
  } else {
    elements.subscribeForm.reset();
  }

  //loader.create();

  api
    .createSubscription({
      email,
    })
    .then(response => {
      const respMessage = response.message;
      iziToast.show({
        position: 'center',
        color: 'white',
        message: respMessage.replace(/([^\w!]) /g, '$1<br>'),
      });
    })
    .catch(err => {
      iziToast.show({
        position: 'center',
        messageColor: 'red',
        color: 'white',
        message: err.message,
      });
    })
    .finally(() => {
      //loader.destroy();
    });
}
