import { createBrowserRouter } from "react-router-dom";

import { ProtectedRoute } from "@/shared/components/common/ProtectedRoute";
import { GuestRoute } from "@/shared/components/common/GuestRoute";

import { lazy, Suspense } from "react";
import { LoadingSpinner } from "@/shared/components/common";

const HomePage = lazy(() => import("@/features/landing/pages/HomePage"));

const AdminLayout = lazy(() => import("@/shared/layouts/AdminLayout"));
const DashboardPage = lazy(
  () => import("@/features/dashboard/pages/DashBoardPage"),
);
const ManageRitualList = lazy(
  () => import("@/features/rituals/pages/ManageRitualList"),
);
const ManageRitualEdit = lazy(
  () => import("@/features/rituals/pages/ManageRitualEdit"),
);

const RitualCatalog = lazy(
  () => import("@/features/rituals/pages/RitualsCatalog"),
);
const RitualDetail = lazy(
  () => import("@/features/rituals/pages/RitualDetail"),
);
const LoginPage = lazy(() => import("@/features/auth/pages/LoginPage"));
const RegisterPage = lazy(() => import("@/features/auth/pages/RegisterPage"));
const ProfilePage = lazy(() => import("@/features/users/pages/ProfilePage"));
const UserLayout = lazy(() => import("@/shared/layouts/UserLayout"));
const ManageRitualCreate = lazy(
  () => import("@/features/rituals/pages/ManageRitualCreate"),
);
const UnauthorizedPage = lazy(() => import("@/shared/pages/UnauthorizePage"));
const NotFoundPage = lazy(() => import("@/shared/pages/NotFoundPage"));
const UserManagementPage = lazy(
  () => import("@/features/users/pages/UserManagementPage"),
);
// ─── Feature pages ───────────────────────────────────────

const withSuspense = (children: React.ReactNode) => (
  <Suspense fallback={<LoadingSpinner className="py-20" size="lg" />}>
    {children}
  </Suspense>
);

/**
 * React Router v6 config – createBrowserRouter (Data API).
 *
 * Public routes: /, /rituals, /rituals/:id, /login, /register
 * Protected (user/admin): /profile
 * Protected (admin only): /admin/*
 */
export const router = createBrowserRouter([
  // ─── Public layout (User) ───────────────────────────
  {
    element: <UserLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "rituals", element: <RitualCatalog /> },
      { path: "rituals/:id", element: <RitualDetail /> },
      {
        path: "login",
        element: (
          <GuestRoute>
            <LoginPage />
          </GuestRoute>
        ),
      },
      {
        path: "register",
        element: (
          <GuestRoute>
            <RegisterPage />
          </GuestRoute>
        ),
      },
      { path: "unauthorized", element: <UnauthorizedPage /> },

      // Protected: cần đăng nhập
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },

      // 404 fallback cho user layout
      { path: "*", element: <NotFoundPage /> },
    ],
  },

  // ─── Admin layout (Protected, admin only) ───────────
  {
    path: "admin",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        {withSuspense(<AdminLayout />)}
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: withSuspense(<DashboardPage />) },
      { path: "rituals", element: withSuspense(<ManageRitualList />) },
      { path: "rituals/create", element: withSuspense(<ManageRitualCreate />) },
      { path: "rituals/:id/edit", element: withSuspense(<ManageRitualEdit />) },
      { path: "users", element: withSuspense(<UserManagementPage />) },
    ],
  },
]);
