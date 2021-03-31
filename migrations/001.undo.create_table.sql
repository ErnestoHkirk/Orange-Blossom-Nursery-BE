DROP TABLE IF EXISTS user_list;
DROP TABLE IF EXISTS whiskey_reviews;

ALTER TABLE whiskey
  DROP COLUMN IF EXISTS user_id;

DROP TABLE IF EXISTS whiskey_users;

DROP TABLE if EXISTS questions;

  
DROP TABLE if EXISTS whiskey_list;
DROP TABLE if EXISTS whiskey;