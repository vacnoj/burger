DROP DATABASE IF EXISTS `burgers_db`;

CREATE DATABASE `burgers_db`;
USE `burgers_db`;

-- CREATE TABLE `burgers` (
--   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
--   `burger_name` varchar(100) NOT NULL DEFAULT '',
--   `devoured` tinyint(1) NOT NULL DEFAULT '0',
--   `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;