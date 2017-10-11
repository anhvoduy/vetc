-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: werable
-- ------------------------------------------------------
-- Server version	5.7.15-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP SCHEMA IF EXISTS `werable` ;
CREATE SCHEMA `werable` ;

USE `werable`;

--
-- Table structure for table `Device`
--
DROP TABLE IF EXISTS `Device`;
CREATE TABLE `Device` (
  `DeviceId` INT(11) NOT NULL AUTO_INCREMENT,
  `DeviceKey` VARCHAR(50) NOT NULL,
  `DeviceNo` VARCHAR(50) NOT NULL,
  `DeviceName` VARCHAR(50) NOT NULL,
  `DeviceTypeId` INT(1) DEFAULT 0,
  `Sensor` VARCHAR(50) DEFAULT NULL,
  `Description` VARCHAR(250) DEFAULT NULL,  
  `StatusId` TINYINT(1) DEFAULT 0,
  `Created` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `Updated` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `Author` VARCHAR(50) NOT NULL,
  `Editor` VARCHAR(50) NOT NULL,  
  PRIMARY KEY (`DeviceId`),
  UNIQUE KEY `DeviceId_UNIQUE` (`DeviceId`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;	

--
-- Sample data for table `Device`
--
INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000001','Vivo Smart',1,'Heart Rate','Smart Activity Tracker¹ with Wrist-based Heart Rate¹and Fitness Monitoring Tools', 2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000002','BSXINSIGHT',1,'MO2','WEARABLE LACTATE THRESHOLD SENSOR', 2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000003','Cosinuss',1,'Heart Rate- Temperature','The cosinuss° One measures your vital parameters in your ear',2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000004','Constantine',1,'Walking Rate','The Constantine One measures your vital parameters in your walking',2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000005','Vivo Smart',1,'Heart Rate','Smart Activity Tracker¹ with Wrist-based Heart Rate¹and Fitness Monitoring Tools', 2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000006','BSXINSIGHT',1,'MO2','WEARABLE LACTATE THRESHOLD SENSOR', 2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000007','Cosinuss',1,'Heart Rate- Temperature','The cosinuss° One measures your vital parameters in your ear',2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000008','Constantine',1,'Walking Rate','The Constantine One measures your vital parameters in your walking',2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000009','Vivo Smart',1,'Heart Rate','Smart Activity Tracker¹ with Wrist-based Heart Rate¹and Fitness Monitoring Tools', 2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000010','BSXINSIGHT',2,'MO2','WEARABLE LACTATE THRESHOLD SENSOR', 2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000011','Cosinuss',2,'Heart Rate- Temperature','The cosinuss° One measures your vital parameters in your ear',2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000012','Constantine',2,'Walking Rate','The Constantine One measures your vital parameters in your walking',2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000013','Vivo Smart',2,'Heart Rate','Smart Activity Tracker¹ with Wrist-based Heart Rate¹and Fitness Monitoring Tools', 2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000014','BSXINSIGHT',2,'MO2','WEARABLE LACTATE THRESHOLD SENSOR', 2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000015','Cosinuss',2,'Heart Rate- Temperature','The cosinuss° One measures your vital parameters in your ear',2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000016','Constantine',2,'Walking Rate','The Constantine One measures your vital parameters in your walking',2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000017','Vivo Smart',2,'Heart Rate','Smart Activity Tracker¹ with Wrist-based Heart Rate¹and Fitness Monitoring Tools', 2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000018','BSXINSIGHT',2,'MO2','WEARABLE LACTATE THRESHOLD SENSOR', 2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000019','Cosinuss',2,'Heart Rate- Temperature','The cosinuss° One measures your vital parameters in your ear',2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000020','Constantine',3,'Running Rate','The Constantine One measures your vital parameters in your walking',2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000021','Running',3,'Running Rate','The Running One measures your vital parameters in your walking',2,'SYSTEM','SYSTEM');

INSERT INTO `Device` (`DeviceKey`,`DeviceNo`,`DeviceName`,`DeviceTypeId`,`Sensor`,`Description`,`StatusId`,`Author`,`Editor`)
VALUES (uuid(),'00000022','Xylitol',3,'Running Rate','The Xylitol One measures your vital parameters in your walking',2,'SYSTEM','SYSTEM');

--
-- Table structure for table `Athlete`
--
DROP TABLE IF EXISTS `Athlete`;
CREATE TABLE `Athlete` (
  `AthleteId` INT(11) NOT NULL AUTO_INCREMENT,
  `AthleteKey` VARCHAR(50) NOT NULL,
  `FirstName` VARCHAR(50) NOT NULL,
  `LastName` VARCHAR(50) NOT NULL,
  `DisplayName` VARCHAR(100) NOT NULL,
  `DateOfBirth` DATETIME DEFAULT NULL,
  `Gender` TINYINT(1) DEFAULT 0,
  `Weight` INT(11) DEFAULT 0,
  `Height` INT(11) DEFAULT 0,
  `Description` VARCHAR(250) DEFAULT NULL,
  `StatusId` TINYINT(1) DEFAULT 0,
  `Created` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `Updated` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `Author` VARCHAR(50) NOT NULL,
  `Editor` VARCHAR(50) NOT NULL,  
  PRIMARY KEY (`AthleteId`),
  UNIQUE KEY `AthleteId_UNIQUE` (`AthleteId`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'Daniel', 'Watson', 'Daniel Watson', 1, '1988-09-22', 200, 300, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'James', 'Werable', 'James Werable', 1, '1992-04-13', 180, 280, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'George', 'Hamilton', 'George Hamilton', 1, '1991-06-06',  150, 400, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'David', 'Beckham', 'David Beckham', 1, '1975-12-24', 100, 150, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'Gareth', 'Bale', 'Gareth Bale', 1, '1975-12-24', 100, 150, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'Lance', 'Amstrong', 'Lance Amstrong', 1, '1981-01-24', 250, 375, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'Daniel', 'Watson', 'Daniel Watson', 1, '1988-09-22', 200, 300, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'James', 'Werable', 'James Werable', 1, '1992-04-13', 180, 280, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'George', 'Johnson', 'George Johnson', 1, '1982-06-06',  150, 400, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'David', 'Beckham', 'David Beckham', 1, '1975-12-24', 100, 150, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'Justin', 'Baber', 'Justin Baber', 1, '1992-12-24', 100, 150, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'Lance', 'Amstrong', 'Lance Amstrong', 1, '1981-01-24', 250, 375, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'Shelock', 'Homes', 'Shelock Homes', 1, '1955-09-22', 200, 300, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'James', 'Bond', 'James Bond', 1, '1962-04-13', 180, 280, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'George', 'Hamilton', 'George Hamilton', 1, '1991-06-06',  150, 400, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'Taylor', 'Elizabeth', 'Taylor Elizabeth', 1, '1962-12-24', 100, 150, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'Paul', 'Pogba', 'Paul Pogba', 1, '1975-12-24', 100, 150, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'Lance', 'Amstrong', 'Lance Amstrong', 1, '1981-01-24', 250, 375, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'Victoria', 'Secret', 'Vistoria Secret', 0, '1985-09-02', 200, 300, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'Taylor', 'Swift', 'Taylor Swift', 0, '1992-05-13', 180, 280, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'George', 'Hamilton', 'George Hamilton', 1, '1991-06-06',  150, 400, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'David', 'Beckham', 'David Beckham', 1, '1975-12-24', 100, 150, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'Gareth', 'Bale', 'Gareth Bale', 1, '1975-12-24', 100, 150, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `Athlete` (`AthleteKey`, `FirstName`, `LastName`, `DisplayName`, `Gender`, `DateOfBirth`, `Weight`, `Height`,  `StatusId`, `Author`, `Editor`)
VALUES (uuid(), 'Lance', 'Amstrong', 'Lance Amstrong', 1, '1981-01-24', 250, 375, 2, 'SYSTEM', 'SYSTEM');

--
-- Table structure for table `AthleteDevice`
--
DROP TABLE IF EXISTS `AthleteDevice`;
CREATE TABLE `AthleteDevice` (
  `AthleteDeviceId` INT(11) NOT NULL AUTO_INCREMENT,
  `AthleteId` INT(11) DEFAULT 0,
  `DeviceId` INT(11) DEFAULT 0,
  `Vital` VARCHAR(50) DEFAULT NULL,
  `Description` VARCHAR(250) DEFAULT NULL,
  `StatusId` TINYINT(1) DEFAULT 0,
  `Created` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `Updated` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `Author` VARCHAR(50) NOT NULL,
  `Editor` VARCHAR(50) NOT NULL,  
  PRIMARY KEY (`AthleteDeviceId`),
  UNIQUE KEY `AthleteDeviceId_UNIQUE` (`AthleteDeviceId`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

INSERT INTO `AthleteDevice` (`AthleteId`, `DeviceId`, `Vital`, `StatusId`, `Author`, `Editor`)
VALUES (1, 1, 'Heart Rate', 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `AthleteDevice` (`AthleteId`, `DeviceId`, `Vital`, `StatusId`, `Author`, `Editor`)
VALUES (1, 2, 'Temperature', 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `AthleteDevice` (`AthleteId`, `DeviceId`, `Vital`, `StatusId`, `Author`, `Editor`)
VALUES (1, 3, 'MO2', 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `AthleteDevice` (`AthleteId`, `DeviceId`, `Vital`, `StatusId`, `Author`, `Editor`)
VALUES (2, 4, 'Heart Rate', 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `AthleteDevice` (`AthleteId`, `DeviceId`, `Vital`, `StatusId`, `Author`, `Editor`)
VALUES (2, 5, 'Temperature', 2, 'SYSTEM', 'SYSTEM');

INSERT INTO `AthleteDevice` (`AthleteId`, `DeviceId`, `Vital`, `StatusId`, `Author`, `Editor`)
VALUES (3, 1, 'Heart Rate', 2, 'SYSTEM', 'SYSTEM');



--
-- Table structure for table `VivoSmart`
--
DROP TABLE IF EXISTS `VivoSmart`;
CREATE TABLE `VivoSmart` (
  `VivoSmartId` INT(11) NOT NULL AUTO_INCREMENT,
  `AthleteId` INT(11) DEFAULT 0,
  `Connection` VARCHAR(100) DEFAULT NULL,  
  `Data` VARCHAR(250) DEFAULT NULL,  
  `Created` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),
  `Updated` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`VivoSmartId`),
  UNIQUE KEY `VivoSmartId_UNIQUE` (`VivoSmartId`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

INSERT INTO `VivoSmart`(`Connection`,`Data`)
VALUES (
  '{"address":"192.168.100.100","family":"TEST-IPv4","port":41704,"size":26}',
  '{"type":"TEST","data":[65,78,18,37,19,78,0,4,255,69,168,50,171,248,82,224,3,131,120,113,32,188,176,208,72,0]}'
);
