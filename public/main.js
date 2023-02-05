let loginMsg = document.querySelector("#login-div .msg");
let loginForm = document.getElementById("login-form");
let formInputs = document.querySelectorAll("input");
const [username, password] = formInputs;

loginForm.addEventListener("submit", async (e) => {
  let usernameValue = username.value;
  let passwordValue = password.value;

  e.preventDefault();

  try {
    const { data } = await axios.post("/api/v1/login", {
      usernameValue,
      passwordValue,
    });

    loginMsg.innerHTML = data.msg;
    loginMsg.classList.remove("failure-msg");
    loginMsg.classList.add("success-msg");
    localStorage.setItem("token", data.token);
    username.value = "";
    password.value = "";
  } catch (error) {
    loginMsg.innerHTML = error.response.data.msg;
    loginMsg.classList.remove("success-msg");
    loginMsg.classList.add("failure-msg");
  }

  loginMsg.style.display = "block";
  setTimeout(() => {
    loginMsg.style.display = "none";
  }, 3000);
});

let sayHello = document.getElementById("say-hello");
let tokenMsg = document.querySelector("#sending-request .msg");
let submitBtn = document.querySelector("#sending-request button");

submitBtn.onclick = async () => {
  const token = localStorage.getItem("token");

  try {
    const { data } = await axios.get("/api/v1/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    sayHello.innerHTML = data.msg;
    tokenMsg.innerHTML = data.secret;
  } catch (error) {
    console.error(error);
    sayHello.innerHTML = "";
    tokenMsg.innerHTML = error.response.data.msg;
  }
};
