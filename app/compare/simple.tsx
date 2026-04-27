'use client';

export default function SimpleTest() {
  const handleClick = () => {
    alert('Tıklandı!');
    console.log('Button çalıştı!');
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Tıklanabilirlik Testi</h1>
      <button 
        onClick={handleClick}
        style={{
          padding: '20px 40px',
          fontSize: '18px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Bana Tıkla
      </button>
    </div>
  );
}
