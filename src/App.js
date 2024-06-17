// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import LoginForm from './LoginForm';
// import HomePage from './HomePage';
// import Dashboard from './Dashboard';

// // Dummy data for user authentication
// const users = [
//   { username: 'user1', password: 'password1' },
//   { username: 'user2', password: 'password2' },
// ];

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = (username, password) => {
//     const user = users.find(
//       (user) => user.username === username && user.password === password
//     );

//     if (user) {
//       setIsAuthenticated(true);
//     } else {
//       alert('Invalid username or password');
//     }
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             isAuthenticated ? <Navigate to="/home" /> : <LoginForm onLogin={handleLogin} />
//           }
//         />
//         <Route
//           path="/home"
//           element={<HomePage onLogout={handleLogout} />}
//         />
//         <Route
//           path="/dashboard"
//           element={
//             isAuthenticated ? <Dashboard /> : <Navigate to="/" />
//           }
//         />
//         <Route
//           path="*"
//           element={<Navigate to="/" />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;











// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import LoginForm from './LoginForm';
// import HomePage from './HomePage';
// import Dashboard from './Dashboard';

// const users = [
//   { username: 'user1', password: 'password1' },
//   { username: 'user2', password: 'password2' },
// ];

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = (username, password) => {
//     const user = users.find(
//       (user) => user.username === username && user.password === password
//     );

//     if (user) {
//       setIsAuthenticated(true);
//     } else {
//       alert('Invalid username or password');
//     }
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route exact
//           path="/"
//           element={
//             isAuthenticated ? <Navigate to="/home" /> : <LoginForm onLogin={handleLogin} />
//           }
//         />
//         <Route exact
//           path="/home"
//           element={<HomePage onLogout={handleLogout} />}
//         />
//         <Route exact
//           path="/dashboard"
//           element={
//             isAuthenticated ? <Dashboard /> : <Navigate to="/" />
//           }
//         />
//         <Route
//           path="*"
//           element={<Navigate to="/" />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;











import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import HomePage from './HomePage';
import Dashboard from './Dashboard';

const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <LoginForm onLogin={handleLogin} error={loginError} />
            )
          }
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <HomePage onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard onLogout={handleLogout}/>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;