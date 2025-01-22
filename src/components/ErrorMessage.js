import React from 'react';

// Component to show error messages
function ErrorMessage({ message }) {
  if (!message) return null; // Show nothing if no error

  return (
    <div className="text-red-500 bg-red-100 border border-red-400 rounded-md p-3 mt-3">
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
