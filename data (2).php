<?php
$db = mysqli_connect('localhost','root','','latian');

if (!$db) {
     die("koneksi gagal". mysqli_connect_error());
}

$nama = $_POST["nama"];
$email = $_POST["email"];
$subjek = $_POST["subject"];
$pesan = $_POST["pesan"];

$query = "INSERT INTO data(nama, email, subject, pesan) VALUES ('$nama', '$email', '$subjek', '$pesan')";
if(mysqli_query($db, $query)) {
     header("Location: kontak.html?status=success");
} else {
     echo'Error' .mysqli_error($db);
}

mysqli_close($db);
?>