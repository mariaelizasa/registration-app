<h1 align="center">📜 Registration Form<h1/>
  
<p align="center">
  <img src="https://github.com/mariaelizasa/registration-app/raw/main/assets/49694866/2c85904a-92bd-4982-a338-98ba5f9fed93.png" alt="Capturar-teste">
</p>

## Como executar / How to run

Instale as dependências / Install all the dependencies:

```sh
npm install
```

Crie um arquivo .env e adicione a URL da API como variável de ambiente no seguinte formato / Create an .env file and add the API URL on the following format:

```sh
Create .env
VITE_API_URL=http://localhost:PORTA
```

Execute o projeto / Execute the project:

```sh
npm run start
```

## Estrutura do Projeto / Project Structure

```
├── public
├── src
│   └── components 
│       ├── Buttons
│       ├── Step
│       ├── Title
│   └── pages
│       ├── HomeScreen
│       ├── AcessPassword
│       ├── PFScreen
│       ├── PJScreen
│       ├── ReviewInformation
│   └── services
│       ├── FormService.ts // Url da Api
│   └── styles
│       ├── global.ts
│       ├── Form
│            ├── FormStyle.ts // Styled-components Global
│   └── utils
│       ├── Validator.ts
│   └── context
│       ├── MultiStepFormContext.ts
│   └── @types // Typescript Interface
│       ├── ButtonType.ts
│       ├── FormDataType.ts
│       ├── MultiFormContext.ts
│       ├── TitleType.ts
│   └── App.tsx
│   └── main.tsx

```

## Contributing

1. Fork it (`https://github.com/mariaelizasa/registration-app`)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
