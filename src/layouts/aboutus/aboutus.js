import React from 'react'
import '../style-pages.css';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import CallIcon from '@material-ui/icons/Call';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
function aboutus() {
    return (
        <main className="page">
            <div className="title">
                <h3> درباره  ما</h3>
            </div>

            <section className="bold-shadow">
                <p className="text-page">
                    نیترو تیم با تیمی مسلط ، مجرب و با انگیزه  با طراحی انواع سایت های اختصاصی و آماده، با پیشرفته ترین زبان های برنامه نویسی دنیا در خدمت شماست <br />
                    طراحی انواع سایت های تخصصی (شرکتی،ورزشی،فروشگاهی و....)با زبان های (laravel,html,css,react js,javascript)<br />
                    سئو و افزایش رتبه در گوگل <br />
                    طراحی وب اپلیکشین مخصوص سیستم عامل  اندروید و وiosبا زبانreact native <br />
                </p>
                <span className="line"></span>
                <div className="title-sub">
                    <h4>ارتباط با ما:</h4>
                </div>
                <p>
                    <LocationCityIcon />
                    اصفهان - خیابان اتشگاه - بعد از چهارراه مظاهری - بعد از بانک سپه - جنب گلخانه ناندینا
                    مجتمع تجاری یونا - طبقه سوم
                    <br />
                    <CallIcon />03137737005
                    <br />
                    <PhoneIphoneIcon />09917858058
                </p>
            </section>
        </main>
    )
}

export default aboutus
