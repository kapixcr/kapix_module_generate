# Kapix Generador de modulo

**Kapix Module Generator** es una extensión para Visual Studio Code que te permite crear de manera rápida la estructura básica de un módulo para Kapix dentro de tu espacio de trabajo.

## Características

- Genera automáticamente las carpetas necesarias para un módulo de Kapix: `controllers`, `models`, `views`, `helpers`, `language`, `config`.
- Crea el archivo principal del módulo (`module-name.php`) con información básica como el nombre del módulo, el autor y la descripción.
- Verifica si la estructura del módulo ya existe para evitar sobrescribir archivos.

## ¿Cómo usarla?

1. Abre tu espacio de trabajo en VSCode.
2. Ejecuta el comando `Perfex Module Generator: Generate Perfex Module` usando el **Command Palette** (`Ctrl + Shift + P` o `Cmd + Shift + P` en macOS).
3. Ingresa la siguiente información:
   - **Nombre del Módulo**: Nombre del módulo que estás creando.
   - **Autor**: Tu nombre o el del creador del módulo.
   - **Descripción**: Una breve descripción del módulo.
4. La extensión generará la estructura del módulo dentro de la carpeta `modules` en tu espacio de trabajo, con todas las subcarpetas necesarias y un archivo PHP inicial.

## Requisitos

- Un espacio de trabajo abierto en VSCode, donde se creará la carpeta `modules`.

