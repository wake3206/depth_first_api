-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: depth_first
-- ------------------------------------------------------
-- Server version	5.6.40

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

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `employee_code` varchar(6) DEFAULT NULL,
  `firstname` varchar(100) DEFAULT NULL,
  `surname` varchar(100) DEFAULT NULL,
  `telephone` varchar(10) DEFAULT NULL,
  `job_level` tinyint(1) DEFAULT NULL,
  `department` varchar(100) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `manager_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `employee_code` (`employee_code`),
  KEY `job_level` (`job_level`),
  KEY `firstname` (`firstname`),
  KEY `surname` (`surname`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'DF-021','สมชาย','ทดสอบ1','0987658765',1,'sale',1,'0'),(2,'DF-022','มาชับ','ทดสอบ2','0986546865',3,'sale',1,'0'),(3,'DF-023','มีชัย','ทดสอบ3','0987657876',2,'account',1,'0');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `icon` varchar(45) DEFAULT NULL,
  `status` tinyint(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,'ตั้งเบิก','/order_list','solution',1),(2,'อนุมัติ','/approve','check-circle',1),(3,'จ่ายเงิน','/cashier','inbox',1);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_permission`
--

DROP TABLE IF EXISTS `menu_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_id` int(11) DEFAULT NULL,
  `emp_id` int(11) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `menu_id` (`menu_id`),
  KEY `emp_id` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_permission`
--

LOCK TABLES `menu_permission` WRITE;
/*!40000 ALTER TABLE `menu_permission` DISABLE KEYS */;
INSERT INTO `menu_permission` VALUES (1,1,2,NULL),(2,2,2,NULL),(3,1,1,NULL),(4,3,3,NULL);
/*!40000 ALTER TABLE `menu_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `petty_cash`
--

DROP TABLE IF EXISTS `petty_cash`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `petty_cash` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(12) DEFAULT NULL,
  `emp_id` varchar(13) DEFAULT NULL,
  `description` tinytext,
  `amount` double(14,4) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `create_datetime` datetime DEFAULT NULL,
  `update_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `status` (`status`),
  KEY `create_datetime` (`create_datetime`),
  KEY `emp_id` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `petty_cash`
--

LOCK TABLES `petty_cash` WRITE;
/*!40000 ALTER TABLE `petty_cash` DISABLE KEYS */;
INSERT INTO `petty_cash` VALUES (1,'PC-2019-001','1','ทดสอบ',499.4400,3,'2019-01-23 00:00:00',NULL),(12,'PC-2019-002','1','asgge',2.0000,5,'2019-03-19 00:00:00','2019-03-19 00:00:00'),(14,'PC-2019-003','1','asgsagsa',4.0000,5,'2019-03-19 00:00:00','2019-03-19 00:00:00'),(15,'PC-2019-004','1','asegsgasg',1.0000,4,'2019-03-19 00:00:00','2019-03-19 00:00:00'),(16,'PC-2019-005','1','asesag',1.0000,3,'2019-03-19 00:00:00','2019-03-19 00:00:00'),(17,'PC-2019-006','1','asgsag',1.0000,5,'2019-03-19 00:00:00','2019-03-19 00:00:00'),(18,'PC-2019-007','1','asegsag',1.0000,5,'2019-03-19 00:00:00','2019-03-19 00:00:00'),(19,'PC-2019-008','1','asegsagag',1.0000,5,'2019-03-19 00:00:00','2019-03-19 00:00:00'),(20,'PC-2019-009','1','saegag',1.0000,5,'2019-03-19 00:00:00','2019-03-19 00:00:00'),(21,'PC-2019-010','1','asegsag',1.0000,5,'2019-03-19 00:00:00','2019-03-19 00:00:00'),(22,'PC-2019-011','1','saegsag',1.0000,1,'2019-03-19 00:00:00','2019-03-19 00:00:00'),(23,'PC-2019-011','1','xxx',1.0000,2,'2019-03-20 00:00:00','2019-03-20 00:00:00'),(24,'PC-2019-001','1','xxaa',1.0000,2,'2019-03-20 00:00:00','2019-03-20 00:00:00'),(25,'PC-2019-001','1','asegasg',1.0000,2,'2019-03-20 00:00:00','2019-03-20 00:00:00'),(26,'PC-2019-001','1','aegag',1.0000,5,'2019-03-20 00:00:00','2019-03-20 00:00:00'),(27,'PC-2019-001','1','asegsag',1.0000,5,'2019-03-20 00:00:00','2019-03-20 00:00:00'),(28,'PC-2019-001','1','asegsag',1.0000,4,'2019-03-20 00:00:00','2019-03-20 00:00:00'),(29,'PC-2019-012','1','asegsaga',1.0000,1,'2019-03-20 00:00:00','2019-03-20 00:00:00'),(30,'PC-2019-013','1','asegagag',1.0000,5,'2019-03-20 00:00:00','2019-03-20 00:00:00'),(31,'PC-2019-014','1','sgag',1.0000,1,'2019-03-20 00:00:00','2019-03-20 00:00:00');
/*!40000 ALTER TABLE `petty_cash` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-21  1:13:30
