function clock()
{
    var date=new Date();
    var day = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi","Vendredi", "Samedi"];
    var month = ["Janvier", "Février", "Mars", "Avril", "Mai","Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    var afficheDate = day[date.getDay()] + "   " + date.getDate() + "   " + month[date.getMonth()] + "   " + date.getFullYear();
    var afficheHeure= ((date.getHours() < 10)? "0" : "") + date.getHours() + " : " + ((date.getMinutes() < 10)? "0" : "") + date.getMinutes() + " : " + ((date.getSeconds() < 10)? "0" : "") + date.getSeconds();
    setInterval("clock()", 1000);
    document.getElementById("jour").innerHTML=afficheDate;
    document.getElementById("heure").innerHTML=afficheHeure;
}


function checked()
{
    if (document.getElementById('Monsieur').checked==false && document.getElementById('Madame').checked==false && document.getElementById('Mademoiselle').checked==false) 
    {
        alert("Vous devez remplir le champs de civilités");
        document.getElementById('Mons').style.color="red";
        document.getElementById('Mad').style.color="red";
        document.getElementById('Madem').style.color="red";
        var civilite=false;
    }

    if (document.getElementById("nom").value=="")
    {
        alert("Veuillez entrer votre nom");
        document.getElementById("nom").style.backgroundColor="red";
        var nom=false;
    }

    if (document.getElementById("prenom").value=="")
    {
        alert("Veuillez entrer votre prénom");
        document.getElementById("prenom").style.backgroundColor="red";
        var prenom=false;
    }

    if (document.getElementById("mail").value=="")
    {
        alert("Veuillez entrer votre adresse mail");
        document.getElementById("mail").style.backgroundColor="red";
        var mail=false;
    }

    if (document.getElementById('modif').checked==false && document.getElementById('aide').checked==false && document.getElementById('merci').checked==false && document.getElementById('meeting').checked==false && document.getElementById('url').checked==false && document.getElementById('autre').checked==false) 
    {
        alert("Veuillez cocher au moins une des cases");
        document.getElementById('modification').style.color="red";
        document.getElementById('infos').style.color="red";
        document.getElementById('merciEtEncouragement').style.color="red";
        document.getElementById('rdv').style.color="red";
        document.getElementById('lien').style.color="red";
        document.getElementById('autreDemande').style.color="red";
        var cases=false;
    }

    if (document.getElementById('meeting').checked)
    {
        if (document.forms["form"]["meetingDate"].value == "")
        {
            alert("Veuillez choisir une date de rendez-vous");
            document.getElementById('meetingDate').style.backgroundColor="red";
            var date=false;
        }

        if (document.forms["form"]["meetingTime"].value == "")
        {
            alert("Veuillez choisir une heure de rendez-vous");
            document.getElementById('meetingTime').style.backgroundColor="red";
            var time=false;
        }
    }
    
    if (document.getElementById('url').checked)
    {
        if (document.forms["form"]["website"].value == "")
        {
            alert("Veuillez mettre l'URL de votre site");
            document.getElementById('website').style.backgroundColor="red";
            var url=false;
        }
    }

    if (civilite==false || nom==false || prenom==false || mail==false || cases==false)
    {
        return false;
    }

    if (document.getElementById('meeting').checked && date==false && time==false)
    {
        return false;
    }

    if (document.getElementById('url').checked && url==false)
    {
        return false;
    }

    alert("Formulaire correctement rempli !");

    return true;
}


function backToNorm()
{
    alert("Formulaire remis à zéro");
    document.getElementById('Mons').style.color="white";
    document.getElementById('Mad').style.color="white";
    document.getElementById('Madem').style.color="white";
    document.getElementById("nom").style.backgroundColor="white";
    document.getElementById("prenom").style.backgroundColor="white";
    document.getElementById("mail").style.backgroundColor="white";
    document.getElementById('modification').style.color="white";
    document.getElementById('infos').style.color="white";
    document.getElementById('merciEtEncouragement').style.color="white";
    document.getElementById('rdv').style.color="white";
    document.getElementById('lien').style.color="white";
    document.getElementById('autreDemande').style.color="white";
    document.getElementById('meetingDate').style.backgroundColor="white";
    document.getElementById('meetingTime').style.backgroundColor="white";
    document.getElementById('website').style.backgroundColor="white";
    
    alert("Formulaire remis à zéro");
    return true;
}


function checkedReg()
{
    if (document.getElementById("mail").value=="")
    {
        alert("Veuillez entrer une adresse mail valide");
        document.getElementById("mail").style.backgroundColor="red";
        var mail=false;
    }

    if (document.getElementById("password").value=="")
    {
        alert("Veuillez entrer un mot de passe");
        document.getElementById("password").style.backgroundColor="red";
        document.getElementById("passwordConfirm").style.backgroundColor="red";
        var password=false;
    }
    
    if (document.getElementById("password").value!=document.getElementById("passwordConfirm").value)
    {
        alert("Veuillez entrer les deux même mot de passe");
        document.getElementById("password").style.backgroundColor="red";
        document.getElementById("passwordConfirm").style.backgroundColor="red";
        var password=false;
    }

    if (document.getElementById("pseudo").value=="")
    {
        alert("Veuillez entrer un pseudo");
        document.getElementById("pseudo").style.backgroundColor="red";
        var pseudo=false;
    }

    if (mail==false || password==false || pseudo==false)
    {
        return false;
    }

    alert("Inscription prise en compte !");

    return true;
}


function backToNormReg()
{
    document.getElementById("mail").style.backgroundColor="white";
    document.getElementById("password").style.backgroundColor="white";
    document.getElementById("passwordConfirm").style.backgroundColor="white";
    document.getElementById("pseudo").style.backgroundColor="white";

    alert("Formulaire remis à zéro");
    return true;
}


function changeColor()
{
    var theColor=document.getElementById("colorPseudo").value;
    document.getElementById("pseudo").style.color=theColor;
}


function checkedLog()
{
    if (document.getElementById("mail").value=="")
    {
        alert("Veuillez entrer une adresse mail valide");
        document.getElementById("mail").style.backgroundColor="red";
        var mail=false;
    }

    if (document.getElementById("password").value=="")
    {
        alert("Veuillez entrer un mot de passe");
        document.getElementById("password").style.backgroundColor="red";
        var password=false;
    }

    if (mail==false || password==false)
    {
        return false;
    }

    alert("Bonjour !");
    return true;
}


function backToNormLog()
{
    document.getElementById("mail").style.backgroundColor="white";
    document.getElementById("password").style.backgroundColor="white";
    return true;
}


function drawcanvas()
{
    var colorLog=document.getElementById("colorLogo").value;
    var colorBack=document.getElementById("colorBackground").value;
    document.getElementById("canvas1").style.backgroundColor=colorBack;


    //cercle
    var c = document.getElementById("canvas1");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle=colorLog;
    ctx.arc(450,250,120,0,2*Math.PI);
    ctx.fill();

    //carré vertical
    ctx.beginPath();
    ctx.fillStyle=colorBack;
    ctx.rect(370, 130, 60, 240);
    ctx.fill();

    //carré horizontal
    ctx.beginPath();
    ctx.fillStyle=colorBack;
    ctx.rect(330, 270, 240, 20);
    ctx.fill();
}


function zoom() 
{
    var colorLog=document.getElementById("colorLogo").value;
    var colorBack=document.getElementById("colorBackground").value;
    var c = document.getElementById("canvas1");
    var ctx = c.getContext("2d");
    var valZoom = document.getElementById("taille").value;

    ctx.clearRect(0, 0, c.width, c.height)
    
    //cercle
    ctx.beginPath();
    ctx.fillStyle=colorLog;
    ctx.arc((c.width)/2, (c.height)/2, 120*valZoom,0*valZoom ,2*Math.PI);
    ctx.fill();

    //carré vertical
    ctx.beginPath();
    ctx.fillStyle=colorBack;
    ctx.rect(((c.width)/2)-(120*valZoom)+(40*valZoom), ((c.height)/2)-(120*valZoom), 60*valZoom, 240*valZoom);
    ctx.fill();

    //carré horizontal
    ctx.beginPath();
    ctx.fillStyle=colorBack;
    ctx.rect(((c.width)/2)-(120*valZoom), ((c.height)/2)+(20*valZoom), 240*valZoom, 20*valZoom);
    ctx.fill();

    document.getElementById("canvas1").style.backgroundColor=colorBack;
}