//このファイルを編集して九九の表を作成してください
 
for (let i = 1; i < 10; i++) {

    document.write("<tr>")
        
    for (let j = 1; j < 10; j++) {
        document.write("<td>", i * j, "</td>");
    }
}


