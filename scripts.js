const slider = document.querySelector('.val-slider');
const pageViews = document.querySelector('.views');
const perMonth = document.querySelector('.price');
const discountToggle = document.querySelector('.slider');
const toggleBtn = document.querySelector('#toggle-btn');
const startBtn = document.querySelector('.trial-btn');
const mobileOff = document.querySelector('#mobile-off');

const views = ['10k', '50k', '100k', '500k', '1M'];
const prices = ['8', '12', '16', '24', '36'];
const appliedDiscount = ['6', '9', '12', '18', '27'];

// Display Values on Page Open
document.addEventListener('DOMContentLoaded', () => {
  displayValues();
});

// Slider Event Listener
slider.addEventListener('input', () => {
  displayValues();
});

// Display Values
const displayValues = () => {
  pageViews.innerText = views[slider.value];
  if (toggleBtn.classList.contains('yearly')) {
    perMonth.innerText = `$${appliedDiscount[slider.value]}.00`;
  } else {
    perMonth.innerText = `$${prices[slider.value]}.00`;
  }
};

// Monthly / Yearly Toggle Event Listener
discountToggle.addEventListener('click', () => {
  discountToggle.classList.toggle('yearly');
  // below - updates when toggle removes yearly
  displayValues();
});

startBtn.addEventListener('click', () => {
  startBtn.innerText = 'Trial Begun!';
  startBtn.style.color = 'hsel(174, 77%, 80%)';
  startBtn.style.padding = '16px 0px 0px 49px';
});