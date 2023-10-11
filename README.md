# test-genezis

На фронтенде: создать три компонента, выполнить определенные манипуляции через API amoCRM, отобразить результат
Будет плюсом сделать бекенд: принять запрос с фронтенда, выполнить определенные манипуляции через API amoCRM, вернуть на фронтенд данные

Функционал фронтенда
В выпадающем списке пользователь выбирает одну из трех сущностей, которую нужно создать в amoCRM: Сделка, Контакт, Компания.
По нажатию на кнопку “Создать” с фронтенда уходит POST-запрос (contenttype=application/json) на API amoCRM, создается выбранная сущность, в теле ответа API присылает ID созданной сущности и http код ответа 200, либо текст ошибки и соответствующий http-код ответа.
В случае успешного создания сущности отображаем название сущности и её идентификатор в области отображения результатов. Результаты накапливаем, должны отображаться все ID и имена сущностей, созданных с момента открытия окна браузера.

В выпадающем списке отображаем четыре элемента:
Не выбрано
Сделка
Контакт
Компания
По-умолчанию в списке выбран первый элемент “Не выбрано”. При выбранном элементе “Не выбрано” кнопку “Создать” делаем неактивной (на белом фоне). При иных выбранных элементах кнопку делаем активной (на синем фоне).



## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


OSX

отключить cors на mac через терминал (перед запуском закрыть chrome)- 
open -n -a /Applications/Google\ Chrome.app --args --user-data-dir="/tmp/someFolderName" --disable-web-security


Windows

Right click on desktop, add new shortcut
Add the target as "[PATH_TO_CHROME]\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=%LOCALAPPDATA%\Google\chromeTemp
Click OK.

NOTE: On Windows command will be: "C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=%LOCALAPPDATA%\Google\chromeTemp
