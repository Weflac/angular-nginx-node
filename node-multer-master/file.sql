/*
Navicat MySQL Data Transfer

Source Server         : 120.24.156.230
Source Server Version : 50555
Source Host           : 120.24.156.230:3306
Source Database       : nodetest

Target Server Type    : MYSQL
Target Server Version : 50555
File Encoding         : 65001

Date: 2017-07-18 14:24:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for file
-- ----------------------------
DROP TABLE IF EXISTS `file`;
CREATE TABLE `file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(100) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `size` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `album` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of file
-- ----------------------------
INSERT INTO `file` VALUES ('16', '1500284351763.jpg', 'image/jpeg', '23122', null, null);
INSERT INTO `file` VALUES ('17', '1500284987555.jpg', 'image/jpeg', '126235', '罗大佑', '走在乡间的小路上');
INSERT INTO `file` VALUES ('18', '1500349569069.jpg', 'image/jpeg', '50861', '陈慧琳', '爱就爱了');
INSERT INTO `file` VALUES ('19', '1500350285443.jpg', 'image/jpeg', '72986', '凉凉', '张碧晨');
