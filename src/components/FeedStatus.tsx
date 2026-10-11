// 피드 맨 아래 상태 상자. 모양은 prototype/feed.html 맨 아래 상태 3개와 같음
export type FeedStatusKind = 'first' | 'more' | 'end' | 'error'

type FeedStatusProps = {
  kind: FeedStatusKind
  onRetry: () => void
}

type CorgiMood = 'happy' | 'sleepy' | 'oops'

// 웰시코기 얼굴. 불러오는 중은 웃는 얼굴, 더 없음은 자는 얼굴, 오류는 땀 흘리는 얼굴
function Corgi({ mood }: { mood: CorgiMood }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true">
      {/* 귀 */}
      <path d="M38 100 L50 18 Q56 10 64 18 L98 72 Z" fill="#e8913a" />
      <path d="M162 100 L150 18 Q144 10 136 18 L102 72 Z" fill="#e8913a" />
      <path d="M54 84 L59 36 L86 72 Z" fill="#f6c2a8" />
      <path d="M146 84 L141 36 L114 72 Z" fill="#f6c2a8" />
      {/* 얼굴, 이마의 흰 줄과 주둥이, 볼 */}
      <ellipse cx="100" cy="118" rx="72" ry="62" fill="#e8913a" />
      <path d="M92 58 Q100 54 108 58 L116 114 Q100 120 84 114 Z" fill="#fff6ea" />
      <ellipse cx="100" cy="146" rx="50" ry="34" fill="#fff6ea" />
      <ellipse cx="54" cy="138" rx="12" ry="8" fill="#ff8fa3" opacity="0.5" />
      <ellipse cx="146" cy="138" rx="12" ry="8" fill="#ff8fa3" opacity="0.5" />
      {/* 코와 입 */}
      <ellipse cx="100" cy="132" rx="11" ry="8" fill="#3a2a22" />
      <path
        d="M100 139 Q100 150 89 150 M100 139 Q100 150 111 150"
        stroke="#3a2a22"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {mood === 'happy' && (
        <>
          <circle cx="72" cy="112" r="8" fill="#2b1d17" />
          <circle cx="128" cy="112" r="8" fill="#2b1d17" />
          <circle cx="75" cy="109" r="2.5" fill="#fff" />
          <circle cx="131" cy="109" r="2.5" fill="#fff" />
          <path d="M94 151 Q100 168 106 151 Z" fill="#ff7a8a" />
        </>
      )}
      {mood === 'sleepy' && (
        <path
          d="M62 112 Q72 121 82 112 M118 112 Q128 121 138 112"
          stroke="#2b1d17"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      )}
      {mood === 'oops' && (
        <>
          <circle cx="72" cy="114" r="7" fill="#2b1d17" />
          <circle cx="128" cy="114" r="7" fill="#2b1d17" />
          <path
            d="M60 100 L82 93 M140 100 L118 93"
            stroke="#2b1d17"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path d="M162 70 Q172 88 162 96 Q152 88 162 70 Z" fill="#7fc4ea" />
        </>
      )}
    </svg>
  )
}

// 불러오는 중 발자국 점 3개
function Paws() {
  return (
    <div className="paws" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  )
}

function FeedStatus({ kind, onRetry }: FeedStatusProps) {
  return (
    <div className="state" role="status">
      {kind === 'first' && (
        <>
          <Corgi mood="happy" />
          <Paws />
          피드를 불러오고 있어요
        </>
      )}
      {kind === 'more' && (
        <>
          <Corgi mood="happy" />
          <Paws />
          더 불러오는 중…
        </>
      )}
      {kind === 'end' && (
        <>
          <Corgi mood="sleepy" />
          모든 게시물을 봤어요
        </>
      )}
      {kind === 'error' && (
        <>
          <Corgi mood="oops" />
          불러오지 못했어요
          <button className="retry" type="button" onClick={onRetry}>
            다시 시도
          </button>
        </>
      )}
    </div>
  )
}

export default FeedStatus
