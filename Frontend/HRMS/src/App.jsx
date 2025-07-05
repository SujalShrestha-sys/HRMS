import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/login";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import PrivateRoutes from "./utils/PrivateRoutes";
import RoleBasedRoutes from "./utils/RoleBasedRoutes";
import Navbar from "./components/Dashboard/Navbar";
import AdminSummary from "./components/Dashboard/AdminSummary";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>

          <Route path="/login" element={<Login />}></Route>

          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoutes>
                <RoleBasedRoutes requiredRole={["admin"]}>
                  <AdminDashboard />
                </RoleBasedRoutes>
              </PrivateRoutes>
            }
          >
            <Route index element={<AdminSummary />}></Route>
            <Route
              path="/admin-dashboard/departments"
              element={<AdminSummary />}
            ></Route>
          </Route>
          <Route
            path="/employee-dashboard"
            element={<EmployeeDashboard />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
