import pandoraThumbnail from '../assets/Pandora.png';
import relayShiftThumbnail from '../assets/relayshift-theme.png';
import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'relay-shift',
    title: 'Relay Shift',
    genre: '3Dランゲーム',
    type: 'チーム制作',
    period: '2025/04 ~ 2026/02',
    description: '5人チームで制作した探索型2Dアドベンチャーゲーム。',
    role: 'コーディング',
    tech: ['Unity', 'C#', 'Git', 'GitHub', 'LitMotion'],
    thumbnail: relayShiftThumbnail,
    github: {
      label: 'ソースコード',
      url: 'https://github.com/Saikoro0145/Portfolio/tree/main/RelayShift',
    },
    movie: {
      label: 'プレイ動画',
      url: 'https://drive.google.com/file/d/120hOjwXs81KTkM6sfBkssrKaQjLNhLNp/view',
    },
    demo: {
      label: '試遊',
      url: 'https://unityroom.com/games/relay-shift',
    },
  },

  {
    id: 'pandora',
    title: 'Pandora',
    genre: '探索型2Dアドベンチャー',
    type: 'チーム制作',
    period: '2025/04 ~ 2026/02',
    description: '探索型2Dアドベンチャーゲーム',
    role: 'コーディング',
    tech: ['Unity', 'C#', 'Git', 'GitHub'],
    thumbnail: pandoraThumbnail,
    github: {
      label: 'ソースコード',
      url: 'https://github.com/Saikoro0145/Portfolio/tree/main/Pandora',
    },
    movie: {
      label: 'プレイ動画',
      url: 'https://drive.google.com/file/d/1T4Tf1zb8p3K6DbXwrwSmm6l106GGGkQM/view',
    },
  },



];
