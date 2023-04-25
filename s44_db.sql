-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Ápr 25. 09:18
-- Kiszolgáló verziója: 10.4.27-MariaDB
-- PHP verzió: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `s44_db`
--
CREATE DATABASE IF NOT EXISTS `s44_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `s44_db`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felhasznalok`
--

DROP TABLE IF EXISTS `felhasznalok`;
CREATE TABLE `felhasznalok` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `felhasznalok`
--

INSERT INTO `felhasznalok` (`id`, `username`, `password`, `role`) VALUES
(3, 'igen', '$2b$10$jO869W8Gf7VWGQqn49CT2uLu96alDagviXPUm4ZYNNmV752LUsEEW', 'user'),
(4, 'Admin', '$2b$10$pmtaXq62A8EGTfXNBC9HGulBzJlyCheOQH6wd4Mj8HCpky/boYmHi', 'admin'),
(5, 'kaka', '$2b$10$uw5GDLo/CUqiIOanhmE8j.exZs0QWq6spfKVpLutzoIKvSv47mBu.', 'user'),
(6, 'mama', '$2b$10$t0BR6gU6uUMGC7q6moX6e.DT7wV.Re/NM7DBmYVdpLM1lh/CieinW', 'user'),
(7, 'PrimeChem', '$2b$10$sS9d/CiIylwISd87oRYUYOCQw.pYVXOnlVrH6GPyhjzOXjT3XfQ/i', 'user'),
(8, 'primechem2', '$2b$10$VHg4znvBif5HD9ah31pfg.rkeVJrsnJLp1aLJidEfc0Un05L.zatu', 'user'),
(9, 'bogi', '$2b$10$AqoBxsfUyAiEzD2IIHGX2evN80n/vY7Z94FpADJOtgMwaWmzmnxyS', 'user');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `lomtar`
--

DROP TABLE IF EXISTS `lomtar`;
CREATE TABLE `lomtar` (
  `id` int(11) NOT NULL,
  `termek_id` int(11) NOT NULL,
  `nev` varchar(50) NOT NULL,
  `tipus` varchar(50) NOT NULL,
  `leiras` varchar(500) NOT NULL,
  `ar` int(11) NOT NULL,
  `kiszereles` varchar(50) NOT NULL,
  `kep` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `lomtar`
--

INSERT INTO `lomtar` (`id`, `termek_id`, `nev`, `tipus`, `leiras`, `ar`, `kiszereles`, `kep`) VALUES
(6, 22, 'próba', 'Ápolószerek', 'hiasulisavclx', 900, '20 l', 'WIN_20230202_09_56_27_Pro.jpg');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `termekek`
--

DROP TABLE IF EXISTS `termekek`;
CREATE TABLE `termekek` (
  `id` int(11) NOT NULL,
  `nev` varchar(40) NOT NULL,
  `tipus` varchar(40) NOT NULL,
  `leiras` varchar(500) NOT NULL,
  `ar` int(11) NOT NULL,
  `kiszereles` varchar(50) NOT NULL,
  `kep` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `termekek`
--

INSERT INTO `termekek` (`id`, `nev`, `tipus`, `leiras`, `ar`, `kiszereles`, `kep`) VALUES
(1, 'PC-01', 'Tisztítószerek', 'Általános tisztítószer.', 990, '1-25l', 'PC1.JPG'),
(2, 'PC-10', 'Tisztítószerek', 'Aktív előmosó', 1290, '1-25l', 'PC10.JPG'),
(4, 'PC-23', 'Felnitisztítók', 'Fém tisztító (savas)', 1490, '1-25l', 'PC23.JPG'),
(12, 'PC-65', 'Viaszok', 'Gurulógyöngy', 1990, '1-25l', 'PC65.JPG'),
(13, 'PC-66', 'Viaszok', 'Vizes viasz', 2490, '1-25l', 'PC66.JPG'),
(14, 'PC-11', 'Tisztítószerek', 'Motormosó, nyári előmosó', 1790, '1-25l', 'PC11.JPG'),
(15, 'PC-31', 'Samponok', 'Kézi sampon', 690, '1-20l', 'IMG_20230407_111908.jpg'),
(16, 'PC-41', 'Ápolószerek', 'Belső műanyagápoló matt', 1690, '1-20l', 'IMG_20230407_112128.jpg'),
(17, 'PC-47', 'Ápolószerek', 'Gumi és külső műanyag', 2790, '1-20l', 'IMG_20230407_111951.jpg'),
(18, 'PC Super Pro', 'Samponok', 'Porsampon', 12900, '25kg', 'PCSuperPro.JPG'),
(19, 'T.C.Power', 'Tisztítószerek', 'Előmosószer', 2290, '1-25l', 'TCPower.JPG'),
(20, 'Aktív hab', 'Tisztítószerek', 'Illatosított, nagy habképző hatású tisztítószer', 1290, '1-25l', 'DSCN5319.JPG'),
(21, 'PC-55', 'Ablaktisztítók', 'Üvegtisztító', 990, '1-25l', 'IMG_20230407_112141.jpg');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `felhasznalok`
--
ALTER TABLE `felhasznalok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `lomtar`
--
ALTER TABLE `lomtar`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `termekek`
--
ALTER TABLE `termekek`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `felhasznalok`
--
ALTER TABLE `felhasznalok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT a táblához `lomtar`
--
ALTER TABLE `lomtar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `termekek`
--
ALTER TABLE `termekek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
