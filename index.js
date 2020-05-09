
var mauvaisesLettres = [ ]; // sera complété pendant le jeu
var lettresAttendues = ['s','u','p','e','r'];
var tentative=[];

// document.write
// = lettresAttendues.length;

// document.write( "<h1>Nombre des lettres à trouver</h1>");
document.getElementById("demo").innerHTML=lettresAttendues.length;

function valider(){
    let t=10;
	for( let i=0; i<10 && lettresAttendues.length!=0 && mauvaisesLettres.length<10 ;i++)
    {
    
	let f = prompt("Entrez une lettre svp ?");
    const x= ((element) => element==f);
    const index = lettresAttendues.findIndex(x);
    console.log(index);
    if(index>-1){
    lettresAttendues.splice(index,1);
    alert("Bon choix continue !");
    t--;
        }
    else
    {
    mauvaisesLettres=mauvaisesLettres+f;
    alert("mauvais choix");
    t--;
    alert("il veut reste ="+t);
    }
    
    if(mauvaisesLettres.length>=10){
    
    alert("vous avez perdu!");
    }
    if(lettresAttendues.length==0)
    {
    alert("Bravo!");
    }

}
}