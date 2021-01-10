// 要素の取得完了
// やること
// boxがクリックされたらランダムなテキストを変えす
// テキストは配列で保存？
// 返されたテキストを取得して画面に反映させる処理
// 画面に描画する時に、時間差をつける
// 画像の表示

// boxがクリックされたらランダムなテキストを表示
document.getElementById("box").onclick = function message() {
  firstMessage(),
  secondMessage(),
  thirdMessage();
};

// firstMessage
function firstMessage() {
  console.log("あ〜、ありがとうございますぅ〜");
}

// secondMessage
const secondeMessage = [
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
const secondeMessageNumber = Math.floor(Math.random() * secondeMessage.length);

function secondMessage() {
  setTimeout(() => {
    console.log(
      "今" + secondeMessage[secondeMessageNumber] + "をいただきました〜"
    );
  }, 3000);
}

// thirdMessage (thirdTextが実行された後に実行)

function thirdMessage() {
  setTimeout(() => {
    console.log("こんなんなんぼあってもいいですからね");
  }, 5000);
}
