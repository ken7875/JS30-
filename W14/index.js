// 使用 slice 可達到淺拷貝效果，因為 slice 不會更改原陣列內容
const players = ['ken', 'mike', 'tim', 'dave', 'ee']
const team = players.slice()
console.log(team);
team[2] = 'dd'
console.log(team);
console.log(players);
// 第二種拷貝方式為使用 [].concat
// 方法被用來合併兩個或多個陣列。此方法不會改變現有的陣列，回傳一個包含呼叫者陣列本身的值，作為代替的是回傳一個新陣列。
const team2 = [].concat(players)
team2[2] = 'hi'
console.log(team2, players);
// 解構方式
const team3 = [...players]
team3[1] = 'hihihi'
console.log(team3, players);