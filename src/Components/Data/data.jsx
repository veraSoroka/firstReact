import React from "react";
import book0 from "../Main/Img/150.jpg";
import book1 from "../Main/Img/23.jpg";
import book2 from "../Main/Img/Samosbor.jpg";
import book3 from "../Main/Img/21.jpg";
import magazine1 from "../Main/Img/release1.png";
import magazine2 from "../Main/Img/release2.jpg";
import magazine3 from "../Main/Img/release3.jpg";
import magazine4 from "../Main/Img/release4.jpg";
import stuff1 from "../Main/Img/badge.jpg";
import stuff2 from "../Main/Img/card.jpg";
import stuff3 from "../Main/Img/box1.jpg";
import stuff4 from "../Main/Img/box2.jpg";
import slider0 from "../Slider/Img/logo-bear.png"
import slider1 from "../Slider/Img/slider1.png";
import slider2 from "../Slider/Img/slider2.jpg";
import slider3 from "../Slider/Img/slider3.png";
import slider4 from "../Slider/Img/slider4.jpg";
import slider5 from "../Slider/Img/slider5.jpg";
import smallImage from "../Main/Img/21.jpg"
import slider6 from "../Slider/Img/round.png";
import slider7 from "../Slider/Img/round_full.png";
import slider8 from "../Slider/Img/DTP.png";
import slider9 from "../Slider/Img/kran.jpg";





