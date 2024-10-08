import React from 'react';
import { Navigate } from 'react-router-dom';

// ProtectedRoute Component
function ProtectedRoute({ user, children }) {
  const token=localStorage.getItem("token")
  const log=JSON.stringify(token)
  if (!user) {
    // If user is not logged in, redirect to sign-in page
    return <Navigate to="/"/>;
  }

  // If user is logged in, render the child components
  return children;
}

export default ProtectedRoute;
