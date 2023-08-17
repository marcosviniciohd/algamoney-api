CREATE TABLE categoria2 (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO categoria2 (nome) values ('Lazer');
INSERT INTO categoria2 (nome) values ('Alimentação');
INSERT INTO categoria2 (nome) values ('Supermercado');
INSERT INTO categoria2 (nome) values ('Farmácia');
INSERT INTO categoria2 (nome) values ('Outros');

delete from categoria2;

select * from categoria2;