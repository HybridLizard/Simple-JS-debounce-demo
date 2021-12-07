// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Debounce</h1>`;

function debounce(debouncedFunc, delay) {
  console.log('Debounced call');
  let timeout;

  return function (x) {
    console.log('Returned annonymous function');
    let self = this;
    let args = arguments;

    clearTimeout(timeout);

    timeout = setTimeout(function () {
      debouncedFunc.apply(self, args);
    }, delay);
  };
}

let callsCounter = 0;

let debounced = debounce((x) => {
  callsCounter++;
  appDiv.innerHTML = `<h1>Debounced ${callsCounter} : ${x}</h1>`;
}, 3000);

// Many calls debounced
debounced();
debounced();
debounced();

// Delay this to have a second call
setTimeout(function () {
  debounced();
  debounced();
  // This will be called second
  debounced(222);
}, 5000);

// Those will be debounced too
debounced();
debounced();
// This will be called first
debounced(111);
