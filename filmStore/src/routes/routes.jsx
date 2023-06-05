import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/dashboard";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/checkout" element={<Dashboard />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
