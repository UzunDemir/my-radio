// import { useState, useRef, useEffect } from 'react';

// export default function Home() {
//   const playlist = [
//     "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Gianluca%20Dimeo%20%26%20Daniel%20Santoro%20-%20Wings.mp3",
//     "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Omer%20Said%20-%20Modern%20Talking.mp3",
//     "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Omer%20Said%20-%20Notte%20Senza%20Te.mp3",
//     "http://185.43.6.38/hc/preview/temp_067TG/2025.08/Omer%20Said%20-%20Left%20In%20The%20Rain.mp3",
//     "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Omer%20Said%20-%20Fade%20With%20You.mp3",
//     "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Omer%20Said%20-%20Amor%20Mio.mp3",
//     "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Milky%20Chance%20-%20Wonderful%20Life.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Jambeats%20-%20Rain%20Of%20Love.mp3",
//    "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Julie%20Bergan%20-%20Make%20Myself%20Happy.mp3",
//    "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Gravagerz%20-%20We%20R%20Who%20We%20R.mp3",
//    "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Timofeew%20%26%20Kuryanova%20-%20%D0%9F%D0%BE%20%D0%91%D0%B0%D1%80%D0%B0%D0%B1%D0%B0%D0%BD%D1%83.mp3",
//    "http://185.43.6.38/hc/preview/temp_067TG/2025.09/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%20%D0%96%D0%B4%D0%B0%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%20-%20%D0%9A%D0%B0%D1%80%D1%82%D0%B0%D0%BC%D0%B8%20%D0%9A%D1%80%D0%B0%D0%BF%D0%BB%D0%B5%D0%BD%D1%8B%D0%BC%D0%B8.mp3",
//    "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Akmalov%20-%20%D0%94%D0%BB%D1%8F%20%D0%A2%D0%B5%D0%B1%D1%8F.mp3",
//    "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Batrai%20-%20%D0%A0%D0%B0%D0%BD%D0%B8%D0%BB%D0%B0.mp3",
//    "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Cardi%20B%20-%20Salute.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/%D0%95%D0%BB%D0%BA%D0%B0%20-%20%D0%9F%D0%BE%D0%BD%D0%B5%D0%B4%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Nemiga%20-%20%D0%A0%D0%B5%D0%BA%D0%B8%20%D0%98%20%D0%9C%D0%BE%D1%80%D1%8F.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Nemiga%20-%20%D0%9D%D0%B0%D1%88%D0%B0%20%D0%92%D0%B5%D1%81%D0%BD%D0%B0.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Nemiga%20-%20%D0%9D%D0%B5%20%D0%A1%D0%B1%D1%8B%D0%BB%D0%BE%D1%81%D1%8C.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F%20%D0%A0%D0%BE%D0%BB%D1%8C%20-%20%D0%A2%D0%B0%D0%BC%D0%BC%D0%BC.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Cardi%20B%20-%20Trophies.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Cardi%20B%20-%20Errtime.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Nemiga%20-%20%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%20%D0%92%D0%B8%D1%81%D0%BA%D0%B8.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Alham%20-%20Suyemin.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Lady%20Bro%20-%20%D0%9C%D1%8B%20%D0%9F%D0%BE%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%B5%20%D0%9F%D1%8B%D0%BB%D1%8C%D1%8E.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/A-Sultan%20-%20Broken%20Frquency.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Jambeats%20-%20Autumn%20Love.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Zakirovec%20-%20Hold%20Me.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Dova%20Music%20-%20Nights.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Reteox%20-%20Fading%20Love.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Davvi%20-%20Do%20You%20Hear.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Reyvi%20-%20Crying%20In%20The%20Dark.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Usman%20-%20I%20Miss%20You.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Yuboty%20-%20So%20Far%20Away.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Bakhtiyorov%20-%20Velvet%20Take%20Me%20Higher.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Xezzo%20-%20Without%20You.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Jam%20Music%20-%20Sous%20La%20Lune.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Roose%20-%20Betrayed%20Love.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Sarah%20Thompson%20-%20Sunstroke.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Ashnikko%20-%20Smoochie%20Girl.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Tropical%20Tide%20-%20Easy.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Jasoor%20-%20No%20Way.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Dova%20Music%20-%20Love%20Is%20Like%20An%20Itching%20In%20My%20Heart.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Milena%20-%20%D0%97%D0%B0%20%D0%A2%D0%BE%D0%B1%D0%BE%D0%B9.mp3",
//   "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Asgeir%20-%20Ferris%20Wheel.mp3"

