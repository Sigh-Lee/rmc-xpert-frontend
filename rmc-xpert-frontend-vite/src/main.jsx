import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div style={{
      backgroundColor: '#121212',
      color: '#fff',
      fontFamily: 'sans-serif',
      padding: '2rem'
    }}>
      <h1>RMC X-PERT Client Interface</h1>
      <p>Connected to Backend: fetch(`${import.meta.env.VITE_API_URL}/api/superadmin/mentors`)
        fetch(`${import.meta.env.VITE_API_URL}/api/superadmin/approve/${id}`, { method: "PUT" })
fetch(`${import.meta.env.VITE_API_URL}/api/superadmin/delete/${id}`, { method: "DELETE" })
</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
