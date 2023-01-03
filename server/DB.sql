CREATE DATABASE sos;

    CREATE TABLE sosusers(
        users_id SERIAL PRIMARY KEY,
        fname VARCHAR(25),
        lname VARCHAR(25),
        urole VARCHAR(25)
    );