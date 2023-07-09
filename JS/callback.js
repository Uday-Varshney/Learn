const datas = [
  { name: "Uday", Profession: "Engineer" },
  { name: "Sushant", Profession: "Body builder" },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
// callback
// function createdata(newdata, callback) {
//   setTimeout(() => {
//     datas.push(newdata);
//     callback();
//   }, 2000);
// }

// we do same for promise
function createdata(newdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newdata);
      let error = false;
      if (!error) {
        return resolve();
      } else {
        return reject("kuch nhi h");
      }
    }, 2000);
  });
}

// createdata({ name: "abc", Profession: "chummi" }, getDatas);
// this run for promise
// createdata({ name: "abc", Profession: "chummi" }).then(getDatas);

// async await

async function start() {
  await createdata({ name: "Chummi", Profession: "khali" });
  getDatas();
}

start();
