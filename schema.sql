-- users schema
CREATE TABLE IF NOT EXISTS users (
  email VARCHAR(255) PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW()
);

-- sample data
INSERT INTO users (email)
VALUES
  ('hello@joegitau.com'),
  ('kajoe@live.com');


--- QUERIES
-- 1. get all users
SELECT * FROM users;

--2. get total number of registered users
SELECT COUNT(*) AS total_users FROM users;

-- 3. retrieve last added user
SELECT * FROM users
ORDER BY created_at DESC
LIMIT 1;

-- 4. find the earliest date that a user joined
SELECT 
DATE_FORMAT(created_at, '%d %M, %Y') AS oldest_user
FROM users
ORDER BY created_at
LIMIT 1;

-- 5. group users according to the month they joined
SELECT 
DATE_FORMAT(created_at, '%M') AS month,
COUNT(email) AS count
FROM users
GROUP BY month;

-- 6. total no of users with @yahoo.com email
SELECT 
COUNT(email) as yahoo_users
FROM users
WHERE email LIKE '%@yahoo.com';

-- 7. calculate total no of users for each email host
SELECT 
  CASE 
    WHEN email LIKE '%@yahoo.com' THEN 'yahoo'
    WHEN email LIKE '@gmail.com' THEN 'gmail'
    WHEN email LIKE '%@hotmail.com' THEN 'hotmail'
  ELSE
    'other'
  END AS email_host,
  COUNT(*) AS total_users
FROM users
GROUP BY email_host
ORDER BY total_users DESC;