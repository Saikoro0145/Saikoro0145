# Game Engineer Portfolio

GitHub Pages で公開しやすい Vite + React + TypeScript 製のポートフォリオサイトです。ゲームエンジニア志望の就活・インターン応募向けに、作品をコレクションカードとして見せる構成にしています。

## セットアップ

```bash
npm install
npm run dev
```

開発サーバー起動後、表示された URL をブラウザで開いてください。

## ビルド

```bash
npm run build
```

ビルド結果は `dist/` に出力されます。

## 作品の追加方法

作品データは `src/data/projects.ts` にまとめています。新しい作品を追加する場合は、`Project` 型に沿って配列へオブジェクトを追加してください。

サムネイル画像は `src/assets/` に置き、`projects.ts` で import して `thumbnail` に指定します。

## GitHub Pages で公開する

このリポジトリ名が `Saikoro0145` の場合、`vite.config.ts` の `base` は次の設定で動作します。

```ts
const base = process.env.VITE_BASE_PATH ?? '/Saikoro0145/';
```

ユーザーサイトや Organization サイトとして `https://ユーザー名.github.io/` 直下に公開する場合は、`base` を `/` に変更してください。

GitHub Actions で公開する場合は、GitHub リポジトリの `Settings > Pages` で Source を `GitHub Actions` に設定します。その後、`main` ブランチへ push すると `.github/workflows/deploy.yml` により自動でビルド・公開されます。

## 主な構成

```text
src/
├─ components/
├─ data/
├─ types/
├─ assets/
├─ App.tsx
├─ main.tsx
└─ index.css
```

## リンクの変更

GitHub、Movie、Demo などの仮リンクは `src/data/projects.ts` と各コンポーネント内のリンク定義から変更できます。
