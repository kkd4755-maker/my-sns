import Feed from './components/Feed'
import './App.css'

function App() {
  return (
    <div className="phone">
      <header className="top-bar">
        <h1>
          멍냥일기
          {/* 웃는 웰시코기 얼굴. prototype/feed.html 의 그림과 같음 */}
          <svg viewBox="0 0 200 200" aria-hidden="true">
            <path d="M38 100 L50 18 Q56 10 64 18 L98 72 Z" fill="#e8913a" />
            <path d="M162 100 L150 18 Q144 10 136 18 L102 72 Z" fill="#e8913a" />
            <path d="M54 84 L59 36 L86 72 Z" fill="#f6c2a8" />
            <path d="M146 84 L141 36 L114 72 Z" fill="#f6c2a8" />
            <ellipse cx="100" cy="118" rx="72" ry="62" fill="#e8913a" />
            <path d="M92 58 Q100 54 108 58 L116 114 Q100 120 84 114 Z" fill="#fff6ea" />
            <ellipse cx="100" cy="146" rx="50" ry="34" fill="#fff6ea" />
            <ellipse cx="54" cy="138" rx="12" ry="8" fill="#ff8fa3" opacity="0.5" />
            <ellipse cx="146" cy="138" rx="12" ry="8" fill="#ff8fa3" opacity="0.5" />
            <ellipse cx="100" cy="132" rx="11" ry="8" fill="#3a2a22" />
            <path
              d="M100 139 Q100 150 89 150 M100 139 Q100 150 111 150"
              stroke="#3a2a22"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="72" cy="112" r="8" fill="#2b1d17" />
            <circle cx="128" cy="112" r="8" fill="#2b1d17" />
            <circle cx="75" cy="109" r="2.5" fill="#fff" />
            <circle cx="131" cy="109" r="2.5" fill="#fff" />
            <path d="M94 151 Q100 168 106 151 Z" fill="#ff7a8a" />
          </svg>
        </h1>
      </header>
      <Feed />
    </div>
  )
}

export default App
