// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { session, loading } = useAuth();

  if (loading) {
    // ⏳ Still checking session → don’t redirect yet
    return <div>Loading...</div>;
  }

  if (!session) {
    // 🚫 No session → redirect
    return <Navigate to="/admin-login" replace />;
  }

  // ✅ Session exists → allow access
  return children;
}
