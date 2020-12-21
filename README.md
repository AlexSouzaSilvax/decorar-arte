<h1 align="center">
  Projeto DecorArte Festas e Eventos
</h1>

<br>

## 📛 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- React
- React-Native
- Expo
- Redux
- Styled Components
- Java Spring Boot
- JPA
- MySql
- Amazon Cloud

## 🏀 Projeto

Necessidade do Cliente, ter um app para controlar e administrar os eventos realizados, ter um histórico dos eventos.

<br>

  <h1 align="center">
  Documentação da API
</h1>
<br>
  <p align="center">
  Base url:
</p>
  <p align="center">
  http://3.17.4.232:8080/decorarte/api
</p>

<br>

## GET - Lista todos os eventos.

/evento

return BODY:

[
  {
        "id": int,
        "tipoServico": int,
        "nomeCliente": string,
        "telefoneCliente": string,
        "nomeEvento": string,
        "localEvento": string,
        "dataEvento": date,
        "observacaoEvento": string,
        "pagoCobranca": boolean,
        "valorCobranca": double,
        "tipoPgtoCobranca": int,
        "valorEntradaCobranca": int,
        "dtPrevQuitaCobranca": date,
        "observacao_cobranca": string
    }
]

<br>

## GET - Buscar um evento por id. 

/evento/buscar?id=ID

return BODY:

[
  {
        "id": int,
        "tipoServico": int,
        "nomeCliente": string,
        "telefoneCliente": string,
        "nomeEvento": string,
        "localEvento": string,
        "dataEvento": date,
        "observacaoEvento": string,
        "pagoCobranca": boolean,
        "valorCobranca": double,
        "tipoPgtoCobranca": int,
        "valorEntradaCobranca": int,
        "dtPrevQuitaCobranca": date,
        "observacao_cobranca": string
    }
]

<br>

## POST - Buscar um evento por id. 

/evento/salvar


return BODY:

[
  {
        "id": int,
        "tipoServico": int,
        "nomeCliente": string,
        "telefoneCliente": string,
        "nomeEvento": string,
        "localEvento": string,
        "dataEvento": date,
        "observacaoEvento": string,
        "pagoCobranca": boolean,
        "valorCobranca": double,
        "tipoPgtoCobranca": int,
        "valorEntradaCobranca": int,
        "dtPrevQuitaCobranca": date,
        "observacao_cobranca": string
    }
]

<br>

## POST - Apaga um evento por id. 

/evento/apagar

id: ID

return HEADER:

 header.mensagem = Apagado com sucesso! || Error ao apagar!
 header.result = true || false
 
 <br>
 <br>
