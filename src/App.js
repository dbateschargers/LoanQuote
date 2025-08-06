import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuoteForm from './QuoteForm';
import QuoteDisplay from './QuoteDisplay';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<QuoteForm />} />
        <Route path='/quote/:id' element={<QuoteDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