const data = {
    header: {
        title: "Сraft magazine",
        link1: "Home",
        link2: "About us",
        link3: "Magazines",
        link4: "Books",
        link5: "Stuff",
        link6: "Contact"
    },
    main: {
        slider: [{
            name: "slider1",
            id: "0",
            img: slider0,
            title: "Крафтовый журнал объявляет open-call",
            text1: "Объем не больше 7k знаков",
            text2: "Прием рассказов с 23 - 32 мая",
            subscription: "жмак, чтобы отправить рассказ",
            dot: slider6,
            dotFull: slider7
        },
            {    name: "slider2",
                id: "1",
                img: slider2,
                title: "Gift box «Дракончики и чай»",
                text1: "Хороший журнал, хороший чай, хорошая свечка и хорошие сладости",
                text2: "скидка 20%",
                subscription: "жмак, чтобы купить набор",
                dot: slider6,
                dotFull: slider7
            },
            {    name: "slider3",
                id: "2",
                img: slider8,
                title: "Депрессия. Торг. Писательство",
                text1: "Самая честная книга о писательстве",
                subscription: "жмак, чтобы купить ДТП",
                dot: slider6,
                dotFull: slider7
            },
            {    name: "slider4",
                id: "3",
                img: slider1,
                title: "Час пробил",
                text1: "Рассказы. Выпуск 7",
                text2: "Художник номера Алексей Муратов",
                subscription: "жмак, чтобы оформить подписку",
                dot: slider6,
                dotFull: slider7
            },
            {
                name: "slider5",
                id: "4",
                img: slider9,
                title: "Почтовая открытка",
                text1: "Иллюстрация к рассказу «Кран»",
                text2: "Автор рассказа Вера Сорока",
                subscription: "жмак, чтобы купить открытку",
                dot: slider6,
                dotFull: slider7

            }],
        Books: [{
            name: "Books",
            id: "0",
            title: "150 моих трупов",
            image: book0,
            price: "10",
            new: "false",
            authors: "Нелл Уайт-Смит",
            description: "Сборник сверхкоротких рассказов в жанре ужасов. Бодрит хлеще, чем черный кофе. Страх — одно из основных человеческих чувств. Он способен вселять как отчаяние, так и хрупкую надежду на спасение. Слишком много кошмаров — сборник, вобравший в себя всевозможные взгляды на жанр хоррор. 49 авторов в 53 рассказах погрузят вас в атмосферу мистического, экзистенциального и бытового ужаса.",
            description2: "Откройте дверь в тёмную вселенную кошмаров.  Но помните: не стоит бояться неизведанного, стоит бояться тех мгновений, которые оно в себе таит.",
            ISBN: "978-5-6047221-3-8",
            pageNum: "313",
            painter: "Обложка  Ян Кельт",
        },
            {
                name: "Books",
                id: "1",
                title: "Странные люди",
                image: book1,
                price: "15",
                new: "false",
                authors: "Нелл Уайт-Смит",
                description: "Эта история произошла в городе Золотые Кроны, где все живые организмы наполовину механоиды, а у каждого уважающего себя любителя чая имеется свой чайный дракончик, без которого чай — не чай, а так. Все начинается с того, что с закрытием одной чайной один чайный дракончик остается без работы.",
                description2: "P.s. Плед усиливает впечатление от книги на 43,26%",
                genre: "",
                ISBN: "978-5-6046114-9-4",
                pageNum: "304",
                painter: "",
                moreInfo: "В каждой книге вкладыш-открытка"
            },
            {
                name: "Books",
                id: "2",
                title: "Самосбор",
                image: book2,
                price: "12",
                new: "false",
                authors: "",
                description: "",
                genre: "",
                ISBN: "",
                pageNum: "",
                painter: ""
            },
            {
                name: "Books",
                id: "3",
                title: "Иная свобода",
                image: book3,
                // smallImg1: smallImage,
                price: "12",
                new: "false",
                authors: "",
                description: "",
                genre: "",
                ISBN: "",
                pageNum: "",
                painter: ""
            }],

        Magazines: [{
            name: "Magazines",
            id: "10",
            title: "Обратная сторона",
            image: magazine1,
            price: "10",
            new: "false",
            authors: "",
            description: "",
            genre: "",
            issue: "1",
            pageNum: "",
            painter: "",
            year: "2020"
        },
            {
                name: "Magazines",
                id: "11",
                title: "Милая нечисть",
                image: magazine2,
                price: "10",
                new: "false",
                authors: "",
                description: "",
                genre: "",
                issue: "2",
                pageNum: "",
                painter: "",
                year: "2021"
            },
            {
                name: "Magazines",
                id: "12",
                title: "Жнец темных душ",
                image: magazine3,
                price: "10",
                new: "false",
                authors: "",
                description: "",
                genre: "",
                issue: "3",
                pageNum: "",
                painter: "",
                year: "2022"
            },
            {
                name: "Magazines",
                id: "13",
                title: "Ужастики для взрослых",
                image: magazine4,
                price: "10",
                new: "false",
                authors: "",
                description: "",
                genre: "",
                issue: "4",
                pageNum: "",
                painter: "",
                year: "2022"
            }],

        Stuff: [{
                name: "Stuff",
                id: "20",
                title: "Значок 'Drink & write'",
                image: stuff1,
                price: "3",
                new: "false",
                authors: "",
                description: "",
                genre: "",
                issue: "4",
                pageNum: "",
                painter: "",
                year: "2022"
            },
                {
                    name: "Stuff",
                    id: "21",
                    title: "Открытка",
                    image: stuff2,
                    price: "1.99",
                    new: "false",
                    authors: "",
                    description: "",
                    genre: "",
                    issue: "4",
                    pageNum: "",
                    painter: "",
                    year: "2022"
                },
                {
                    name: "Stuff",
                    id: "22",
                    title: "Подарочный набор",
                    image: stuff3,
                    price: "20",
                    new: "false",
                    authors: "",
                    description: "",
                    genre: "",
                    issue: "4",
                    pageNum: "",
                    painter: "",
                    year: "2022"
                },
                {
                    name: "Stuff",
                    id: "23",
                    title: "Подарочный набор",
                    image: stuff4,
                    price: "20",
                    new: "false",
                    authors: "",
                    description: "",
                    genre: "",
                    issue: "4",
                    pageNum: "",
                    painter: "",
                    year: "2022"
                }]
    },
    footer: {
        name: "©2023 by veraSoroka"
    },
    about: {
        paragraph1: "«Крафтовая литература» — небольшое издательство, образованное вокруг литературного журнала «Рассказы».",
        paragraph2: "Мы издаем книги разных жанров и направлений, однако сегодня тяготеем к сюжетам с элементами мистики и фантастики с мощным социальным подтекстом. Динамичное повествование, элементы нереальности происходящего (в самом широком смысле, любой степени мрачности и светлости) и близкие всем нам важные, неловкие, неудобные темы и вопросы.",
        paragraph3: [{
            title: "Издательские проекты:",
            nav1: "литературный журнал «Рассказы»",
            nav2: "серия жизненных смешных рассказов «Юмор лечит»"
        }],
        paragraph4: "Мы ищем авторов!",
        paragraph5: "Романы",
        paragraph6: "Секретное правило для всех, кто желает отправить рукопись в издательство. Прежде чем делать это, ознакомьтесь с книгами, которые выпускает в свет выбранное вами издательство. Это поможет вам сделать правильный выбор, а также правильно расставить акценты в сопроводительном письме и прилагаемом синопсисе. Если вы остановились именно на нашем издательстве, то прислать рукопись можно на адрес редакции: editor@kraftlit.ru",

    }
}







export default data;
