import React from 'react';
import OutputDisplay from './OutputDisplay';

const EncryptSection = ({ 
  inputText, 
  inputKey, 
  encryptedResult, 
  onInputTextChange, 
  onInputKeyChange 
}) => {
  return (
    <div className="section">
      <h1>Crypto-JS encryptAES</h1>
      <div className="form-group">
        <input
          className="form-control"
          value={inputText}
          onChange={onInputTextChange}
          style={{width:'40%', height: 40}}
          placeholder="Input Text"
        />
        <input
          className="form-control"
          value={inputKey}
          onChange={onInputKeyChange}
          style={{width:'40%', height: 40}}
          placeholder="Key"
        />
      </div>
      <OutputDisplay output={encryptedResult} />
    </div>
  );
};

export default EncryptSection;