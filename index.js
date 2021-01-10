// boxがクリックされたらランダムなテキストを表示
document.getElementById("box").onclick = function () {
  console.log("今" + firstMessage[firstMessageNumber] + "をいただきました〜");
};

// 要素の取得完了
// やること
// boxがクリックされたらランダムなテキストを変えす
// テキストは配列で保存？
// 返されたテキストを取得して画面に反映させる処理
// 画面に描画する時に、時間差をつける
// 画像の表示


// 文字列の保存
const firstMessage = [
  "寝台列車一両",
  "いびきを止めるテープ",
  "子守唄の楽譜",
  "ベルマーク",
  "ねるねるねるねの2の粉",
  "免許証のコピー",
  "屋形船",
  "シルバニアファミリーの公民館",
  "18時間用の砂時計",
  "2段ベッドのはしご",
];

// 文字列をランダムに取得
const firstMessageNumber = Math.floor(Math.random() * firstMessage.length);
