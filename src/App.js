import React, { useState, useCallback } from 'react';
import EncryptSection from './components/EncryptSection';
import DecryptSection from './components/DecryptSection';
import { encryptAES, decryptAES } from './utils/cryptoUtils';
import './styles/App.css';

function App() {
  const [state, setState] = useState({
    inputText: '',
    inputKey: '',
    encryptedBase64Input: '',
    encryptedBase64: '',
    decryptKey: '',
    outputText: ''
  });

  const handleInputTextChange = useCallback((event) => {
    const newInputText = event.target.value;
    setState(prevState => {
      const newEncrypted = encryptAES(newInputText, prevState.inputKey);
      return {
        ...prevState,
        inputText: newInputText,
        encryptedBase64Input: newInputText && prevState.inputKey ? newEncrypted : ''
      };
    });
  }, []);

  const handleInputKeyChange = useCallback((event) => {
    const newInputKey = event.target.value;
    setState(prevState => {
      const newEncrypted = encryptAES(prevState.inputText, newInputKey);
      return {
        ...prevState,
        inputKey: newInputKey,
        encryptedBase64Input: prevState.inputText && newInputKey ? newEncrypted : ''
      };
    });
  }, []);

  const handleEncryptedTextChange = useCallback((event) => {
    const newEncryptedText = event.target.value;
    setState(prevState => {
      const newDecrypted = prevState.decryptKey ? 
        decryptAES(newEncryptedText, prevState.decryptKey) : '';
      return {
        ...prevState,
        encryptedBase64: newEncryptedText,
        outputText: newDecrypted
      };
    });
  }, []);

  const handleDecryptKeyChange = useCallback((event) => {
    const newDecryptKey = event.target.value;
    setState(prevState => {
      const newDecrypted = prevState.encryptedBase64 ? 
        decryptAES(prevState.encryptedBase64, newDecryptKey) : '';
      return {
        ...prevState,
        decryptKey: newDecryptKey,
        outputText: newDecrypted
      };
    });
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        
        <h1>Crypto-Js Decryption/Encryption</h1>
      </div>
      <EncryptSection
        inputText={state.inputText}
        inputKey={state.inputKey}
        encryptedResult={state.encryptedBase64Input}
        onInputTextChange={handleInputTextChange}
        onInputKeyChange={handleInputKeyChange}
      />
      
      <DecryptSection
        encryptedText={state.encryptedBase64}
        decryptKey={state.decryptKey}
        decryptedResult={state.outputText}
        onEncryptedTextChange={handleEncryptedTextChange}
        onDecryptKeyChange={handleDecryptKeyChange}
      />

      <small className="small-text">
        <a 
          href="https://github.com/Aniket-Subudh1/crypto-decrypt" 
          target="_blank"
          rel="noopener noreferrer"
        >
          (View source code)
        </a>
      </small>
    </div>
  );
}

export default App;
