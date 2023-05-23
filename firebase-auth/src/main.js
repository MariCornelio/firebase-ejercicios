// import { app } from './app/firebase.js'
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';
import { auth } from './app/firebase.js';
import { loginCheck } from './app/loginCheck.js';
import './app/signupForm.js';
import './app/logout.js';
import './app/signInForm.js';
import './app/googleLogin.js';

// console.log("hola")
// console.log(app)
// cada vez que se lanza la aplicacion se evalua esa funcion, se queda escuchando
onAuthStateChanged(auth, async (user) => {
  console.log(user);
  // esto devuelve user= null o unobjeto
  // por otra parte cuando una vez que te registras tambien estas como iniciando sesion
  if (user) {
    // si el usuario existe quiero que des una consulta a la base de datos sino existe quiero que cierres sesion o hagas otra cosa
    loginCheck(user);
  } else {
    loginCheck(user);
  }
});
