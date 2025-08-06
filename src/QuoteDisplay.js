import React from 'react';
import { useParams } from 'react-router-dom';

export function QuoteDisplay() {
  const { id } = useParams();
  const data = JSON.parse(localStorage.getItem(`quote-${id}`) || '{}');

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h1>Loan Quote</h1>
      <p>Loan Amount: ${data.loanAmount}</p>
      <p>Rate: {data.rate}%</p>
      <p>Term: {data.term} years</p>
      <p>Monthly Payment: ${data.monthlyPayment}</p>
      <p style={{ fontSize: '0.8rem', color: 'gray' }}>
        *APR and applicable fees included in monthly estimate.
      </p>
      <a href="tel:+1234567890">📞 Call Devante</a><br />
      <a href="https://your-application-link.com" target="_blank" rel="noreferrer">📋 Apply Now</a>
    </div>
  );
}

export default QuoteDisplay;
