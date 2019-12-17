# BITSCREAMING
Final Project BIT


Primero!
	----> Instalar Nodejs 
	----> Instalar Angula/CLI




carpeta principal  ----> bitmusik -- Posicionarse desde consola en la carpeta principal
				->backend
				->fontend   --> ng new frontend --> would u like to ........ (N)
								--> hoja de estilo del proyecto CSS

- una vez creado el proyecto de angular, nos posicionamos en la carpeta (frontend) y usamos el comando: npm start
			(Si todo es satisfactorio, nos debe salir un mensaje de copilado y podemos ver el poroyecto
			de angular en la direccion localhost:4200 en el navegador.


1) Crear proyecto angular de nombre frontend
 
2) crear componentes de nombre -> abrir otra consola, posicionarse dentro del proyecto de angular y usar el comando: 

					ng generate component componentes/nombreDelcomponenteACrear
					ng g c componentes/nombreDelcomponenteACrear

-content-index
-footer
-login
-main-menu
-menu-song
-player
-song-tools
-user-profile

-> todos los componentes deben ser creados en una carpeta de nombre componentes 

3) Estructura html por componente

Cuando se crea un componente por consola, este genera la siguiente estructura:

	carpeta principal nombreDelComponente  
					- nombreDelComponente.component.css
					- nombreDelComponente.component.html
					- nombreDelComponente.component.spec.ts
					- nombreDelComponente.component.css.ts


- Estos requerimientos son en el archivo html correspondiente

*Appcomponent -> tiene el header, llama al router-outler, llama al componente footer 
*content-index -> tiene un carousel, un texto y un formulario ("imprescindible en el formulario con los campos Nombre,
		edad, correo, password y boton de registrarse")
*footer -> links a redes sociales
*login -> fomulario ("campos correo y password con boton de iniciar sesion")
*main-menu -> conjunto de botones ("crear canciones, mi perfil, buscar canciones"), llamado a componentes user-profile, 
	menu-song, song-tools ("el llamado a los componentes mediande '*ngIf' solo debe aparecer un componente a la vez") y 
	llamado al componente player, este ultimo siempre debe aparecer
*menu-song -> lista de canciones ("mostrar por ahora estaticamente 2 items en la lista")
*player -> etiqueta audio y lista de canciones ("mostrar por ahora estaticamente 1 items en la lista")
*song-tools -> formulario ("campos titulo, duracion, genero, artista, etiqueta input type file, y boton cargar cancion")
*user-profile -> formulario ("campos nombre, edad, correo, password, etiqueta img, etiqueta input type file, boton actualizar datos")
