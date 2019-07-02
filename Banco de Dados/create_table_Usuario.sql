-- sequelize model:create --name usuarios --attributes usu_id:integer,usu_nome:string,usu_email:string,usu_username:string,usu_whatsapp:string,usu_foto:blob

CREATE TABLE usuarios (
    USU_ID INT AUTO_INCREMENT NOT NULL,
    USU_NOME VARCHAR (150) NOT NULL,
    USU_EMAIL VARCHAR (150) NOT NULL UNIQUE,
    USU_USERNAME VARCHAR (20) NOT NULL UNIQUE,
    USU_WHATSAPP VARCHAR (17) NOT NULL,
    USU_FOTO LONGBLOB,
    PRIMARY KEY (USU_ID)
);




#INSERTS
insert into usuarios (
    `USU_NOME`,
    `USU_EMAIL`,
    `USU_USERNAME`,
    `USU_WHATSAPP`,
	 `createdAt`,
	 `updatedAt`) 
VALUES (
    "Lucas Domingos Leão Gomes",
    "lucasdomingosleao55@hotmail.com",
    "lucasdlg",
    "+55(12)99638-1184",
    NOW(),
    NOW()
    
);

insert into usuarios (
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


insert into usuarios (
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

insert into usuarios (
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