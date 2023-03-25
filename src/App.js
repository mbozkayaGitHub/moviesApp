import "./App.css";
import AuthContextProvider from "./context/AuthContext";

import AppRouter from "./router/AppRouter";

function App() {
  return (
    <AuthContextProvider>
      <MovieContextProvider>
        <AppRouter />
      </MovieContextProvider>
    </AuthContextProvider>
  );
}

export default App;
