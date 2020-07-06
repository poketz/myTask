let japanInfo = {name:"日本", capital:"東京", currency:"円"}
let americaInfo = {name:"アメリカ", capital:"ワシントン", currency:"ドル"};

let japanTag = document.getElementById("japan")
let americaTag = document.getElementById("america")

japanTag.innerHTML = `首都:${japanInfo.capital} 通貨:${japanInfo.currency}`
americaTag.innerHTML = `首都:${americaInfo.capital} 通貨:${americaInfo.currency}`