CREATE DATABASE IF NOT EXISTS cse442_2023_spring_team_m_db;
USE cse442_2023_spring_team_m_db;
SET SQL_SAFE_UPDATES = 0;
-- ----------------------------
-- Table structure for users
-- ----------------------------
CREATE TABLE IF NOT EXISTS users (
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
    last_login TIMESTAMP (0) DEFAULT NULL,
    role tinyint(1) NOT NULL,
    username varchar(32) NOT NULL,
    hash varchar(80) NOT NULL,
    state varchar(32) NOT NULL,
	email varchar(32) NOT NULL,
    phone_number varchar(32) NOT NULL,
    date_created TIMESTAMP (0) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB;

-- ----------------------------
-- Table structure for items
-- ----------------------------
CREATE TABLE IF NOT EXISTS items (
    item_id MEDIUMINT NOT NULL AUTO_INCREMENT,
    poster_id MEDIUMINT NOT NULL,
    date_posted datetime(6) NOT NULL,
    item_state varchar(80) NOT NULL,
    last_modify datetime(6) DEFAULT NULL,
    item_name TEXT NOT NULL,
    item_image_dir varchar(80) NOT NULL,
    item_description TEXT NOT NULL,
    item_price INT NOT NULL,
    item_contact TEXT NOT NULL,
    PRIMARY KEY (item_id)
) ENGINE=InnoDB;

-- ----------------------------
-- Table structure for posts
-- ----------------------------

CREATE TABLE IF NOT EXISTS posts (
	post_id MEDIUMINT NOT NULL AUTO_INCREMENT,
    item_id MEDIUMINT NOT NULL,
    poster_id MEDIUMINT NOT NULL,
    buyer_id MEDIUMINT DEFAULT NULL,
    post_state varchar(80) NOT NULL,
    time_created datetime(0) NOT NULL,
    PRIMARY KEY (post_id)
) ENGINE=InnoDB;

-- ----------------------------
-- Table structure for cookies
-- ----------------------------

CREATE TABLE IF NOT EXISTS cookies (
	id MEDIUMINT NOT NULL,
    uid varchar(120) NOT NULL
) ENGINE=InnoDB;