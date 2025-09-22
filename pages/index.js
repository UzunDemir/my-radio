import { useState, useRef, useEffect } from 'react';

export default function Home() {
  const playlist = [
    "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Gianluca%20Dimeo%20%26%20Daniel%20Santoro%20-%20Wings.mp3",
    "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Omer%20Said%20-%20Modern%20Talking.mp3",
    "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Omer%20Said%20-%20Notte%20Senza%20Te.mp3",
    "http://185.43.6.38/hc/preview/temp_067TG/2025.08/Omer%20Said%20-%20Left%20In%20The%20Rain.mp3",
    "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Omer%20Said%20-%20Fade%20With%20You.mp3",
    "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Omer%20Said%20-%20Amore%20Mio.mp3"

    // добавьте сюда другие ссылки
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);

  // Генерируем прокси-ссылку
  const getProxyUrl = (url) => `/api/proxy?url=${encodeURIComponent(url)}`;

  // Автоплей следующей песни
  const handleEnded = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  };

  // Автообновление src при смене индекса
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img src="/unew.png" alt="Logo" width={150} />
      <h1>Мини-радио через прокси</h1>

      <div style={{ margin: '20px' }}>
        <audio
          controls
          ref={audioRef}
          onEnded={handleEnded}
          style={{ width: '80%' }}
        >
          <source src={getProxyUrl(playlist[currentIndex])} type="audio/mpeg" />
          Ваш браузер не поддерживает аудио.
        </audio>
      </div>

      <h2>Плейлист</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {playlist.map((url, idx) => (
          <li key={idx} style={{ margin: '10px' }}>
            <button
              onClick={() => setCurrentIndex(idx)}
              style={{
                padding: '8px 16px',
                background: idx === currentIndex ? '#4caf50' : '#2196f3',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              {decodeURIComponent(url.split('/').pop())}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
