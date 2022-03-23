var newReleases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg&quot;",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470&quot;",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg&quot;",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470&quot;",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg&quot;",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470&quot;",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg&quot;",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470&quot;",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
]
//or method 3rd
// REFRERENCE=>developer mozola Object entries

// Question > A > 2 ***Best method***
var ar1=[];
let task1_2 = newReleases.filter((ele) => {
    return ele.bookmark.length > 0
}).map((ele) => {

    return ele.bookmark
}).map((ele) => {
    // response madhe 2 vegvegale array milatat tyana 2 array na 1 kelay khali
ar1=[...ar1,...ele]
// ar1.push(...ele)
    }
)
// ar1 la baher map kelay karan last ch itearation pahije jar me varati ar1 retyrn kel tur mala jastiche array iteration milnar
ar1.map(data=>{
    // khali  for (const [key, value] of Object.entries(data)) us kelay karan mala dynamic key chya bajula tyachi value pahije us nasat kel tur sagale keys eka side la ani sagale values eka side la aalya usatya
    for (const [key, value] of Object.entries(data)) {
        document.write(`${key}: ${value} `);
      }
      document.write("<br>")
})