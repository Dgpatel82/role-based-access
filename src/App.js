import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import UserInfo from "./pages/UserInfo";
import Users from "./pages/Users";
import Login from "./pages/Login";
import { UserProvider } from "./contexts/UserContext";
import PrivateRoute from "./utils/PrivateRoute";
import Footer from "./components/Footer"

function App() {
    return (
        <UserProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="dashboard" element={<PrivateRoute allowedRoles={["ADMIN", "USER"]}><Dashboard /></PrivateRoute>} />
                <Route path="admin" element={<PrivateRoute allowedRoles={["ADMIN"]}><AdminPanel /></PrivateRoute>} />
                <Route path="user" element={<PrivateRoute allowedRoles={["ADMIN"]}><Users /></PrivateRoute>} />
                <Route path="user-info" element={<PrivateRoute allowedRoles={["USER"]}><UserInfo /></PrivateRoute>} />
            </Routes>
            <Footer/>
        </UserProvider>
    );
}

export default App;
