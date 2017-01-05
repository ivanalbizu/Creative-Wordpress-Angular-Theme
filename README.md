# Angular Wordpress Creative
Plantilla Wordpress construida con AngularJS, Wp REst Api, ACF

###Después de habilitar el tema
- Instalar dependencias: npm install.
- Instalar y habilitar los plugins.
- Importar los Custom Fields a partir del archivo: advanced-custom-field-export.xml.
- Especificar la ruta base de la instalación. En header.php la etiqueta &lt;base href="/path_wp_install/"&gt;.
- La navegación hay que crearla en header.php y registrar las rutas de navegación en 'js/angular/app.js'.
- Crear páginas usando los templates: about, contact, service, work y footer. Rellenar todos los campos.

###Notas
- Hay tipos de entrada para: works, about y services.
