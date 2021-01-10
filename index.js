// btnがクリックされたらランダムなテキストを表示
document.getElementById("btn").onclick = 
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
  }, 2000);
}

// thirdMessage

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
  }, 4000);
}