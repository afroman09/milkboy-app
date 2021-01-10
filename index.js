// 返されたテキストを取得して画面に反映させる処理
// 画面に描画する時に、時間差をつける
// 画像の表示

// HTMLに取得した値を渡す
// htmlで書くメッセージの格納先IDを定義し、
// それぞれの関数の結果をそのIDにぶち込んで表示させる.

// boxがクリックされたらランダムなテキストを表示
// document.getElementById("box").onclick = function message() {
//   firstMessage(), secondMessage(), thirdMessage();
// };

// test

document.getElementById("btn").onclick = 
// document.getElementById("text-box").innerHTML = message();
function message() {
  firstMessage(), secondMessage(), thirdMessage();
};



// firstMessage
function firstMessage() {
  text = "あ〜、ありがとうございます〜";
  document.getElementById("firstText").innerHTML = text;
}

// secondMessage
const secondMessageText = [
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
const secondMessageNumber = Math.floor(
  Math.random() * secondMessageText.length
);

function secondMessage() {
  setTimeout(() => {
    text = "今、" + secondMessageText[secondMessageNumber] + "をいただきました〜"
    document.getElementById("secondText").innerHTML = text;
    // console.log(
    //   "今、" + secondMessageText[secondMessageNumber] + "をいただきました〜"
    // );
  }, 3000);
}

// thirdMessage (thirdTextが実行された後に実行)

const thirdMessageText = [
  "こんなんなんぼあってもいいですからね",
  "チャンジャお前は",
  "お前みたいなやつはいまだチャプチェみたことない",
  "チャンジャえられへん",
];

const thirdMessageNumber = Math.floor(Math.random() * thirdMessageText.length);

function thirdMessage() {
  setTimeout(() => {
    text = thirdMessageText[thirdMessageNumber];
    document.getElementById("thirdText").innerHTML = text;
    // console.log(thirdMessageText[thirdMessageNumber]);
  }, 5000);
}
