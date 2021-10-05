
var filmTomb = [];

class Film {
    nev;
    rendezo;
    kiadasiEv;
    constructor(nev, rendezo, kiadasiEv){
        this.nev = nev;
        this.rendezo = rendezo;
        this.kiadasiEv = kiadasiEv;
    }
    get toString(){
        return "Cim: "+this.nev+", rendezte: "+this.rendezo+", kiadas eve: "+this.kiadasiEv;
    }
}
function hozzaad() {
    let nev = document.getElementById('nev').value;
    let re = document.getElementById('rendezo').value;
    let ki = document.getElementById('kiadas').value;
    let adat = new Film(nev,re,ki);
    filmTomb.push(adat); 
    document.getElementById('nev').value = '';
    document.getElementById('rendezo').value= '';
    document.getElementById('kiadas').value= '';
}
function listaz(){
    let tablazat = "<table><tr><th>Film neve</th><th>Rendezo neve</th><th>Kiadas eve</th></tr>"
    for (let index = 0; index < filmTomb.length; index++) {
        tablazat += "<tr><td>"+filmTomb[index].nev+"</td><td>"+filmTomb[index].rendezo+"</td><td>"+filmTomb[index].kiadasiEv+"</td></tr>";
    }
    tablazat+="</table>";
    document.getElementById("tablazat").innerHTML = tablazat;
    /*for (let index = 0; index < filmTomb.length; index++) {
        let tr = document.createElement("tr");
        let th1 = document.createElement("th");
        let th2 = document.createElement("th");
        let th3 = document.createElement("th");
        let tablazat = document.getElementById("tablazat");
        tr.appendChild(th1.appendChild(document.createTextNode("Film neve")));
        tr.appendChild(th2.appendChild(document.createTextNode("Rendezo neve")));
        tr.appendChild(th3.appendChild(document.createTextNode("Kiadas eve")));
        tablazat.appendChild(tr);
    }*/
}
