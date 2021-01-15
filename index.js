const usertext = document.getElementById("text");

document.getElementById("btn").onclick = function() {
  firstMessage();
  setTimeout(() => {
    document.getElementById("secondText").innerHTML = "今、" + usertext.value + "をいただきました〜";
  }, 2000)
  setTimeout(() => {
    document.getElementById("thirdText").innerHTML = thirdMessageText[thirdMessageNumber];
    }, 4000);
}

// テキストで受け取った文字列を取得
// document.getElementById("btn").onclick = function message() {
//   firstMessage(), secondMessage(), thirdMessage();
// };

// firstMessage
function firstMessage() {
  document.getElementById("firstText").innerHTML = "あ〜、ありがとうございます〜";
}

const thirdMessageText = [
  "こんなんなんぼあってもいいですからね",
  "チャンジャお前は",
  "お前みたいなやつはいまだチャプチェみたことない",
  "チャンジャえられへん",
];

const thirdMessageNumber = Math.floor(Math.random() * thirdMessageText.length);


// 過去
// btnがクリックされたらランダムなテキストを表示
// document.getElementById("btn").onclick = function message() {
//   firstMessage(), secondMessage(), thirdMessage();
// };

// テキストで受け取った文字列を取得
// document.getElementById("btn").onclick = function message() {
//   firstMessage(), secondMessage(), thirdMessage();
// };

// function firstMessage() {
//   document.getElementById("firstText").innerHTML = "あ〜、ありがとうございます〜";
// }

// const thirdMessageText = [
//   "こんなんなんぼあってもいいですからね",
//   "チャンジャお前は",
//   "お前みたいなやつはいまだチャプチェみたことない",
//   "チャンジャえられへん",
// ];

// const thirdMessageNumber = Math.floor(Math.random() * thirdMessageText.length);

// secondMessage
// const secondMessageText = [
//   "寝台列車一両",
//   "いびきを止めるテープ",
//   "子守唄の楽譜",
//   "ベルマーク",
//   "ねるねるねるねの2の粉",
//   "免許証のコピー",
//   "屋形船",
//   "シルバニアファミリーの公民館",
//   "18時間用の砂時計",
//   "2段ベッドのはしご",
// ];

// // 文字列をランダムに取得
// const secondMessageNumber = Math.floor(
//   Math.random() * secondMessageText.length
// );

// function secondMessage() {
//   setTimeout(() => {
//     document.getElementById("secondText").innerHTML = "今、" + secondMessageText[secondMessageNumber] + "をいただきました〜";
//   }, 2000);
// }

// thirdMessage


// secondMessageが"寝台列車一両"[0]だった場合、チャンジャお前はを表示
// function thirdMessage() {
//   setTimeout(() => {
//     if (secondMessageText[secondMessageNumber] == secondMessageText[0]) {
//       document.getElementById("thirdText").innerHTML = thirdMessageText[1];
//     } else {
//       document.getElementById("thirdText").innerHTML =
//         thirdMessageText[thirdMessageNumber];
//     }
//   }, 4000);
// }
