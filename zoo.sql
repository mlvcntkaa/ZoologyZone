-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 12 Des 2023 pada 08.58
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zoo`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `zoology_zone`
--

CREATE TABLE `zoology_zone` (
  `nama` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `pertama_kali` varchar(5) NOT NULL,
  `navigasi` int(3) NOT NULL,
  `desain` text NOT NULL,
  `saran` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `zoology_zone`
--

INSERT INTO `zoology_zone` (`nama`, `email`, `pertama_kali`, `navigasi`, `desain`, `saran`) VALUES
('melvi c', 'cantikamelvi302@gmail.com', 'ya', 4, 'keren', 'cukup'),
('melvi c', 'cantikamelvi302@gmail.com', 'ya', 5, 'keren', 'cukup'),
('melvi c', 'cantikamelvi302@gmail.com', 'ya', 3, 'mantap', 'tidak ada'),
('fikri', 'cantikamelvi302@gmail.com', 'ya', 3, 'mantap', 'jelek lu');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
