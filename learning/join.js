const actors=[
    {name:'john',networth:"2000000"},
    {name:'asdfghjk',networth:"200"},
    {name:'zxcvbnm',networth:"2000"}
]
console.log(actors.map(act => act.name).join(`,`))