//     // добавьте сюда другие ссылки
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const audioRef = useRef(null);

//   // Генерируем прокси-ссылку
//   const getProxyUrl = (url) => `/api/proxy?url=${encodeURIComponent(url)}`;

//   // Автоплей следующей песни
//   const handleEnded = () => {
//     setCurrentIndex((prev) => (prev + 1) % playlist.length);
//   };

//   // Автообновление src при смене индекса
//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.load();
//       audioRef.current.play().catch(() => {});
//     }
//   }, [currentIndex]);

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <img src="/unew.png" alt="Logo" width={150} />
//       <h1>Мини-радио через прокси</h1>

//       <div style={{ margin: '20px' }}>
//         <audio
//           controls
//           ref={audioRef}
//           onEnded={handleEnded}
//           style={{ width: '80%' }}
//         >
//           <source src={getProxyUrl(playlist[currentIndex])} type="audio/mpeg" />
//           Ваш браузер не поддерживает аудио.
//         </audio>
//       </div>

//       <h2>Плейлист</h2>
//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {playlist.map((url, idx) => (
//           <li key={idx} style={{ margin: '10px' }}>
//             <button
//               onClick={() => setCurrentIndex(idx)}
//               style={{
//                 padding: '8px 16px',
//                 background: idx === currentIndex ? '#4caf50' : '#2196f3',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '5px',
//                 cursor: 'pointer'
//               }}
//             >
//               {decodeURIComponent(url.split('/').pop())}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import { useState, useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const playlist = [
    "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Gianluca%20Dimeo%20%26%20Daniel%20Santoro%20-%20Wings.mp3",
    "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Omer%20Said%20-%20Modern%20Talking.mp3",
    "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Omer%20Said%20-%20Notte%20Senza%20Te.mp3"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);
  const [frequencyData, setFrequencyData] = useState(new Array(32).fill(0));

  const getProxyUrl = (url) => `/api/proxy?url=${encodeURIComponent(url)}`;

  const handleEnded = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  useEffect(() => {
    let audioCtx, analyser, dataArray, source;

    if (audioRef.current) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioCtx.createAnalyser();
      source = audioCtx.createMediaElementSource(audioRef.current);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);

      analyser.fftSize = 64;
      const bufferLength = analyser.frequencyBinCount;
      dataArray = new Uint8Array(bufferLength);

      const animate = () => {
        analyser.getByteFrequencyData(dataArray);
        setFrequencyData(Array.from(dataArray));
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, [currentIndex]);

  const chartData = {
    labels: frequencyData.map((_, i) => i),
    datasets: [
      {
        label: 'Frequency',
        data: frequencyData,
        backgroundColor: '#4caf50'
      }
    ]
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#121212', color: 'white', padding: '20px' }}>
      <img src="/unew.png" alt="Logo" width={150} style={{ marginBottom: '20px' }} />
      <h1 style={{ fontFamily: 'Arial, sans-serif' }}>Современный Плейер</h1>

      <div style={{ margin: '20px auto', width: '80%' }}>
        <audio controls ref={audioRef} onEnded={handleEnded} style={{ width: '100%' }}>
          <source src={getProxyUrl(playlist[currentIndex])} type="audio/mpeg" />
          Ваш браузер не поддерживает аудио.
        </audio>
      </div>

      <div style={{ maxWidth: '80%', margin: 'auto' }}>
        <Bar
          data={chartData}
          options={{
            animation: { duration: 0 },
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { x: { type: 'category' }, y: { beginAtZero: true } }
          }}
        />
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

