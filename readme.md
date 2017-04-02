# Gulp Pure Start

![Gulp Pure Start logo](https://drive.google.com/uc?export=view&id=0B7lALWrgWMxpWkJ6a09MdnVYdmc)

**Gulp Pure Start** позволяет легко и быстро начать работу над проектом с использованием сборщика Gulp.

Соответствуя основным потребностям в разработке GPS позволяет просто склонировать проект к себе, инициализировать и начать работать!

По желанию можно добавить свои плагины или не пользоваться всеми, которые есть в сборке. Весь код прокомментирован и по нему легко ориентироваться.

## Что может эта сборка
 + Компилировать **SASS/SCSS** в CSS
 + Компилировать **Pug (Jade)** в HTML
 + Запустить **локальный сервер** с возможностью просмотра сайта с разных устройств одной сети
 + Конкатенировать файлы
 + Минифицировать **JavaScript** и **CSS**
 + Подставлять **вендорные префиксы** к стилям
 + Минифицировать изображения
 + и многое по мелочи

## Как развернуть среду для проекта
 1. Скачиваем содержимое репозитория в папку проекта
 2. В папке проекта в консоли выполняем команду **`npm i`** (должен быть установлен [Node.JS](https://nodejs.org/en/) и [NPM](https://www.npmjs.com/))
 3. Когда необходимые пакеты буду установлены (может потребоваться время), инициализируем настройку проекта (опционально) командой **`npm init`**
 4. Чтобы сразу начать отслеживание файлов и запустить локальный сервер выполните команду **`gulp`** (уже можно работать!)
 5. Для загрузки популярных библиотек/плагинов и т.п. восользуйте командой **`bower i Название_пакета`**. Возможные пакеты можно найти [здесь](https://bower.io/search/). По-умолчанию, все библиотеки устанавливаются в *app/libs*, такое поведение можно изменить в файле **.bowerrc** в корне проекта. (Не забудьте добавить JS файлы через **gulpfile.js** в таске *scripts*!)
 5. Для компиляции проекта в продакшен выполните команду **`gulp build`**

## Структура
Стуктура проекта предельно проста:
 + **.bowerrc** — настройка пакетного менеджера Bower
 + **gulpfile.js** — скрипт настроек и тасков для Gulp'а
 + **package.json** — файл содержит информацию о проекте, авторе, а также список зависимостей
 + папка **app** — папка используемая во время непосредственно работы над проектом
 + папка **dist** — папка готового проекта, которая содержит минифицированные версии файлов и не содержит файлы типа **.sass/.pug**
 + папка **node_modules** — папка, содержащая зависимости проекта
 
## Рекомендации к использованию
Чтобы работа надо проектом с **Gulp Pure Start** была легче и быстрее, рекомендую придерживаться следующих правил:
1. В папке **app** придерживайтесь следующей структуры:
 
 ![Gulp Pure Start structure](https://drive.google.com/uc?export=view&id=0B7lALWrgWMxpMGluWWlCdEU2ZlE)

2. **HTML** файлы по умолчанию компилируются в корень **app**, при необходимости можно изменить в  **gulpfile.js**
3. Все библиотеки устанавливаются в **app/libs**. Также можно изменить в **.bowerrc**. Для их подключения используйте таск **scripts** файла **gulpfile.js**, если это **JS** и файл **libs.sass** (который нужно импортировать в style.sass или подключать библиотеки сразу в нём), если это **CSS**
4. По-умолчанию компилируется только **style.sass**, остальные следует импротировать в него, или заменить строку таска **sass**

```javascript
return gulp.src('app/sass/style.sass')
```
на
```javascript
return gulp.src('app/sass/*.sass')
```

## Обратная связь
Почта: [nikita.mihalyov@gmail.com](mailto:nikita.mihalyov@gmail.com)

Или написать **Issue**
