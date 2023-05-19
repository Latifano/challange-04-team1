import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
// import Header from "./components/Header";
import Protected from "./components/Protected";
import Dashboard from "./pages/users/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoTokenAccess from "./components/NoTokenAccess";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store";
import UseSelector from "./pages/UseSelector";

function App() {
  return (
    <>
      <Provider store={store}>
        <GoogleOAuthProvider
          clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
        >
          <BrowserRouter>
            {/* <Header /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={
                  <NoTokenAccess>
                    <Login />
                  </NoTokenAccess>
                }
              />
              <Route
                path="/register"
                element={
                  <NoTokenAccess>
                    <Register />
                  </NoTokenAccess>
                }
              />
              <Route path="/useselector" element={<UseSelector />} />
              <Route
                path="/users/dashboard"
                element={
                  <Protected>
                    <Dashboard />
                  </Protected>
                }
              />
            </Routes>

            <ToastContainer theme="colored" />

            <Routes>
              <Route path="/detail/:id" element={<MovieDetails />} />
            </Routes>
          </BrowserRouter>
        </GoogleOAuthProvider>
      </Provider>
    </>
  );
}

export default App;
