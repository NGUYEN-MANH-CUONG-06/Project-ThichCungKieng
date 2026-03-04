import { createBrowserRouter } from "react-router-dom";

import { UserLayout } from "@/shared/layouts/UserLayout";
import { AdminLayout } from "@/shared/layouts/AdminLayout";
import { ProtectedRoute } from "@/shared/components/common/ProtectedRoute";
import { GuestRoute } from "@/shared/components/common/GuestRoute";
import { HomePage } from "@/features/landing";

import {
  ManageRitualCreate,
  ManageRitualEdit,
  ManageRitualList,
  RitualCatalog,
  RitualDetail,
} from "@/features/rituals";
import { LoginPage, RegisterPage } from "@/features/auth";
import { UnauthorizedPage } from "@/shared/pages/UnauthorizePage";

import { NotFoundPage } from "@/shared/pages";
import { DashboardPage } from "@/features/dashboard";
import { ProfilePage, UserManagementPage } from "@/features/users";

// ─── Feature pages ───────────────────────────────────────

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
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "rituals", element: <ManageRitualList /> },
      { path: "rituals/create", element: <ManageRitualCreate /> },
      { path: "rituals/:id/edit", element: <ManageRitualEdit /> },
      { path: "users", element: <UserManagementPage /> },
    ],
  },
]);
