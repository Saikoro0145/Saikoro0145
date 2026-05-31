# Game Engineer Portfolio

Vite + React + TypeScript で作成した、ゲームエンジニア志望向けのポートフォリオサイトです。

## セットアップ

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

ビルド結果は `dist/` に出力されます。

## 作品の追加方法

作品データは `src/data/projects.ts` にまとめています。新しい作品を追加する場合は、`Project` 型に沿って配列へオブジェクトを追加してください。

サムネイル画像は `src/assets/` に置き、`projects.ts` で import して `thumbnail` に指定します。Windows の絶対パスは GitHub Pages では読み込めないため、必ず import して使ってください。

```ts
import thumbnail from '../assets/example.png';

thumbnail,
```

## GitHub Pages で公開する

`vite.config.ts` は相対パスで assets を出力する設定にしています。

```ts
const base = process.env.VITE_BASE_PATH ?? './';
```

この設定なら、GitHub Pages のプロジェクトページ、ユーザーページ、カスタムドメインのどれでも JS/CSS のパスがずれにくくなります。

GitHub Actions で公開する場合は、GitHub リポジトリの `Settings > Pages` で Source を `GitHub Actions` に設定します。その後、`main` ブランチへ push すると `.github/workflows/deploy.yml` により自動でビルド・公開されます。

## 真っ白なページになる場合

ブラウザの開発者ツールで Console または Network を確認し、`assets/index-xxxxx.js` や `assets/index-xxxxx.css` が 404 になっていないか確認してください。

404 になっている場合は、`vite.config.ts` の `base` 設定と公開 URL が合っていない可能性があります。このリポジトリでは `./` を使うことでその問題を避けています。
