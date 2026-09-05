# rodep-web

Rodep公式Website

## 構成

`Astro.js`と`Tailwind CSS`のシンプルな構成です. `pnpm`を使用しています.

## 開発の始め方

`Docker`の使用を想定しています.

```bash
# build
$ docker compose build

# astro開発サーバの立ち上げ
# http://localhost:4321にアクセス
$ docker compose up -d

# package追加するとき
# コンテナの中で
$ pnpm add <pkg_name>

# astroビルド(container)
# ci/cd経由のデプロイをするので基本必要なし
$ pnpm build
```

## Rules

基本的にbranchを切って、`main`にこまめにPRを出して下さい. `main`へのMergeが行われると、Actions経由でdeployされます.



