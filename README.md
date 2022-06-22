# PetHelper (fronted часть)
Выпускная квалификационная работа (ВКР) бакалавра, оформленная в соответствии с нормоконтролем РТУ МИРЭА в 2022 г на тему "Веб-сервис для розыска потерянных домашних животных".

# Особенности
- Поиск по базе данных с помощью системы полнотекстового поиска elasticsearch.
- Расширенная фильтрация объявлений.
- Работа с картой с помощью API сервиса Яндекс.Карт.
- Возможность распространения объявлений.
- Личные кабинеты пользователей.
- Безопасность, реализованная с помощью JWT.
- Возможность работы с израбнными объявлениями.
- Возможность работы с созданными объявлениями.
- Возможность работы с комментариями.
- Просмотр ближайших объявлений к текущему местоположению.

# Структура приложения
```
└───src
    ├───components
    │   ├───address-input
    │   ├───alerts
    │   ├───button
    │   │   ├───delete-comment
    │   │   ├───delete-post
    │   │   └───go-back
    │   ├───header
    │   ├───post-item
    │   ├───post-page
    │   │   ├───comment-item
    │   │   ├───post-comments
    │   │   ├───post-container
    │   │   ├───post-info
    │   │   ├───right-bar
    │   │   ├───share
    │   │   └───text
    │   ├───posts
    │   │   ├───filters
    │   │   │   ├───display
    │   │   │   ├───input-filters
    │   │   │   └───status-controls
    │   │   ├───mark-item
    │   │   └───posts-map
    │   ├───profile-card
    │   ├───report
    │   └───ymap
    ├───images
    ├───pages
    │   ├───404
    │   ├───activation
    │   ├───admin-panel
    │   ├───auth
    │   ├───favs
    │   ├───help
    │   ├───home
    │   ├───my-posts
    │   ├───post
    │   ├───posts-page
    │   ├───profile
    │   ├───profile-edit
    │   └───report
    ├───store
    │   ├───actions
    │   ├───constants
    │   └───reducers
    ├───_hooks
    ├───_services
    └───_utils
```
