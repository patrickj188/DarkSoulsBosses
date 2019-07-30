var w;

fetch("https://darksoulsbosses.patrickj188.now.sh/weapons", {
    method: "GET",
    mode: "cors",
    headers: {
        'Content-Type': 'application/json',
    },
}).then(res =>{
    return res.json()
}).then(weapons =>{
 w = weapons;
    displayWeapons(weapons);
}).catch(err =>{
    return console.log(err);
})


let displayWeapons = (weapons) =>{
    // w =weapons;
    console.log(w)
    weapons.forEach(weapon => {
        let weaponNode = document.createElement('div');
        weaponNode.className = 'weapon-card';
        document.getElementById('weapon-body').appendChild(weaponNode);
        let weaponTemplate = `<header> ` + `<h1> ${weapon.name} </h1> </header>`
        + `<h3> ${weapon.weapon_type} </h3>` + `<p> Weight: ${weapon.weight}</p>` +
        `<h5>Requirments</h5> <div class="weapon-req"><p> Strength: ${weapon.strength_req} </p> ` +
        `<p>Dexterity: ${weapon.dex_req}</p> </div>`;

        weaponNode.insertAdjacentHTML('beforeend', weaponTemplate)
    })

}

// var images = {
// 	Axe: 'axe.png',
// 	Bow: 'bow.jpg',
// 	Crossbow: 'crossbow.jpg',
// }
	
// function getImage(weaponType) {
// 	return `assets/images/${images[weaponType]}`
// }

// // let img = w.map(x => {return getImage(x.weaponType)})


