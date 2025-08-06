import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuoteForm() {
  const [loanAmount, setLoanAmount] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('30');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const calculatePayment = (P, r, n) => {
    const monthlyRate = r / 100 / 12;
    const months = n * 12;
    const payment = (P * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    return payment.toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const monthlyPayment = calculatePayment(+loanAmount, +rate, +term);
    const quoteId = Math.random().toString(36).substring(2, 10);
    localStorage.setItem(
      `quote-${quoteId}`,
      JSON.stringify({ loanAmount, rate, term, monthlyPayment, name })
    );
    navigate(`/quote/${quoteId}`);
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h1>Create New Loan Quote</h1>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder='Client Name' required /><br />
        <input value={loanAmount} onChange={e => setLoanAmount(e.target.value)} placeholder='Loan Amount ($)' required /><br />
        <input value={rate} onChange={e => setRate(e.target.value)} placeholder='Rate (%)' required /><br />
        <select value={term} onChange={e => setTerm(e.target.value)}>
          <option value='15'>15 Years</option>
          <option value='30'>30 Years</option>
        </select><br />
        <button type='submit'>Generate Quote</button>
      </form>
    </div>
  );
}
