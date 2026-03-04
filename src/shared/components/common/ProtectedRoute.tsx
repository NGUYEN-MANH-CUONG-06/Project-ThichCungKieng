import { useAuthStore } from "@/features/auth";
import type { UserRole } from "@/shared/types";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[]; // Nếu không truyền, mặc định là tất cả role đều được phép
}

export function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const location = useLocation();
  const { accessToken, role } = useAuthStore();

  if (!accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (allowedRoles && role && !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }
  return <>{children}</>;
}
