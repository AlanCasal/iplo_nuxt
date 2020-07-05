![](/static/og-header.jpg)

# Lágrimas Bajo Tierra I - Iluminados por la Oscuridad

_Página web que presenta un libro próximo a lanzarse al mercado,
con tres capítulos para leer gratis, información sobre el autor,
y posibilidad de mandarle mensaje_


https://lbtiluminadosporlaoscuridad.com.ar

### Instalación 🔧

```
git clone https://github.com/AlanCasal/iplo_nuxt.git
```
``cd iplo_nuxt`` para entrar al directorio del proyecto
```
npm install
```

- #### Opcional ❕
Hay una api muy simple en el backend (_momentaneamente en desuso_) para enviar emails desde la página a través de un formulario, usando el **smtp gratuito de Google.**
Había que actualizar el hosting para poder implementarla pero el cliente
optó por no hacerlo.

Para testearla se necesitan los siguientes paquetes:
```
npm install @nuxtjs/axios express body-parser nodemailer
```
* Descomentar las siguientes lineas en el archivo ``nuxt.config.js``
![Screenshot1](/screenshots/1.png?raw=true)


---
* Crear el archivo ``api/keys.js`` como se muestra a continuación.
**Debe ser una cuenta real de Gmail** ya que está configurado para usar el **smtp de Gmail**
![Screenshot2](/screenshots/2.png?raw=true)

---
* Y por último en el archivo ``iplo-nuxt/components/f-contacto-Contacto.vue`` comentar el div ``#palabras`` y descomentar el componente ``contact-form`` y su correspondiente importación en el script como se ve en la imagen:
![Screenshot2](/screenshots/3.png?raw=true)


## Uso - Localhost 💻

Una vez instalado, se puede correr el proyecto con el comando
```
npm run dev
```
Se puede ver el proyecto ingresado a ``localhost:3000`` desde cualquier browser

## Hecho con 🛠️

* [NuxtJS](https://nuxtjs.org/) - Framework para [Vue.js](https://vuejs.org/)
* [Express](https://expressjs.com/)


## Autor ✒️


| ![](https://avatars3.githubusercontent.com/u/38706801?s=400&u=2554a57319d104165c02c733cb1a4dc39db7be85&v=4) 
| -
| [Alan Casal](https://github.com/AlanCasal)
| Desarrollador javascript full stack

[![LinkedIn](https://cloud.githubusercontent.com/assets/17016297/18839848/0fc7e74e-83d2-11e6-8c6a-277fc9d6e067.png)][1]

[1]: https://www.linkedin.com/in/alancasal