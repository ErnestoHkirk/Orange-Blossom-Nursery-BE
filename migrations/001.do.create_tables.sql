CREATE TABLE whiskey (
  id SERIAL PRIMARY KEY,
  whiskey_name TEXT NOT NULL,
  image TEXT,
  origin text,
  abv decimal(5,2),
  price money,
  content TEXT,
  nose text,
  palate text,
  finish text,
  date_created TIMESTAMP DEFAULT now() NOT NULL
);

CREATE TABLE whiskey_list (
  id SERIAL PRIMARY KEY, 
  list_name TEXT NOT NUll
);

CREATE TABLE whiskey_users (
  id SERIAL PRIMARY KEY,
  user_name TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  nickname TEXT,
  password TEXT NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT now(),
  date_modified TIMESTAMP
);

ALTER TABLE whiskey
  ADD COLUMN
    user_id INTEGER REFERENCES whiskey_users(id)
    ON DELETE SET NULL;

CREATE TABLE whiskey_reviews (
    id SERIAL PRIMARY KEY,
    rating INTEGER NOT NULL,
    tasting text not null,
    date_created TIMESTAMP DEFAULT now() NOT NULL,
    whiskey_id INTEGER
        REFERENCES whiskey(id) ON DELETE CASCADE NOT NULL,
    user_id INTEGER
        REFERENCES whiskey_users(id) ON DELETE CASCADE NOT NULL
);

CREATE TABLE user_list (
  id SERIAL PRIMARY KEY,
  whiskey_id INTEGER
    REFERENCES whiskey(id) ON DELETE CASCADE NOT NULL,
  user_id INTEGER
    REFERENCES whiskey_users(id) ON DELETE CASCADE NOT NULL,
  list_id INTEGER
    REFERENCES whiskey_list(id) on DELETE CASCADE NOT NULL 
);


