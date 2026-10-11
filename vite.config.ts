import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 휴대폰 홈 화면에 설치할 수 있게 매니페스트와 서비스 워커를 빌드할 때 만듦
    VitePWA({
      // 새로 배포하면 저절로 새 버전으로 바뀜
      registerType: 'autoUpdate',
      manifest: {
        name: '멍냥일기',
        short_name: '멍냥일기',
        description: '우리 집 멍멍이·냥이의 하루를 사진으로 남기는 곳',
        lang: 'ko',
        display: 'standalone',
        // docs/요구사항.md 디자인 규칙의 phone 색 (제목 줄, 피드 배경)
        theme_color: '#1f1c24',
        background_color: '#1f1c24',
        // base 와 같게. / 이면 설치한 앱이 github.io 첫 화면(404)을 엶
        start_url: '/my-sns/',
        scope: '/my-sns/',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
      workbox: {
        // 빌드된 앱 파일만 저장. runtimeCaching 을 두지 않아서 Supabase 요청과 사진은 저장하지 않음
        globPatterns: ['**/*.{js,css,html,svg,png}'],
      },
    }),
  ],
  base: '/my-sns/',
})
