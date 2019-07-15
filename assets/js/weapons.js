var w;

fetch("http://localhost:3008/weapons", {
    method: "GET",
    mode: "cors",
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
}).then(res =>{
    return res.json()
}).then(weapons =>{
    displayWeapons(weapons);
    w =weapons;
}).catch(err =>{
    return console.log(err);
})


let displayWeapons = (weapons) =>{
    weapons.forEach(weapon => {
        let weaponNode = document.createElement('div');
        weaponNode.className = 'weapon-card';
        document.getElementById('weapon-body').appendChild(weaponNode);
        let weaponTemplate = `<header> ` + `<h1> ${weapon.name} </h1> </header>`
        + `<p> ${weapon.weapon_type} </p>` + `<h3>${weapon.weight}</h3>`;

        weaponNode.insertAdjacentHTML('beforeend', weaponTemplate)
    })

}


