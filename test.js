//Exercice 1

console.log('Hello world');

//Exercice 2

var tab = [1, 3, 6, 8, 9];
var element = 5;


function introduction(tab, element) {
    for (var i = 0, i <
    tab.length, i++
)
    {
        if (element === tab [i])
            return i;
    }
    return -1;
}

var on = introduction(tab, element);

if (on =)

    var searchElement = function (data, callback) {
        for (var i = 0; i < data.tableau.length; i++)
            if (data.tableau [i] == data.filtre)
                return callback(null, i);
        return callback('Element ' + data.filtre + ' non '
        retrouve
        dans
        tableau
        ');
    };

var tab = [1, 3, 6, 8, 9];
var element = 5;
var data = {tableau: tab, filtre: element};
searchElement(data, function (err, result))
{
    if (err)
        console.error("erreur :" + err)
    else
        console.log(element + " existe a la position " + result)
}
)
;

//Exercice 3

var str = 'abcdef';
var elt = 'cd';
var data = {chaine: str, filtre: element};

function introduction(data, callback) {
    if (data.filtre.length <= data.chaine.length) {
        for (var i = 0; i < data.chaine.length; i++) {
            if (data.chaine.substr(i), [i] === data.filtre [0])
                return callback(null, i);
        }
    }
}

var compteElement = function (data,callback){
    for (var i=0; i<= data.str.length - data.ch.length; i++){
        if (data.str.substr(i,data.ch.length == data.ch);
        compteur ++
    }
    if (compteur > 0)
        return callback (null,compteur)
        return callback (data.ch+ ' n\'existe pas dans ' + str);
    }
    computeElement (data, function (en, result){
        if (en)
            console.error ("erreur" : + en)
        else
            console.log (data.ch+ 'existe' + result + 'fin')
    });

//Exercice 4

var str = 'aabaabbbabbbaa';
var elt = ['ab', 'ba', 'abba'];
var data = {chaine: str, filtre: elt};

function theme(data, callback) {
    var valeur = [];
    for (var j = 0; j < data.filtre.length; j++) {
        compteur = 0;
        for (var i = 0; i < data.chaine.length; i++) {
            if (data.chaine.substr(i, data.filtre.length) === data.filtre[j]) {
                valeur [j] = ++compteur;
            }
        }
    }
    if (valeur.length > 0) {
        return callback(null, valeur);
    }
    console.error ("erreur :" + en)
    else
        console.log (element + " existe à la position" + result)
});




