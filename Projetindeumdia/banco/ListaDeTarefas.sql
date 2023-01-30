drop database if exists ListaTarefas;
create database ListaTarefas charset=UTF8 collate utf8_general_ci;
use ListaTarefas;

create table tarefas(
    id_tarefa integer not null primary key auto_increment,
    descricao varchar(50) not null,
    horario_tarefa time not null,
    hora_encerramento time,
    status varchar(1) not null
);

describe tarefas;

show tables;

insert into tarefas values(default,"fazer bolo","10:30","","1");
insert into tarefas values(default,"fazer pudim","15:00","","2");
insert into tarefas values(default,"fazer pao","12:00","","3");
insert into tarefas values(default,"fazer salgadin","9:30","","1");
insert into tarefas values(default,"fazer salada","19:30","","2");

select * from tarefas;
