
// Η συνάρτηση που κάνει ολούς του ελέγχους
function checkPatterns(element, id, regex, label, errorMessage) {
    if (element.value.length == 0) {
        invalidInputHiddenIds.push(id + "Message");
        return label + "\n        \u2022 Δεν έχει συμπληρωθεί\n";
    } else if (regex.test(element.value)) {
        return "";
    }else {
        invalidInputElements.push(element);
        invalidInputHiddenIds.push(id + "Message");
        return label + errorMessage;
    }
}


var alertString = "";
var invalidInputElements = [];
var invalidInputHiddenIds = [];

// καλεί τους ελέγχους
function checkAllFields(){

    // εξαφανίζει τα μυνήματα λαθούς κάτω απο τα πεδία
    var element = document.getElementsByClassName("hidden");
    for (var i = 0; i < element.length; i++) {
        element[i].style.display = 'none';
    }

    //ελέγχει εάν έχει επιλεχθεί θέμα
    if (document.getElementById("subject").value.length == 0){
        alertString += "Θέμα μηνύματος\n        \u2022 Παρακαλώ επιλέξτε ένα θέμα\n";
        invalidInputHiddenIds.push("subjectMessage");
    }

    // ελέγχει όνομα και επίθετο
    alertString += checkPatterns(document.getElementById("name"), "name",/^([α-ωΑ-Ωά-ώΆ-Ώ]|\.|,|!|;|(|)|-|<<|>>|:)+$/, "'Ονομα",
    "\n        \u2022  Λανθασμένη μορφή.Το πεδίο δέχεται μόνο ελληνικούς χαρακτήρες.\n");
     alertString += checkPatterns(document.getElementById("surname"), "surname",/^([α-ωΑ-Ωά-ώΆ-Ώ]|\.|,|!|;|(|)|-|<<|>>|:)+$/, "Επώνυμο",
     "\n        \u2022  Λανθασμένη μορφή.Το πεδίο δέχεται μόνο ελληνικούς χαρακτήρες.\n");

    // ελέγχει φύλο
    if (!((document.getElementById('sex1').checked) || document.getElementById('sex2').checked)) {
        invalidInputHiddenIds.push("sexMessage");
        alertString += "Φύλο\n        \u2022 Παρακαλώ επίλεξε ένα πεδίο\n";
    }

    // ελέγχει τκ, τηλέφωνο, διεύθυνση, πόλη, νομός, χώρα και email
    alertString += checkPatterns(document.getElementById("postc"), "postc", /^[0-9]{5}$/, "Ταχυδρομικός Κωδικός",
    "\n        \u2022 Λανθασμένη είσοδος ταχυδρομικού κώδικα(εώς 5 ψηφία)\n");
    alertString += checkPatterns(document.getElementById("phone"), "phone", /^(210)[1-9][0-9]{6}$/, "Τηλέφωνο",
    "\n        \u2022 Λάνθασμένη μορφή τηλεφώνου(10ψηφιος που ξεκιναει απο 210 και το 4ο ψηφίο δεν είναι 0\n");
    alertString += checkPatterns(document.getElementById("addr"), "addr", /^([α-ωΑ-Ωά-ώΆ-Ώ]|\.|,|!|;|(|)|-|<<|>>|:)+$/, "Διεύθυνση",
    "\n        \u2022 Λανθασμένη μορφή.Το πεδίο δέχεται μόνο ελληνικούς χαρακτήρες.\n");
    alertString += checkPatterns(document.getElementById("city"), "city", /^([α-ωΑ-Ωά-ώΆ-Ώ]|\.|,|!|;|(|)|-|<<|>>|:)+$/, "Πόλη",
    "\n        \u2022 Λανθασμένη μορφή.Το πεδίο δέχεται μόνο ελληνικούς χαρακτήρες.\n");
    alertString += checkPatterns(document.getElementById("district"), "district",/^([α-ωΑ-Ωά-ώΆ-Ώ]|\.|,|!|;|(|)|-|<<|>>|:)+$/, "Νομός",
    "\n        \u2022 Λανθασμένη μορφή.Το πεδίο δέχεται μόνο ελληνικούς χαρακτήρες.\n");
    alertString += checkPatterns(document.getElementById("country"), "country",/^([α-ωΑ-Ωά-ώΆ-Ώ]|\.|,|!|;|(|)|-|<<|>>|:)+$/, "Χώρα",
    "\n        \u2022 Λανθασμένη μορφή.Το πεδίο δέχεται μόνο ελληνικούς χαρακτήρες.\n");
    alertString += checkPatterns(document.getElementById("email"), "email",/^[a-zA-Zα-ωά-ώΑ-Ω]+@[a-zA-Zα-ωά-ώΑ-Ω]+\.[a-zA-Zα-ωά-ώΑ-Ω]{2}$/, "Email",
    "\n        \u2022 Μη έγκυρη μορφή email\n");

    // ελέγχει εάν έχει επιλέχθεί μήνυμα
    if (document.getElementById("message").value.length == 0){
        invalidInputHiddenIds.push("messageMessage");
        alertString += "Το μήνυμά σας\n        \u2022 Παρακάλω συμπληρώστε το πεδίο\n";
    }
    var x;
    // εμφάνιζει μήνυμα οτι το μήνυμά στάλθηκε και σχετικές πληροφορίες
    if (alertString.length == 0){

        alert("Γειά σου " + document.getElementById("name").value +" "+ document.getElementById("surname").value 
        + " θα σου αποσταλεί μήνυμα στο " + document.getElementById("email").value +" σύντομα.");

        x = true;
        

    }else {

        alert(alertString);

        // αδειάζει τα λάθος πεδία και εμφάνιζει μήνυμά κατώ απο το πεδίο
        if (!(invalidInputElements.hidden == 0) || !(invalidInputHiddenIds.hidden == 0)) {
            for (var i = 0; i < invalidInputElements.length; i++) {
                invalidInputElements[i].value = '';
            }
            
            for (var i =0; i < invalidInputHiddenIds.length; i++) {
                console.log(i);
                document.getElementById(invalidInputHiddenIds[i]).style.display = "block";
            }
        }
        
        x = false;
    
    }

    // κάνει reset ολές τι βοηθητικές δομές
    invalidInputElements = [];
    invalidInputHiddenIds = [];
    alertString = "";
    return x;
}

//limit phone number to 10 digits
document.getElementById("phone").maxLength = 10;
//limit postal code to 5 digits
document.getElementById("postc").maxLength = 5; 