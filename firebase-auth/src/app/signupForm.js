import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';
import { auth } from './firebase.js';
import { showMessage } from './showMessage.js';
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  // ese envio puede tomar tirmpo puedes usar una promesa y luego una vez que creo los datos del usuario entonces va devolver los datos de ese usuario.
  // Firebase requiere una contraseña de 6 caracteres como minimo y si hay un error seria un problema por eso usaremos try catch
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
    showMessage('welcome' + userCredentials.user.email);

    // cerrar modal
    const signupModal = document.getElementById('signupModal');
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();
  } catch (error) {
    console.log(error.message);
    console.log(error.code);
    if (error.code === 'auth/email-already-in-use') {
      showMessage('Email aready in use', 'error');
    } else if (error.code === 'auth/invalid-email') {
      showMessage('Email invalid', 'error');
    } else if (error.code === 'auth/weak-password') {
      showMessage('password weak', 'error');
    } else {
      ('Somethin went wrong');
    }
  }
});
