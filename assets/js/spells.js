var w;

fetch("https://patrickj188.github.io/DarkSoulsBosses/assets/html/", {
  method: "GET",
  mode: "cors",
  headers: {
    "Content-Type": "application/json"
    // 'Content-Type': 'application/x-www-form-urlencoded',
  }
})
  .then(res => {
    return res.json();
  })
  .then(spells => {
    displaySpells(spells);
    s = spells;
  })
  .catch(err => {
    return console.log(err);
  });


let displaySpells = spells => {
  spells.forEach(spell => {
    let spellNode = document.createElement("div");
    spellNode.className = "spell-card";
    document.getElementById("spell-body").appendChild(spellNode);
    let spellTemplate =
      `<header> ` +
      `<h1 >${spell.name} </h1> </header>` +
      `<h3> Type: ${spell.spell_type} </h3>` +
      `<div class="slots"><h6> Faith: ${spell.faith_req} </h6>` +
      `<h6>Intelligence: ${spell.int_req} </h6>` +
      `<h6> Slots: ${spell.slots}</h6></div>` ;
    spellNode.insertAdjacentHTML("beforeend", spellTemplate);
  });
};


