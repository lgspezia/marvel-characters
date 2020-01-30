
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
let countries = [];
countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
var characters = [
  "3-D Man",
  "A-Bomb",
  "A.I.M.",
  "Aaron Stack",
  "Abomination",
  "Absorbing Man",
  "Abyss",
  "Adam Destine",
  "Adam Warlock",
  "Aegis",
  "Agent Brand",
  "Agent X",
  "Agent Zero",
  "Agents of Atlas",
  "Aginar",
  "Air-Walker",
  "Ajak",
  "Ajaxis",
  "Akemi",
  "Alain",
  "Albert Cleary",
  "Albion",
  "Alex Power",
  "Alex Wilder",
  "Alexa Mendez",
  "Alexander Pierce",
  "Alice",
  "Alicia Masters",
  "Alpha Flight",
  "Alvin Maker",
  "Amadeus Cho",
  "Amanda Sefton",
  "Amazoness",
  "American Eagle",
  "Amiko",
  "Amora",
  "Amphibian",
  "Amun",
  "Ancient One",
  "Angel",
  "Angela",
  "Anita Blake",
  "Anne Marie Hoag",
  "Annihilus",
  "Anole",
  "Ant-Man",
  "Anthem",
  "Apocalypse",
  "Aqueduct",
  "Arachne",
  "Araٌa",
  "Arcade",
  "Arcana",
  "Archangel",
  "Arclight",
  "Ares",
  "Argent",
  "Armadillo",
  "Armor",
  "Armory",
  "Arnim Zola",
  "Arsenic",
  "Artiee",
  "Asgardian",
  "Askew-Tronics",
  "Asylum",
  "Atlas",
  "Aurora",
  "Avalanche",
  "Avengers",
  "Azazel",
  "Banshee",
  "Baron Strucker",
  "Baron Zemo",
  "Baroness S'Bak",
  "Barracuda",
  "Bart Rozum",
  "Bastion",
  "Batroc the Leaper",
  "Battering Ram",
  "Beak",
  "Beast",
  "Becatron",
  "Bedlam",
  "Beef",
  "Beetle",
  "Ben Grimm",
  "Ben Parker",
  "Ben Reilly",
  "Ben Urich",
  "Bengal",
  "Beta-Ray Bill",
  "Betty Brant",
  "Betty Ross",
  "Beyonder",
  "Bi-Beast",
  "Big Bertha",
  "Big Wheel",
  "Bill Hollister",
  "Bishop",
  "Black Bird",
  "Black Bolt",
  "Black Cat",
  "Black Crow",
  "Black Knight",
  "Black Panther",
  "Black Queen",
  "Black Tarantula",
  "Black Tom",
  "Black Widow",
  "Black Widow/Natasha Romanoff",
  "Blackheart",
  "Blacklash",
  "Blackout",
  "Blade",
  "Blastaar",
  "Blazing Skull",
  "Blindfold",
  "Blink",
  "Blizzard",
  "Blob",
  "Blockbuster",
  "Blok",
  "Bloke",
  "Blonde Phantom",
  "Bloodaxe",
  "Bloodscream",
  "Bloodstorm",
  "Bloodstrike",
  "Blue Blade",
  "Blue Marvel",
  "Blue Shield",
  "Blur",
  "Bob, Agent of Hydra",
  "Boom Boom",
  "Boomer",
  "Boomerang",
  "Box",
  "Bride of Nine Spiders",
  "Bromley",
  "Brood",
  "Brother Voodoo",
  "Brotherhood of Evil Mutants",
  "Brotherhood of Mutants",
  "Bruce Banner",
  "Brute",
  "Bucky",
  "Bug",
  "Bulldozer",
  "Bullseye",
  "Bushwacker",
  "Butterfly",
  "Cable",
  "Calamity",
  "Caliban",
  "Callisto",
  "Calypso",
  "Cammi",
  "Cannonball",
  "Cap'n Oz",
  "Captain America",
  "Captain America/Steve Rogers",
  "Captain Britain",
  "Captain Cross",
  "Captain Flint",
  "Captain Marvel",
  "Captain Midlands",
  "Captain Stacy",
  "Captain Universe",
  "Cardiac",
  "Caretaker",
  "Cargill",
  "Carlie Cooper",
  "Carmella Unuscione",
  "Carnage",
  "Carol Danvers",
  "Carol Hines",
  "Cassandra Nova",
  "Catseye",
  "Cecilia Reyes",
  "Celestials",
  "Centennial",
  "Centurions",
  "Cerebro",
  "Cerise",
  "Ch'od",
  "Chamber",
  "Chameleon",
  "Champions",
  "Changeling",
  "Charles Xavier",
  "Charlie Campion",
  "Chase Stein",
  "Chat",
  "Chimera",
  "Chores MacGillicudy",
  "Christian Walker",
  "Chronomancer",
  "ClanDestine",
  "Clea",
  "Clint Barton",
  "Cloak",
  "Cloud 9",
  "Cobalt Man",
  "Colleen Wing",
  "Colonel America",
  "Colossus",
  "Confederates of the Curious",
  "Constrictor",
  "Contessa",
  "Controller",
  "Cornelius",
  "Corsair",
  "Cosmo",
  "Cottonmouth",
  "Count Nefaria",
  "Countess",
  "Crimson Crusader",
  "Crimson Dynamo",
  "Crimson King",
  "Crossbones",
  "Crule",
  "Crusher Hogan",
  "Crystal",
  "Cuckoo",
  "Curt Conners",
  "Cuthbert",
  "Cyber",
  "Cyclops",
  "Cypher",
  "D'Ken Neramani",
  "Dagger",
  "Daily Bugle",
  "Daimon Hellstrom",
  "Daken",
  "Dakota North",
  "Damage Control",
  "Dani Moonstar",
  "Danny Rand",
  "Daredevil",
  "Dargo Ktor",
  "Dark Avengers",
  "Dark Beast",
  "Dark Phoenix",
  "Dark X-Men",
  "Darkhawk",
  "Darkstar",
  "Darwin",
  "Dazzler",
  "Deacon Frost",
  "Dead Girl",
  "Deadpool",
  "Death",
  "Deathbird",
  "Deathcry",
  "Deathlok",
  "Deathstrike",
  "Debra Whitman",
  "Debrii",
  "Deena Pilgrim",
  "Defenders",
  "Demogoblin",
  "Destiny",
  "Detective Soap",
  "Deviants",
  "Devil Dinosaur",
  "Devos",
  "Dexter Bennett",
  "Diablo",
  "Diamondback",
  "Dinah Soar",
  "Dirk Anger",
  "Doc Samson",
  "Doctor Doom",
  "Doctor Faustus",
  "Doctor Octopus",
  "Doctor Spectrum",
  "Doctor Strange",
  "Dog Brother #1",
  "Domino",
  "Donald Blake",
  "Doomsday Man",
  "Doop",
  "Doorman",
  "Dorian Gray",
  "Dormammu",
  "Dr. Strange",
  "Dracula",
  "Dragon Lord",
  "Dragon Man",
  "Drax",
  "Dreadnoughts",
  "Dreaming Celestial",
  "Druig",
  "Dum Dum Dugan",
  "Dust",
  "Earthquake",
  "Echo",
  "Eddie Brock",
  "Eddie Lau",
  "Edward \"Ted\" Forrester",
  "Edwin Jarvis",
  "Ego",
  "Electro",
  "Elektra",
  "Elements of Doom",
  "Elite",
  "Elixir",
  "Elloe Kaifi",
  "Elsa Bloodstone",
  "Emma Frost",
  "Empath",
  "Emplate",
  "Enchantress",
  "Ender Wiggin",
  "Energizer",
  "Epoch",
  "Erik the Red",
  "Eternals",
  "Eternity",
  "Excalibur",
  "Exiles",
  "Exodus",
  "Expediter",
  "Ezekiel",
  "Ezekiel Stane",
  "Fabian Cortez",
  "Falcon",
  "Falcon/Sam Wilson",
  "Fallen One",
  "Famine",
  "Fantastic Four",
  "Fantastick Four",
  "Fantomex",
  "Fat Cobra",
  "Felicia Hardy",
  "Fenris",
  "Feral",
  "Fin Fang Foom",
  "Firebird",
  "Firebrand",
  "Firedrake",
  "Firelord",
  "Firestar",
  "Fixer",
  "Flatman",
  "Flying Dutchman",
  "Foggy Nelson",
  "Force Works",
  "Forearm",
  "Forge",
  "Forgotten One",
  "Frank Castle",
  "Frankenstein's Monster",
  "Franklin Richards",
  "Franklin Storm",
  "Freak",
  "Frightful Four",
  "Frog Thor",
  "Frog-Man",
  "Gabe Jones",
  "Galactus",
  "Galia",
  "Gambit",
  "Gamma Corps",
  "Gamora",
  "Gargoyle",
  "Garia",
  "Garrison Kane",
  "Gateway",
  "Gauntlet",
  "Geiger",
  "Gene Sailors",
  "Generation X",
  "Genesis",
  "Genis-Vell",
  "George Stacy",
  "Gertrude Yorkes",
  "Ghost Rider",
  "Giant Girl",
  "Giant Man",
  "Giant-dok",
  "Giant-Man",
  "Gideon",
  "Git Hoskins",
  "Gladiator",
  "Glenn Talbot",
  "Glorian",
  "Goblin Queen",
  "Golden Guardian",
  "Goliath",
  "Gorgon",
  "Gorilla Man",
  "Grandmaster",
  "Gravity",
  "Great Lakes Avengers",
  "Green Goblin",
  "Gressill",
  "Grey Gargoyle",
  "Greymalkin",
  "Grim Reaper",
  "Groot",
  "Guardian",
  "Guardians of the Galaxy",
  "Guardsmen",
  "Gunslinger",
  "GW Bridge",
  "Gwen Stacy",
  "H.A.M.M.E.R.",
  "H.E.R.B.I.E.",
  "Hairball",
  "Half-Life",
  "Hammerhead",
  "Hank Pym",
  "Hannibal King",
  "Happy Hogan",
  "Hardball",
  "Harley Davidson Cooper",
  "Harpoon",
  "Harrier",
  "Harry Heck",
  "Harry Osborn",
  "Hate-Monger",
  "Havok",
  "Hawkeye",
  "Hawkeye/Clint Barton",
  "Hedge Knight",
  "Hellcat",
  "Hellfire Club",
  "Hellion",
  "Hellions",
  "Hemingway",
  "Henry Peter Gyrich",
  "Hepzibah",
  "Hercules",
  "Heroes For Hire",
  "Hex",
  "High Evolutionary",
  "Hindsight Lad",
  "Hiroim",
  "Hitman",
  "Hitomi Sakuma",
  "Hobgoblin",
  "Holocaust",
  "Holy",
  "Hope Summers",
  "Howard Saint",
  "Howard The Duck",
  "Hulk",
  "Hulk-dok",
  "Hulk/Bruce Banner",
  "Hulkling",
  "Human Cannonball",
  "Human Fly",
  "Human Robot",
  "Human Torch",
  "Humbug",
  "Husk",
  "Hussar",
  "Hydra",
  "Hydro-Man",
  "Hyperion",
  "Hypno-Hustler",
  "Iceman",
  "Ikaris",
  "Illuminati",
  "Ilyana Rasputin",
  "Imp",
  "Imperfects",
  "Imperial Guard",
  "Impossible Man",
  "In-Betweener",
  "Inertia",
  "Infant Terrible",
  "Inhumans",
  "Ink",
  "Invaders",
  "Invisible Woman",
  "Iron Cross Army",
  "Iron Fist",
  "Iron Lad",
  "Iron Man",
  "Iron Man/Tony Stark",
  "Iron Monger",
  "Iron Patriot",
  "Ironclad",
  "J. Jonah Jameson",
  "Jack Flag",
  "Jack Murdock",
  "Jack O' Lantern",
  "Jack Power",
  "Jackal",
  "Jackpot",
  "James Buchanan Barnes",
  "James Howlett",
  "Jamie Braddock",
  "Jane Foster",
  "Janus, the Nega-Man",
  "Jasper Sitwell",
  "Jazinda",
  "Jean Grey",
  "Jennifer Smith",
  "Jeryn Hogarth",
  "Jessica Drew",
  "Jessica Jones",
  "Jetstream",
  "Jigsaw",
  "Jimmy Woo",
  "Joan the Mouse",
  "Jocasta",
  "John Farson",
  "John Jameson",
  "John Porter",
  "John Wraith",
  "Johnny Blaze",
  "Johnny Storm",
  "Joseph",
  "Joshua Kane",
  "Josiah X",
  "Joystick",
  "Jubilee",
  "Juggernaut",
  "Jule Carpenter",
  "Julian Keller",
  "Junta",
  "Justice",
  "Justin Hammer",
  "Ka-Zar",
  "Kabuki",
  "Kang",
  "Karen O'Malley",
  "Karen Page",
  "Karma",
  "Karnak",
  "Karolina Dean ",
  "Kat Farrell",
  "Kate Bishop",
  "Katie Power",
  "Ken Ellis",
  "Khan",
  "Kid Colt",
  "Killer Shrike",
  "Killmonger",
  "Killraven",
  "King Bedlam",
  "King Cobra",
  "Kingpin",
  "Kinsey Walden",
  "Kitty Pryde",
  "Klaw",
  "Komodo",
  "Korath",
  "Korg",
  "Korvac",
  "Kraven the Hunter",
  "Kree",
  "Krista Starr",
  "Kronos",
  "Kulan Gath",
  "Kylun",
  "La Nuit",
  "Lady Bullseye",
  "Lady Deathstrike",
  "Lady Mastermind",
  "Lady Ursula",
  "Lady Vermin",
  "Lake",
  "Landau",
  "Lava-Man",
  "Layla Miller",
  "Leader",
  "Leech",
  "Legion",
  "Lei Kung, The Thunderer",
  "Lenny Balinger",
  "Leo",
  "Leopardon",
  "Leper Queen",
  "Lester",
  "Lethal Legion",
  "Lieutenant Marcus Stone",
  "Lifeguard",
  "Lightning Lords of Nepal",
  "Lightspeed",
  "Lila Cheney",
  "Lilandra",
  "Lilith",
  "Lily Hollister",
  "Lionheart",
  "Living Lightning",
  "Living Mummy",
  "Living Tribunal",
  "Liz Osborn",
  "Lizard",
  "Loa",
  "Lockheed",
  "Lockjaw",
  "Logan",
  "Loki",
  "Loners",
  "Longshot",
  "Lord Hawal",
  "Lord Tyger",
  "Lords of Avalon",
  "Lorna Dane",
  "Luckman",
  "Lucky Pierre",
  "Lucy in the Sky",
  "Luke Cage",
  "Luminals",
  "Lyja",
  "M",
  "M.O.D.A.M.",
  "M.O.D.O.G.",
  "M.O.D.O.K.",
  "Ma Gnuci",
  "Mac Gargan",
  "Mach IV",
  "Machine Man",
  "Mad Thinker",
  "Madame Hydra",
  "Madame Masque",
  "Madame Web",
  "Maddog",
  "Madelyne Pryor",
  "Madripoor",
  "Madrox",
  "Maelstrom",
  "Maestro",
  "Magdalene",
  "Maggott",
  "Magik",
  "Maginty",
  "Magma",
  "Magneto",
  "Magus",
  "Major Mapleleaf",
  "Makkari",
  "Malcolm Colcord",
  "Malice",
  "Man-Thing",
  "Man-Wolf",
  "Mandarin",
  "Mandrill",
  "Mandroid",
  "Manta",
  "Mantis",
  "Marauders",
  "Marcus Van Sciver",
  "Maria Hill",
  "Mariko Yashida",
  "Marrow",
  "Marten Broadcloak",
  "Martin Li",
  "Marvel Apes",
  "Marvel Boy",
  "Marvel Zombies",
  "Marvex",
  "Mary Jane Watson",
  "Masked Marvel",
  "Masque",
  "Master Chief",
  "Master Mold",
  "Mastermind",
  "Masters of Evil",
  "Mathemanic",
  "Matsu'o Tsurayaba",
  "Matthew Murdock",
  "Mattie Franklin",
  "Mauler",
  "Maverick",
  "Maximus",
  "May Parker",
  "Medusa",
  "Meggan",
  "Meltdown",
  "Menace",
  "Mentallo",
  "Mentor",
  "Mephisto",
  "Mephistopheles",
  "Mercury",
  "Mesmero",
  "Metal Master",
  "Meteorite",
  "MI: 13",
  "Micro/Macro",
  "Microbe",
  "Microchip",
  "Micromax",
  "Midnight",
  "Miek",
  "Mikhail Rasputin",
  "Millenium Guard",
  "Millie the Model",
  "Mimic",
  "Mindworm",
  "Miracleman",
  "Miss America",
  "Mister Fear",
  "Mister Sinister",
  "Misty Knight",
  "Mockingbird",
  "Moira MacTaggert",
  "Mojo",
  "Mole Man",
  "Molecule Man",
  "Molly Hayes",
  "Molly Von Richtofen",
  "Molten Man",
  "Mongoose",
  "Mongu",
  "Monster Badoon",
  "Moon Knight",
  "Moondragon",
  "Moonstone",
  "Morbius",
  "Mordo",
  "Morg",
  "Morgan Stark",
  "Morlocks",
  "Morlun",
  "Morph",
  "Mother Askani",
  "Mr. Bumpo",
  "Mr. Fantastic",
  "Mr. Fish",
  "Mr. Fixit",
  "Mr. Hyde",
  "Mr. Immortal",
  "Mr. Meugniot",
  "Mr. Negative",
  "Mr. Payback",
  "Mr. X",
  "MS2",
  "Ms. Marvel",
  "Mulholland Black",
  "Multiple Man",
  "MVP",
  "Mysterio",
  "Mystique",
  "Namor",
  "Namora",
  "Namorita",
  "Naoko",
  "Natasha Romanoff",
  "Nebula",
  "Nehzno",
  "Nekra",
  "Nemesis",
  "Network",
  "New Goblin",
  "New Mutants",
  "New Warriors",
  "New X-Men",
  "Newton Destine",
  "Next Avengers",
  "Nextwave",
  "Nick Fury",
  "Nico Minoru",
  "Nicolaos",
  "Night Nurse",
  "Night Thrasher",
  "Nightcrawler",
  "Nighthawk",
  "Nightmare",
  "Nightshade",
  "Nine-Fold Daughters of Xao",
  "Nitro",
  "Nocturne",
  "Nomad",
  "Norman Osborn",
  "Norrin Radd",
  "Northstar",
  "Nova",
  "Nuke",
  "Obadiah Stane",
  "Odin",
  "Ogun",
  "Old Lace",
  "Omega Flight",
  "Omega Red",
  "Omega Sentinel",
  "Omega the Unknown",
  "Onslaught",
  "Oracle",
  "Ord",
  "Orphan",
  "Orphan-Maker",
  "Otto Octavius",
  "Outlaw Kid",
  "Overlord",
  "Owl",
  "Ozymandias",
  "Paibok",
  "Paladin",
  "Pandemic",
  "Paper Doll",
  "Patch",
  "Patriot",
  "Payback",
  "Penance",
  "Pepper Potts",
  "Pestilence",
  "Pet Avengers",
  "Pete Wisdom",
  "Peter Parker",
  "Peter Quill",
  "Phalanx",
  "Phantom Reporter",
  "Phil Sheldon",
  "Photon",
  "Phyla-Vell",
  "Piledriver",
  "Pip",
  "Pixie",
  "Plazm",
  "Polaris",
  "Post",
  "Power Man",
  "Power Pack",
  "Praxagora",
  "Preak",
  "Pretty Boy",
  "Pride",
  "Prima",
  "Prince of Orphans",
  "Princess Powerful",
  "Prism",
  "Prodigy",
  "Proemial Gods",
  "Professor Monster",
  "Professor X",
  "Proteus",
  "Proudstar",
  "Prowler",
  "Psycho-Man",
  "Psylocke",
  "PsyNapse",
  "Puck",
  "Puff Adder",
  "pug",
  "Puma",
  "Punisher",
  "Puppet Master",
  "Purifiers",
  "Purple Man",
  "Pyro",
  "Quasar",
  "Quasimodo",
  "Queen Noir",
  "Quentin Quire",
  "Quicksilver",
  "Rachel Grey",
  "Radioactive Man",
  "Rafael Vega",
  "Rage",
  "Raider",
  "Randall",
  "Randall Flagg",
  "Random",
  "Rattler",
  "Ravenous",
  "Rawhide Kid",
  "Raza",
  "Reaper",
  "Reavers",
  "Red 9",
  "Red Ghost",
  "Red Hulk",
  "Red She-Hulk",
  "Red Shift",
  "Red Skull",
  "Red Wolf",
  "Redwing",
  "Reptil",
  "Retro Girl",
  "Revanche",
  "Rhino",
  "Rhodey",
  "Richard Fisk",
  "Rick Jones",
  "Ricochet",
  "Rictor",
  "Riptide",
  "Risque",
  "Robbie Robertson",
  "Robert Baldwin ",
  "Robin Chapel",
  "Rocket Raccoon",
  "Rocket Racer",
  "Rockslide",
  "Rogue",
  "Roland Deschain",
  "Romulus",
  "Ronan",
  "Roughhouse",
  "Roulette",
  "Roxanne Simpson",
  "Rumiko Fujikawa",
  "Runaways",
  "Russian",
  "S.H.I.E.L.D.",
  "Sabra",
  "Sabretooth",
  "Sage",
  "Salem's Seven",
  "Sally Floyd",
  "Salo",
  "Sandman",
  "Santa Claus",
  "Saracen",
  "Sasquatch",
  "Satana",
  "Sauron",
  "Scalphunter",
  "Scarecrow",
  "Scarlet Spider",
  "Scarlet Witch",
  "Scorpion",
  "Scourge",
  "Scrambler",
  "Scream",
  "Screwball",
  "Sebastian Shaw",
  "Secret Warriors",
  "Selene",
  "Senator Kelly",
  "Sentinel",
  "Sentinels",
  "Sentry",
  "Ser Duncan",
  "Serpent Society",
  "Sersi",
  "Shadow King",
  "Shadowcat",
  "Shadu the Shady",
  "Shalla-bal",
  "Shaman",
  "Shane Yamada-Jones",
  "Shang-Chi",
  "Shanna the She-Devil",
  "Shape",
  "Shard",
  "Sharon Carter",
  "Sharon Ventura",
  "Shatterstar",
  "She-Hulk",
  "Shen",
  "Sheva Callister",
  "Shi'Ar",
  "Shinko Yamashiro",
  "Shinobi Shaw",
  "Shiva",
  "Shiver Man",
  "Shocker",
  "Shockwave",
  "Shooting Star",
  "Shotgun",
  "Shriek",
  "Sif",
  "Silhouette",
  "Silk Fever",
  "Silver Centurion",
  "Silver Fox",
  "Silver Sable",
  "Silver Samurai",
  "Silver Surfer",
  "Silverclaw",
  "Silvermane",
  "Sin",
  "Sinister Six",
  "Sir Ram",
  "Siren",
  "Sister Grimm",
  "Skaar",
  "Skin",
  "Skreet",
  "Skrulls",
  "Skullbuster",
  "Slapstick",
  "Slayback",
  "Sleeper",
  "Sleepwalker",
  "Slipstream",
  "Slyde",
  "Smasher",
  "Smiling Tiger",
  "Snowbird",
  "Solo",
  "Songbird",
  "Sons of the Tiger",
  "Spacker Dave",
  "Spectrum",
  "Speed",
  "Speed Demon",
  "Speedball",
  "Spencer Smythe",
  "Sphinx",
  "Spider-dok",
  "Spider-Girl",
  "Spider-Ham",
  "Spider-Man",
  "Spider-Woman",
  "Spiral",
  "Spirit",
  "Spitfire",
  "Spot",
  "Sprite",
  "Spyke",
  "Squadron Sinister",
  "Squadron Supreme",
  "Squirrel Girl",
  "Stacy X",
  "Star Brand",
  "Star-Lord",
  "Starbolt",
  "Stardust",
  "Starfox",
  "Starhawk",
  "Starjammers",
  "Stark Industries",
  "Stature",
  "Steel Serpent",
  "Stellaris",
  "Stepford Cuckoos",
  "Stephanie de la Spiroza",
  "Stephen Strange",
  "Steve Rogers",
  "Stick",
  "Stilt-Man",
  "Stingray",
  "Stone Men",
  "Storm",
  "Stranger",
  "Strong Guy",
  "Stryfe",
  "Sub-Mariner",
  "Sue Storm",
  "Sugar Man",
  "Sumo",
  "Sunfire",
  "Sunset Bain",
  "Sunspot",
  "Super Hero Squad",
  "Super-Adaptoid",
  "Super-Skrull",
  "Supernaut",
  "Supreme Intelligence",
  "Surge",
  "Susan Delgado",
  "Swarm",
  "Sway",
  "Switch",
  "Swordsman",
  "Sym",
  "Synch",
  "T'Challa",
  "Tag",
  "Talisman",
  "Talkback",
  "Talon",
  "Talos",
  "Tana Nile",
  "Tarantula",
  "Tarot",
  "Taskmaster",
  "Tattoo",
  "Ted Forrester",
  "Tempest",
  "Tenebrous",
  "Terrax",
  "Terror",
  "Texas Twister",
  "Thaddeus Ross",
  "Thanos",
  "The 198",
  "The Anarchist",
  "The Call",
  "The Captain",
  "The Enforcers",
  "The Executioner",
  "The Fallen",
  "The Fury",
  "The Hand",
  "The Hood",
  "The Howling Commandos",
  "The Hunter",
  "The Initiative",
  "The Leader",
  "The Liberteens",
  "The Liberty Legion",
  "The Order",
  "The Phantom",
  "The Professor",
  "The Renegades",
  "The Santerians",
  "The Shiver Man",
  "The Spike",
  "The Stranger",
  "The Twelve",
  "The Watchers",
  "Thena",
  "Thing",
  "Thor",
  "Thor Girl",
  "Thunderball",
  "Thunderbird",
  "Thunderbolt",
  "Thunderbolt Ross",
  "Thunderbolts",
  "Thundra",
  "Tiger Shark",
  "Tiger's Beautiful Daughter",
  "Tigra",
  "Timeslip",
  "Tinkerer",
  "Titania",
  "Titanium Man",
  "Toad",
  "Toad Men",
  "Tomas",
  "Tombstone",
  "Tomorrow Man",
  "Tony Stark",
  "Toro",
  "Toxin",
  "Trauma",
  "Triathlon",
  "Trish Tilby",
  "Triton",
  "True Believers",
  "Turbo",
  "Tusk",
  "Two-Gun Kid",
  "Tyger Tiger",
  "Typhoid Mary",
  "Tyrannus",
  "U-Foes",
  "U-Go Girl",
  "U.S. Agent",
  "Uatu The Watcher",
  "Ulik",
  "Ultimate Spider-Man",
  "Ultimates",
  "Ultimatum",
  "Ultimo",
  "Ultra-Adaptoid",
  "Ultragirl",
  "Ultron",
  "Umar",
  "Unicorn",
  "Union Jack",
  "Unus",
  "Valeria Richards",
  "Valkyrie",
  "Vampiro",
  "Vance Astro",
  "Vanisher",
  "Vapor",
  "Vargas",
  "Vector",
  "Veda",
  "Vengeance",
  "Venom",
  "Venus",
  "Venus Dee Milo",
  "Vermin",
  "Vertigo",
  "Victor Mancha",
  "Victor Von Doom",
  "Vin Gonzales",
  "Vindicator",
  "Violations",
  "Viper",
  "Virginia Dare",
  "Vision",
  "Vivisector",
  "Vulcan",
  "Vulture",
  "Wallflower",
  "Wallop",
  "Wallow",
  "War",
  "War Machine",
  "Warbird",
  "Warbound",
  "Warhawk",
  "Warlock",
  "Warpath",
  "Warren Worthington III",
  "Warstar",
  "Wasp",
  "Weapon Omega",
  "Weapon X",
  "Wendell Rand",
  "Wendell Vaughn",
  "Wendigo",
  "Werewolf By Night",
  "Whiplash",
  "Whirlwind",
  "Whistler",
  "White Queen",
  "White Tiger",
  "Whizzer",
  "Wiccan",
  "Wild Child",
  "Wild Pack",
  "Wildside",
  "William Stryker",
  "Wilson Fisk",
  "Wind Dancer",
  "Winter Soldier",
  "Wither",
  "Wolf Cub",
  "Wolfpack",
  "Wolfsbane",
  "Wolver-dok",
  "Wolverine",
  "Wonder Man",
  "Wong",
  "Wraith",
  "Wrecker",
  "Wrecking Crew",
  "X-23",
  "X-51",
  "X-Babies",
  "X-Cutioner",
  "X-Factor",
  "X-Factor Investigations",
  "X-Force",
  "X-Man",
  "X-Men",
  "X-Ray",
  "X-Statix",
  "X.S.E.",
  "Xavin",
  "Xorn",
  "Yellow Claw",
  "Yellowjacket",
  "Young Avengers",
  "Young X-Men",
  "Zaladane",
  "Zaran",
  "Zarda",
  "Zarek",
  "Zeigeist",
  "Zemo",
  "Zodiak",
  "Zombie",
  "Zuras",
  "Zzzax"
];
countries = characters;
/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), countries);