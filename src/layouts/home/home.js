import React from 'react';
import './home.css';

//components
import Framework from '../../components/framework/framework'
import Website from '../../components/website/website'

//images
import react_poster from '../../images/framework-poster/react-poster.png'
import go_poster from '../../images/framework-poster/go-poster.png'
import html_css_poster from '../../images/framework-poster/html-css-poster.png'
import js_poster from '../../images/framework-poster/js-poster.png'
import laravel_poster from '../../images/framework-poster/laravel-poster.png'
import vue_poster from '../../images/framework-poster/vue-poster.png'
import shoping_poster from '../../images/website-poster/digikala.PNG'
import personal_poster from '../../images/website-poster/personal-poster.png'
import film_music_poster from '../../images/website-poster/aparat.png'
import social_poster from '../../images/website-poster/social-poster.png'
import many_stuff_poster from '../../images/website-poster/many-stuff-poster.png'
import header from '../../images/header-img.jpg';


function Home(props) {

    return (
        <main className="home">
            <header>
                <img src={header} alt="header-image" />
                <div className="content-header-r">
                    <h2>نیترو تیم</h2>
                    <h3>انجام کلیه ی خدمات  ساخت وبسایت ، سرویس وبسایت ، پیج های اجتماعی و ... </h3>
                </div>
                <div className="content-header-l">
                    <h2>Nitro Team</h2>
                    <h3>Performing all services of website construction, website service, social pages, etc</h3>
                </div>
            </header>

            <section className="home-content">

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

                <span className="line"></span>

                <section className="website-part">
                    <div className="title">
                        <h3>انواع سایت ها و ویژگی ها</h3>
                    </div>
                    <section className="website">
                        <Website link="/" img={shoping_poster} name="سایت فروشگاهی" delay={1} />
                        <Website link="/" img={personal_poster} name="سایت شخصی" delay={1.2} />
                        <Website link="/" img={film_music_poster} name="سایت فیلم و موسیقی" delay={1.4} />
                        <Website link="/" img={social_poster} name="سایت اجتماعی" delay={1.6} />
                        <Website link="/" img={many_stuff_poster} name="سایت چند منظوره" delay={1.8} />
                    </section>
                </section>
            </section>
        </main>
    )
}

export default Home
