//この部分は編集しないでください↓
//
const list = document.getElementById("list");
const sum = document.getElementById("sum");
const ave = document.getElementById("ave");
//

//ここに100,90,80,70の点数の配列を作成し，格納したデータを「点数:100,90,80,70」となるように表示してください
let score = [100,90,80,70];
list.innerHTML = `点数:${score}`;
//for文を用いて点数の和を計算し,結果を「合計:{和の数}」となるように表示してください
let sumScore = 0;
for(let i = 0; i < score.length; i++) {
    sumScore += score[i];
}
sum.innerHTML = `合計:${sumScore}`
//平均の値も計算して,結果を「平均:{平均の数}」となるように表示してください
ave.innerHTML = `平均:${sumScore / score.length}`