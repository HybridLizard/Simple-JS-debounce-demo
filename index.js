// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Debounce</h1>`;

function debounce(debouncedFunc, delay) {
  console.log('Debounced call');
  let timeout;

  return function () {
    console.log('Returned annonymous funcion');
    let self = this;
    let args = arguments;

    clearTimeout(timeout);

    timeout = setTimeout(function () {
      debouncedFunc.apply(self, args);
    }, delay);
  };
}

let callsCounter = 0;

let debounced = debounce(() => {
  callsCounter++;
  appDiv.innerHTML = `<h1>Debounced ${callsCounter}</h1>`;
}, 3000);

// Many calls
debounced();
debounced();
debounced();
// Delay this to have a second call
setTimeout(function () {
  debounced();
}, 4000);
// Those will be debounced
debounced();
debounced();
debounced();
debounced();
debounced();
debounced();
