import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import Groceries from './components/Groceries/Groceries.jsx';
import Pages from './components/Pages/Pages.jsx';
import User from './components/User/User.jsx';
import Login from './components/login/login.jsx';
import AddItems from './components/AddItems/AddItems.jsx';

// second way to implement route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="Groceries" element={<Groceries />} />
      <Route path="Pages" element={<Pages />} />
      <Route path="user/:userId" element={<User />} />
      <Route path="login" element={<Login />} />
      <Route path="AddItems" element={<AddItems/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
