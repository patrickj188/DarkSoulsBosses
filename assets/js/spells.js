var w;

fetch("http://localhost:3008/spells", {
    method: "GET",
    mode: "cors",
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
}).then(res =>{
    return res.json()
}).then(spells =>{
    displaySpells(spells);
    s = spells;
}).catch(err =>{
    return console.log(err);
})


let displaySpells = (spells) =>{
    spells.forEach(spell => {
        let spellNode = document.createElement('div');
        spellNode.className = 'spell-card';
        document.getElementById('spell-body').appendChild(spellNode);
        let spellTemplate = `<header> ` + `<h1> ${spell.name} </h1> </header>`
        + `<p> ${spell.spell_type} </p>` + `<h3>${spell.slots}</h3>`;

        spellNode.insertAdjacentHTML('beforeend', spellTemplate)
    })

}


