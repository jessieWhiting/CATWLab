class Country {
    constructor(name, language, greeting, colors) {
        this.name = name
        this.language = language
        this.greeting = greeting
        this.colors = colors
    }
}
// Africa:
let Algeria = new Country("Algeria","Arabic: ","مرحبا بالعالم!",["green","white","red"])
let Angola = new Country("Angola","Portuguese: ","Olá Mundo!",["red","black","yellow"])               
let Benin = new Country("Benin","French: ","Bonjour le monde!",["green","yellow","red"])                
let Botswana = new Country("Botswana","English: ","Hello, World!",["blue","black","white"])              
let BurinkaFaso = new Country("Burkina Faso","French: ","Bonjour le monde!",["green","blue","black"])               
let Burundi = new Country("Burundi","French: ","Bonjour le monde!",["red","white","green"])              
let Cameroon = new Country("Cameroon","English/French: ","Hello, World!/Bonjour le monde!,",["green","red","yellow"])
//Antarctica:             
let Antarctica = new Country("Antarctica","Silence: ","...",["purple","blue","black"])   
//Asia
let Japan = new Country("Japan","Japanese: ","a",["red","white"])
let Afghanistan = new Country("Afghanistan: ","Persian: ","سلام دنیا!",["black","red","green","white"])               
let Bahrain = new Country("Bahrain","Arabic: ","مرحبا بالعالم!",["red","white"])            
let Bangladesh = new Country("Bangladesh","Bengali: ","unable to translate.",["red","green"])             
let Bhutan = new Country("Bhutan","Dzongkha: ","unable to translate.",["orange","yellow","white"]) 
//Europe
let Armenia = new Country("Armenia","Armenian: ","Բարեւ աշխարհ!",["red","blue","orange"])               
let Azerbaijan = new Country("Azerbaijan","Azerbaijani: ","Salam, Dünya!",["blue","red","green"])               
let Norway = new Country("Norway","Norwegian: ","Hei Verden!",["red","white","blue"])               
let Poland = new Country("Poland","Polish: ","Witaj świecie!",["white","red"])              
let Portugal = new Country("Portugal","Portuguese: ","Olá Mundo!",["green","red"])             
let Sweden = new Country("Sweden","Swedish: ","Hej världen!",["blue","yellow"])              
let Switzerland = new Country("Switzerland: ","French","a",["red","white"])                
let Ukraine = new Country("Ukraine","Ukrainian: ","Привіт Світ!",["blue","yellow"])   
//Australia:           
let Australia = new Country("Australia","English: ","Hello World!",["green","yellow"])  
//North America:            
let USA = new Country("United States","English: ","Hello, World!",["red","white","blue"])                
let Mexico = new Country("Mexico", "Spanish: ", "¡Hola Mundo!", ["red", "white", "green"]);
let Nicaragua = new Country("Nicaragua","Spanish: ","¡Hola Mundo!",["blue","white"])
let Canada = new Country("Canada","English/French: ","Hello World!/Bonjour le monde!,",["red","white"])
//South America
let Argentina = new Country("Argentina","Spanish: ","¡Hola Mundo!",["blue","white"])                
let Bolivia = new Country("Bolivia","Spanish: ","¡Hola Mundo!",["red","yellow","green"])                
let Brazil = new Country("Brazil","Portuguese: ","Olá Mundo!",["red","yellow","green"])               
let Chile = new Country( "Chile","Spanish: ","¡Hola Mundo!",["red","white","blue"])               
let Colombia = new Country("Colombia","Spanish: ","¡Hola Mundo!",["yellow","blue","red"])               
let Ecuador = new Country( "Ecuador","Spanish: ","¡Hola Mundo!",["yellow","blue","red"])              



function SwitchCountry() {
    let input = document.getElementById("country").value
    let country;

    if (input === "Algeria") {
        //set country to usa 
        country = Algeria
    }
    else if (input === "Angola") {
        country = Angola
    }
    else if (input === "Benin") {
        country = Benin
    }
    else if (input === "Botswana") {
        country = Botswana
    }
    else if (input === "Burinka Faso") {
        country = BurinkaFaso
    }
    else if (input === "Burundi") {
        country = Burundi
    }
    else if (input === "Cameroon") {
        country = Cameroon
    }
    else if (input === "Antarctica") {
        country = Antarctica
    }
    else if (input === "Japan") {
        country = Japan
    }
    else if (input === "Afghanistan") {
        country = Afghanistan
    }
    else if (input === "Bahrain") {
        country = Bahrain
    }
    else if (input === "Bangladesh") {
        country = Bangladesh
    }
    else if (input === "Bhutan") {
        country = Bhutan
    }
    else if (input === "Armenia") {
        country = Armenia
    }
    else if (input === "Azerbaijan") {
        country = Azerbaijan
    }
    else if (input === "Norway") {
        country = Norway
    }
    else if (input === "Poland") {
        country = Poland
    }   
    else if (input === "Portugal") {
        country = Portugal
    }
    else if (input === "Sweden") {
        country = Sweden
    }
    else if (input === "Switzerland") {
        country = Switzerland
    }
    else if (input === "Ukraine") {
        country = Ukraine
    }
    else if (input === "Australia") {
        country = Australia
    }
    else if (input === "USA") {
        country = USA
    }
    else if (input === "Mexico") {
        country = Mexico
    } 
    else if (input === "Nicaragua") {
        country = Nicaragua
    }
    else if (input === "Argentina") {
        country = Argentina
    }
    else if (input === "Bolivia") {
        country = Bolivia
    }
    else if (input === "Brazil") {
        country = Brazil
    }
    else if (input === "Chile") {
        country = Chile
    }
    else if (input === "Columbia") {
        country = Colombia
    }
    else if (input === "Ecuador"){
        country = Ecuador
    }
    else if (input === "Canada"){
        country = Canada
    }
  
//change the text
document.getElementById("Name").innerText = country.name;
document.getElementById("Language").innerText = country.language;
document.getElementById("Hello").innerText = country.greeting;
//change the css
document.getElementById("Color1").style.backgroundColor = country.colors[0];
document.getElementById("Color2").style.backgroundColor = country.colors[1];
document.getElementById("Color3").style.backgroundColor = country.colors[2];
document.getElementById("Color4").style.backgroundColor = country.colors[3];
}












