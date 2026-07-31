# spreadboard.net デプロイ手順

## このリポジトリが正本

`spreadboard.net` の本番ソースは **このリポジトリ（spreadboard-new）**。
2026-08-01 に本番との差分ゼロを確認済み（ビルド出力が本番を完全再現する状態）。

`~/ogawa/spreadboard/astro-site/` は旧世代（単一言語・GitHub Pages 用）。**触らないこと**。

## デプロイ先

| 項目 | 値 |
|---|---|
| ホスティング | Xserver（`ssh xserver` = sv2023.xserver.jp） |
| ドキュメントルート | `~/spreadboard.net/public_html/` |
| CDN | Cloudflare（DNS のみ経由、キャッシュは Xserver 側 Nginx） |

GitHub Pages（`.github/workflows/deploy.yml`）も動いているが、こちらは
`37designfk.github.io/spreadboard-new/` 向けで**本番ではない**。

## デプロイ

```bash
npm run deploy:check   # 本番との差分を表示（何も出なければ一致）
npm run deploy         # ビルド + rsync
```

### rsync に --delete を付けない

`public_html/` には WordPress 時代の残骸（`index.php`、`license.txt`、`wp-*`）と
`index.html.bak` が同居している。`--delete` を付けると消える。

## デプロイ後: Xserver の Nginx キャッシュをクリアする

`.htaccess` で `Ngx_Cache_AllCacheMode` が有効なため、ファイルを更新しても
古いHTMLが最大1時間ほど配信され続ける。

- Xserver サーバーパネル → サーバーキャッシュ設定 → キャッシュクリア
- 確認だけなら `curl "https://spreadboard.net/?cb=$(date +%s)"` でキャッシュを迂回できる

## 過去の経緯（2026-08-01 に解消）

2026-04-18 まで「ソースを直しつつ、デプロイ済みHTMLも9言語分を手編集する」運用に
なっており、ソースからビルドしても本番を再現できない状態だった。
以下を本リポジトリに取り込んで解消済み。

- ABOUT セクションの文章刷新（全9言語、5段落構成）
- BOARD FINDER セクション（適正板診断へのリンク）
- RD GX の 150W サイズ行
- RD の 157S ウエスト幅 260 → 280（メーカー提供値の誤り修正）

**今後は本番HTMLを直接編集しないこと。** 直すのはソース、反映は `npm run deploy`。
