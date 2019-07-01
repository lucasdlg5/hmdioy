-- sequelize model:create --name historico_cobranca --attributes hist_id:integer,hist_usu_vin_id:integer,hist_valor_entrada:integer,hist_usu_id_acao:integer,hist_valor_atual:integer,hist_valor_final:integer,hist_descricao:string,hist_usu_id_devedor:integer,hist_data:date

CREATE TABLE HISTORICO_COBRANCA (
    HIST_ID INT AUTO_INCREMENT NOT NULL,
    HIST_USU_VIN_ID INT NOT NULL,
    HIST_VALOR_ENTRADA INT (9) NOT NULL,
    HIST_USU_ID_ACAO INT NOT NULL,
    HIST_VALOR_ATUAL INT (9) NOT NULL,
    HIST_VALOR_FINAL INT (9) NOT NULL,
    HIST_DESCRICAO VARCHAR (100) NOT NULL,
    HIST_USU_ID_DEVEDOR INT,
    HIST_DATA DATE NOT NULL,
    PRIMARY KEY (HIST_ID),
    FOREIGN KEY (HIST_USU_VIN_ID) REFERENCES USU_VINCULO (VIN_ID),
    FOREIGN KEY (HIST_USU_ID_ACAO) REFERENCES USUARIO (USU_ID),
    FOREIGN KEY (HIST_USU_ID_DEVEDOR) REFERENCES USUARIO (USU_ID)
);


#inserts

INSERT INTO HISTORICO_COBRANCAS(
    `HIST_USU_VIN_ID`,
    `HIST_VALOR_ENTRADA`,
    `HIST_USU_ID_ACAO`,
    `HIST_VALOR_ATUAL`,
    `HIST_VALOR_FINAL`,
    `HIST_DESCRICAO`,
    `HIST_USU_ID_DEVEDOR`,
    `HIST_DATA`,
	`createdAt`,
	`updatedAt`
) VALUE (
    1, #LUCAS PARA JONATHAN DA TABELA USU_VINCULO
    30, #VALOR 30 REAIS
    1, #ID DO USUARIO LUCAS
    10, #VALOR EM REAIS ANTES DE ADICIONAR
    40, #VALOR EM REAIS DEPOIS DE ADICIONAR
    "Paguei pizza pro John porque ele estava sem dinheiro", #DESCRICAO DA INSERCAO
    2, #QUEM ESTA DEVENDO É O JONATHAN DE ID 2 PARA LUCAS DE ID 1
    now(), #DATA DA ADICAO
    NOW(),
    NOW()
);

INSERT INTO HISTORICO_COBRANCA(
    `HIST_USU_VIN_ID`,
    `HIST_VALOR_ENTRADA`,
    `HIST_USU_ID_ACAO`,
    `HIST_VALOR_ATUAL`,
    `HIST_VALOR_FINAL`,
    `HIST_DESCRICAO`,
    `HIST_USU_ID_DEVEDOR`,
    `HIST_DATA`
) VALUE (
    1, #LUCAS PARA JONATHAN DA TABELA USU_VINCULO
    30, #VALOR 30 REAIS
    1, #ID DO USUARIO LUCAS
    10, #VALOR EM REAIS ANTES DE ADICIONAR
    40, #VALOR EM REAIS DEPOIS DE ADICIONAR
    "Paguei pizza pro John porque ele estava sem dinheiro", #DESCRICAO DA INSERCAO
    2, #QUEM ESTA DEVENDO É O JONATHAN DE ID 2 PARA LUCAS DE ID 1
    now() #DATA DA ADICAO
);

INSERT INTO HISTORICO_COBRANCA(
    `HIST_USU_VIN_ID`,
    `HIST_VALOR_ENTRADA`,
    `HIST_USU_ID_ACAO`,
    `HIST_VALOR_ATUAL`,
    `HIST_VALOR_FINAL`,
    `HIST_DESCRICAO`,
    `HIST_USU_ID_DEVEDOR`,
    `HIST_DATA`
) VALUE (
    1, #JONATHAN PARA LUCAS DA TABELA USU_VINCULO
    50, #VALOR 50 REAIS
    2, #ID DO USUARIO JONATHAN
    40, #VALOR EM REAIS ANTES DE ADICIONAR
    10, #VALOR EM REAIS DEPOIS DE ADICIONAR
    "Paguei pizza pro John porque ele estava sem dinheiro", #DESCRICAO DA INSERCAO
    1, #QUEM ESTA DEVENDO É LUCAS DE ID 1 PARA JONATHAN PARA ID 2
    now() #DATA DA ADICAO
);

INSERT INTO HISTORICO_COBRANCA(
    `HIST_USU_VIN_ID`,
    `HIST_VALOR_ENTRADA`,
    `HIST_USU_ID_ACAO`,
    `HIST_VALOR_ATUAL`,
    `HIST_VALOR_FINAL`,
    `HIST_DESCRICAO`,
    `HIST_USU_ID_DEVEDOR`,
    `HIST_DATA`
) VALUE (
    1, #LUCAS PARA JONATHAN DA TABELA USU_VINCULO
    5, #VALOR 5 REAIS
    1, #ID DO USUARIO LUCAS
    10, #VALOR EM REAIS ANTES DE ADICIONAR
    5, #VALOR EM REAIS DEPOIS DE ADICIONAR
    "Paguei pizza pro John porque ele estava sem dinheiro", #DESCRICAO DA INSERCAO
    1, #QUEM ESTA DEVENDO É LUCAS DE ID 1 PARA JONATHAN PARA ID 2
    now() #DATA DA ADICAO
);

INSERT INTO HISTORICO_COBRANCA(
    `HIST_USU_VIN_ID`,
    `HIST_VALOR_ENTRADA`,
    `HIST_USU_ID_ACAO`,
    `HIST_VALOR_ATUAL`,
    `HIST_VALOR_FINAL`,
    `HIST_DESCRICAO`,
    `HIST_USU_ID_DEVEDOR`,
    `HIST_DATA`
) VALUE (
    1, #LUCAS PARA JONATHAN DA TABELA USU_VINCULO
    5, #VALOR 5 REAIS
    1, #ID DO USUARIO LUCAS
    5, #VALOR EM REAIS ANTES DE ADICIONAR
    0, #VALOR EM REAIS DEPOIS DE ADICIONAR
    "Paguei pizza pro John porque ele estava sem dinheiro", #DESCRICAO DA INSERCAO
    NULL, #OS DOIS ESTAO QUITES
    now() #DATA DA ADICAO
);