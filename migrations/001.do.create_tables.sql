CREATE TABLE vendor (
  id INTEGER PRIMARY KEY,
  vendor_location TEXT NOT NULL,
  vendor_address TEXT NOT NULL,
  city TEXT NOT NULL,
  zip_code INTEGER NOT NULL,
  accounting_manager TEXT NOT NULL
);

CREATE TABLE employee (
  id INTEGER PRIMARY KEY,
  employee_phone INTEGER,
  employee_name TEXT NOT NULL,
  employee_username TEXT NOT NULL UNIQUE,
  employee_password TEXT NOT NULL
);

CREATE TABLE plant (
  id INTEGER PRIMARY KEY,
  plant_name TEXT NOT NULL,
  plant_time TEXT NOT NULL,
  plant_desc TEXT NOT NULL,
  plant_price TEXT NOT NULL,
  quantity INTEGER DEFAULT 0
);

CREATE TABLE client (
  id INTEGER PRIMARY KEY,
  email_address TEXT NOT NULL,
  billing_account TEXT NOT NULL,
  client_contact TEXT NOT NULL,
  client_address TEXT NOT NULL, 
  client_city TEXT NOT NULL,
  client_state TEXT NOT NULL,
  client_zip INTEGER NOT NULL, 
  client_phone INTEGER NOT NULL,
  client_name TEXT NOT NULL,
  client_account_manager TEXT NOT NULL
);

CREATE TABLE vendor_purchase_order (
  id INTEGER PRIMARY KEY,
  employee_id INTEGER
         REFERENCES employee(id) ON DELETE CASCADE NULL,
  vendor_id INTEGER
         REFERENCES vendor(id) ON DELETE CASCADE NULL,
  order_date DATE
);

CREATE TABLE vendor_delivery (
  id INTEGER PRIMARY KEY,
  vendor_purchase_id INTEGER
        REFERENCES vendor_purchase_order(id) ON DELETE CASCADE NULL,
  delivery_date DATE,
  quantity_delivered INTEGER, --DEFAULT SET 0,
  quantity_rejected INTEGER --DEFAULT SET 0
);

CREATE TABLE vendor_payment (
  id INTEGER PRIMARY KEY,
  vendor_purchase_id INTEGER
        REFERENCES vendor_purchase_order(id) ON DELETE CASCADE NULL,
  amount INTEGER NOT NULL,
  date_paid DATE
);

CREATE TABLE vendor_plant_prices (
  id INTEGER PRIMARY KEY,
  plant_id INTEGER
        REFERENCES plant(id) ON DELETE CASCADE NULL,
  price NUMERIC NOT NULL
);

CREATE TABLE vendor_plant_order (
  vendor_plant_id INTEGER
        REFERENCES vendor_plant_prices(id) ON DELETE CASCADE NULL,
  vendor_purchase_id INTEGER
        REFERENCES vendor_purchase_order(id) ON DELETE CASCADE NULL,
  quantity INTEGER NOT NULL,
  PRIMARY KEY (vendor_plant_id, vendor_purchase_id)
);

CREATE TABLE size_rate (
  id INTEGER PRIMARY KEY,
  fee_id INTEGER NOT NULL,
  size_desc TEXT NOT NULL
);

CREATE TABLE plant_size (
  plant_id INTEGER
        REFERENCES plant(id) ON DELETE CASCADE NULL,
  size_id INTEGER
        REFERENCES size_rate(id) ON DELETE CASCADE NULL,
  PRIMARY KEY (plant_id, size_id)
);

CREATE TABLE order (
  id INTEGER PRIMARY KEY,
  order_date DATE,
  employee_id INTEGER
        REFERENCES employee(id) ON DELETE CASCADE NULL,
  client_id INTEGER
        REFERENCES client(id) ON DELETE CASCADE NULL,
);

CREATE TABLE plant_order (
  order_id INTEGER
        REFERENCES order(id) ON DELETE CASCADE NULL,
  plant_id INTEGER
        REFERENCES plant(id) ON DELETE CASCADE NULL,
  quantity INTEGER,
  PRIMARY KEY (order_id, plant_id)
);

CREATE TABLE project (
  id INTEGER PRIMARY KEY,
  pick_up BOOLEAN --SET DEFAULT 0,
);

CREATE TABLE project_order (
  project_id INTEGER
        REFERENCES project(id) ON DELETE CASCADE NULL,
  order_id INTEGER
        REFERENCES order(id) ON DELETE CASCADE NULL,
  PRIMARY KEY (project_id, order_id)
);

CREATE TABLE payment (
  id INTEGER NOT NULL,
  order_id INTEGER
        REFERENCES order(id) ON DELETE CASCADE NULL,
  amount_paid NUMERIC NOT NULL,
  total NUMERIC NOT NULL,
  interest_rate NUMERIC
);

CREATE TABLE delivery (
  id INTEGER PRIMARY KEY,
  project_id 
        REFERENCES project(id) ON DELETE CASCADE NULL,
  delivery_date DATE,
  delivery_time TIME,
  delivery_distance INTEGER NOT NULL,
  delivery_fee_rate NUMERIC
);