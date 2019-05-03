CREATE TABLE usuario (
    USU_ID INT AUTO_INCREMENT NOT NULL,
    USU_NOME VARCHAR (150) NOT NULL,
    USU_EMAIL VARCHAR (150) NOT NULL UNIQUE,
    USU_USERNAME VARCHAR (20) NOT NULL UNIQUE,
    USU_WHATSAPP VARCHAR (17) NOT NULL,
    USU_FOTO LONGBLOB,
    PRIMARY KEY (USU_ID)
);




#INSERTS

insert into usuario (
    `USU_NOME`,
    `USU_EMAIL`,
    `USU_USERNAME`,
    `USU_WHATSAPP`) 
VALUES (
    "Lucas Domingos Leão Gomes",
    "lucasdomingosleao55@hotmail.com",
    "lucasdlg",
    "+55(12)99638-1184"
);

insert into usuario (
    `USU_NOME`,
    `USU_EMAIL`,
    `USU_USERNAME`,
    `USU_WHATSAPP`) 
VALUES (
    "Gabriel Moraes Bandeira",
    "gbmorais@hotmail.com",
    "gbandeir",
    "+99(99)99999-9999"
);

insert into usuario (
    `USU_NOME`,
    `USU_EMAIL`,
    `USU_USERNAME`,
    `USU_WHATSAPP`) 
VALUES (
    "Jonathan Euflasio",
    "jonathan.euflasio@hotmail.com",
    "jodevil",
    "+11(11)11111-1111"
);