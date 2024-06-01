document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#register-form");
    const errorMessage = document.querySelector("#error-message");
  
    form.addEventListener("submit", (evento) => {
      evento.preventDefault();
  
      const username = form.username.value;
      const password = form.password.value;
  
      if (username === "" || password === "") {
        errorMessage.textContent = "Los campos no puede estar vacios";
        return;
      }
  
      if (password.length < 6) {
        errorMessage.textContent = "El password debe tener al menos seis digitos";
        return;
      }
  
      // guardar el usuario en la "base de datos" (localstorage)
  
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = users.find((user) => user.username === username);
  
      if (existingUser) {
        errorMessage.textContent =
          "El nombre de usuario ya se encuentra registrado";
        return;
      }
  
      const newUser = {
        username,
        password,
      };
  
      users.push(newUser);
  
      localStorage.setItem("users", JSON.stringify(users));
  
      window.location.href = "login.html";
    });
  });
  