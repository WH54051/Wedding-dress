SET NAMES UTF8;
DROP DATABASE IF EXISTS lin;
CREATE DATABASE lin CHARSET=UTF8;
USE lin;
/**用户信息**/
CREATE TABLE lin_name(
	id INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(10),
    upwd VARCHAR(16),
	phone VARCHAR(13)
);
INSERT INTO lin_name VALUES(NULL, 'dingding',123456,13501234567);
/*轮播图*/
CREATE TABLE lin_lunbo(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(128),
	title VARCHAR(120)
);
	INSERT INTO lin_lunbo VALUES
	(NULL,'img/index/1.jpg',NULL),
	(NULL,'img/index/2.jpg',NULL),
	(NULL,'img/index/3.jpg',NULL),
	(NULL,'img/index/4.jpg',NULL),
	(NULL,'img/index/5.jpg',NULL),
	(NULL,'img/index/d1.jpg',NULL),
	(NULL,'img/index/d2.jpg',NULL),
	(NULL,'img/index/d3.jpg',NULL),
	(NULL,'img/index/d4.jpg',NULL),
	(NULL,'img/index/d5.jpg',NULL),
	(NULL,'img/index/d6.jpg',NULL),
	(NULL,'img/index/d7.jpg',NULL),
	(NULL,'img/index/d8.jpg',NULL),
	(NULL,'img/index/d9.jpg',NULL),
	(NULL,'img/index/d1_1.jpg','风尚高定 | CUSTOM'),
	(NULL,'img/index/d2_2.jpg','精致新韩 | KOREAN STYLE'),
	(NULL,'img/index/d3_3.jpg','全球旅拍 | GLOBAL TRAVEL'),
	(NULL,'img/index/d4_4.jpg','幸福臻爱 | DOCUMENTARY'),
	(NULL,'img/index/d5_5.jpg','复古轻奢 | EUROPEAN STYLE'),
	(NULL,'img/index/d6_6.jpg','华美国韵 | CHINESE STYLE'),
	(NULL,'img/index/d7_7.jpg','城市短旅 | CITY TRAVEL'),
	(NULL,'img/index/d8_8.jpg','网红潮派 | INS STYLE'),
	(NULL,'img/index/d9_9.jpg','幸福臻爱 | DOCUMENTARY'),
	(NULL,'img/index/p1.jpg',NULL),
	(NULL,'img/index/p2.jpg',NULL),
	(NULL,'img/index/p3.jpg',NULL),
	(NULL,'img/index/p4.jpg',NULL),
	(NULL,'img/index/p5.jpg',NULL),
	(NULL,'img/index/p6.jpg',NULL),
	(NULL,'img/index/p7.jpg',NULL),
	(NULL,'img/index/p8.jpg',NULL),
	(NULL,'img/index/p9.jpg',NULL),
	(NULL,'img/index/p10.jpg',NULL),
	(NULL,'img/details/2.jpg',NULL),
	(NULL,'img/details/3.jpg',NULL),
	(NULL,'img/details/4.jpg',NULL),
	(NULL,'img/details/5.jpg',NULL),
	(NULL,'img/details/6.jpg',NULL),
	(NULL,'img/details-two/1.jpg',NULL),
	(NULL,'img/details-two/2.jpg',NULL),
	(NULL,'img/details-two/3.jpg',NULL),
	(NULL,'img/details-two/4.jpg',NULL),
	(NULL,'img/details-two/5.jpg',NULL),
	(NULL,'img/details-three/1.jpg',NULL),
	(NULL,'img/details-three/2.jpg',NULL),
	(NULL,'img/details-three/3.jpg',NULL),
	(NULL,'img/details-three/4.jpg',NULL),
	(NULL,'img/details-three/5.jpg',NULL);

	/*list-one表*/
	CREATE TABLE lin_list_one(
	nid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(120)
	);
	INSERT INTO lin_list_one VALUES
	(NULL,'img/list_one/1.mp4'),
	(NULL,'img/list_one/3.jpg'),
	(NULL,'img/list_one/4.jpg'),
	(NULL,'img/list_one/5.jpg'),
	(NULL,'img/list_one/6.jpg'),
	(NULL,'img/list_one/7.jpg'),
	(NULL,'img/list_one/8.jpg'),
	(NULL,'img/list_one/9.jpg'),
	(NULL,'img/list_one/10.jpg'),
	(NULL,'img/list_one/11.jpg'),
	(NULL,'img/list_one/12.jpg'),
	(NULL,'img/list_one/13.jpg'),
	(NULL,'img/list_one/14.jpg'),
	(NULL,'img/list_one/15.jpg'),
	(NULL,'img/list_one/16.jpg'),
	(NULL,'img/list_one/17.jpg'),
	(NULL,'img/list_one/18.jpg'),
	(NULL,'img/list_one/19.jpg');
	
	/*list-two*/
	CREATE TABLE lin_list_two(
	wid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(120)
	);
	INSERT INTO lin_list_two VALUES
	(NULL,'img/list_one/a1.jpg'),
	(NULL,'img/list_one/a2.jpg'),
	(NULL,'img/list_one/a3.jpg'),
	(NULL,'img/list_one/a4.jpg'),
	(NULL,'img/list_one/a5.jpg'),
	(NULL,'img/list_one/a6.jpg'),
	(NULL,'img/list_one/a7.jpg'),
	(NULL,'img/list_one/a8.jpg'),
	(NULL,'img/list_one/a9.jpg'),
	(NULL,'img/list_one/a10.jpg'),
	(NULL,'img/list_one/a11.jpg'),
	(NULL,'img/list_one/a12.jpg'),
	(NULL,'img/list_one/a13.jpg'),
	(NULL,'img/list_one/a14.jpg'),
	(NULL,'img/list_one/a15.jpg'),
	(NULL,'img/list_one/a16.jpg'),
	(NULL,'img/list_one/a17.jpg'),
	(NULL,'img/list_one/a18.jpg'),
	(NULL,'img/list_one/a19.jpg'),
	(NULL,'img/list_one/a20.jpg'),
	(NULL,'img/list_one/a21.jpg'),
	(NULL,'img/list_one/a22.jpg'),
	(NULL,'img/list_one/a23.jpg'),
	(NULL,'img/list_one/a24.jpg'),
	(NULL,'img/list_one/a25.jpg'),
	(NULL,'img/list_one/a26.jpg'),
	(NULL,'img/list_one/a27.jpg'),
	(NULL,'img/list_one/a28.jpg'),
	(NULL,'img/list_one/a29.jpg');

	/*list-three*/
	CREATE TABLE lin_list_three(
	rid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(120)
	);
	INSERT INTO lin_list_three VALUES
	(NULL,'img/list/1.jpg'),
	(NULL,'img/list/2.jpg'),
	(NULL,'img/list/3.jpg'),
	(NULL,'img/list/4.jpg'),
	(NULL,'img/list/5.jpg'),
	(NULL,'img/list/6.jpg'),
	(NULL,'img/list/7.jpg'),
	(NULL,'img/list/8.jpg'),
	(NULL,'img/list/9.jpg'),
	(NULL,'img/list/10.jpg'),
	(NULL,'img/list/11.jpg'),
	(NULL,'img/list/12.jpg'),
	(NULL,'img/list/13.jpg'),
	(NULL,'img/list/14.jpg'),
	(NULL,'img/list/15.jpg'),
	(NULL,'img/list/16.jpg'),
	(NULL,'img/list/17.jpg'),
	(NULL,'img/list/18.jpg'),
	(NULL,'img/list/19.jpg'),
	(NULL,'img/list/20.jpg');
	/*list-four*/
	CREATE TABLE lin_list_four(
	fid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(120)
	);
	INSERT INTO lin_list_four VALUES
	(NULL,'img/list_one/b1.jpg'),
	(NULL,'img/list_one/b2.jpg'),
	(NULL,'img/list_one/b3.jpg'),
	(NULL,'img/list_one/b4.jpg'),
	(NULL,'img/list_one/b5.jpg'),
	(NULL,'img/list_one/b6.jpg'),
	(NULL,'img/list_one/b7.jpg'),
	(NULL,'img/list_one/b8.jpg'),
	(NULL,'img/list_one/b9.jpg'),
	(NULL,'img/list_one/b10.jpg'),
	(NULL,'img/list_one/b11.jpg'),
	(NULL,'img/list_one/b12.jpg'),
	(NULL,'img/list_one/b13.jpg'),
	(NULL,'img/list_one/b14.jpg'),
	(NULL,'img/list_one/b15.jpg'),
	(NULL,'img/list_one/b16.jpg'),
	(NULL,'img/list_one/b17.jpg'),
	(NULL,'img/list_one/b18.jpg'),
	(NULL,'img/list_one/b19.jpg');
	/*details*/
	CREATE TABLE lin_details(
	did INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(120)
	);
	INSERT INTO lin_details VALUES
	(NULL,'img/details/01.jpg'),
	(NULL,'img/details/02.jpg'),
	(NULL,'img/details/03.jpg'),
	(NULL,'img/details/04.jpg'),
	(NULL,'img/details/05.jpg'),
	(NULL,'img/details/06.jpg'),
	(NULL,'img/details/07.jpg'),
	(NULL,'img/details/08.jpg'),
	(NULL,'img/details/09.jpg'),
	(NULL,'img/details/2.jpg'),
	(NULL,'img/details/3.jpg'),
	(NULL,'img/details/4.jpg'),
	(NULL,'img/details/5.jpg'),
	(NULL,'img/details/6.jpg');
	/*details-two*/
	CREATE TABLE lin_details_two(
	tid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(120)
	);
	INSERT INTO lin_details_two VALUES
	(NULL,'img/details-two/1.jpg'),
	(NULL,'img/details-two/2.jpg'),
	(NULL,'img/details-two/3.jpg'),
	(NULL,'img/details-two/4.jpg'),
	(NULL,'img/details-two/5.jpg'),
	(NULL,'img/details-two/6.jpg'),
	(NULL,'img/details-two/7.jpg'),
	(NULL,'img/details-two/8.jpg'),
	(NULL,'img/details-two/9.jpg'),
	(NULL,'img/details-two/10.jpg'),
	(NULL,'img/details-two/11.jpg'),
	(NULL,'img/details-two/12.jpg'),
	(NULL,'img/details-two/13.jpg'),
	(NULL,'img/details-two/14.jpg');
	/*details-three*/
	CREATE TABLE lin_details_three(
	hid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(120)
	);
	INSERT INTO lin_details_three VALUES
	(NULL,'img/details-three/1.jpg'),
	(NULL,'img/details-three/2.jpg'),
	(NULL,'img/details-three/3.jpg'),
	(NULL,'img/details-three/4.jpg'),
	(NULL,'img/details-three/5.jpg'),
	(NULL,'img/details-three/6.jpg'),
	(NULL,'img/details-three/7.jpg'),
	(NULL,'img/details-three/8.jpg'),
	(NULL,'img/details-three/9.jpg'),
	(NULL,'img/details-three/10.jpg'),
	(NULL,'img/details-three/11.jpg'),
	(NULL,'img/details-three/12.jpg'),
	(NULL,'img/details-three/13.jpg'),
	(NULL,'img/details-three/14.jpg');
