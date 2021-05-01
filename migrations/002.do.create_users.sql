insert into employee (id, employee_phone, employee_name, employee_username, employee_password)
VALUES
(1, 1231234, 'Jackson Smith' ,'JSmith' ,'$2a$12$.mY4qBbLX4TXl6ERiKO7zObJYDdd.xRtr8ZbmGo1dkE9TfBfuRwYW'),
(2, 1456478, 'Jonathan Johnson' ,'JJohnson' ,'$2a$12$.mY4qBbLX4TXl6ERiKO7zObJYDdd.xRtr8ZbmGo1dkE9TfBfuRwYW'),
(3, 0498452, 'Jennifer Williams' ,'JWilliams' ,'$2a$12$.mY4qBbLX4TXl6ERiKO7zObJYDdd.xRtr8ZbmGo1dkE9TfBfuRwYW'),
(4, 5643211, 'Junniper Jones' ,'JJones' ,'$2a$12$.mY4qBbLX4TXl6ERiKO7zObJYDdd.xRtr8ZbmGo1dkE9TfBfuRwYW'),
(5, 1854324, 'Jose Garcia' ,'JGarcia' ,'$2a$12$.mY4qBbLX4TXl6ERiKO7zObJYDdd.xRtr8ZbmGo1dkE9TfBfuRwYW'),
(6, 4356753, 'Joe Brawn' ,'JBrawn' ,'$2a$12$.mY4qBbLX4TXl6ERiKO7zObJYDdd.xRtr8ZbmGo1dkE9TfBfuRwYW');

insert into vendor (id,vendor_name,vendor_address,city,vendor_state,zip_code,accounting_manager)
VALUES
(1,'Bangin Flowers','13465 SOUTH AVE','MIAMI','FLORIDA', 96321,'John'),
(2,'Flower R US','32632 NORTH AVE','DETROIT','MICHIGAN', 96321,'Emily'),
(3,'Nursery Ryhmes','74532 WEST AVE','BUTTE','DAKOTA', 96321,'Nathan'),
(4,'EZ-Flowers','43743 EAST AVE','ARCADIA','CALIFORNIA', 96321,'Barbara'),
(5,'Tulips.com','13463 LEMMING AVE','FULLERTON','CALIFORNIA', 96321,'Luke'),
(6,'All About Flowers','43216 LORDS AVE','MIAMI','FLORIDA', 96321,'Vanessa');


insert into plant(id,plant_name,plant_time,plant_desc,plant_price,quantity)
 VALUES
 (1,'Aconite','Early Spring','Aconites are one of the first bulb flowers to bloom in the spring and are known for their cheerful yellow color. Plant Aconites in a large group together and youll be able to smell their sweet, honey-like fragrance.','20 dollars',395),
 (2,'Ageratum','Mid‑Summer - Mid‑Fall','Also known as Flossflower, Ageratums come in blue, pink and white blooms. The taller varieties are best for cutting and displaying in your home, while the dwarf bedding varieties are best kept in the garden.','20 dollars',793),
 (3,'Allium','Late Spring - Mid‑Summer','There are five varieties of the Allium, known primarily for their tall stems and large, spherical heads. Blooms are typically violet, but blue and pink varieties can also be found.','20 dollars',893),
 (4,'Anemone','Mid Spring - Mid‑Fall','The Anemone includes 120 species of flowers, but the most common types found in North America come in white, pink or violet hues. The Anemone is dainty and doesnt grow well during summer droughts, overly wet winters or high winds.','20 dollars',337),
 (5,'Angelica','Summer','Commonly found in tea and herbal remedies, the stem of the Angelica can even be made into candy. With over 50 species, the Angelica is also good for bees and other pollinators. Known for their large starburst flowers, it comes in white or green.','20 dollars',3732),
 (6,'Angelonia','Mid‑Summer - Mid‑Fall','Especially good for container gardening, the Angelonia will keep blooming all summer even if old flowers are removed. Once tall enough to cut, bring them inside and youll notice a light scent that some say is reminiscent of apples.','20 dollars',283),
 (7,'Artemisia','Late Summer','For those seeking a drought tolerant plant that doesnt make your yard look like a dessert, the Artemisia is for you. Tolerating low amounts of water, you can create a diverse xeriscape with this silvery flower.','20 dollar',123),
 (8,'Aster','Late Spring - Early Fall','Named after the Latin word for "star," Asters will brighten up any garden. It attracts butterflies and comes in a variety of colors including blue, indigo, violet, white, red and pink. Unlike other colorful flowers, Asters will typically stay in bloom into cooler fall months.','20 dollar',3688),
 (9,'Astilbe','Late Spring - Early Fall','Astilbes are deceptively delicate with their long, fern-like flowers. These flowers can actually withstand damp soil and shade, while still growing between one to six feet tall. Perfect to add for a pop of color to a garden that typically gets little sunlight.','20 dollar',525),
 (10,'Aubrieta','Mid-Spring - Early Summer','Named after Claude Aubriet, a French artist who famously painted them, Aubrietas spread low with small violet, pink or white flowers. If youre creating a rock garden, Aubrietas are ideal as it prefers sandy, well-drained soil.','20 dollars',737),
 (11,'Azalea','Spring','Often referred to as "the royalty of the garden," these elegant flowers are known for their outstanding colors and foliage. With thousands of varieties to choose from, Azaleas require little maintenance once planted and can be brought inside to make a fabulous bouquet.','20 dollars',238);


