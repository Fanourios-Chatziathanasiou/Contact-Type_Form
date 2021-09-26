<?php
/*διάβασε τα στοιχεία σύνδεσης απο το αρχείο credent.php*/
require_once 'credent.php'; 
// Δημιουργία σύνδεσης 
$connecionstr="host=".DB_SERVER." port=5432 dbname=".DB_BASE." 
user=".DB_USER." password=".DB_PASS." options='--client_encoding=UTF8'"; 
$dbconn = pg_connect($connecionstr);
// Έλεγχος σύνδεσης
if (!$dbconn) {
 die("Connection failed: " . pg_connect_error());
}
//Δημιουργία ερωτήματος
$sql = "INSERT INTO userdata(subject, name, surname, sex, phone, postc, addr, city, district, country, email, message) VALUES 
('".$_POST['subject']."','".$_POST['name']."','".$_POST['surname']."','".$_POST['sex']."',
'".$_POST['phone']."','".$_POST['postc']."','".$_POST['addr']."','".$_POST['city']."',
'".$_POST['district']."','".$_POST['country']."','".$_POST['e_mail']."','".$_POST['message']."') ";



//εκτέλεση ερωτήματος στη βάση
$result = pg_query($dbconn, $sql) ;
//έλεγχος αποτελεσμάτων
if ($result) {
//Εμφάνιση αποτελεσμάτων σε μορφή πίνακα
echo "<br><br><h1 style='text-align:center;'>Επιτυχής καταχώρηση μηνύματος.</h1>";
} else {
echo "<br><br><h1 style='text-align:center;'>Μη επιτυχής καταχώρηση μηνύματος.</h1>";
die('Query failed: ' . pg_last_error());
}
//κλείσιμο σύνδεσης
pg_close($dbconn);
?>
