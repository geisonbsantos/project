import { useState } from "react";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { Login } from "./components/login";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/profile" element={<ProtectedLayout />} />

        <Route path="/login" element={<Login/>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
