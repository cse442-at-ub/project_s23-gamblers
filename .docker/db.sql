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
    icon_image VARCHAR(32) DEFAULT NULL,
    hash varchar(80) NOT NULL,
    state varchar(32) NOT NULL,
	email varchar(32) NOT NULL,
    phone_number varchar(32) NOT NULL,
    date_created TIMESTAMP (0) NOT NULL,
    bg_image VARCHAR(32) DEFAULT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB;

-- ----------------------------
-- Table structure for items
-- ----------------------------
CREATE TABLE IF NOT EXISTS items (
    item_id MEDIUMINT NOT NULL AUTO_INCREMENT,
    user_id MEDIUMINT NOT NULL,
    date_posted datetime(6) NOT NULL,
    item_state varchar(80) NOT NULL,
    last_modify datetime(6) DEFAULT NULL,
    item_name TEXT NOT NULL,
    view_count MEDIUMINT DEFAULT 0,
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


-- ----------------------------
-- Table structure for user_history
-- ----------------------------
CREATE TABLE IF NOT EXISTS user_history (
	id BIGINT NOT NULL AUTO_INCREMENT,
    user_id MEDIUMINT NOT NULL,
    action_id MEDIUMINT NOT NULL,
    action_type tinyint(1) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB;

-- ----------------------------
-- Table structure for action_table
-- ----------------------------
/*
action_type  action_name      table_name
    1       added item          items
    2       upload image        images
    3       view item           view_history
    4       change profile      user_changes
*/
CREATE TABLE IF NOT EXISTS action_table (
    action_type tinyint(1) NOT NULL,
    tbl_name varchar(20) NOT NULL,
    action_name varchar(20) NOT NULL,
    PRIMARY KEY (action_type)
) ENGINE=InnoDB;
INSERT INTO action_table (action_type, action_name, tbl_name) 
VALUES 
(1,'added item','items'),
(2,'upload image','images'),
(3,'view item','view_history'),
(4,'change profile','user_changes'),
(5,'added comment','item_comments');
-- ----------------------------
-- Table structure for images
-- ----------------------------
CREATE TABLE IF NOT EXISTS images (
    image_id MEDIUMINT NOT NULL AUTO_INCREMENT,
    user_id MEDIUMINT NOT NULL,
    image_type TINYINT NOT NULL,
    image_name varchar(120) NOT NULL,
    time_created datetime(0) NOT NULL,
    PRIMARY KEY (image_id)
) ENGINE=InnoDB;

-- ----------------------------
-- Table structure for view_history
-- ----------------------------
CREATE TABLE IF NOT EXISTS view_history (
    view_id MEDIUMINT NOT NULL AUTO_INCREMENT,
    user_id MEDIUMINT NOT NULL,
    item_id MEDIUMINT NOT NULL,
    time_created datetime(0) NOT NULL,
    PRIMARY KEY (view_id)
) ENGINE=InnoDB;




-- ----------------------------
-- Table structure for user_changes
-- ----------------------------
CREATE TABLE IF NOT EXISTS user_changes (
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
    time_created datetime(0) NOT NULL,
    user_id  MEDIUMINT NOT NULL,
    change_json VARCHAR(120) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS item_comments (
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
    user_id  MEDIUMINT NOT NULL,
    item_id  MEDIUMINT NOT NULL,
    comment_text VARCHAR(500) NOT NULL,
    time_created datetime(0) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS report (
    report_id MEDIUMINT NOT NULL AUTO_INCREMENT,
    item_id  MEDIUMINT NOT NULL,
    reporter  VARCHAR(32) NOT NULL,
    PRIMARY KEY (report_id)
) ENGINE=InnoDB;

