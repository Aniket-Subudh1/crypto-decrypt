import * as CryptoJS from 'crypto-js';


export const encryptAES = (text, key) => {
  return CryptoJS.AES.encrypt(text, key).toString();
};

export const decryptAES = (encryptedBase64, key) => {
  const decrypted = CryptoJS.AES.decrypt(encryptedBase64, key);
  if (decrypted) {
    try {
      const str = decrypted.toString(CryptoJS.enc.Utf8);
      if (str.length > 0) {
        return str;
      }
      return 'error 1: Decryption produced empty string';
    } catch (e) {
      return 'error 2: Decryption failed';
    }
  }
  return 'error 3: No decryption result';
};
