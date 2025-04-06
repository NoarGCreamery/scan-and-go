import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function QRGeneratorPage() {
  const [socialLink, setSocialLink] = useState('');
  const [qrVisible, setQrVisible] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleGenerate = () => {
    if (!socialLink || !agreed) return;
    setQrVisible(true);
  };

  const handleDownload = () => {
    const canvas = document.querySelector('canvas');
    const url = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.download = 'my-qr-code.png';
    link.href = url;
    link.click();
  };

  return (
    <div style={{fontFamily:'Arial',textAlign:'center',padding:'20px'}}>
      <h1>Scan & Go</h1>
      <p>Your moment to stand out starts here. Generate and share your custom QR code instantly — no logins, no data tracking, 100% free.</p>
      <input type="text" placeholder="Enter your social media link" value={socialLink} onChange={(e) => setSocialLink(e.target.value)} />
      <br/>
      <label>
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
        I agree Scan & Go is not responsible for QR code usage.
      </label>
      <br/>
      <button onClick={handleGenerate}>Generate QR Code</button>
      {qrVisible && (
        <div>
          <QRCodeCanvas value={socialLink} size={256} />
          <p>Happy Scanning!</p>
          <button onClick={handleDownload}>Download QR Code</button>
        </div>
      )}
    </div>
  );
}