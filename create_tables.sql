DROP DATABASE IF EXISTS if_design;
CREATE DATABASE if_design;

DROP TABLE IF EXISTS movie;
CREATE TABLE movie (
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    imdb float8 NOT NULL,
    thumbnail text NOT NULL,
);

DROP TABLE IF EXISTS user;

CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    email text NOT NULL,
    password text NOT NULL,
);
