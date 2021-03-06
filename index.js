'use strict';

const inputs = document.querySelectorAll('.controls input');
// inputs is a NodeList, not an array

function handleUpdate() {
  // this.dataset is an object that contains all the data attributes from that specific element 
  const suffix = this.dataset.sizing || '';
  
  // targeting the css variable properties to make changes on the DOM, those variables are attached to the img element
  document.documentElement.style.setProperty('--' + this.name, this.value + suffix);
}

inputs.forEach(input => {
  input.addEventListener('change', handleUpdate);
  input.addEventListener('mousemove', handleUpdate);
});