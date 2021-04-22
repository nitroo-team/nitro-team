import React, { useState } from 'react';
import './home.css';

//components
import Framework from '../../components/framework/framework'
import Website from '../../components/website/website'
import Slider from '../../components/slider/slider'

//images
import header from '../../images/header-img.jpg';
import header_phone from '../../images/header-phone.jpg';
import img_slider_1 from '../../images/example/coffee.PNG';
import img_slider_2 from '../../images/example/example-1.PNG';
import img_slider_3 from '../../images/example/example-2.PNG';
import img_slider_4 from '../../images/example/example-4.PNG';
import img_slider_5 from '../../images/example/example-3.PNG';
import img_slider_6 from '../../images/example/example-5.PNG';
import react_poster from '../../images/framework-poster/react-poster.png'
import go_poster from '../../images/framework-poster/go-poster.png'
import html_css_poster from '../../images/framework-poster/html-css-poster.png'
import js_poster from '../../images/framework-poster/js-poster.png'
import laravel_poster from '../../images/framework-poster/laravel-poster.png'
import vue_poster from '../../images/framework-poster/vue-poster.png'
import shoping_poster from '../../images/website-poster/digikala.PNG'
import personal_poster from '../../images/website-poster/personal-poster.png'
import music_poster from '../../images/website-poster/music.jpg'
import film_poster from '../../images/website-poster/aparat.png'
import social_poster from '../../images/website-poster/social-poster.png'
import many_stuff_poster from '../../images/website-poster/many-stuff-poster.png'
import festival_1 from '../../images/festival/festival-1.png'
import festival_2 from '../../images/festival/festival-2.png'


