import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { ProtectedRoute } from "./helpers/ProtectedRoute";
import AppLayout from "./pages/AppLayout";
import Layout from "./pages/Layout/Layout";
import AllIssues from "./pages/all-issues/AllIssues";

const RouterConfigs = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          />
          <Route
            path="all-issues"
            element={
              <ProtectedRoute>
                <AllIssues />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />}></Route>

        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default RouterConfigs;
