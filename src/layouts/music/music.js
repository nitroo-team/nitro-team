import React from 'react'
import '../style-website.css';
import { MostItems, MaybeItems, DropBox } from '../../components/drop-box-items/drop-box';


function FilmMusic() {
    return (
        <main className="website-page">
        <div className="title">
            <h3>سایت موزیک</h3>
        </div>

        <section className="content">
            <DropBox name={"صفحه اصلی"} delay={.4}>
                <MostItems>
                    منو
                </MostItems>
                <MaybeItems>
                    سرتیتر سایت (header)
                </MaybeItems>
                <MaybeItems>
                    پاورقی سایت (footer)
                </MaybeItems>
                <MaybeItems>
                    اسلایدر
                </MaybeItems>
                <MaybeItems>
                    جست و جو
                </MaybeItems>
                <MaybeItems>
                    پوستر
                </MaybeItems>
                <MaybeItems>
                   بهترین آهنگ هفته,ماه,سال
                </MaybeItems>
                <MaybeItems>
                    منتخب جدید ترین آهنگ ها
                </MaybeItems>
            </DropBox>

            <DropBox name={"login (ورود)"} delay={.6}>
                <MostItems>
                    ورود با ایمیل و رمز عبور
                </MostItems>
                <MostItems>
                    ورود با شماره تلفن و رمز عبور
                </MostItems>
                <MostItems>
                    ورود با نام کاربری و رمز عبور
                </MostItems>
                <MaybeItems>
                    گوگل ری کپچا
                </MaybeItems>
            </DropBox>

            <DropBox name={"register (ثبت نام)"} delay={.8}>
                <MostItems>
                    رمز عبور
                </MostItems>
                <MostItems>
                    ایمیل
                </MostItems>
                <MostItems>
                    شماره تلفن
                </MostItems>
                <MaybeItems>
                    نام و نام خانوادگی
                </MaybeItems>
                <MaybeItems>
                    کد معرف
                </MaybeItems>
            </DropBox>

            <DropBox name={"فراموشی رمز عبور"} delay={1}>
                <MostItems>
                    وارد کردن ایمیل و ارسال توکن تغیر رمز عبور
                </MostItems>
                <MostItems>
                    وارد کردن شماره تلفن همراه و ارسال توکن تغیر رمز عبور
                </MostItems>

                {/* other */}
                <MaybeItems>
                    وارد کردن ایمیل و ارسال رمز جدید
                </MaybeItems>
                <MaybeItems>
                    وارد کردن شماره تلفن همراه و ارسال رمز جدید
                </MaybeItems>
                <MaybeItems>
                    وارد کردن مشخصات و ارجاع به صفحه تغیر رمز عبور
                </MaybeItems>
            </DropBox>

            <DropBox name={"صفحه دانلود آهنگ "} delay={1.2}>
                <MostItems>
                     پوستر اهنگ
                </MostItems>
                <MostItems>
                    عکس و مشخصات آهنگ
                </MostItems>
                <MostItems>
                    دانلود آهنگ با کیفیت های مختلف
                </MostItems>
                <MaybeItems>
                پخش آنلاین آهنگ کیفیت های مختلف  
                </MaybeItems>
                <MaybeItems>
                آدرس کوتاه پست
                </MaybeItems>
                <MaybeItems>
                کد آنلاین برای وبلاگ ها
                </MaybeItems>
                <MaybeItems>
                    برچسب
                </MaybeItems>
                <MaybeItems>
                    پرسش و پاسخ
                </MaybeItems>
                <MaybeItems>
                    نظر درباره آهنگ
                </MaybeItems>
            </DropBox>
            <DropBox name={"صفحه دانلود موزیک ویدیو"} delay={1.4}>
                <MostItems>
                پوستر موزیک ویدیو
                </MostItems>
                <MostItems>
                دانلود موزیک ویدیو با کیفیت های مختلف
                </MostItems>
                <MaybeItems>
                پخش آنلاین موزیک ویدیو کیفیت های مختلف  
                </MaybeItems>
                <MaybeItems>
                آدرس کوتاه پست
                </MaybeItems>
                <MaybeItems>
                برچسب
                </MaybeItems>
                <MaybeItems>
                پرسش و پاسخ
                </MaybeItems>
                <MaybeItems>
                نظر درباره موزیک ویدیو

                </MaybeItems>
            </DropBox>
            <DropBox name={"صفحه ادمین"} delay={1.6}>
            <MaybeItems>
                        لیست کاربران وارد شده
                </MaybeItems>
                   
                    <MaybeItems>
                        اضافه کردن زیر گزوه ادمین
                </MaybeItems>
                    <MaybeItems>
                        اضافه کردن آهنگ
                    </MaybeItems>
                    <MaybeItems>
                    اضافه کردن متن آهنگ
                    </MaybeItems>
                    <MaybeItems>
                        اضافه کردن پوستر برای آهنگ
                    </MaybeItems>
                    <MaybeItems>
                        مشاهده نظرات کاربران
                    </MaybeItems>
                    <MaybeItems>
                        تایید نظرات کاربران
                    </MaybeItems>
            </DropBox>

            <DropBox name={"صفحه کاربر"} delay={1.8}>
            <MaybeItems>
                        اطلاعات شخصی
                </MaybeItems>
                    <MaybeItems>
                        ویرایش اطلاعات شخصی
                </MaybeItems>
            </DropBox>

        </section>


    </main>
)
}

export default FilmMusic
