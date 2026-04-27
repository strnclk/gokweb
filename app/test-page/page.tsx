'use client';

export default function TestPage() {
  const handleClick = () => {
    alert('Test page tıklama çalışıyor!');
    console.log('Test page button çalıştı!');
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Test Page - Tıklanabilirlik Testi</h1>
      <button 
        onClick={handleClick}
        style={{
          padding: '20px 40px',
          fontSize: '18px',
          backgroundColor: '#f59e0b',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          margin: '20px'
        }}
      >
        Test Page Button
      </button>
      
      <div style={{ marginTop: '30px' }}>
        <p>Bu sayfa /test-page route'unda</p>
        <p>Eğer bu button tıklanabiliyorsa, sorun /compare route'unda</p>
        <p>Eğer bu button da tıklanamıyorsa, genel bir sorun var</p>
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <a href="/" style={{ color: '#3b82f6', textDecoration: 'underline' }}>
          Ana Sayfaya Dön
        </a>
      </div>
    </div>
  );
}
