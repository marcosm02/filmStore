import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/dashboard";
import { Checkout } from "../pages/Checkout/checkout";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
