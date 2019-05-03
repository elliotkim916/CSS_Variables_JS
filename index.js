'use strict';

const inputs = document.querySelectorAll('.controls input');
// inputs is a NodeList, not an array

function handleUpdate() {
  // this.dataset is an object that contains all the data attributes from that specific element 
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => {
  input.addEventListener('change', handleUpdate);
  input.addEventListener('mousemove', handleUpdate);
});