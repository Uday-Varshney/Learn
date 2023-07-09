const mythrottle = (fn, d) => {
  return function (...args) {
    document.getElementById("btn").disabled = true;
    setTimeout(() => {
      fn();
    }, d);
  };
};

const newFun = mythrottle(() => {
  document.getElementById("btn").disabled = false;
  console.log("Btn clicked!!");
}, 3000);
