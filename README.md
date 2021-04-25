# Инструкция по запуску приложения
## Обычный вариант
1. Склонируйте репозиторий `git clone https://github.com/IvannaHrytsiuk/rsclone.git -b develop`;
2. Перейдите в папку `rsclone`;
3. Установите Node.js версии 14.3.0 с помщью [nvm](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.7) используя команду `nvm install 14.3.0 && nvm use 14.3.0`;
4. Затем, запустите команду `npm install`;
5. После завершения установки, запустите команду `npm run dev` и смотрите на результаты в открывшемся окне браузера.

## Альтернативный вариант
1. Скачайте zip-архив кликнув по ссылке [zip](https://github.com/IvannaHrytsiuk/rsclone/archive/develop.zip)
2. Извлеките всё и перейдите в папку `rsclone-develop`;
3. Установите Node.js версии 14.3.0 с помщью [nvm](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.7) используя команду `nvm install 14.3.0 && nvm use 14.3.0`;
4. Затем, запустите команду `npm install`;
5. После завершения установки, запустите команду `npm run dev` и смотрите на результаты в открывшемся окне браузера.

### Возможная ошибка при запуске и её решение
1. При запуске может возникнуть ошибка, связанная с node-sass, для её устранения необходимо запустить команду `npm rebuild node-sass`.
