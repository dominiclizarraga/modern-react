
# Instrucciones de la configuración

¡Bienvenido al curso de **Modern React**!

En el caso que hayas realizado la configuración de tu computadora para el [curso de Desarrollo Web de Le Wagon](https://www.lewagon.com/web-development-course/full-time), solo debes hacer la última etapa de la configuración sobre **Node.js**. En el caso contrario, por favor, **léelas cuidadosamente y ejecuta todos los comandos en el orden indicado**. Si tienes algún problema, no dudes en pedirle ayuda a tu profesor.

¡Comencemos!

## Zoom

Para poder interactuar cuando no estemos en el mismo lugar físico, usaremos [Zoom](https://zoom.us/), una herramienta de videoconferencia.

Si ya tienes Zoom instalado, por favor asegúrate de que por lo menos tienes la versión **5.6**.

Ve a [zoom.us/download](https://zoom.us/download).

Haz clic en el botón **Download** debajo de **Zoom Client**.

Abre el archivo que acabas de descargar para instalar la aplicación.

Abre la aplicación Zoom.

Si tienes una Mac con Apple silicon, [te pedirán instalar Rosetta](https://support.apple.com/en-us/HT211861). Haz clic en instalar. Luego escribe tu nombre y contraseña para que corra la instalación.

Si ya tienes una cuenta Zoom, inicia sesión con tus credenciales.

Si no, haz clic en el enlace **Sign Up Free**, que significa registrarse gratuitamente. Te redireccionarán a la página de Zoom para que completes un formulario. Cuando termines, regresa a la aplicación Zoom e inicia sesión usando tus credenciales.

Una vez finalizado, puedes cerrar la aplicación Zoom.

## Slack

[Slack](https://slack.com/) es una plataforma de comunicación popular en la industria tech.

### Instalación

[Descarga la aplicación Slack](https://itunes.apple.com/fr/app/slack/id803453959?mt=12) e instálala.

Si ya estás usando Slack en tu navegador, por favor descarga e instala  **la aplicación de escritorio** la cual tiene todas las funciones.

## Cuenta GitHub

¿Ya tienes una cuenta GitHub? Si no es el caso, [ábrela ya](https://github.com/join).

**[Sube una foto](https://github.com/settings/profile)** y escribe tu nombre correctamente en tu cuenta GitHub. Esto es importante porque nosotros usaremos un tablero de comando interno con tu avatar. Por favor hazlo **ahora** antes de dar un paso más en esta guía.

##### Opcional
**[Habilita la Autenticación de Dos Factores (2FA)](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-text-messages)**. GitHub te enviará mensajes de texto con un código cuando intentes iniciar sesión. Esto es importante para la seguridad y también pronto será necesario para contribuir código en GitHub.


## Cómo cerrar aplicaciones en una Mac correctamente

Hacer clic en círculo rojo en la esquina superior izquierda de la ventana de la aplicación en Mac **no la termina el proceso**, solo cierra una ventana activa. Hay dos alternativas para cerrar la aplicación _realmente_. Puedes presionar `Cmd + Q` cuando la misma está activa. La otra opción es ir a `APP_NAME` -> `Quit` en la barra del menú.

Durante esta configuración, se te pedirá **cerrar y abrir nuevamente** aplicaciones varias veces. Por favor asegúrate de hacerlo correctamente

## Homebrew

[Homebrew](http://brew.sh/) es un gestionador de paquetes: es un programa que se usa para instalar otros programas desde la línea de comando. ¡Vamos a instalarlo!

Abre la terminal y ejecuta lo siguiente:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Te pedirá que confirmes (presionando `Enter`) y también te pedirá la **contraseña de tu cuenta de usuario macOS** (la que usas para [iniciar sesión](https://support.apple.com/en-gb/HT202860) cuando reinicias tu Macbook).

:warning: Cuando escribas tu contraseña no verás nada en la pantalla. **Esto es normal**. Es una herramienta de seguridad para ocultar tanto el contenido de tu contraseña como su longitud. Simplemente escribe tu contraseña y presiona `Enter` al terminar.

:warning: Si ves esta advertencia :point_down:, ejecuta los dos comandos de la sección `Next steps` para añadir Homebrew a tu PATH:

![macOS Homebrew installation warning](images/macos_homebrew_warning.png)

```bash
# ⚠️ Only execute these commands if you saw this warning ☝
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

Si ya tienes Homebrew instalado, el sistema te lo dirá y puedes continuar.

Luego instala algunos programas útiles:

```bash
brew update
```

Si obtienes un error como este: `/usr/local must be writable`, ejecuta el código que te mostramos a continuación:

```bash
sudo chown -R $USER:admin /usr/local
brew update
```

Ejecuta el siguiente código en tu terminal (puedes copiar y pegar todas las líneas de código al mismo tiempo):

```bash
brew upgrade git || brew install git
brew upgrade gh || brew install gh
brew upgrade wget || brew install wget
brew upgrade imagemagick || brew install imagemagick
brew upgrade jq || brew install jq
brew upgrade openssl || brew install openssl
```


## Visual Studio Code

### Instalación

Instala el editor de texto [Visual Studio Code](https://code.visualstudio.com).

Copia (presionando `Cmd` + `C`) el comando de aquí abajo y luego pégalo en tu terminal (con `Cmd` + `V`):

```bash
brew install --cask visual-studio-code
```

Luego abre VS Code ejecutando el siguiente comando en tu terminal:

```bash
code
```

:heavy_check_mark: Si se acaba de abrir una ventana de VS Code, todo está bien y puedes continuar :+1:

:x: De lo contrario, por favor **contacta a un profesor**.


## Extensiones de VS Code

### Instalación

Vamos a instalar algunas extensiones útiles de VS Code.

Copia y pega los siguientes comandos en tu terminal:

```bash
code --install-extension ms-vscode.sublime-keybindings
code --install-extension emmanuelbeziat.vscode-great-icons
code --install-extension github.github-vscode-theme
code --install-extension MS-vsliveshare.vsliveshare
code --install-extension rebornix.ruby
code --install-extension dbaeumer.vscode-eslint
code --install-extension Rubymaniac.vscode-paste-and-indent
code --install-extension alexcvzz.vscode-sqlite
code --install-extension anteprimorac.html-end-tag-labels
```

Aquí está la lista de las extensiones que estás instalando:
- [Sublime Text Keymap and Settings Importer](https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings)
- [VSCode Great Icons](https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons)
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
- [Ruby](https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Paste and Indent](https://marketplace.visualstudio.com/items?itemName=Rubymaniac.vscode-paste-and-indent)
- [SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)

## Oh-my-zsh

Instalemos el plugin `zsh` [Oh My Zsh](https://ohmyz.sh/).

Ejecuta este comando en la terminal:

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Si te preguntan "Do you want to change your default shell to zsh?", presiona `Y`

Si no, por favor **pídele ayuda a un profesor**.


## GitHub CLI

CLI es una abreviación de [Command-line Interface](https://en.wikipedia.org/wiki/Command-line_interface) que significa interfaz de línea de comando.

En esta sección usaremos [GitHub CLI](https://cli.github.com/) para interactuar directamente con GitHub desde la terminal.

Ya debería haberse instalado en tu computadora con los comandos que ejecutaste anteriormente.

Lo primero que hay que hacer para **iniciar sesión** es copiar y pegar el comando siguiente en tu terminal:

**NO edites el `email`**

```bash
gh auth login -s 'user:email' -w
```

gh le hará algunas preguntas:

`What is your preferred protocol for Git operations?` Con las flechas, elige `SSH` y presiona `Enter`. SSH es un protocolo para iniciar la sesión utilizando claves SSH en lugar de la famosa pareja nombre de usuario y contraseña.

`Generate a new SSH key to add to your GitHub account?` Presiona `Enter` para pedirle a gh que genere las claves SSH por ti.

Si ya tienes claves SSH, verás en su lugar `Upload your SSH public key to your GitHub account?`Con las flechas, selecciona la ruta de tu archivo de clave pública y pulsa `Intro`.

`Enter a passphrase for your new SSH key (Optional)`. Pon algo que quieras y que recuerdes. Es una contraseña para proteger tu private key que está almacenada en tu disco duro. Luego presiona `Enter`.

`Title for your SSH key`. Puede dejarlo en la propuesta "GitHub CLI", presiona `Enter`.

Obtendrás el siguiente resultado:

```bash
! First copy your one-time code: 0EF9-D015
- Press Enter to open github.com in your browser...
```

Selecciona y copia el código (`0EF9-D015` en el ejemplo) y luego presiona `Enter`.

Tu navegador se abrirá y te pedirá que autorices GitHub CLI para usar tu cuenta GitHub. Acepta y espera un poco.

Regresa a la terminal, presiona `Enter` nuevamente y listo. Eso es todo.

Para verificar que están conectado correctamente, escribe lo siguiente:

```bash
gh auth status
```

Si obtienes este mensaje: `Logged in to github.com as <YOUR USERNAME> `, significa que todo está bien

De lo contrario, **contacta a un profesor**.


## Dotfiles (configuración estándar)

Los hackers aman mejorar sus shells y sus herramientas.

Comenzaremos con una configuración predeterminada proporcionada por Le Wagon: [`lewagon/dotfiles`](https://github.com/lewagon/dotfiles).

Tu configuración es personal, así que necesitas tu **propio** repositorio para almacenarla. Haz el **fork** del repositorio de Le Wagon.

Hacer un fork significa crear un nuevo repositorio en tu propia cuenta GitHub `$GITHUB_USERNAME/dotfiles` el cual es idéntico al original de Le Wagon y que podrás modificar como quieras.

Abre tu terminal y ejecuta los siguientes comandos:

```bash
export GITHUB_USERNAME=`gh api user | jq -r '.login'`
echo $GITHUB_USERNAME
```

Deberías ver tu usuario GitHub en la pantalla.

Si no es el caso, **no des un paso más** y pide ayuda. Es posible que haya un problema con el paso anterior (`gh auth`).

Es hora de hacer el fork del repositorio y clonarlo en tu computadora:

```bash
mkdir -p ~/code/$GITHUB_USERNAME && cd $_
gh repo fork lewagon/dotfiles --clone
```

### Instalación de Dotfiles

Ejecuta el instalador de `dotfiles`:

```bash
cd ~/code/$GITHUB_USERNAME/dotfiles
zsh install.sh
```

Verifica los emails registrados en tu cuenta GitHub. Deberás seleccionar uno en el paso siguiente:

```bash
gh api user/emails | jq -r '.[].email'
```

Si ves una lista de tus emails registrados, puedes continuar

De lo contrario, por favor haz la [autenticación en GitHub](https://github.com/lewagon/setup/blob/master/macos.es.md#github-cli) nuevamente antes de ejecutar este comando otra vez.

### Instalación de git

Ejecuta el instalador de `git`:

```bash
cd ~/code/$GITHUB_USERNAME/dotfiles && zsh git_setup.sh
```

Esto te **pedirá** tu nombre (`FirstName LastName`) y tu email. Cualquier correo que elijas se mostrará **públicamente** en internet. 💡 Selecciona la dirección `@users.noreply.github.com` si no quieres que tu correo electrónico aparezca en los repositorios públicos a los que puedas contribuir.

**Necesitas** poner uno de los emails que aparecen arriba gracias al comando anterior `gh api ...`. De lo contrario, Kitt no podrá hacerle seguimiento a tu progreso.

Ahora **resetea** tu terminal ejecutando lo siguiente:

```bash
exec zsh
```

## Node.js

[Node.js](https://nodejs.org/en/) es un JavaScript runtime para ejecutar código JavaScript en la terminal. Instálalo con [nvm](https://github.com/nvm-sh/nvm), aun gestionador de versiones para Node.js.

En una terminal, ejecuta estos comandos:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | zsh
exec zsh
```

Luego corre el siguiente comando:

```bash
nvm -v
```

Deberías ver una versión. Si no, pídele ayuda a tu profesor.

Ahora instala node:

```bash
nvm install 18
nvm use 18
```

Cuando termine la instalación, corre lo siguiente:

```bash
node -v
```

Si ves `v16.15.1`, the installation succeeded :heavy_check_mark: entonces ahora puedes ejecutar lo siguiente:

```bash
nvm cache clear
```

:x: De lo contrario, **contacta a un profesor**.


## yarn

[`yarn`](https://yarnpkg.com/) es un gestor de paquetes para instalar librerías JavaScript. Instálalo:

En una terminal, ejecuta los siguientes comandos:

```bash
npm install --global yarn
exec zsh
```

Luego ejecuta este comando:

```bash
yarn -v
```

Si ves una versión, entonces todo está bien. Si no es el caso, **pídele ayuda a un profesor**

##### ¡Fin de la configuración!
