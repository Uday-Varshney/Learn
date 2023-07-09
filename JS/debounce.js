let counter = 0;
function getData() {
  console.log("Fetching data" + counter++);
}

function debounce(call, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout;
    setTimeout(() => {
      call();
    }, d);
  };
}
const betterfunc = debounce(getData, 1000);
