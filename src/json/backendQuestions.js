const backendQuestionsJSON = {
    "props": {
        "pageProps": {
            "testData": {
                "id": 7,
                "title": "Тест для Backend-разработчиков по Node.js",
                "isRepeat": false,
                "description": "Тест поможет проверить свои знания по Node.js",
                "limitTime": 1200,
                "level": "Junior",
                "skills": [
                    {
                        "id": 503,
                        "title": "node.js,node,nodejs,node js",
                        "description": "",
                        "isActiv": true
                    }
                ],
                "question": [
                    {
                        "id": 131,
                        "text": "Какой из следующих модулей является основным в Node? ",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 477,
                                "text": "webpack"
                            },
                            {
                                "id": 478,
                                "text": "crypto"
                            },
                            {
                                "id": 479,
                                "text": "request"
                            },
                            {
                                "id": 480,
                                "text": "chalk"
                            }
                        ]
                    },
                    {
                        "id": 132,
                        "text": "Какой из следующих модулей НЕ является встроенным модулем в Node?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 481,
                                "text": "events"
                            },
                            {
                                "id": 482,
                                "text": "ftp"
                            },
                            {
                                "id": 483,
                                "text": "dgram"
                            },
                            {
                                "id": 484,
                                "text": "http2 "
                            }
                        ]
                    },
                    {
                        "id": 133,
                        "text": "Какой метод модуля fs можно использовать для чтения содержимого файла без его буферизации в памяти?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 485,
                                "text": "read"
                            },
                            {
                                "id": 486,
                                "text": "createReadStream"
                            },
                            {
                                "id": 487,
                                "text": "readFile"
                            },
                            {
                                "id": 488,
                                "text": "readFileSync"
                            }
                        ]
                    },
                    {
                        "id": 134,
                        "text": "Можете ли вы создать веб-сервер https, используя Node.js?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 489,
                                "text": "нет, пока нет модулей, поддерживающих его"
                            },
                            {
                                "id": 490,
                                "text": "да, с помощью модулей https или http2"
                            },
                            {
                                "id": 491,
                                "text": "да, с помощью модуля path"
                            },
                            {
                                "id": 492,
                                "text": "да, с помощью модуля http"
                            }
                        ]
                    },
                    {
                        "id": 135,
                        "text": "Какой из следующих методов является методом для объекта консоли?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 493,
                                "text": "exit"
                            },
                            {
                                "id": 494,
                                "text": "time"
                            },
                            {
                                "id": 495,
                                "text": "test"
                            },
                            {
                                "id": 496,
                                "text": "print"
                            }
                        ]
                    },
                    {
                        "id": 136,
                        "text": "Если EventEmitter находится в области действия, в какой из следующих строк кода будет эмиттер события, выдающий событие изменения?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 497,
                                "text": "EventEmitter.new().emit('change');"
                            },
                            {
                                "id": 498,
                                "text": "EventEmitter.emit('change');"
                            },
                            {
                                "id": 499,
                                "text": "(new EventEmitter()).emit('change');"
                            },
                            {
                                "id": 500,
                                "text": "new EventEmitter('change');"
                            }
                        ]
                    },
                    {
                        "id": 137,
                        "text": "Какой из следующих объектов является потоком?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 501,
                                "text": "rocess.uptime"
                            },
                            {
                                "id": 502,
                                "text": "process.stdout"
                            },
                            {
                                "id": 503,
                                "text": "process"
                            },
                            {
                                "id": 504,
                                "text": "Buffer"
                            }
                        ]
                    },
                    {
                        "id": 138,
                        "text": "Какая переменная модуля содержит разрешенный полный путь к текущему файлу модуля?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 505,
                                "text": "__pathname"
                            },
                            {
                                "id": 506,
                                "text": "__filename"
                            },
                            {
                                "id": 507,
                                "text": "__location"
                            },
                            {
                                "id": 508,
                                "text": "__flder"
                            }
                        ]
                    },
                    {
                        "id": 139,
                        "text": "Какой консольный метод можно использовать для печати трассировки стека до точки его выполнения?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 509,
                                "text": "stack"
                            },
                            {
                                "id": 510,
                                "text": "trace"
                            },
                            {
                                "id": 511,
                                "text": "debug"
                            },
                            {
                                "id": 512,
                                "text": "print"
                            }
                        ]
                    },
                    {
                        "id": 140,
                        "text": "Какова цель модуля path?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 513,
                                "text": "чтобы предоставить утилиты для тестирования файлов"
                            },
                            {
                                "id": 514,
                                "text": "чтобы предоставить утилиты для работы с путями к файлам и директориям"
                            },
                            {
                                "id": 515,
                                "text": "чтобы предоставить утилиты для добавления и удаления файлов"
                            },
                            {
                                "id": 516,
                                "text": "чтобы предоставить утилиты для чтения файлов"
                            }
                        ]
                    },
                    {
                        "id": 141,
                        "text": "Как сделать объект HTTP-сервера активным и прослушивать запросы на определенных портах?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 517,
                                "text": "server. start"
                            },
                            {
                                "id": 518,
                                "text": "server.listen"
                            },
                            {
                                "id": 519,
                                "text": "server.activate"
                            },
                            {
                                "id": 520,
                                "text": "server. run"
                            }
                        ]
                    },
                    {
                        "id": 142,
                        "text": "Как запустить приложение Node, если точка входа в файле index.js?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 521,
                                "text": "nodemon start"
                            },
                            {
                                "id": 522,
                                "text": "node index.js"
                            },
                            {
                                "id": 523,
                                "text": "start index.js"
                            },
                            {
                                "id": 524,
                                "text": "node start"
                            }
                        ]
                    },
                    {
                        "id": 143,
                        "text": "Что значит LTS версия в Node?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 525,
                                "text": "это текущая нестабильная версия, и ее следует избегать"
                            },
                            {
                                "id": 526,
                                "text": "это самая безопасная версия для долгосрочной поддержки"
                            },
                            {
                                "id": 527,
                                "text": "это версия, которая скоро будет удалена"
                            },
                            {
                                "id": 528,
                                "text": "это версия с новыми функциями"
                            }
                        ]
                    },
                    {
                        "id": 145,
                        "text": "Какая библиотека поддерживает основной событийный цикл Node.js?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 529,
                                "text": "V8"
                            },
                            {
                                "id": 530,
                                "text": "libuv"
                            },
                            {
                                "id": 531,
                                "text": "c-ares"
                            },
                            {
                                "id": 532,
                                "text": "events"
                            }
                        ]
                    },
                    {
                        "id": 148,
                        "text": "Какая строка импортирует версию метода ReadFile, основанную на промисах?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 533,
                                "text": "const { readFile } = require(fs)"
                            },
                            {
                                "id": 534,
                                "text": "const { readFile } = require(fs).promises"
                            },
                            {
                                "id": 535,
                                "text": "const { readFilePromises: readFile } = require(fs)"
                            },
                            {
                                "id": 536,
                                "text": "const { readFile } = require(promises)"
                            }
                        ]
                    },
                    {
                        "id": 149,
                        "text": "Какой основной модуль в Node вы можете использовать, чтобы воспользоваться преимуществами многоядерных систем?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 537,
                                "text": "os"
                            },
                            {
                                "id": 538,
                                "text": "cluster"
                            },
                            {
                                "id": 539,
                                "text": "util"
                            },
                            {
                                "id": 542,
                                "text": "net"
                            }
                        ]
                    },
                    {
                        "id": 146,
                        "text": "С помощью какой команды можно получить список доступных команд для Node.js?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 540,
                                "text": "node index.js -x"
                            },
                            {
                                "id": 541,
                                "text": "node -h"
                            },
                            {
                                "id": 543,
                                "text": "node -v"
                            },
                            {
                                "id": 545,
                                "text": "node index.js -h"
                            }
                        ]
                    },
                    {
                        "id": 144,
                        "text": "Что из нижеперечисленного НЕ является допустимым потоком в Node?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 544,
                                "text": "process. stdin"
                            },
                            {
                                "id": 546,
                                "text": "process. stdinfo"
                            },
                            {
                                "id": 549,
                                "text": "process. stdout"
                            },
                            {
                                "id": 550,
                                "text": "process. stderr"
                            }
                        ]
                    },
                    {
                        "id": 147,
                        "text": "Что вы можете экспортировать с помощью module.exports?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 547,
                                "text": "только объекты"
                            },
                            {
                                "id": 548,
                                "text": "функции, объекты, массивы или все, что вы назначаете модулю"
                            },
                            {
                                "id": 551,
                                "text": "только функции"
                            },
                            {
                                "id": 555,
                                "text": "только переменные и массивы"
                            }
                        ]
                    },
                    {
                        "id": 150,
                        "text": "Какой основной модуль в Node вы можете использовать для тестирования?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": null,
                        "answer": [
                            {
                                "id": 552,
                                "text": "chai"
                            },
                            {
                                "id": 553,
                                "text": "assert"
                            },
                            {
                                "id": 554,
                                "text": "jest"
                            },
                            {
                                "id": 556,
                                "text": "mocha"
                            }
                        ]
                    },
                    {
                        "id": 152,
                        "text": "Посмотрите на приведенный ниже код. Что показывает консоль?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": {
                            "src": "https://165104.selcdn.ru/hibrain_v2/png/d23217b3-57ad-4c95-b224-afd57fd01b32.png"
                        },
                        "answer": [
                            {
                                "id": 557,
                                "text": "server running at http://localhost:3000/"
                            },
                            {
                                "id": 558,
                                "text": "server running at http://127.0.0.1:3000/"
                            },
                            {
                                "id": 559,
                                "text": "server running at http://localhost:4000/"
                            },
                            {
                                "id": 560,
                                "text": "server running at port 3000"
                            }
                        ]
                    },
                    {
                        "id": 151,
                        "text": "У вас есть script.js файл с одной строкой кода, показанной на рисунке. Каков будет результат выполнения script.js с помощью команды node?",
                        "isOpen": false,
                        "isMultiple": false,
                        "pic": {
                            "src": "https://165104.selcdn.ru/hibrain_v2/png/f6289195-99df-4384-8401-cdc0f59ff2ee.png"
                        },
                        "answer": [
                            {
                                "id": 561,
                                "text": "ReferenceError: arguments is not defined"
                            },
                            {
                                "id": 562,
                                "text": " объект, представляющий массив, состоящий из пяти элементов"
                            },
                            {
                                "id": 563,
                                "text": "пустая строка"
                            },
                            {
                                "id": 564,
                                "text": "undefined"
                            }
                        ]
                    }
                ],
                "analyticsLevel": {
                    "id": 2,
                    "title": "Junior",
                    "innerName": "junior"
                },
                "questionCount": 22
            },
            "initialState": {
                "form": {},
                "formStatus": {
                    "successFormRequest": false,
                    "loading": false
                },
                "authData": {
                    "email": "",
                    "password": ""
                },
                "registrationData": {
                    "data": {
                        "firstName": "",
                        "lastName": "",
                        "email": "",
                        "password": "",
                        "returnPassword": "",
                        "check": false,
                        "type": "",
                        "organization": "",
                        "region": ""
                    },
                    "loading": false,
                    "isUserVerified": false
                },
                "userAgent": {
                    "data": {
                        "userDevise": {}
                    }
                },
                "userData": {
                    "data": {},
                    "userIp": "",
                    "loading": false,
                    "profile": {}
                },
                "jwtData": {
                    "data": {
                        "statusCode": 0,
                        "data": {
                            "accessToken": ""
                        },
                        "message": "",
                        "error": false
                    },
                    "loading": false
                },
                "userPermissions": {
                    "data": {},
                    "userApiLocation": {},
                    "loading": false,
                    "profile": {}
                },
                "resetPassword": {
                    "data": {
                        "resetPassword": {
                            "resetPasswordLoading": false
                        },
                        "checkCode": {
                            "checkCodeLoading": false
                        },
                        "newPassword": {
                            "newPasswordLoading": false
                        }
                    }
                },
                "companyData": {
                    "data": {},
                    "loading": false
                },
                "companiesData": {
                    "data": {
                        "data": [],
                        "totalCount": 0,
                        "count": 0
                    },
                    "searchData": {
                        "data": [],
                        "totalCount": 0,
                        "count": 0
                    },
                    "loading": false,
                    "searchValue": "",
                    "defaultOrganization": null
                },
                "coursesData": {
                    "data": [],
                    "loading": false
                },
                "oneCourseData": {
                    "data": {},
                    "loading": false
                },
                "pagination": {
                    "data": {
                        "countElementPage": 6,
                        "currentPage": 1
                    },
                    "pagPages": [],
                    "coursesPages": [],
                    "newsPages": [],
                    "vacanciesPages": [],
                    "companiesPages": [],
                    "placesPages": [],
                    "templatePage": [],
                    "testsPage": [],
                    "onePagesRoutes": {
                        "onePageRoute": false
                    },
                    "pagLength": 0
                },
                "newsData": {
                    "data": [],
                    "oneNewsData": {},
                    "loading": false
                },
                "newsSearchData": {
                    "search": "",
                    "data": {}
                },
                "filterNews": {
                    "data": {},
                    "filterQueryString": []
                },
                "constructorPage": {
                    "isConstructorPage": false,
                    "newFieldArray": 0,
                    "region": false,
                    "direction": false,
                    "level": false,
                    "overlay": false,
                    "mainUserData": {
                        "currentDirection": "",
                        "currentLevel": "",
                        "currentNickname": "",
                        "currentMerch": "none",
                        "currentImgFormat": "SVG"
                    },
                    "infoData": {
                        "salary": 0,
                        "percent": 0
                    },
                    "infoSkillsData": {},
                    "skillsAraay": [],
                    "filterDataArray": [],
                    "otherSkills": []
                },
                "frontendEmblem": {
                    "shield": "",
                    "collector": "",
                    "face": "",
                    "framework": "",
                    "git": "",
                    "testFramework": "",
                    "socialNetwork": "",
                    "nickname": ""
                },
                "backendEmblem": {
                    "level": "",
                    "language": "",
                    "framework": "",
                    "dataBase": "",
                    "testFramework": "",
                    "socialNetwork": ""
                },
                "fullstackEmblem": {
                    "level": "",
                    "language": "",
                    "dataBase": "",
                    "frontendFramework": "",
                    "backendFramework": "",
                    "testFramework": "",
                    "socialNetwork": ""
                },
                "mobileEmblem": {
                    "level": "",
                    "language": "",
                    "framework": "",
                    "dataBase": "",
                    "socialNetwork": ""
                },
                "softwareEmblem": {
                    "level": "",
                    "language": "",
                    "framework": "",
                    "dataBase": "",
                    "socialNetwork": ""
                },
                "application": {
                    "data": {},
                    "loading": false
                },
                "errors": {
                    "status": null,
                    "message": "",
                    "title": ""
                },
                "navMenu": {
                    "authMenuIsActive": false,
                    "navMenuIsActive": false,
                    "mobSubIsActive": false,
                    "mobDeepIsActive": false,
                    "navMenuData": {},
                    "loading": false
                },
                "onePlaceData": {
                    "data": {},
                    "loading": false
                },
                "searchCourses": {
                    "search": "",
                    "data": [],
                    "isOptional": false
                },
                "geoData": {
                    "geoData": {}
                },
                "filtersData": {
                    "data": [],
                    "currentFilters": [],
                    "isOpen": false,
                    "isMobileFilter": false,
                    "isMobileUpperFilter": false
                },
                "filterCourses": {
                    "data": [],
                    "filterQueryString": []
                },
                "filterVacansies": {
                    "data": [],
                    "filterQueryString": []
                },
                "vacancyData": {
                    "data": {},
                    "loading": false
                },
                "searchVacancies": {
                    "search": "",
                    "data": []
                },
                "allVacanciesData": {
                    "data": [],
                    "loading": false
                },
                "formData": {
                    "technologies": {
                        "data": []
                    },
                    "defaultTechnologies": {
                        "data": []
                    },
                    "selectData": {
                        "data": []
                    },
                    "selectOrgs": {
                        "data": []
                    },
                    "selectCourses": {
                        "data": []
                    },
                    "region": {
                        "data": []
                    },
                    "arrayDeleteAdditionalEducation": [],
                    "organizationDefault": null,
                    "courseDefault": null,
                    "facultyDefault": null,
                    "schoolDefault": null,
                    "formData": {},
                    "onFormStatus": false,
                    "finalText": "Отправить заявку?",
                    "savedTech": [],
                    "formBackUrl": "/companies",
                    "topThreeData": [],
                    "isRedirectToForm": false
                },
                "companiesFilterData": {
                    "data": [],
                    "filterQueryString": []
                },
                "searchCompanies": {
                    "search": "",
                    "data": []
                },
                "placeData": {
                    "data": {},
                    "loading": false
                },
                "searchPlaces": {
                    "search": "",
                    "data": []
                },
                "analyticsData": {
                    "data": {
                        "data": [],
                        "totalCount": null,
                        "count": null
                    },
                    "companyList": {
                        "data": null,
                        "totalCount": null,
                        "count": null
                    },
                    "currentData": null,
                    "currentCategory": null,
                    "currentMarker": "",
                    "searchValue": "",
                    "filtersData": [],
                    "currentCoordinates": {
                        "lat1": null,
                        "lat2": null,
                        "long1": null,
                        "long2": null,
                        "zoomLevel": null
                    },
                    "loading": false,
                    "chartsData": null
                },
                "templatePage": {
                    "data": {},
                    "loading": false,
                    "currentSeoUrl": "",
                    "templatePattern": "",
                    "firstLoading": true
                },
                "searchTemplate": {
                    "search": "",
                    "data": []
                },
                "filterTemplate": {
                    "data": [],
                    "filterQueryString": []
                },
                "filterPlaces": {
                    "data": [],
                    "filterQueryString": []
                },
                "searchData": {
                    "data": {},
                    "searchData": "",
                    "loading": false,
                    "isActiveSearch": false
                },
                "testsData": {
                    "data": {},
                    "loading": false
                },
                "testsFilterData": {
                    "data": {},
                    "filterQueryString": []
                },
                "testsSearchData": {
                    "search": "",
                    "data": []
                },
                "oneTestData": {
                    "data": {
                        "id": 7,
                        "title": "Тест для Backend-разработчиков по Node.js",
                        "isRepeat": false,
                        "description": "Тест поможет проверить свои знания по Node.js",
                        "limitTime": 1200,
                        "level": "Junior",
                        "skills": [
                            {
                                "id": 503,
                                "title": "node.js,node,nodejs,node js",
                                "description": "",
                                "isActiv": true
                            }
                        ],
                        "question": [
                            {
                                "id": 131,
                                "text": "Какой из следующих модулей является основным в Node? ",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 477,
                                        "text": "webpack"
                                    },
                                    {
                                        "id": 478,
                                        "text": "crypto"
                                    },
                                    {
                                        "id": 479,
                                        "text": "request"
                                    },
                                    {
                                        "id": 480,
                                        "text": "chalk"
                                    }
                                ]
                            },
                            {
                                "id": 132,
                                "text": "Какой из следующих модулей НЕ является встроенным модулем в Node?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 481,
                                        "text": "events"
                                    },
                                    {
                                        "id": 482,
                                        "text": "ftp"
                                    },
                                    {
                                        "id": 483,
                                        "text": "dgram"
                                    },
                                    {
                                        "id": 484,
                                        "text": "http2 "
                                    }
                                ]
                            },
                            {
                                "id": 133,
                                "text": "Какой метод модуля fs можно использовать для чтения содержимого файла без его буферизации в памяти?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 485,
                                        "text": "read"
                                    },
                                    {
                                        "id": 486,
                                        "text": "createReadStream"
                                    },
                                    {
                                        "id": 487,
                                        "text": "readFile"
                                    },
                                    {
                                        "id": 488,
                                        "text": "readFileSync"
                                    }
                                ]
                            },
                            {
                                "id": 134,
                                "text": "Можете ли вы создать веб-сервер https, используя Node.js?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 489,
                                        "text": "нет, пока нет модулей, поддерживающих его"
                                    },
                                    {
                                        "id": 490,
                                        "text": "да, с помощью модулей https или http2"
                                    },
                                    {
                                        "id": 491,
                                        "text": "да, с помощью модуля path"
                                    },
                                    {
                                        "id": 492,
                                        "text": "да, с помощью модуля http"
                                    }
                                ]
                            },
                            {
                                "id": 135,
                                "text": "Какой из следующих методов является методом для объекта консоли?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 493,
                                        "text": "exit"
                                    },
                                    {
                                        "id": 494,
                                        "text": "time"
                                    },
                                    {
                                        "id": 495,
                                        "text": "test"
                                    },
                                    {
                                        "id": 496,
                                        "text": "print"
                                    }
                                ]
                            },
                            {
                                "id": 136,
                                "text": "Если EventEmitter находится в области действия, в какой из следующих строк кода будет эмиттер события, выдающий событие изменения?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 497,
                                        "text": "EventEmitter.new().emit('change');"
                                    },
                                    {
                                        "id": 498,
                                        "text": "EventEmitter.emit('change');"
                                    },
                                    {
                                        "id": 499,
                                        "text": "(new EventEmitter()).emit('change');"
                                    },
                                    {
                                        "id": 500,
                                        "text": "new EventEmitter('change');"
                                    }
                                ]
                            },
                            {
                                "id": 137,
                                "text": "Какой из следующих объектов является потоком?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 501,
                                        "text": "rocess.uptime"
                                    },
                                    {
                                        "id": 502,
                                        "text": "process.stdout"
                                    },
                                    {
                                        "id": 503,
                                        "text": "process"
                                    },
                                    {
                                        "id": 504,
                                        "text": "Buffer"
                                    }
                                ]
                            },
                            {
                                "id": 138,
                                "text": "Какая переменная модуля содержит разрешенный полный путь к текущему файлу модуля?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 505,
                                        "text": "__pathname"
                                    },
                                    {
                                        "id": 506,
                                        "text": "__filename"
                                    },
                                    {
                                        "id": 507,
                                        "text": "__location"
                                    },
                                    {
                                        "id": 508,
                                        "text": "__flder"
                                    }
                                ]
                            },
                            {
                                "id": 139,
                                "text": "Какой консольный метод можно использовать для печати трассировки стека до точки его выполнения?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 509,
                                        "text": "stack"
                                    },
                                    {
                                        "id": 510,
                                        "text": "trace"
                                    },
                                    {
                                        "id": 511,
                                        "text": "debug"
                                    },
                                    {
                                        "id": 512,
                                        "text": "print"
                                    }
                                ]
                            },
                            {
                                "id": 140,
                                "text": "Какова цель модуля path?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 513,
                                        "text": "чтобы предоставить утилиты для тестирования файлов"
                                    },
                                    {
                                        "id": 514,
                                        "text": "чтобы предоставить утилиты для работы с путями к файлам и директориям"
                                    },
                                    {
                                        "id": 515,
                                        "text": "чтобы предоставить утилиты для добавления и удаления файлов"
                                    },
                                    {
                                        "id": 516,
                                        "text": "чтобы предоставить утилиты для чтения файлов"
                                    }
                                ]
                            },
                            {
                                "id": 141,
                                "text": "Как сделать объект HTTP-сервера активным и прослушивать запросы на определенных портах?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 517,
                                        "text": "server. start"
                                    },
                                    {
                                        "id": 518,
                                        "text": "server.listen"
                                    },
                                    {
                                        "id": 519,
                                        "text": "server.activate"
                                    },
                                    {
                                        "id": 520,
                                        "text": "server. run"
                                    }
                                ]
                            },
                            {
                                "id": 142,
                                "text": "Как запустить приложение Node, если точка входа в файле index.js?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 521,
                                        "text": "nodemon start"
                                    },
                                    {
                                        "id": 522,
                                        "text": "node index.js"
                                    },
                                    {
                                        "id": 523,
                                        "text": "start index.js"
                                    },
                                    {
                                        "id": 524,
                                        "text": "node start"
                                    }
                                ]
                            },
                            {
                                "id": 143,
                                "text": "Что значит LTS версия в Node?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 525,
                                        "text": "это текущая нестабильная версия, и ее следует избегать"
                                    },
                                    {
                                        "id": 526,
                                        "text": "это самая безопасная версия для долгосрочной поддержки"
                                    },
                                    {
                                        "id": 527,
                                        "text": "это версия, которая скоро будет удалена"
                                    },
                                    {
                                        "id": 528,
                                        "text": "это версия с новыми функциями"
                                    }
                                ]
                            },
                            {
                                "id": 145,
                                "text": "Какая библиотека поддерживает основной событийный цикл Node.js?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 529,
                                        "text": "V8"
                                    },
                                    {
                                        "id": 530,
                                        "text": "libuv"
                                    },
                                    {
                                        "id": 531,
                                        "text": "c-ares"
                                    },
                                    {
                                        "id": 532,
                                        "text": "events"
                                    }
                                ]
                            },
                            {
                                "id": 148,
                                "text": "Какая строка импортирует версию метода ReadFile, основанную на промисах?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 533,
                                        "text": "const { readFile } = require(fs)"
                                    },
                                    {
                                        "id": 534,
                                        "text": "const { readFile } = require(fs).promises"
                                    },
                                    {
                                        "id": 535,
                                        "text": "const { readFilePromises: readFile } = require(fs)"
                                    },
                                    {
                                        "id": 536,
                                        "text": "const { readFile } = require(promises)"
                                    }
                                ]
                            },
                            {
                                "id": 149,
                                "text": "Какой основной модуль в Node вы можете использовать, чтобы воспользоваться преимуществами многоядерных систем?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 537,
                                        "text": "os"
                                    },
                                    {
                                        "id": 538,
                                        "text": "cluster"
                                    },
                                    {
                                        "id": 539,
                                        "text": "util"
                                    },
                                    {
                                        "id": 542,
                                        "text": "net"
                                    }
                                ]
                            },
                            {
                                "id": 146,
                                "text": "С помощью какой команды можно получить список доступных команд для Node.js?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 540,
                                        "text": "node index.js -x"
                                    },
                                    {
                                        "id": 541,
                                        "text": "node -h"
                                    },
                                    {
                                        "id": 543,
                                        "text": "node -v"
                                    },
                                    {
                                        "id": 545,
                                        "text": "node index.js -h"
                                    }
                                ]
                            },
                            {
                                "id": 144,
                                "text": "Что из нижеперечисленного НЕ является допустимым потоком в Node?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 544,
                                        "text": "process. stdin"
                                    },
                                    {
                                        "id": 546,
                                        "text": "process. stdinfo"
                                    },
                                    {
                                        "id": 549,
                                        "text": "process. stdout"
                                    },
                                    {
                                        "id": 550,
                                        "text": "process. stderr"
                                    }
                                ]
                            },
                            {
                                "id": 147,
                                "text": "Что вы можете экспортировать с помощью module.exports?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 547,
                                        "text": "только объекты"
                                    },
                                    {
                                        "id": 548,
                                        "text": "функции, объекты, массивы или все, что вы назначаете модулю"
                                    },
                                    {
                                        "id": 551,
                                        "text": "только функции"
                                    },
                                    {
                                        "id": 555,
                                        "text": "только переменные и массивы"
                                    }
                                ]
                            },
                            {
                                "id": 150,
                                "text": "Какой основной модуль в Node вы можете использовать для тестирования?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": null,
                                "answer": [
                                    {
                                        "id": 552,
                                        "text": "chai"
                                    },
                                    {
                                        "id": 553,
                                        "text": "assert"
                                    },
                                    {
                                        "id": 554,
                                        "text": "jest"
                                    },
                                    {
                                        "id": 556,
                                        "text": "mocha"
                                    }
                                ]
                            },
                            {
                                "id": 152,
                                "text": "Посмотрите на приведенный ниже код. Что показывает консоль?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": {
                                    "src": "https://165104.selcdn.ru/hibrain_v2/png/d23217b3-57ad-4c95-b224-afd57fd01b32.png"
                                },
                                "answer": [
                                    {
                                        "id": 557,
                                        "text": "server running at http://localhost:3000/"
                                    },
                                    {
                                        "id": 558,
                                        "text": "server running at http://127.0.0.1:3000/"
                                    },
                                    {
                                        "id": 559,
                                        "text": "server running at http://localhost:4000/"
                                    },
                                    {
                                        "id": 560,
                                        "text": "server running at port 3000"
                                    }
                                ]
                            },
                            {
                                "id": 151,
                                "text": "У вас есть script.js файл с одной строкой кода, показанной на рисунке. Каков будет результат выполнения script.js с помощью команды node?",
                                "isOpen": false,
                                "isMultiple": false,
                                "pic": {
                                    "src": "https://165104.selcdn.ru/hibrain_v2/png/f6289195-99df-4384-8401-cdc0f59ff2ee.png"
                                },
                                "answer": [
                                    {
                                        "id": 561,
                                        "text": "ReferenceError: arguments is not defined"
                                    },
                                    {
                                        "id": 562,
                                        "text": " объект, представляющий массив, состоящий из пяти элементов"
                                    },
                                    {
                                        "id": 563,
                                        "text": "пустая строка"
                                    },
                                    {
                                        "id": 564,
                                        "text": "undefined"
                                    }
                                ]
                            }
                        ],
                        "analyticsLevel": {
                            "id": 2,
                            "title": "Junior",
                            "innerName": "junior"
                        },
                        "questionCount": 22
                    },
                    "isUserAuthTest": false,
                    "userTestAnswers": {
                        "testId": null,
                        "responseProfile": []
                    },
                    "userTestResult": {},
                    "resultLoading": false,
                    "verifiedResult": {},
                    "testTimer": 0
                }
            }
        },
        "__N_SSP": true
    },
    "page": "/tests/[id]",
    "query": {
        "id": "7"
    },
    "buildId": "G8w0A_0Np19-H0IozW7R6",
    "isFallback": false,
    "dynamicIds": [
        51229
    ],
    "gssp": true,
    "scriptLoader": []
}

export default backendQuestionsJSON;