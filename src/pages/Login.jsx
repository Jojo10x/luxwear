import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase-config";
import { signInWithEmailAndPassword ,signOut} from "firebase/auth"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password); 
      setIsLoggedIn(true);
    } catch (error) {
      setError(error.message);
    }
  };
  const handleLogout = async () => {
    try {
      await signOut(auth); 
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleAdmin = () => {
    navigate("/admin");
  };

  const handleEdit = () => {
    navigate("/edit");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}

      {!isLoggedIn && (
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      )}
      {isLoggedIn && (
        <div className="button-container">
        <button onClick={handleAdmin} className="btn btn-primary">
          Admin
        </button>
        <button onClick={handleEdit} className="btn btn-primary">
          Edit
        </button>
        <button onClick={handleLogout} className="btn btn-primary">Logout</button>
      </div>
      )}
    </div>
  );
};

export default Login;





