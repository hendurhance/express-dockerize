CREATE TABLE sales (
  id SERIAL PRIMARY KEY,
  customer VARCHAR(255) NOT NULL,
  product VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  address TEXT
);

INSERT INTO sales (customer, product, price, address) VALUES
('John Doe', 'Laptop', 999.99, '123 Main St, Anytown, USA'),
('Jane Smith', 'Smartphone', 699.99, '456 Elm St, Anytown, USA'),
('Alice Johnson', 'Headphones', 59.99, '789 Maple St, Anytown, USA'),
('Bob Brown', 'Camera', 349.95, '321 Oak St, Anytown, USA'),
('Charlie Black', 'Smartwatch', 199.99, '654 Pine St, Anytown, USA'),
('Diana Green', 'Tablet', 499.99, '987 Cedar St, Anytown, USA'),
('Ethan Grey', 'Gaming Console', 299.99, '159 Birch St, Anytown, USA'),
('Fiona White', 'E-reader', 129.99, '246 Alder St, Anytown, USA'),
('George Yellow', 'Bluetooth Speaker', 89.99, '135 Spruce St, Anytown, USA'),
('Hannah Purple', 'Laptop Stand', 39.99, '864 Willow St, Anytown, USA'),
('Ian Teal', 'Monitor', 199.99, '975 Aspen St, Anytown, USA'),
('Jenny Orange', 'Mouse', 29.99, '321 Poplar St, Anytown, USA'),
('Kyle Blue', 'Keyboard', 79.99, '213 Cherry St, Anytown, USA'),
('Laura Pink', 'Webcam', 49.99, '456 Peach St, Anytown, USA'),
('Mike Red', 'External Hard Drive', 99.99, '789 Plum St, Anytown, USA')