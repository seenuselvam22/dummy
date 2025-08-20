import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f5f5"
    }}>
      <h1 style={{ color: "#333" }}>🎉 Welcome to Seenu 🎉</h1>
      <p style={{ color: "#555", fontSize: "18px" }}>
        This is a simple welcome page built with React + Vite 🚀
      </p>
    </div>
  );
}

export default App
