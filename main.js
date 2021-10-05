
let filmTomb = [];

class Film {
    constructor(nev, rendezo, kiadasiEv){
        this.nev = nev;
        this.rendezo = rendezo;
        this.kiadasiEv = kiadasiEv;
    }
    string(){
        return 'Cim: '+this.nev+', rendezte: '+this.rendezo+', kiadas eve: '+this.kiadasiEv;
    }
}

function hozzaAd(nev, re, ki) {
    nev = document.getElementsByName('nev').value;
    re = document.getElementsByName('rendezo').value;
    ki = document.getElementsByName('kiadas').value;
    filmTomb.push(new Film(nev,re,ki));
    document.getElementsByName('nev').value = '';
    document.getElementsByName('rendezo').value= '';
    document.getElementsByName('kiadas').value= '0';
}