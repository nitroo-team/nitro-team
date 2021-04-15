import React from 'react'
import '../style-pages.css';
import html_poster from '../../images/pages/html-css/html-poster.jpg'
import css_poster from '../../images/pages/html-css/css-poster.png'
import html_css_poster from '../../images/pages/html-css/html-css.png'

function HtmlCss() {
    return (
        <main className="page">
            
            <img className="img-page" src={html_poster} alt="html" />
            <div className="title">
                <h3>HTML چیست</h3>
            </div>
            <p className="text-page">عبارت HTML ( اچ تی ام ال ) مخفف Hyper Text Markup Language به معنی زبان نشانه گذاری فوق متن است. Html زبان استاندارد طراحی صفحات وب است و کليه کدهای صفحه اعم از طرف سرور و طرف مشتری در نهايت به کدهای HTML تبديل شده و توسط مرورگر نمايش داده می شوند.

            به عبارت دیگر مرورگر ها هیچکدام از کدها و کنترل های سمت سرور همچون کدهای asp و php را نمیشناسند و کد قابل فهم برای آنها اچ تی ام ال می باشد.

            کامپایلر های زبان های برنامه نویسی سروری در نهایت کد های خود را برای نمایش به کد اچ تی ام ال تبدیل میکنند و برای مرورگر میفرستند تا به کاربران نمایش داده شود
            </p>

            <span className="line"></span>
            <img className="img-page" src={css_poster} alt="css" />
            <div className="title">
                <h3>CSS چیست</h3>
            </div>
            <p className="text-page">
                کدهای CSS دستوراتی هستن که توسط اون‌ها می‌تونیم تمامی خصوصیات ظاهری صفحه وب‌سایت رو تعیین کنیم. بنابراین شما توسط کدهای HTML، اسکلت صفحه وب سایت خودتون رو پیاده سازی می‌کنین و با کدهای CSS مشخص می‌کنین هر عنصر چه خصوصیات ظاهری‌ای باید داشته باشه. به اصطلاحی رنگش می‌کنید و کلی ویژگی دیگه بهش اضافه می‌کنید!
            </p>

            <span className="line"></span>
            <img className="img-page" src={html_css_poster} alt="html-css" />
            <div className="title">
                <h3>CSS و HTMl</h3>
            </div>
            <p className="text-page">
                در بالا توضیحات مختصری برای اشنایی شما با زبان های تحت وب HTMLو CSS نوشته شده است و میتوان نتیجه گرفت که حاصل زبان های تحت وب در نهایت به زیان HTML ختم میشود و CSS برای استایل دهی به کار میرود.
                نوشتن HTMLبرای ایجاد صفحات وب کاری است که در حال منسوخ شدن است و بیشتر برای تسریع کردن این عمل و مدرنیت کردن ان از فریمورک های مربوط مانند React یا Vue استفاده میشود
                برای صهولت در نوشتن   CSS  از فریمورک های مربوطه مانند SCSS استفاده میکنند
                <br/>  
                HTML و CSS پایه ترین حالت ممکن برای ایجاد صفحات وب هستند
            </p>
        </main>
    )
}

export default HtmlCss
