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

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Music } from "lucide-react";

const playlist = [
  {
    title: "Gianluca Dimeo & Daniel Santoro - Wings",
    url: "http://185.43.6.38/hc/preview/temp_067TG/2025.09/Gianluca%20Dimeo%20%26%20Daniel%20Santoro%20-%20Wings.mp3",
  },
  {
    title: "David Guetta - Memories",
    url: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav",
  },
];

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const audioRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = ctx.createAnalyser();
    const source = ctx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(ctx.destination);
    analyser.fftSize = 64;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const canvas = canvasRef.current;
    const cctx = canvas.getContext("2d");

    function draw() {
      requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);
      cctx.clearRect(0, 0, canvas.width, canvas.height);
      const barWidth = (canvas.width / bufferLength) * 1.5;
      let x = 0;
      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i] / 2;
        cctx.fillStyle = "#3b82f6";
        cctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 2;
      }
    }
    draw();
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playTrack = (index) => {
    setCurrentTrack(index);
    setIsPlaying(true);
    setTimeout(() => audioRef.current.play(), 100);
  };

  const nextTrack = () => playTrack((currentTrack + 1) % playlist.length);
  const prevTrack = () => playTrack((currentTrack - 1 + playlist.length) % playlist.length);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      <motion.img
        src="/unew.png"
        alt="Logo"
        className="w-32 mb-6 drop-shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      <div className="bg-gray-700/40 backdrop-blur-md rounded-2xl shadow-2xl p-6 w-full max-w-md">
        <h1 className="text-xl font-bold text-center mb-4 flex items-center justify-center gap-2">
          <Music className="w-6 h-6" /> Unew Radio
        </h1>

        <canvas ref={canvasRef} width="300" height="100" className="mb-4 rounded-md bg-black/40" />

        <div className="flex justify-center items-center gap-6">
          <button onClick={prevTrack} className="hover:text-blue-400">
            <SkipBack size={28} />
          </button>
          <button
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center shadow-lg"
          >
            {isPlaying ? <Pause size={32} /> : <Play size={32} />}
          </button>
          <button onClick={nextTrack} className="hover:text-blue-400">
            <SkipForward size={28} />
          </button>
        </div>

        <p className="text-center mt-4 text-sm text-gray-300">{playlist[currentTrack].title}</p>

        <button
          onClick={() => setShowPlaylist(!showPlaylist)}
          className="mt-4 w-full px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-500 transition"
        >
          📂 {showPlaylist ? "Скрыть плейлист" : "Открыть плейлист"}
        </button>

        <AnimatePresence>
          {showPlaylist && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 overflow-hidden bg-gray-800/50 rounded-lg divide-y divide-gray-700"
            >
              {playlist.map((track, index) => (
                <li
                  key={index}
                  onClick={() => playTrack(index)}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-700 transition ${
                    currentTrack === index ? "text-blue-400 font-semibold" : ""
                  }`}
                >
                  {track.title}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <audio ref={audioRef} src={playlist[currentTrack].url} onEnded={nextTrack} />
      </div>
    </div>
  );
}
