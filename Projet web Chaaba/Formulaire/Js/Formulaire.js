var validite = 0;
let i = 0;
let probleme = 0;

function prenagepseudo() {
    const pseudoform = document.getElementById('pseudo');
    const pseudotab = document.getElementById('pseudo-save');
    const pseudoerreur = document.getElementById('pseudoerreur');
    const pseudolabel = document.getElementById('pseudolabel');
    const erreurmess = document.getElementById('messerreur');
    if (pseudoform.value.length > 20){
        pseudoerreur.style.visibility ='visible';
        probleme = probleme + 1;
    }
    else if (pseudoform.value===""){
        pseudolabel.innerText = 'Pseudo* :';
        probleme = probleme + 1;
        erreurmess.style.visibility='visible';
    }
    else {
        pseudotab.innerText = pseudoform.value;
        pseudoerreur.style.visibility ='hidden';
        validite= validite + 1;
    }
}

function prenageage() {
    const ageform = document.getElementById('age');
    const agetab = document.getElementById('age-save');
    const ageerreur = document.getElementById('ageerreur');
    if (isNaN(ageform.value)){
        ageerreur.style.visibility='visible';
        probleme = probleme + 1;
    }
    else{
        agetab.innerText=ageform.value;
        ageerreur.style.visibility='hidden';
    }
}

function verificationmdp(){
    const mdpinit = document.getElementById('motdepasse');
    const mdpfin = document.getElementById('motdepassecheck');
    const mdperreur = document.getElementById('mdperreur');
    const mdpcheckerreur = document.getElementById('mdpcheckerreur');
    const motdepasselabel = document.getElementById('motdepasselabel');
    const motdepassechecklabel = document.getElementById('motdepassechecklabel');
    const hashmdp = document.getElementById('hash-save');
    const erreurmess = document.getElementById('messerreur');
    if (mdpinit.value===""){
        motdepasselabel.innerText = 'Mot de passe* :';
        probleme = probleme + 1;
        erreurmess.style.visibility='visible';
    }
    if (mdpfin.value===""){
        motdepassechecklabel.innerText = 'Confirmation de mot de passe* :';
        probleme = probleme + 1;
        erreurmess.style.visibility='visible';
    }
    if (mdpinit.value != mdpfin.value){
        mdperreur.style.visibility='visible';
        mdpcheckerreur.style.visibility='visible';
        probleme = probleme + 1;
    }
    else {
        validite=validite + 1;
        mdperreur.style.visibility='hidden';
        mdpcheckerreur.style.visibility='hidden';
        var hash = CryptoJS.MD5(mdpinit.value);
        hashmdp.innerText=hash;
        mdpfin.value= "";
        mdpinit.value= "";
    }
}

function validation(){
    var mdpinit = document.getElementById('motdepasse');
    var mdpfin = document.getElementById('motdepassecheck');
    var ageform = document.getElementById('age');
    var pseudoform = document.getElementById('pseudo');
    const erreurmess = document.getElementById('messerreur');
    if (validite === 2){
        mdpinit.value = "";
        mdpfin.value = "";
        ageform.value = "";
        pseudoform.value = "";
        erreurmess.style.visibility='hidden';
    }
    validite = 0;
}

function identifiant (){
    i++;
}

function remplissageidentifiant (){
    const id = document.getElementById('id-save');
    id.innerText = i;
}

function vidange (){
    const pseudosave = document.getElementById('pseudo-save');
    const agesave = document.getElementById('age-save');
    const idsave = document.getElementById('id-save');
    const datesave = document.getElementById('date-save');
    const hashsave = document.getElementById('hash-save');
    pseudosave.innerText = "";
    agesave.innerText="";
    idsave.innerText="";
    datesave.innerText="";
    hashsave.innerText="";
}

function dateenvoi(){
    const dateenvoie = document.getElementById('date-save');
    var d = new Date();
    var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    var fullDate = date+' '+hours;
    dateenvoie.innerText=fullDate;
}

function problemeremplissage(){
    const pseudosave = document.getElementById('pseudo-save');
    const agesave = document.getElementById('age-save');
    const idsave = document.getElementById('id-save');
    const datesave = document.getElementById('date-save');
    const hashsave = document.getElementById('hash-save');
    if (probleme > 0){
        pseudosave.innerText = "";
        agesave.innerText="";
        idsave.innerText="";
        datesave.innerText="";
        hashsave.innerText="";
        i = i-1;
    }
    probleme = 0;
}
