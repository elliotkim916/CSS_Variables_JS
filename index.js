'use strict';

const inputs = document.querySelectorAll('.controls input');
// inputs is a NodeList, not an array
console.log(inputs);
function handleUpdate() {
  // console.log(this.value);
  // this.dataset is an object that contains all the data attributes from that specific element 
  console.log(this.dataset);
  console.log(this.name);
  const suffix = this.dataset.sizing;
  document.documentElement.style.setProperty(``);
}

inputs.forEach(input => {
  input.addEventListener('change', handleUpdate);
  // input.addEventListener('mousemove', handleUpdate);
});