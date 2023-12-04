<?php
// Informasi koneksi ke database
$host = "localhost"; // Ganti dengan host database Anda
$username = "root"; // Ganti dengan username database Anda
$password = ""; // Biarkan kosong jika tidak ada password
$database = "zoo"; // Ganti dengan nama database Anda

// Membuat koneksi ke database
$conn = new mysqli($host, $username, $password, $database);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi ke database gagal: " . $conn->connect_error);
}

// Mengambil nilai dari formulir ulasan website
$nama = isset($_POST['nama']) ? $_POST['nama'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$pertama_kali = isset($_POST['pertama_kali']) ? $_POST['pertama_kali'] : '';
$navigasi = isset($_POST['navigasi']) ? $_POST['navigasi'] : '';
$desain = isset($_POST['desain']) ? $_POST['desain'] : '';
$saran = isset($_POST['saran']) ? $_POST['saran'] : '';

// Menyimpan data ke dalam tabel database
$sql = "INSERT INTO zoology_zone (nama, email, pertama_kali, navigasi, desain, saran) VALUES ('$nama', '$email', '$pertama_kali', '$navigasi', '$desain', '$saran')";

if ($conn->query($sql) === TRUE) {
    echo "Ulasan berhasil dikirim!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Menutup koneksi ke database
$conn->close();
?>
