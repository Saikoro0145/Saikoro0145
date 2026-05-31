export type Skill = {
  name: string;
  description: string;
};

export const skills: Skill[] = [
  {
    name: 'C#',
    description: 'Unityでのゲームロジック、状態管理、クラス設計に使用',
  },
  {
    name: 'Unity',
    description: '2Dゲーム制作、キャラクター制御、UI、演出実装に使用',
  },
  {
    name: 'Git / GitHub',
    description: 'チーム開発、ブランチ管理、コード共有に使用',
  },
  {
    name: 'TypeScript / React',
    description: 'Webポートフォリオ制作に使用',
  },
];
