import React from 'react';
import './home.css';
import Slider from '../../components/slider/slider'
import Framework from '../../components/framework/framework'
import react_poster from '../../images/framework-poster/react-poster.png'
import go_poster from '../../images/framework-poster/go-poster.png'
import html_css_poster from '../../images/framework-poster/html-css-poster.png'
import js_poster from '../../images/framework-poster/js-poster.png'
import laravel_poster from '../../images/framework-poster/laravel-poster.png'
import vue_poster from '../../images/framework-poster/vue-poster.png'


function Home(props) {

    return (
        <main className="home">
            <section className="home-content">
                <Slider />
                <span className="line"></span>
                <section className="framework-part">
                    <div className="title">
                        <h3>اشنایی با زبان های برنامه نویسی</h3>
                    </div>
                    <div className="title-sub">
                        <h4>سمت کاربر:</h4>
                    </div>
                    <section className="framework">

                        <Framework link="/" img={html_css_poster} name="html و css" description="دو فناوری اصلی برای ایجاد صفحات وب هستند. HTML ساختار صفحه، CSS (بصری و شنوایی) طراحی را همراه با گرافیک دارد" delay={0} />
                        <Framework link="/" img={js_poster} name="جاوا اسکریپت" description="جایی که HTML و CSS ساختار اولیه و ظاهر صفحات وب را تعیین می‌کنند، جاوا اسکریپت نحوه عملکرد صفحات وب را کنترل می‌کند." delay={.2} />
                        <Framework link="/" img={react_poster} name="ری اکت" description=" کتابخانه متن‌باز جاوااسکریپت برای ساخت رابط‌های کاربری و اجزای(Component) صفحات وب است." delay={.4} />
                        <Framework link="/" img={vue_poster} name="ویو" description="ویو یک فریم‌ورک متن باز زبان javascript است که از آن برای توسعه رابط کاربری استفاده می­‌شود." delay={.6} />
                    </section>
                    <div className="title-sub">
                        <h4>سمت سرور:</h4>
                    </div>
                    <section className="framework">
                        <Framework link="/" img={laravel_poster} name="لاراول" description=" لاراول فریم ورکی مبتنی بر معماری MVC است که به صورت رایگان و متن باز ارائه شده است. " delay={.8} />
                        <Framework link="/" img={go_poster} name="گولنگ (Go)" description="گو یا گولینگ یک زبان برنامه نویسی، که توسط شرکت گوگل عرضه و ارائه شده است." delay={1} />
                    </section>
                </section>
            </section>
        </main>
    )
}

export default Home
