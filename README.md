# rodep-web

Rodep公式Website

## 構成

`Astro.js`と`Tailwind CSS`のシンプルな構成です. `pnpm`を使用しています.

## 開発の始め方

`Docker`の使用を想定しています.

```bash
# build
$ docker compose build
# or
$ make build

# astro開発サーバの立ち上げ
# http://localhost:4321にアクセス
$ docker compose up -d
# or
$ make

# package追加するとき
# コンテナの中で
$ pnpm add <pkg_name>

# astroビルド(container)
# ci/cd経由のデプロイをするので基本必要なし
$ pnpm build
```

`docker-buildx`が必要です.

```bash
$ sudo pacman -S docker-buildx
```

## Rules

基本的にbranchを切って、`main`にこまめにPRを出して下さい. `main`へのMergeが行われると、Actions経由でdeployされます.

## License

- ソースコードは [MIT License](LICENSE) の下で公開されています。
- ただし、サークルのロゴ・画像等については **無断転載・無断使用を禁止** します（All Rights Reserved）。

## Contact

管理人: `yano.tatsuki439@mail.kyutech.jp`