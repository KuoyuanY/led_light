DROP DATABASE IF EXISTS led;
CREATE DATABASE led;

create table users(
    username varchar(25) primary key,
    password varchar(25) not null,
    first_name varchar(20) not null,
    last_name varchar(20) not null
);
create table light(
    ledid serial not null,
    username varchar(25) references users,
    mqttUsername varchar(25),
    mqttPassword varchar(25)
);
