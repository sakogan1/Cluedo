const suspectsArray = [
    {
      cardName:"mrGreen",  
      firstName: 'Jacob',
      lastName: 'Green',
      occupation: 'Entrepreneur',
      age: 45,
      description: "He has a lot of connections",
      image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
      color: "green"
    }
    ,
    {
        cardName:"drOrchid",
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,    
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "white"
    }
    ,
    {   cardName:"profPlum",
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        color: "purple"
    }
    ,
    {
        cardName:"missScarlet",
        firstName: "Kasandra",
        lastName: "Scarlet", 
        occupation: "Actress",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/07/04/10/cluedo-miss-scarlett.jpg",
        color: "red"
    }
    ,
    {
        cardName:"mrsPeacock",
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "https://pm1.narvii.com/6722/3bd0d86d367315d9e81a12390c17343a27d8a4d9_hq.jpg",
        color: "blue"
    }
    ,
    {
        cardName:"mrMustard",
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "yellow"
    }
  ];

  const weaponsArray=[
      {
        name: "rope",
        weight: 10
      },
      {
        name: "knife",
        weight: 8     
      }
      ,
      {
        name: "candlestick",
        weight: 2
      },
      {
        name: "dumbbell",
        weight: 30
      },
      {
        name: "poison",
        weight:2
      }
      ,
      {
        name: "axe",
        weight: 15
      },
      {
        name: "bat",
        weight: 13
      },
      {
        name: "trophy",
        weight: 25
      },
      {
        name: "pistol",
        weight:20
      }
  ]

  const roomsArray=[
{
    name: "Dining Room"
}
,
{
    name: "Conservatory"
}
,
{
    name: "Kitchen"
}
,
{
    name: "Study"
}
,
{
    name: "Library"
}
,
{
    name: "Billiard Room"
}
,
{
    name: "Lounge"
}
,
{
    name: "Ballroom"
}
,
{
    name: "Hall"
}
,
{
    name: "Spa"
}
,
{
    name: "Living Room"
}
,
{
    name: "Observatory"
}
,
{
    name: "Theater"
}
,
{
    name: "Guest House"
}
,
{
    name: "Patio"
}
]

function hide(){
    document.getElementById("personCard").style.display = "none";
    document.getElementById("weaponCard").style.display = "none";
    document.getElementById("roomCard").style.display = "none";

}

function selectRandom(array){
    random = Math.floor(Math.random() * 6)
    console.log(random)
    return array[random]
}

function pickMystery(){
    const verdächtiger = selectRandom(suspectsArray) 
    const waffe = selectRandom(weaponsArray)
    const raum = selectRandom(roomsArray)
    
    let mystery=[]
    mystery.push(verdächtiger,waffe,raum)
    console.log(mystery)
    return mystery
}
  
    function revealMystery() {
        let mystery=pickMystery() 
        let personFirstName = mystery[0].firstName
        let personLastName = mystery[0].lastName
        let weapon = mystery[1].name
        let room = mystery[2].name
        let url = mystery[0].image
        let cardName = mystery[0].cardName
        let personAge = mystery[0].age
        let description =mystery[0].description
        let color =mystery[0].color
        
        document.getElementById("personCard").style.display = "block";
        document.getElementById("weaponCard").style.display = "block";
        document.getElementById("roomCard").style.display = "block";
    

        document.getElementById("mystery").innerHTML = `<strong id="strong">`+ personFirstName + " " + personLastName + `</strong>` +" " + "killed Mr. Boddy using the " + weapon + " in the " + room + "!"
        document.getElementById("cardName").innerHTML= cardName
        document.getElementById("image").innerHTML= `<img src=${url} >`
        document.getElementById("personName").innerHTML = personFirstName + " " + personLastName + " " +"(" + personAge + ")"
        document.getElementById("description").innerHTML = description
        document.getElementById("weaponCard").innerHTML = weapon
        document.getElementById("roomCard").innerHTML = room
        document.getElementById("strong").style.color = color
        document.getElementById("cardName").style.color = color
    
    }

