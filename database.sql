USE estudo;

CREATE TABLE `estudo`.`evento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo_servico` INT NOT NULL, /* 0 = Decoração, 1 = Pegue e Monte */
  `nome_cliente` VARCHAR(100) NOT NULL,
  `telefone_cliente` VARCHAR(45),
  `nome_evento` VARCHAR(45) NOT NULL,
  `data_evento` DATE NOT NULL,
  `observacao_evento` VARCHAR(200),
  `pago_cobranca` BOOLEAN NOT NULL, /* true = pago, false = não pago */
  `valor_cobranca` DOUBLE NOT NULL,
  `tipo_pgto_cobranca` VARCHAR(45),
  `valor_entrada_cobranca` VARCHAR(45),
  `dt_prev_quita_cobranca` DATE,
  `observacao_cobranca` VARCHAR(200),
  PRIMARY KEY (`id`));

INSERT evento 
(tipo_servico,nome_cliente,telefone_cliente,nome_evento,data_evento,observacao_evento,pago_cobranca,valor_cobranca,tipo_pgto_cobranca,valor_entrada_cobranca,dt_prev_quita_cobranca,observacao_cobranca)
VALUES 
(0, 'Alex Souza da Silva', '(21) 9 6464-5673', 'Aniversário AX TECNOLOGIA', STR_TO_DATE("08/10/2021", "%m/%d/%Y"), 'Nenhuma observação', false, 1459.50, 'À Vista', null, null, 'Pagamento realizado em dolár.');
 
SELECT * FROM evento;

