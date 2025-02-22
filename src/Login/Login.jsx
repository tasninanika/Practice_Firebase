import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGitSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => console.log("Error: ", error));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out");
        setUser(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {user ? (
        <button className="btn" onClick={handleSignOut}>
          Log out
        </button>
      ) : (
        <>
          <button className="btn" onClick={handleGoogleSignIn}>
            Log in with Google
          </button>
          <button onClick={handleGitSignIn}>Login with Github</button>
        </>
      )}
      {user && (
        <div>
          <h4>{user.displayName}</h4>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
