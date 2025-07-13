import React from 'react';

export default function SubmittedData({ data }) {
  return (
    <div className="submitted">
      <h2>Submitted Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
