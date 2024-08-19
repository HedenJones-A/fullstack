import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './component/Signin';
import Signup from './component/Signup';
import Home from './component/Home';
import Studio from './component/Studio';
import Camers from './component/Camers';
import Software from './component/Software';
import Mic from './component/Mics';
import Lights from './component/Lights';
import Editor from './component/Editor';
import Ai from './component/Ai';
import Cart from './component/Cart'
import Payment from './component/Payment' 
import { useState } from 'react';
import ProtectedRoute from './component/ProtectedRoute'; // Import ProtectedRoute
import { UserProvider } from './component/UserContext';
import Profile from './component/Profile';
import Booking from './component/Booking';

function App() {
  const [user, setUser] = useState(null);

  // Simulate user login
  const handleLogin = (userData) => {
    setUser(userData); // Set user data after successful login
  };

  return (
    <Router>
      <UserProvider value={{user,setUser}}>
      <Routes>
        <Route
          exact
          path='/'
          element={<Signin onLogin={handleLogin} />}
        />
        <Route
          exact
          path='/security/register'
          element={<Signup />}
        />
        <Route
          exact
          path='/home'
          element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path='/studio'
          element={
            <ProtectedRoute user={user}>
              <Studio />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path='/camera'
          element={
            <ProtectedRoute user={user}>
              <Camers />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path='/soft'
          element={
            <ProtectedRoute user={user}>
              <Software />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path='/mic'
          element={
            <ProtectedRoute user={user}>
              <Mic />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path='/lig'
          element={
            <ProtectedRoute user={user}>
              <Lights />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path='/editor'
          element={
            <ProtectedRoute user={user}>
              <Editor />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path='/chatbot'
          element={
            <ProtectedRoute user={user}>
              <Ai />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path='/cart/:id'
          element={
            <ProtectedRoute user={user}>
             <Cart/>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path='/pay/:total'
          element={
            <ProtectedRoute user={user}>
              <Payment/>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path='/management/mybookings'
          element={
            <ProtectedRoute user={user}>
              <Booking/>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path='/management/profile'
          element={
            <ProtectedRoute user={user}>
              <Profile/>
            </ProtectedRoute>
          }
        />
        {/* <Route exact path='/cart/:id' element={<Cart/>}/> <Route exact path='/pay/:total' element={<Payment/>}/> */}
      </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
