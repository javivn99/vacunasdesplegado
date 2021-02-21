CREATE TABLE IF NOT EXISTS `vacunas`.`vacunas` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nombre` VARCHAR(40) NOT NULL,
  `dosis_pfizer` INT NOT NULL,
  `dosis_moderna` INT NOT NULL,
  `dosis_administradas` INT NOT NULL,
  `pers_pauta_complet` INT NOT NULL
  )
ENGINE = InnoDB;

INSERT INTO  `vacunas`.`vacunas` (`nombre`, `dosis_pfizer`, `dosis_moderna`, `dosis_administradas`, `pers_pauta_complet`) VALUES
('Andalucia', '244620', '6800', '194101', '15193'),('Aragon', '41265', '1200', '38170', '1731'),
('Asturias', '44195', '1200', '40011', '5664'),('Baleares', '22590', '600', '18105', '1514'),
('Canarias', '46185', '1300', '45482', '1744'),('Cantabria', '20625', '500', '19980', '241'),
('Castilla y Leon', '93315', '2500', '82162', '5296'),('Castilla La Mancha', '61875', '1700', '53880', '1202'),
('Cataluña', '211220', '5800', '168054', '2598'),('C. Valenciana', '109000', '2900', '101437', '2956'),
('Extremadura', '39275', '1000', '32039', '638'),('Galicia', '66805', '1800', '62011', '3861'),
('La Rioja', '11765', '200', '8684', '267'),('Madrid', '171915', '4700', '142756', '1738'),
('Murcia', '45185', '1200', '40757', '1784'),('Navarra', '20625', '500', '15754', '767'),
('Pais Vasco', '55980', '1400', '36864', '1333'),('Ceuta', '1980', '200', '1545', '326'),
('Melilla', '1980', '200', '1500', '203');