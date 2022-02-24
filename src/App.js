import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

const LazyContactAdd = React.lazy(() => import('./Components/AddContacts'));
const LazyContactList = React.lazy(() => import('./Components/ListContacts'));

function App() {
  return (
    <Suspense fallback={<p> Loading...</p>}>
      <Routes>
        <Route path="/add-contact" element={<LazyContactAdd />} />
        <Route path="/" element={<LazyContactList />} />
      </Routes>
    </Suspense>
  );
}

export default App;
