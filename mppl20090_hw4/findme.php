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
    $sql = "SELECT * FROM userdata WHERE email='".$_POST['e_mail']."';";
    /*εκτυπώνω στο φυλλομετρητή το ερώτημα ώστε να ελέγξω μην έχει πάει κάτι λάθος*/
    
    //εκτέλεση ερωτήματος στη βάση
    $result = pg_query($dbconn, $sql) ;
    //έλεγχος αποτελεσμάτων
    if ($result) {
    
    } else {
    echo "Αναζήτηση NOT οκ <br>";
    die('Query failed: ' . pg_last_error());
    }

    echo "<table style='border:1px solid black'>";
    echo "<tr><th>Θεματολογία</th><th>'Ονομα</th><th>Επώνυμο</th><th>Φύλο</th>
    <th>Τηλέφωνο</th><th>Ταχυδρομικός Κώδικας</th><th>Διεύθυνση</th>
    <th>Πόλη</th><th>Νομός</th><th>Χώρα</th><th>Email</th><th>Μήνυμα</th></tr>";
    // Εμφάνιση αποτελεσμάτων στις γραμμές του πίνακα
    while($row = pg_fetch_assoc($result)) {
        echo "<tr><td>".$row['subject']."</td>".
        "<td style='text-align:center;'>".$row['name']."</td>".
        "<td style='text-align:center;'>".$row['surname']."</td>".
        "<td style='text-align:center;'>".$row['sex']."</td>".
        "<td style='text-align:center;'>".$row['phone']."</td>".
        "<td style='text-align:center;'>".$row['postc']."</td>".
        "<td style='text-align:center;'>".$row['addr']."</td>".
        "<td style='text-align:center;'>".$row['city']."</td>".
        "<td style='text-align:center;'>".$row['district']."</td>".
        "<td style='text-align:center;'>".$row['country']."</td>".
        "<td style='text-align:center;'>".$row['email']."</td>".
        "<td style='text-align:center;'>".$row['message']."</td>".
        "</tr>";
    }
    echo "</table>" ;
    //κλείσιμο σύνδεσης
    pg_close($dbconn);
?>