insert into client(id,email_address,billing_account,client_contact,client_address,client_city,client_state,client_zip,client_phone,client_name,client_account_manager )
VALUES 
(1,'wantflowers1@live.com','135464323','Sarah','40423','Fullerton','CA',92890,6739024,'Fashionstore','Jennifer Lopez'),
(2,'live2breath@aol.com','346342676','Simon','10442','Deerborn','MA',32523,6263414,'Fashionstore','Jennifer Lopez');


insert into vendor_purchase_order(id,employee_id, vendor_id, order_date)
VALUES
(1,1,1, '1995-09-02'),
(2,6,3, '2005-03-23'),
(3,3,2, '1999-05-29'),
(4,4,5, '2000-01-19');


insert into vendor_delivery(id,vendor_purchase_id,delivery_date,quantity_delivered,quantity_rejected)
VALUES
(1,1,'2021-05-10',3,1),
(2,1,'2021-03-15',3,1),
(3,1,'2021-06-08',3,1),
(4,1,'2021-11-25',3,1);


insert into vendor_payment(id,vendor_purchase_id,amount,date_paid)
VALUES
(1,1,200.00,'2021-05-23'),
(2,4,400.00,'2020-05-15'),
(3,3,245.00,'2018-05-09'),
(4,2,500.00,'2013-05-01');


insert into vendor_plant_prices (id,plant_id,price)
VALUES
(1,1,45.6),
(2,8,32.6),
(3,10,40.6),
(4,3,12.6);


insert into vendor_plant_order (vendor_plant_id,vendor_purchase_id,quantity)
VALUES
(1,1,400),
(2,4,5000),
(2,2,1430),
(3,3,350);



insert into size_rate (id,fee_id,size_desc )
VALUES
(1,1099,'Large'),
(2,1032,'Small'),
(3,1064,'Medium'),
(4,1035,'Large');


insert into plant_size(plant_id,size_id)
VALUES
(1,1),
(2,3),
(3,4),
(4,2),
(2,1);


insert into orders (id,order_date,employee_id,client_id)
VALUES
(1, '2021-01-09',1,1),
(2, '2001-02-01',3,1),
(3, '2013-01-21',3,2),
(4, '2010-05-11',2,2),
(5, '2016-02-02',6,2);


insert into plant_order(order_id,plant_id,quantity)
VALUES
(1,2,2000),
(2,4,3000),
(3,11,40000),
(4,9,3200),
(5,7,50000),
(1,8,6500);


insert into project(id,pick_up)
VALUES
(1,FALSE ),
(2,FALSE),
(3,TRUE),
(4,FALSE);


insert into project_order(project_id,order_id)
VALUES
(1,1),
(2,2),
(3,3),
(4,4);


insert into payment(id,order_id,amount_paid,total,interest_rate)
VALUES
(1,1,20.0,3,0),
(2,2,20.0,3,0),
(3,3,20.0,3,0),
(4,4,20.0,3,0);

insert into delivery(id,project_id,delivery_date,delivery_time,delivery_distance,delivery_fee_rate)
VALUES
(1,1,'2016-02-02','02:22:21',55,32.00),
(2,2,'2016-02-02','02:22:21',55,32.00),
(3,3,'2016-02-02','02:22:21',55,32.00),
(4,4,'2016-02-02','02:22:21',55,32.00);
