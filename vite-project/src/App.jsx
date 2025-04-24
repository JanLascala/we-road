import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DefaultLayout from './Layouts/DefaultLayout';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<h1>Home</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;