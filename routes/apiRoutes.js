const weaponUrl = 'https://mugenmonkey.com/api/v0/ds3_weapons'
const spellUrl = 'https://mugenmonkey.com/api/v0/ds3_spells'
const request = require('request');
const weaponArr = [];
const spellsArr = []


module.exports = function(app) {

app.get('/weapons', (req, res) =>{

  if(weaponArr.length > 0){
      return res.json(weaponArr)
  }
  
request(weaponUrl, (err, response, body) =>{

      if(err){
          return console.error(err)
      }
      const data = JSON.parse(body);
      for(let key in data.ds3_weapons){
          weaponArr.push(data.ds3_weapons[key]);
      }
      res.json(weaponArr);
      console.log(weaponArr)
      
  })
});

app.get('/spells.html', (req, res) =>{

    if(spellsArr.length > 0){
        return res.json(spellsArr)
    }
    
    request(spellUrl, (err, response, body) =>{

        if(err){
            return console.error(err)
        }
        const data = JSON.parse(body);
        for(let key in data.ds3_spells){
            spellsArr.push(data.ds3_spells[key]);
        }
        res.json(spellsArr);
    })

});

}




