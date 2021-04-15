import React from 'react'
import '../style-pages.css';
import vue_poster from '../../images/pages/vue/vue-poster.jpg'
import vue_poster_2 from '../../images/pages/vue/vue-poster-2.png'

function Vue() {
    return (
        <main className="page">
            
            <img className="img-page" src={vue_poster} alt="vue" />
            <div className="title">
                <h3>Vue چیست</h3>
            </div>
            <p className="text-page">
                برنامه‌­نویسان جاوا اسکریپت به منظور کدنویسی کم­‌تر و رسیدن به نتیجه مورد نظر در کوتاه‌­ترین زمان، از فریم‌­ورک‌­های این زبان مانند Vue ، React،  Angular و... استفاده می­‌کنند. هر کدام از این فریم‌­ورک­‌ها شامل کتابخانه­‌های کوچک و بزرگ به همراه قواعد و دستورات خاص خود هستند و برنامه‌­نویسان برای انتخاب هر کدام از آن‌ها دلایل خود را دارند
            </p>
            <br />
            <img className="img-page" src={vue_poster_2} alt="vue" />
            <br />

            <p className="text-page">
                ویو یک فریم‌ورک متن باز زبان javascript است که از آن برای توسعه رابط کاربری استفاده می­‌شود. Vue.js برای اولین بار در دسامبر سال 2013 توسط Evan You، یکی از کارمندان سابق گوگل، به دنیا معرفی شد.
            </p>

            <p className="text-page">
                این فریم ورک در واقع ترکیبی از بهترین خصوصیات دو فریم ورک محبوب جاوا اسکریپتی یعنی angular js و react js است که این عامل یک مزیت مهم برای آن محسوب می‌شود. البته باید به این نکته اشاره کرد که vue js در بسیاری از موارد از دو فریم ورک نام برده شده، کارآمدتر و ساده‌تر است اما گاهی هم vue js دارای پیچیدگی‌های خود خواهد بود.
                یکی از عوامل بسیار مهم در استفاده زیاد از vue js درواقع سهولت در یادگیری آن و سرعت استفاده از آن است. همه ما انسان‌ها هم به نوعی عشق سرعت هستیم و این فاکتور مهم را می‌توان در این فریم ورک پیدا کرد.
            </p>


        </main>
    )
}

export default Vue