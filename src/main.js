const form = document.querySelector('.form');
const total = document.querySelector('.form__total');
const payButton = document.querySelector('.form__pay');
const payButtonTotal = payButton.querySelector('span');
const paypalLink = document.querySelector('a.form__cc-heading');
let amount = 0;

function calculateTotal() {
  const frequency = form.plan.value.toLowerCase();
  amount = frequency === 'monthly' ? 30 : 25 * 12;
}

function updateTotal() {
  payButton.disabled = false;
  total.innerText = `$${amount}`;
  payButtonTotal.innerText = `$${amount}`;
  paypalLink.setAttribute('href', `https://paypal.me/nikosolihin/${amount}`);
}

form.plan.forEach(function(plan) {
  plan.addEventListener('change', function() {
    calculateTotal();
    updateTotal();
  });
});
