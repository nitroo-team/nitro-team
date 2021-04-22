import React from 'react'
import { MostItems, MaybeItems, DropBox } from '../../components/drop-box-items/drop-box';
function film() {
    return (
        <main className="website-page">
              <div className="title">
            <h3>سایت فیلم </h3>
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
                    دسته بندی فیلم ها
                </MaybeItems>
                <MaybeItems>
                    بارگذاری ویدیو
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

            <DropBox name={"  صفحه دانلود فیلم "} delay={1.2}>
                <MostItems>
                     استریم ویدیو
                </MostItems>
                <MostItems>
                    دانلود ویدیو
                </MostItems>
                <MostItems>
                    آمار بازدید ویدیو
                </MostItems>
                <MaybeItems>
                     لایک کردن ویدیو 
                </MaybeItems>
                <MaybeItems>
                    اشتراک گذاری ویدیو
                </MaybeItems>
                <MaybeItems>
                    مشخصات ویدیو
                </MaybeItems>
                <MaybeItems>
                    نظرات کاربران
                </MaybeItems>
                <MaybeItems>
                     ویدیو های مشابه 
                </MaybeItems>
            </DropBox>
            
            <DropBox name={"صفحه ادمین"} delay={1.4}>
            <MaybeItems>
                        لیست کاربران وارد شده
                </MaybeItems>
                   
                    <MaybeItems>
                        اضافه کردن زیر گروه ادمین
                </MaybeItems>
                    <MaybeItems>
                        کیف پول
                    </MaybeItems>
                    <MaybeItems>
                        اضافه کردن ویدیو
                    </MaybeItems>
                    <MaybeItems>
                        اضافه کردن دسته بندی ویدیو
                    </MaybeItems>
                    <MaybeItems>
                        مشاهده نظرات کاربران
                    </MaybeItems>
                    <MaybeItems>
                        تایید نظرات کاربران
                    </MaybeItems>
                    <MaybeItems>
                        مسدود کردن کاربر متخلف
                    </MaybeItems>
                    <MaybeItems>
                        اضافه کردن کاربر
                    </MaybeItems>
                    <MaybeItems>
                        ایجاد پوستر تبلیغ
                    </MaybeItems>
                    <MaybeItems>
                        ایجاد کد تخفیف
                    </MaybeItems>
                    

            </DropBox>

            <DropBox name={"صفحه کاربر"} delay={1.6}>
            <MaybeItems>
                        اطلاعات شخصی
                </MaybeItems>
                    <MaybeItems>
                        ویرایش اطلاعات شخصی
                </MaybeItems>
                <MaybeItems>
                    گذاشتن و تغییر عکس  پروفایل
                </MaybeItems>
                <MaybeItems>
                    ویدیو های من
                </MaybeItems>
                <MaybeItems>
                    دیدگاه های من
                </MaybeItems>
                <MaybeItems>
                    پخش زنده
                </MaybeItems>
                <MaybeItems>
                    کانال های دنبال شده
                </MaybeItems>
                <MaybeItems>
                    آمار بازدید
                </MaybeItems>
                <MaybeItems>
                    داشبورد
                </MaybeItems>
            </DropBox>

        </section>
        </main>
    )
}

export default film
