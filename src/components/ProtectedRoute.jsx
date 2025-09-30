// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { session } = useAuth();

  if (!session) {
    // 🚫 No session → redirect to login
    return <Navigate to="/admin-login" replace />;
  }

  // ✅ Session exists → show page
  return children;
}
