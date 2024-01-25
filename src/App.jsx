import "./App.css";
import useAuth from "./hooks/useAuth";
import Protected from "./components/Protected";
import Public from "./components/Public";

function App() {
  const isLoggedIn = useAuth();

  return <>{isLoggedIn ? <Protected /> : <Public />}</>;
}

export default App;
