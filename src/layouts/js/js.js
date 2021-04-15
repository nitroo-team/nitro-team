import React from 'react'
import '../style-pages.css';
import JS_poster from '../../images/pages/js/js-poster.png'
import JS_poster_2 from '../../images/pages/js/js-poster-2.jpg'

function Js() {
    return (
        <main className="page">

            <img className="img-page" src={JS_poster} alt="js" />
            <div className="title">
                <h3>JS چیست</h3>
            </div>
            <p className="text-page">
                JavaScript یا به اختصار JS یکی از محبوبترین زبان‌های برنامه نویسی است. جاوا اسکریپت زبانی سطح بالا، شی‌گرا، داینامیک و تفسیری است که از شیوه‌های مختلف برنامه نویسی پشتیبانی می‌کند. از این زبان می‌توان برای برنامه نویسی سمت سرور (Server Side)، اپلیکیشن‌های موبایل، بازی و اپلیکیشن‌های دسکتاپ استفاده کرد.

                بنابراین می‌توان اینگونه برداشت کرد که زبان برنامه نویسی جاوا اسکریپت ، یک زبان همه فن حریف است.
            </p>
            <br />
            <img className="img-page" src={JS_poster_2} alt="js" />
            <br />
            <p className="text-page">
                JS
                مبتنی بر (Object-based) برای ایجاد تعامل و همکاری بین صفحات وب هم در سمت کاربر و هم در سمت سرور بکار میرود. بدین صورت که در ابتدا HTML ساختار اولیه را تشکیل داده سپس CSS ظاهر صفحات وب راتعیین کرده و در نهایت JS نحوه کارکرد و عملکردی که صفحات وب دارند را کنترل میکند.
            </p>
            <div className="title">
                <h3>JS</h3>
            </div>
            <p className="text-page">
                جاوا اسکریپت زبان قدرتمند و قوی است که بیشتر فریمورک های سمت کاربر و تعدادی از کتابخانه های سمت سرور و فریمورک NODE.JS که برای استفاده جاوا اسکریپت برای سرور است نیز از مشتقات این زبان همه فن حریف می باشند
            </p>

        </main>
    )
}

export default Js;