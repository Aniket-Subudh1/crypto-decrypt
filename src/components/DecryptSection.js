import React from 'react';
import OutputDisplay from './OutputDisplay';

const DecryptSection = ({
  encryptedText,
  decryptKey,
  decryptedResult,
  onEncryptedTextChange,
  onDecryptKeyChange
}) => {
  return (
    <div className="section">
      <h1>Crypto-JS decryptAES</h1>
      <div className="form-group">
        <input
          className="form-control"
          value={encryptedText}
          onChange={onEncryptedTextChange}
          style={{width:'40%', height: 40}}
          placeholder="Encrypted String"
        />
        <input
          className="form-control"
          value={decryptKey}
          onChange={onDecryptKeyChange}
          style={{width:'40%', height: 40}}
          placeholder="Key"
        />
      </div>
      <OutputDisplay output={decryptedResult} />
    </div>
  );
};

export default DecryptSection;