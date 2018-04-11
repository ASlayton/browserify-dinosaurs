const loadDinos = require('./dinosaurs');
const printToDom = require('./dom');
const domEvents = require('./events');

let dinoArray = [];

const whenDinosLoad = function () {
  dinoArray = JSON.parse(this.responseText).dinosaurs;
  printToDom(dinoArray);
  domEvents();
};

const badDinos = function () {
  console.error('Shit broke');
};

const initializer = () => {
  loadDinos(whenDinosLoad, badDinos);
};

const getDinos = () => {
  return dinoArray;
};

module.exports = {
  initializer,
  getDinos,
};
