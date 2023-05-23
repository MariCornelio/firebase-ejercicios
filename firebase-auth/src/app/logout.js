import { signOut } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';
import { auth } from './firebase.js';

const logout = document.querySelector('#logout');

// esto es asincrono va demorar que notifique a firebase y por eso haremos async y await
logout.addEventListener('click', async () => {
  await signOut(auth);
  console.log('signup');
});
