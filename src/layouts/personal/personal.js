import React from 'react'
import '../style-website.css';
import { MostItems, MaybeItems, DropBox } from '../../components/drop-box-items/drop-box';

function Personal() {
    return (
        <main className="website-page">
            <div className="title">
                <h3>سایت شخصی</h3>
            </div>

            <section className="content">
                {/* TODO */}
                {/* continue */}
                <DropBox name={"صفحه اصلی"} delay={.2}>
                    <MaybeItems>
                        منو
                </MaybeItems>
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
                </DropBox>

                <DropBox name={"login (ورود)"} delay={.2}>
                    <MaybeItems>
                        ورود با ایمیل و رمز عبور
                </MaybeItems>
                    <MaybeItems>
                        ورود با شماره تلفن و رمز عبور
                </MaybeItems>
                    <MaybeItems>
                        ورود با نام کاربری و رمز عبور
                </MaybeItems>
                    <MaybeItems>
                        گوگل ری کپچا
                </MaybeItems>
                </DropBox>

                <DropBox name={"register (ثبت نام)"} delay={.2}>
                    <MaybeItems>
                        رمز عبور
                </MaybeItems>
                    <MaybeItems>
                        ایمیل
                </MaybeItems>
                    <MaybeItems>
                        شماره تلفن
                </MaybeItems>
                    <MaybeItems>
                        نام و نام خانوادگی
                </MaybeItems>
                    <MaybeItems>
                        کد معرف
                </MaybeItems>
                </DropBox>

                <DropBox name={"فراموشی رمز عبور"} delay={.2}>
                    <MaybeItems>
                        وارد کردن ایمیل و ارسال توکن تغیر رمز عبور
                </MaybeItems>
                    <MaybeItems>
                        وارد کردن شماره تلفن همراه و ارسال توکن تغیر رمز عبور
                </MaybeItems>

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
                <DropBox name={"صفحه ادمین"} delay={.2}>     
                    <MaybeItems>
                        لیست کاربران وارد شده
                </MaybeItems>
                   
                    <MaybeItems>
                        اضافه کردن زیر گروه ادمین
                </MaybeItems>
                    <MaybeItems>
                        اضافه کردن عکس و فیلم
                    </MaybeItems>
                    <MaybeItems>
                        اضافه کردن متن
                    </MaybeItems>
                </DropBox>

                <DropBox name={"صفحه کاربر"} delay={.2}>
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

export default Personal
