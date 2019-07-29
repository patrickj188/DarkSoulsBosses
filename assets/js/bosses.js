const bosses = [
    {
        "id": 1,
        "name": "Sif",
        "info": "According to lore, Sif was Artorias the Abysswalker's partner. When Artorias was swallowed by the Abyss, he threw up his Greatshield to protect Sif, as he could no longer. Now, he guards his fallen comrade's grave and his ring, to ensure that what happened to Artorias, doesn't happen to anyone else......One of the best bois",
        "souls": "40,000 souls",
        "img": "https://cdna.artstation.com/p/assets/images/images/017/454/752/large/juan-acosta-sifffred.jpg?1556052860"
    },
    {
        "id": 2,
        "name": "Knight Artorias",
        "info": "Sir Knight Artorias was one of the four Knights of Gwyn, the commanding knights of Lord Gwyn's army. Artorias had an unbendable will of steel, which both helped, and fed, his hatred for servants of the Dark, particularly the Darkwraiths of Kaathe.",
        "souls": "25,000 souls",
        "img": "https://cdnb.artstation.com/p/assets/images/images/008/839/173/large/marcos-rial-artorias-final-v1.jpg?1515616240"
    },
    {
        "id": 3,
        "name": "Bed of Chaos",
        "info": "In a futile attempt to prolong the Age of Fire, the Witch of Izalith tried to recreate the First Flame. The ritual was a failure and its power formed a bed of life which would become the source of all demons; trapping two of her daughters in the orbs on either side, and herself within it.",
        "souls": "60,000 Souls",
        "img": "https://darksouls.wiki.fextralife.com/file/Dark-Souls/bed_of_chaos_final_form_broom_smash.jpg?v=1528746587812"
    },
    {
        "id": 4,
        "name": "Ceaseless Discharge",
        "info": "Not only an imposing fire-based boss found in the Demon Ruins, Ceaseless Discharge, as his name may suggest, is the source of the lava flow. Killing him will cease the discharge of lava in the lower parts of the ruins, allowing access to the deeper areas of the map, and progress in the campaign. ",
        "souls": "20,000 Souls",
        "img": "https://images-cdn.9gag.com/photo/aqbYPyP_700b.jpg"
    },
    {
        "id": 5,
        "name": "Asylum Demon",
        "info": "The Asylum Demon was created by the Bed of Chaos and ensures that only the most powerful Undead are able to escape the Northern Undead Asylum.",
        "souls": "2,000 Souls",
        "img": "https://cdna.artstation.com/p/assets/images/images/002/496/246/large/eh-macmillan-asylum-demon.jpg?1462425061"
    },
    {
        "id": 6,
        "name": "Bell Gargoyle",
        "info": "The Bell Gargoyles are the guardians of the first Bell of Awakening that is found in the tower atop the new church. The gargoyles are magically created creatures that oppose any undead who attempt to ring the bell, fighting any who attempt to cross the roof to gain access to the belltower.",
        "souls": "10,000 Souls",
        "img": "http://images.pushsquare.com/4bc6ec7fc3da6/dark-souls-remastered-bell-gargoyles-boss-walkthrough-1.original.jpg"
    },
    {
        "id": 6,
        "name": "Capra Demon",
        "info": "The Capra Demon resides in the Lower Undead Burg. It is a lesser demon resembling a human with a goat's head, wielding two large machetes. He has two Undead Attack Dogs with him.",
        "souls": "6,000 Souls",
        "img": "https://steamuserimages-a.akamaihd.net/ugc/858355614961067216/8FB406644E793B538255E735E84926F0258811C2/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        "id": 6,
        "name": "Centipede Demon",
        "info": "The creature has a total of six demonic centipede heads: two on its back, two as arms, and the last two as the head and tail. The heads can extend, spit fireballs, and be cut off The right arm is the biggest head and has the longest range.",
        "souls": "40,000 Souls",
        "img": "https://farm4.static.flickr.com/3876/14216117470_39533c5234.jpg"
    },
    {
        "id": 6,
        "name": "Chaos Witch Quelaag",
        "info": "A half-woman, half-spider demon located in a lair near the bottom of Blighttown. One of the Witch of Izalith's daughters, transformed into a monster by the Flames of Chaos. Her notable siblings are The Fair Lady and Ceaseless Discharge. She guards the second Bell of Awakening, and the entrance to her sister's domain.",
        "souls": "20,000 Souls",
        "img": "https://cdnb.artstation.com/p/assets/images/images/003/963/843/large/jason-lws-quelaag.jpg?1478979191"
    },
    {
        "id": 6,
        "name": "Crossbreed Priscilla",
        "info": "Priscilla is a crossbreed of a Dragon and some other being, cast into the Painted World of Ariamis because of what she was. A description of her soul explains that she is a crossbreed bastard child and antithesis to all life. She has fur over most of her body, making her more similar to the true Everlasting Dragons than to Seath the Scaleless. Furthermore, she is feared and mistreated by the gods, while Seath is a Duke.",
        "souls": "30,000 Souls",
        "img": "https://cdnb.artstation.com/p/assets/images/images/018/571/647/large/chris-h-priscila.jpg?1559858366"
    },
    {
        "id": 6,
        "name": "Dark Sun Gwyndolin",
        "info": "The last born of Lord Gwyn, Gwyndolin is the leader of the Blade of the Dark Moon covenant and the only remaining deity in Anor Londo. Gwyndolin's followers are few, but their tasks are of vital importance. Gwyndolin created the illusion of a sister Gwynevere, who helps guard over Anor Londo. An unmasking of these deities would be tantamount to blasphemy.",
        "souls": "40,000 Souls",
        "img": "https://cdna.artstation.com/p/assets/images/images/007/047/866/large/aventisz-n-17julskhiccez01-p09-fff.jpg?1503305426"
    },
    {
        "id": 6,
        "name": "Demon Firesage",
        "info": "A large demon found at the end of the Demon Ruins. It very closely resembles the Stray Demon and Asylum Demon, though its behavior and abilities are much more closely related to the former of the two bosses.",
        "souls": "20,000 Souls",
        "img": "https://vignette.wikia.nocookie.net/darksouls/images/a/aa/Demon_Firesage.jpg/revision/latest?cb=20160608105549"
    },
    {
        "id": 6,
        "name": "Four Kings",
        "info": "The Four Kings were once human, chosen by Gwyn to rule New Londo. When offered the art of Lifedrain by Kaathe, they fell to the dark and New Londo with them.They now reside in the Abyss.",
        "souls": "60,000 Souls",
        "img": "https://vignette.wikia.nocookie.net/darksouls/images/2/23/Four_King.jpg/revision/latest?cb=20160518111250"
    },
    {
        "id": 6,
        "name": "The Gaping Dragon",
        "info": "The Gaping Dragon resides in The Depths. It is a descendant of the Everlasting Dragons, but its eternal hunger transformed its upper body into a maw.",
        "souls": "25,000 Souls",
        "img": "https://cdna.artstation.com/p/assets/images/images/006/632/444/large/matt-shaw-finel.jpg?1500071774"
    },
    {
        "id": 6,
        "name": "Gwyn Lord of Cinder",
        "info": "At the dawn of the Age of Fire, Gwyn discovered a Lord Soul and thus became the Lord of Sunlight alongside three other Lords. His Lord Soul granted him the power of the sun and lightning, and Gwyn helped defeat the Everlasting Dragons. Gwyn waged war against the demons at one point, but the attempt failed.",
        "souls": "70,000 Souls",
        "img": "https://steamuserimages-a.akamaihd.net/ugc/889888697879477957/7AB53D12767683E9F7054E5F82D800AA3C7D6D08/?imw=731&imh=1024&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        "id": 6,
        "name": "Iron Golem",
        "info": "The Iron Golem was created by the gods to guard Sen's Fortress thereby denying access to any seeking entrance to Anor Londo.It has slain countless heroes in their attempts to reach the city of the gods.",
        "souls": "40,000 Souls",
        "img": "https://steamuserimages-a.akamaihd.net/ugc/544129789149966361/F08E1B77456E1CC1DFADB1C4F4DCA2241D2F5B3B/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
        "id": 6,
        "name": "Moonlight Butterfly",
        "info": "A large, mystical butterfly that found its home in the Darkroot Garden. The creature was created by Seath the Scaleless.",
        "souls": "400 Souls",
        "img": "https://art.ngfiles.com/images/431000/431597_shinigami77_moonlight-butterfly.jpg?f1465658834"
    },
    {
        "id": 6,
        "name": "Gravelord Nito",
        "info": "Holder of one of the four Lord Souls, Gravelord Nito was among the lords to wage war against the dragons. As the Lord of Death, Nito rules over the dead in The Catacombs and resides within the Tomb of Giants. His army of skeletons guard his tomb, while his Gravelord Servants spread death through the Eyes of Death.",
        "souls": "60,000 Souls",
        "img": "https://art.ngfiles.com/images/879000/879702_nathanandersonart_gravelord-nito.jpg?f1555625360"
    },
    {
        "id": 6,
        "name": "Dragon Slayer Ornstein and Executioner Smough",
        "info": "Ornstein is believed to be the captain of the Four Knights of Gwyn.He stands guard in the Anor Londo cathedral, alongside Executioner Smough, protecting the princess Gwynevere.",
        "souls": "50,000 Souls",
        "img": "https://cdnb.artstation.com/p/assets/images/images/009/775/047/large/sarayu-ruangvesh-sarayu-ruangvesh-ornstein-and-smaug.jpg?1520845496"
    },
    {
        "id": 6,
        "name": "Pinwheel",
        "info": "Residing in The Catacombs, Pinwheel is a hovering, multi-masked necromancer who stole the power of the Gravelord and now reigns over the Catacombs. It has the ability to spawn multiple copies of itself and attacks with projectile blasts.",
        "souls": "15,000 Souls",
        "img": "https://cdnb.artstation.com/p/assets/images/images/005/212/747/large/lucas-annunziata-pinwheel-sculpt-01-large.jpg?1489371228"
    },
    {
        "id": 6,
        "name": "Seath the Scaleless",
        "info": "Envy and bitterness; words used to describe Seath's betrayal of his own kind; for unlike his brethren, Seath was born without the stone scales of the Everlasting Dragons. But with the help of Gravelord Nito and the Witch of Izalith, and Gwyn, the Lord of Cinder, Seath brought his own race to the brink of extinction, with many believing him to be the last of his kind.",
        "souls": "60,000 Souls",
        "img": "https://cdnb.artstation.com/p/assets/images/images/008/021/159/large/shannon-symonds-seath-from-sketchfab.jpg?1509981452"
    },
    {
        "id": 6,
        "name": "Taurus Demon",
        "info": "The Taurus Demon is located on the walkway after ascending the tower with the spiral staircase in the Undead Burg. It wields a massive greataxe, and is nearly identical to the Minor Taurus Demons that appear in the Demon Ruins.",
        "souls": "3,000 Souls",
        "img": "https://cdna.artstation.com/p/assets/images/images/011/253/266/large/nauris-amatnieks-taurusdemon.jpg?1528624088"
    },
    {
        "id": 6,
        "name": "Stray Demon",
        "info": "A large demon found after returning to the Northern Undead Asylum. This is actually the first demon you see in the game; as you exit your cell at the beginning he can be seen stomping around to your right through the bars in the hallway.",
        "souls": "20,000 Souls",
        "img": "https://cdna.artstation.com/p/assets/images/images/002/496/246/large/eh-macmillan-asylum-demon.jpg?1462425061"
    },
    {
        "id": 6,
        "name": "Titanite Demon",
        "info": "The Prowling Demons, also known as the Titanite Demons, are demons born from the scattered legendary slabs after the unnamed blacksmith deity passed away. They wield the Titanite Catch Pole which still has residual power from the Titanite Slab from which they are spawned.",
        "souls": "Demon Titanite",
        "img": "https://ih1.redbubble.net/image.280885336.7489/ap,550x550,16x12,1,transparent,t.u1.png"
    },
]


let bossInfo = () => {
    bosses.forEach(boss => {
        let bossNode = document.createElement('div');
        bossNode.className = 'card';
        document.getElementById('boss-body').appendChild(bossNode);
        let bossTemplate = `<header> <img src=${boss.img}/>` + `<h1> ${boss.name} </h1> </header>`
        + `<p> ${boss.info} </p>` + `<h3>${boss.souls}</h3>`;

        bossNode.insertAdjacentHTML('beforeend', bossTemplate)
    })
}

bossInfo();

