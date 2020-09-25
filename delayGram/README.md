# DelayGram

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deploy

`ng build --prod `

## Deploy local via pacote http-server

`npm install http-server -g`

  Navegar até a pasta do projeto, na dist (build produção). Abrir o cmd e executar o comando: http-server

  A partir de agora este diretório passará a ser servido via requisições http.

  Starting up http-server, serving ./
Available on:
  `http://192.168.xx.xx:8080` 
 ` http://127.0.0.1:8080 `

No primeiro IP, caso outros pc's estejam na mesma rede o pacote npm estará disponibilizando a pasta dist permitindo requisições http.
O Segundo ip é local.
