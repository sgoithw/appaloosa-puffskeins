import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { api } from './api';
import { loader } from './loader';

const emailInput = document.querySelector('.subscribe-input');
const submitButton = document.querySelector('.submit-btn');
submitButton.addEventListener('click', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (!emailPattern.test(email)) {
    iziToast.show({
      position: 'center',
      color: 'red',
      message: `Enter the following sample email - 'test@gmail.com'.`,
    });
    emailInput.value = '';
  }

  const data = {
    email: email,
  };

  loader.create();

  api.createSubscription(data)
    .then(response => {
      const respMessage = response.message;
      iziToast.show({
        position: 'center',
        color: 'green',
        message: `${respMessage}`,
      });
      emailInput.value = '';
    })
    .catch(err => {
      if (err.response.status === 409) {
        iziToast.show({
          position: 'center',
          color: 'red',
          message: `this email ${email} has been already subscribed`,
        });
        emailInput.value = '';
      }
    })
    .finally(() => {
      loader.destroy();
    });
}
