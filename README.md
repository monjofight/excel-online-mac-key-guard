# Excel Online Mac Key Guard

Excel Online で Mac の英数キーによる誤入力を防ぐ Chrome 拡張機能

## 問題

Mac で Excel Online を使用中に、英数キーを押すと、意図せずセルが編集モードになり、気づかないうちにセルの内容を上書きしてしまうことがあります。

## 解決策

この拡張機能は、問題のあるキー（`keyCode === 0`）を Excel Online 上でブロックし、誤入力を防ぎます。他の機能はすべて正常に動作します。

## インストール方法

### ソースからインストール

1. このリポジトリをクローン:

   ```bash
   git clone https://github.com/monjofight/excel-online-mac-key-guard.git
   ```

2. Chrome で `chrome://extensions/` を開く

3. 右上の「デベロッパーモード」を有効化

4. 「パッケージ化されていない拡張機能を読み込む」をクリックし、`excel-online-mac-key-guard` フォルダを選択

5. Excel Online で拡張機能が自動的に有効になります

## 機能

- Excel Online 上で Mac の英数キーをブロック
- すべての iframe とフレームで動作
- 設定不要
- パフォーマンスへの影響は最小限

## 技術詳細

- **権限**: `officeapps.live.com` へのアクセスのみ
