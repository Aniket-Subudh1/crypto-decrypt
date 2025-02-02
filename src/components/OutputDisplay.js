import React from 'react';

const OutputDisplay = ({ output }) => {
  return (
    <pre className="output">
      <code>{output}</code>
    </pre>
  );
};

export default OutputDisplay;