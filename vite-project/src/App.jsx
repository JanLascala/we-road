import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import DefaultLayout from './Layouts/DefaultLayout';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={HomePage} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;