# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projects

### todo/

React + TypeScript + Vite + Tailwind CSS の TODO アプリ。

```bash
cd todo
npm install
npm run dev      # http://localhost:5173
npm run build    # 型チェック + プロダクションビルド
```

#### アーキテクチャ

- **`src/types.ts`** — `Todo` 型と `FilterType` 型を定義
- **`src/hooks/useTodos.ts`** — 全状態管理（CRUD・フィルター・LocalStorage 永続化）を一元管理するカスタムフック。コンポーネントはこのフックの返り値だけを使う
- **`src/components/`** — 4 コンポーネント: `TodoInput`（追加フォーム）/ `TodoItem`（ダブルクリック編集・削除）/ `TodoList`（リスト表示）/ `TodoFilter`（フィルター + 完了済み一括削除）
- **`src/App.tsx`** — `useTodos` を呼び出して各コンポーネントに props を渡すだけのレイアウト層

状態はすべて `useTodos` に集中しており、コンポーネントは UI のみ担当する設計。
