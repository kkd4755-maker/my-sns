export type Post = {
  id: number
  author: string
  content: string
  images: string[]
  created_at: string
}

// 반려동물 일상 샘플 게시물 30개. 1번이 가장 최신 글
export const samplePosts: Post[] = [
  {
    id: 1,
    author: '코코네집사',
    content: '비 그친 오후, 코코랑 공원 한 바퀴. 웅덩이만 보면 꼭 밟고 지나가요',
    images: [
      'https://picsum.photos/seed/cocopuddle1/600/600',
      'https://picsum.photos/seed/cocopuddle2/600/600',
      'https://picsum.photos/seed/cocopuddle3/600/600',
      'https://picsum.photos/seed/cocopuddle4/600/600',
    ],
    created_at: '2026-10-10T14:20:00+09:00',
  },
  {
    id: 2,
    author: '보리엄마',
    content: '햇볕 드는 창가는 오늘도 보리 차지',
    images: [
      'https://picsum.photos/seed/borisunnap/600/600',
    ],
    created_at: '2026-10-10T13:33:00+09:00',
  },
  {
    id: 3,
    author: '두부랑산책',
    content: '오늘은 두부가 우리 집에 온 지 딱 3년 되는 날이에요. 처음 데려왔을 때는 손바닥만 해서 계단도 못 올라갔는데, 이제는 소파 위까지 한 번에 뛰어올라요. 기념으로 강아지용 케이크를 사 왔더니 촛불 끄기도 전에 한 입 먹어 버렸어요. 앞으로도 지금처럼 건강하게만 지내 주라, 두부야.',
    images: [
      'https://picsum.photos/seed/dubucake1/600/600',
      'https://picsum.photos/seed/dubucake2/600/600',
    ],
    created_at: '2026-10-10T11:58:00+09:00',
  },
  {
    id: 4,
    author: '치즈냥집사',
    content: '택배 상자를 뜯자마자 들어가 앉은 치즈. 상자값이 더 비싼 고양이',
    images: [
      'https://picsum.photos/seed/cheesebox1/600/600',
      'https://picsum.photos/seed/cheesebox2/600/600',
      'https://picsum.photos/seed/cheesebox3/600/600',
    ],
    created_at: '2026-10-10T09:48:00+09:00',
  },
  {
    id: 5,
    author: '콩이아빠',
    content: '콩이 첫 미용 끝! 엉덩이가 더 동그래졌어요',
    images: [
      'https://picsum.photos/seed/kongtrim1/600/600',
      'https://picsum.photos/seed/kongtrim2/600/600',
    ],
    created_at: '2026-10-10T08:46:00+09:00',
  },
  {
    id: 6,
    author: '마루누나',
    content: '산책 가자는 말에 현관으로 전력 질주하는 마루',
    images: [
      'https://picsum.photos/seed/marudash/600/600',
    ],
    created_at: '2026-10-10T05:46:00+09:00',
  },
  {
    id: 7,
    author: '모찌엄마',
    content: '모찌가 처음으로 "손"을 했어요. 간식 앞에서만 하는 건 비밀',
    images: [
      'https://picsum.photos/seed/mochipaw1/600/600',
      'https://picsum.photos/seed/mochipaw2/600/600',
      'https://picsum.photos/seed/mochipaw3/600/600',
    ],
    created_at: '2026-10-10T01:46:00+09:00',
  },
  {
    id: 8,
    author: '호두네',
    content: '호두랑 바닷가 첫 나들이. 파도가 올 때마다 깜짝 놀라서 뒷걸음질',
    images: [
      'https://picsum.photos/seed/hodubeach1/600/600',
      'https://picsum.photos/seed/hodubeach2/600/600',
      'https://picsum.photos/seed/hodubeach3/600/600',
      'https://picsum.photos/seed/hodubeach4/600/600',
    ],
    created_at: '2026-10-10T00:31:00+09:00',
  },
  {
    id: 9,
    author: '감자형',
    content: '감자는 오늘도 이불 속에서 안 나오기로 했대요',
    images: [
      'https://picsum.photos/seed/gamjablanket/600/600',
    ],
    created_at: '2026-10-09T19:31:00+09:00',
  },
  {
    id: 10,
    author: '냥냥펀치',
    content: '창밖 새 구경하다가 채터링 하는 우리 집 냥이. 소리가 너무 귀여워요',
    images: [
      'https://picsum.photos/seed/nyangbird1/600/600',
      'https://picsum.photos/seed/nyangbird2/600/600',
    ],
    created_at: '2026-10-09T17:41:00+09:00',
  },
  {
    id: 11,
    author: '코코네집사',
    content: '코코 짧은 다리로 계단 오르기 도전. 결국 안아서 올라감',
    images: [
      'https://picsum.photos/seed/cocostairs1/600/600',
      'https://picsum.photos/seed/cocostairs2/600/600',
      'https://picsum.photos/seed/cocostairs3/600/600',
    ],
    created_at: '2026-10-09T10:41:00+09:00',
  },
  {
    id: 12,
    author: '보리엄마',
    content: '낙엽 밟는 소리가 좋은지 한참을 같은 자리에서 뱅글뱅글',
    images: [
      'https://picsum.photos/seed/borileaves1/600/600',
      'https://picsum.photos/seed/borileaves2/600/600',
      'https://picsum.photos/seed/borileaves3/600/600',
      'https://picsum.photos/seed/borileaves4/600/600',
    ],
    created_at: '2026-10-09T09:11:00+09:00',
  },
  {
    id: 13,
    author: '두부랑산책',
    content: '동네 강아지 친구들이랑 공놀이. 두부는 공보다 친구 엉덩이 냄새에 더 관심',
    images: [
      'https://picsum.photos/seed/dubufriends1/600/600',
      'https://picsum.photos/seed/dubufriends2/600/600',
    ],
    created_at: '2026-10-09T05:51:00+09:00',
  },
  {
    id: 14,
    author: '치즈냥집사',
    content: '식빵 굽는 치즈. 앞발을 쏙 넣으니 진짜 식빵 같아요',
    images: [
      'https://picsum.photos/seed/cheeseloaf/600/600',
    ],
    created_at: '2026-10-08T23:51:00+09:00',
  },
  {
    id: 15,
    author: '콩이아빠',
    content: '새로 산 장난감 오리, 5분 만에 꽥 소리 나는 부분만 쏙 빼놨어요',
    images: [
      'https://picsum.photos/seed/kongduck1/600/600',
      'https://picsum.photos/seed/kongduck2/600/600',
      'https://picsum.photos/seed/kongduck3/600/600',
    ],
    created_at: '2026-10-08T21:21:00+09:00',
  },
  {
    id: 16,
    author: '마루누나',
    content: '마루 털갈이 시즌 시작. 빗질 한 번에 강아지 한 마리가 더 나와요. 청소기를 하루에 세 번 돌려도 바닥에 털이 굴러다니는데, 그래도 빗질해 주면 눈을 스르르 감는 모습이 좋아서 오늘도 빗을 들었어요.',
    images: [
      'https://picsum.photos/seed/marubrush1/600/600',
      'https://picsum.photos/seed/marubrush2/600/600',
    ],
    created_at: '2026-10-08T11:21:00+09:00',
  },
  {
    id: 17,
    author: '모찌엄마',
    content: '모찌 생애 첫 눈. 코에 눈 묻은 채로 멍하니 서 있어요',
    images: [
      'https://picsum.photos/seed/mochisnow1/600/600',
      'https://picsum.photos/seed/mochisnow2/600/600',
      'https://picsum.photos/seed/mochisnow3/600/600',
      'https://picsum.photos/seed/mochisnow4/600/600',
    ],
    created_at: '2026-10-08T09:56:00+09:00',
  },
  {
    id: 18,
    author: '호두네',
    content: '호두 낮잠 자세가 매일 바뀌어요. 오늘은 배 보이고 만세',
    images: [
      'https://picsum.photos/seed/hodusleep/600/600',
    ],
    created_at: '2026-10-08T05:26:00+09:00',
  },
  {
    id: 19,
    author: '감자형',
    content: '감자가 좋아하는 고구마 간식 만들었어요. 오븐 앞에서 떠나질 않음',
    images: [
      'https://picsum.photos/seed/gamjasnack1/600/600',
      'https://picsum.photos/seed/gamjasnack2/600/600',
      'https://picsum.photos/seed/gamjasnack3/600/600',
    ],
    created_at: '2026-10-07T21:26:00+09:00',
  },
  {
    id: 20,
    author: '냥냥펀치',
    content: '캣타워 맨 꼭대기에서 집사를 내려다보는 중',
    images: [
      'https://picsum.photos/seed/nyangtower1/600/600',
      'https://picsum.photos/seed/nyangtower2/600/600',
    ],
    created_at: '2026-10-07T19:26:00+09:00',
  },
  {
    id: 21,
    author: '코코네집사',
    content: '동물병원 다녀왔어요. 주사 맞고도 꼬리 흔들며 선생님께 인사하는 코코',
    images: [
      'https://picsum.photos/seed/cocovet/600/600',
    ],
    created_at: '2026-10-07T13:56:00+09:00',
  },
  {
    id: 22,
    author: '보리엄마',
    content: '보리랑 한강 피크닉. 돗자리 위 명당은 역시 보리 자리',
    images: [
      'https://picsum.photos/seed/boripicnic1/600/600',
      'https://picsum.photos/seed/boripicnic2/600/600',
      'https://picsum.photos/seed/boripicnic3/600/600',
      'https://picsum.photos/seed/boripicnic4/600/600',
    ],
    created_at: '2026-10-07T01:56:00+09:00',
  },
  {
    id: 23,
    author: '두부랑산책',
    content: '비 오는 날엔 실내 노즈워크. 담요 속 간식 찾기 3초 컷',
    images: [
      'https://picsum.photos/seed/dubunose1/600/600',
      'https://picsum.photos/seed/dubunose2/600/600',
      'https://picsum.photos/seed/dubunose3/600/600',
    ],
    created_at: '2026-10-07T00:56:00+09:00',
  },
  {
    id: 24,
    author: '치즈냥집사',
    content: '치즈가 키보드 위에 누워서 오늘 재택근무는 여기까지',
    images: [
      'https://picsum.photos/seed/cheesekeyboard/600/600',
    ],
    created_at: '2026-10-06T18:26:00+09:00',
  },
  {
    id: 25,
    author: '콩이아빠',
    content: '콩이 우비 입혀 봤어요. 걷는 게 로봇 같아서 한참 웃었네요',
    images: [
      'https://picsum.photos/seed/kongraincoat1/600/600',
      'https://picsum.photos/seed/kongraincoat2/600/600',
    ],
    created_at: '2026-10-06T14:56:00+09:00',
  },
  {
    id: 26,
    author: '마루누나',
    content: '공원 잔디밭에서 구르기 대회. 마루 혼자 출전, 혼자 우승',
    images: [
      'https://picsum.photos/seed/marugrass1/600/600',
      'https://picsum.photos/seed/marugrass2/600/600',
      'https://picsum.photos/seed/marugrass3/600/600',
    ],
    created_at: '2026-10-06T05:56:00+09:00',
  },
  {
    id: 27,
    author: '모찌엄마',
    content: '모찌랑 고양이 친구 첫 만남. 서로 눈치만 30분',
    images: [
      'https://picsum.photos/seed/mochimeet1/600/600',
      'https://picsum.photos/seed/mochimeet2/600/600',
    ],
    created_at: '2026-10-06T03:16:00+09:00',
  },
  {
    id: 28,
    author: '호두네',
    content: '호두 생일 파티 준비 중. 고깔모자는 3초 만에 벗겨졌어요',
    images: [
      'https://picsum.photos/seed/hoduparty1/600/600',
      'https://picsum.photos/seed/hoduparty2/600/600',
      'https://picsum.photos/seed/hoduparty3/600/600',
      'https://picsum.photos/seed/hoduparty4/600/600',
    ],
    created_at: '2026-10-05T12:16:00+09:00',
  },
  {
    id: 29,
    author: '감자형',
    content: '산책 끝나고 발 닦는 시간. 감자는 이 시간이 제일 싫대요',
    images: [
      'https://picsum.photos/seed/gamjafeet/600/600',
    ],
    created_at: '2026-10-05T07:36:00+09:00',
  },
  {
    id: 30,
    author: '냥냥펀치',
    content: '멍냥일기 첫 글! 우리 집 고양이 냥이를 소개합니다. 겁은 많지만 호기심은 더 많은 3살 치즈 고양이예요',
    images: [
      'https://picsum.photos/seed/nyanghello1/600/600',
      'https://picsum.photos/seed/nyanghello2/600/600',
      'https://picsum.photos/seed/nyanghello3/600/600',
    ],
    created_at: '2026-10-05T00:06:00+09:00',
  },
]
