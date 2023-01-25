drop database if exists Gestao;
create database Gestao charset=UTF8 collate utf8_general_ci;
use Gestao;

create table Entregadores(
	id_entregador integer primary key auto_increment,
	nome varchar(30) not null,
	email varchar(30) not null,
	senha varchar(30),
    veiculo varchar(30)
);

create table Pedidos(
	id_pedido integer primary key auto_increment,
	cliente varchar(30) not null,
	endereco varchar(30) not null,
	produto varchar(30) not null,
    data date not null,
    hora_pedido time not null,
    hora_entrega time,
    hora_fim time,
    id_entregador integer not null,
	foreign key (id_entregador) references Entregadores (id_entregador)
);

show tables;

LOAD DATA INFILE 'C:/Users/Heitor/Desktop/senaieu/01-proj/aula01/dados/entregadores.csv'
INTO TABLE Entregadores
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Heitor/Desktop/senaieu/01-proj/aula01/dados/pedidos.csv'
INTO TABLE Pedidos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;0

select * from Entregadores;
select * from Pedidos;

