const form = document.querySelector('.form');
const modal = document.querySelector('.modal');
const checkout = document.querySelector('.checkout');
const title = document.querySelector('.checkout__result-title');
const checkoutClose = document.querySelector('.checkout__result-close');
const description = document.querySelector('.checkout__result-description');

const finished = 'checkout--finished';
const success = 'checkout--success';
const failed = 'checkout--failed';
const full = 'modal--full';

const firstName = form.elements.name.value.split(' ').shift();
const email = form.elements.email.value;

const DELAY = 1500;
let isSuccess = true;

function toggleModal() {
  modal.classList.toggle(full);
}

function writeMessage() {
  title.innerText = isSuccess ? `Thanks, ${firstName}` : `Payment Rejected`;
  description.innerHTML = isSuccess
    ? `We've received your payment. <br/> Please check your inbox for a receipt.`
    : `Your transaction could not be processed. <br/> We've sent you an email at ${email} with the details.`;
}

function toggleCheckout(activeClass) {
  if (!activeClass) {
    return checkout.classList.remove(finished, success, failed);
  }
  writeMessage();
  checkout.classList.add(finished, activeClass);
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  toggleModal();
  setTimeout(function() {
    toggleCheckout(isSuccess ? success : failed);
  }, DELAY);
});

checkoutClose.addEventListener('click', function() {
  toggleCheckout();
  toggleModal();
  isSuccess = !isSuccess;
});
