# TechCompanyProject

TechCompanyProject es una página de aterrizaje para una empresa de tecnología que ofrece diversos servicios. Este proyecto utiliza componentes web personalizados para crear una interfaz de usuario moderna y responsiva.

## Estructura del Proyecto

```
.
├── .gitignore
├── components/
│   ├── index.html
├── index.html
├── LICENSE
├── main.js
├── package.json
├── README.md
├── requirements/
│   └── Proyecto Lading - EasyTech.pdf
└── src/
    ├── components/
    |   |──about-us/
    |   |   |──about-us.css
    |   |   |__about-us.js
    │   ├── carrousel/
    │   │   ├── carrousel.css
    │   │   └── carrousel.js
    |   |──footer-component/
    |   |   |──footer-component.css
    |   |   |__footer-component.js
    |   |──header-component/
    |   |   |──header.css
    |   |   |__header.js
    |   |──icon-button/
    |   |   |──icon-button.css
    |   |   |__icon-button.js
    |   |──link-button/
    |   |   |──link-button.css
    |   |   |__link-button.js
    |   |──my-form/
    |   |   |──my-form.css
    |   |   |__my-form.js
    |   |──my-input/
    |   |   |──my-input.css
    |   |   |__my-input.js
    │   ├── my-text/
    │   │   ├── my-text.js
    │   │   └── my-text.css
    |   |──my-textarea/
    |   |   |──my-textarea.css
    |   |   |__my-textarea.js
    |   |──primary-button/
    |   |   |──primary-button.css
    |   |   |__primary-button.js
    │   ├── services-card/
    |   |   |──service-card.css
    |   |   |__service-card.js
    │   |── serviceSection/
    |   |   |──serviceSection.css
    |   |   |__serviceSection.js
    ├── css/
    │   └── reset.css
    ├── img/
    |   |── fondoCarrusel.avif
    │   ├── fondoCarrusel.jpg
    │   └── logo.jpg
    └── index.js
```

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/DAW-MaestreCalatrava/TechCompanyProject.git
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd TechCompanyProject
    ```

3. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso

Para iniciar el servidor de desarrollo, ejecuta:
```sh
npm run dev
```

Esto iniciará un servidor en `http://localhost:2442` donde podrás ver la página de aterrizaje.

## Componentes

### Burguer Component

Un componente de ejemplo que muestra un ícono de hamburguesa.

### Services Card

Un componente que muestra una tarjeta de servicio con un título, descripción e ícono.

### Service Section

Un componente que agrupa varias tarjetas de servicio bajo un título común.

### Carrousel

Un componente de carrusel que muestra diferentes elementos con transiciones.

### My Text

Un componente de texto que permite personalizar el tamaño, color y alineación del texto.

## Licencia

Este proyecto está licenciado bajo la Licencia Apache 2.0. Consulta el archivo LICENSE para obtener más detalles.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para discutir cualquier cambio que te gustaría hacer.



Este README proporciona una visión general del proyecto, instrucciones de instalación y uso, una descripción de los componentes y otra información relevante.
