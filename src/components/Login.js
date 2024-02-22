import { getAuth, onAuthStateChanged, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useState, useEffect } from 'react';

const firebaseUiConfigObj = {
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true }
  ],
  signInFlow: 'popup',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => {
      return false;
    }
  }
}

export default function Login() {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}!</h1>
          <p>You are now signed in.</p >
        </div>
      ) : (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p >
          <StyledFirebaseAuth uiConfig={firebaseUiConfigObj} firebaseAuth={auth} />
        </div>
      )}
    </div>
  );
}