function Home(props) {

    let [ww, setWw] = useState(window.innerWidth)

    window.onresize = (e) => {
        setWw(e.target.innerWidth)
    }
    return (
        <main className="home">
            <header>
                <img src={((ww) > 600) ? header : header_phone} alt="header-image" />
                <div className="content-header-r">
                    <h2>نیترو تیم</h2>
                    <h3>انجام کلیه ی خدمات  ساخت وبسایت ، سرویس وبسایت ، پیج های اجتماعی و ... </h3>
                </div>
                <div className="content-header-l">
                    <h2>Nitro Team</h2>
                    <h3>Performing all services of website construction, website service, social pages, etc</h3>
                </div>
            </header>

            <div className="title-top title none">
                <h3></h3>
            </div>

            <section className="home-content">


                <div className="title">
                    <h3>تعدادی از نمونه کار های انجام شده</h3>
                </div>
                <Slider content={[
                    { img: img_slider_1, text: "کافیک" },
                    { img: img_slider_2, text: "سیکلت شاپ" },
                    { img: img_slider_3, text: "اذران رنگدانه" },
                    { img: img_slider_5, text: "شرکت مسافربری کوچ" },
                    { img: img_slider_4, text: "گروه اطلاع رسانی دانا" },
                    { img: img_slider_6, text: "سایت یونا" }
                ]} />

                <span className="line"></span>


                <section className="nitro-team">
                    <div className="title">
                        <h3>چرا نیتروتیم</h3>
                    </div>
                    <p>نیترو تیم با تیم مجرب و با انگیزه  در طراحی سایت و ساخت اپلیکیشن، رشد و پیشرفت چشمگیری داشته و این مهم را  مدیون مردم و حس اطمینانشان به نیترو تیم هستیم. در کنار دیگر شرکت های برنامه نویسی ایران  نیترو تیم با طرح ها و  جشنواره های ویژه، نمونه های اماده، قیمت های استثنایی این فرصت را به کارفرما میدهد که با درک شرایط و نتیجه گیری،بهترین تصمیم را بگیرد. در این بین مفتخریم که اعلام نماییم درصد رضایت مشتری از نیتروتیم چیزی بیش از 93 درصد بوده و این باعث افتخار و عزت این تیم میباشد. در حال حاضر چندین پروژه بزرگ و کوچک ساخته شده و رضایت کارفرما و کیفیت بالا نمونه کار تحویل داده شده، مسیر رسیدن به هدف و سهولت کار برای سایرین را فراهم اورده. در اخر نیتروتیم با در نظر گرفتن شرایط فعلی و نیاز کارفرما، با تکیه بر دانش و نتیجه های حاصل از چندین نمونه کار تولید شده،با خلق طرح  ها و جشنواره ها و تخفیف های دوره ای، بهترین و با کیفیت ترین پروژه ها را با نازل ترین قیمت و مناسب ترین زمان ممکن تحویل داده و همواره در تلاش برای بهتر شدن و بالا بردن سطح رضایت مشتری و کارفرما است</p>
                    <br />
                    <div className="title-sub">
                        <h4>برخی از ویژگی های ممتاز شرکت نیتروتیم:</h4>
                    </div>
                    <br />

                    <ul>
                        <li>تضمین و ضمانت 6 ماهه بدون قید و شرط</li>
                        <li>قیمت های استثنایی (15% زیر قیمت طراحی و تولید سایر شرکت ها)</li>
                        <li>تحویل در مدت زمان کوتاه</li>
                        <li>استفاده از بروز ترین متد و روش های روز دنیا</li>
                        <li>استفاده از زبان های بروز و پر کاربرد با قیمت استثنایی</li>
                        <li>تیم جوان و پر تلاش و پشتکار</li>
                    </ul>
                </section>

                <span className="line"></span>

                {/* TODO */}
                <section className="festival">
                    <div className="title">
                        <h3>جشنواره و تخفیف ها</h3>
                    </div>
                    <Slider content={[
                        { img: festival_1 },
                        { img: festival_2 },
                    ]} timer={6} />
                </section>


                <span className="line"></span>

                <section className="framework-part">
                    <div className="title">
                        <h3>اشنایی با زبان های برنامه نویسی</h3>
                    </div>
                    <div className="title-sub">
                        <h4>سمت کاربر:</h4>
                    </div>
                    <section className="framework">
                        <Framework link="/html-css" img={html_css_poster} name="html و css" description="دو فناوری اصلی برای ایجاد صفحات وب هستند. HTML ساختار صفحه، CSS (بصری و شنوایی) طراحی را همراه با گرافیک دارد" delay={0} />
                        <Framework link="/js" img={js_poster} name="جاوا اسکریپت" description="جایی که HTML و CSS ساختار اولیه و ظاهر صفحات وب را تعیین می‌کنند، جاوا اسکریپت نحوه عملکرد صفحات وب را کنترل می‌کند." delay={.2} />
                        <Framework link="/react" img={react_poster} name="ری اکت" description=" کتابخانه متن‌باز جاوااسکریپت برای ساخت رابط‌های کاربری و اجزای(Component) صفحات وب است." delay={.4} />
                        <Framework link="/vue" img={vue_poster} name="ویو" description="ویو یک فریم‌ورک متن باز زبان javascript است که از آن برای توسعه رابط کاربری استفاده می­‌شود." delay={.6} />
                    </section>
                    <div className="title-sub">
                        <h4>سمت سرور:</h4>
                    </div>
                    <section className="framework">
                        <Framework link="/laravel" img={laravel_poster} name="لاراول" description=" لاراول فریم ورکی مبتنی بر معماری MVC است که به صورت رایگان و متن باز ارائه شده است. " delay={.8} />
                        <Framework link="/go" img={go_poster} name="گولنگ (Go)" description="گو یا گولینگ یک زبان برنامه نویسی، که توسط شرکت گوگل عرضه و ارائه شده است." delay={1} />
                    </section>
                </section>

                <span className="line"></span>

                <section className="website-part">
                    <div className="title">
                        <h3>انواع سایت ها و ویژگی ها</h3>
                    </div>
                    <section className="website">
                        <Website link="/shopping-web" img={shoping_poster} name="سایت فروشگاهی" delay={1} />
                        <Website link="/personal-web" img={personal_poster} name="سایت شخصی" delay={1.2} />
                        <Website link="/music-web" img={music_poster} name="سایت موسیقی" delay={1.4} />
                        <Website link="/film-web" img={film_poster} name="سایت فیلم" delay={1.6} />
                        <Website link="/social-web" img={social_poster} name="سایت اجتماعی" delay={1.8} />
                        <Website link="/multipurpose-web" img={many_stuff_poster} name="سایت چند منظوره" delay={2} />
                    </section>
                </section>

                <span className="line"></span>

                {/* TODO */}
                {/* <section className="people-say">
                    <Slider content={[
                        { img: img_slider_1 },
                        { img: img_slider_2 },
                        { img: img_slider_3 },
                        { img: img_slider_5 },
                        { img: img_slider_4 },
                        { img: img_slider_6 }
                    ]} />
                </section> */}
            </section>
        </main >
    )
}

export default Home
