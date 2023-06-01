let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  // formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Message can't be blank";
    console.log("Failure");
  } else {
    console.log("Success");
    msg.innerHTML = "";
    acceptdata();
  }
};

// we are accepting data
let data = {};

let acceptdata = () => {
  data["text"] = input.value;
  console.log(data);
  createpost();
};

let createpost = () => {
  posts.innerHTML += `
  <div>
  <p>${input.text}</p>
  <span class="options">
    <i class="fas fa-edit"></i>
    <i class="fas fa-trash-alt"></i>
  </span>;
  </div>`;
};
