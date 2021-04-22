import React from 'react'
import '../style-website.css';
import { MostItems, MaybeItems, DropBox } from '../../components/drop-box-items/drop-box';



function Shopping() {
    return (
        <main className="website-page">
            <div className="title">
                <h3>سایت فروشگاهی</h3>
            </div>

            <section className="content">

                <DropBox name={"نوع سایت"} delay={.2}>
                    <MostItems>
                        تک فروشندگی
                    </MostItems>
                    <MaybeItems>
                        چند فروشندگی
                    </MaybeItems>
                </DropBox>

                <DropBox name={"صفحه اصلی"} delay={.4}>
                    <MostItems>
                        نمایش محصولات
                    </MostItems>
                    <MostItems>
                        منو
                    </MostItems>
                    <MaybeItems>
                        دسته بندی محصولات
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
                        پیشنهاد شگفت انگیز
                    </MaybeItems>
                    <MaybeItems>
                        جست و جو
                    </MaybeItems>
                    <MaybeItems>
                        پوستر
                    </MaybeItems>
                    <MaybeItems>
                        محصولات پر فروش اخیر
                    </MaybeItems>
                    <MaybeItems>
                        محصولات  پر بازدید اخیر
                    </MaybeItems>
                    <MaybeItems>
                        بازدید های اخیر شما
                    </MaybeItems>
                    <MaybeItems>
                        محصولات تخفیف و حراج
                    </MaybeItems>
                    <MaybeItems>
                        منتخب جدید ترین کالا ها
                    </MaybeItems>
                    <MaybeItems>
                        فیلتر محصولات
                    </MaybeItems>
                    <MaybeItems>
                        فیلتر قیمت
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

                <DropBox name={"صفحه محصولات"} delay={1.2}>
                    <MostItems>
                        قیمت کالا
                    </MostItems>
                    <MostItems>
                        عکس کالا
                    </MostItems>
                    <MostItems>
                        ویژگی های کالا
                    </MostItems>
                    <MostItems>
                        اضافه کردن به سبد خرید
                    </MostItems>
                    <MaybeItems>
                        نظر درباره کالا
                    </MaybeItems>
                    <MaybeItems>
                        امتیاز به کالا
                    </MaybeItems>
                    <MaybeItems>
                        مشخصات کلی کالا
                    </MaybeItems>
                    <MaybeItems>
                        پرسش و پاسخ
                    </MaybeItems>
                    <MaybeItems>
                        افزودن به علاقمندی ها
                    </MaybeItems>
                    <MaybeItems>
                        مقایسه کالا
                    </MaybeItems>
                    <MaybeItems>
                        نمودار قیمت کالا
                    </MaybeItems>
                    <MaybeItems>
                        اطلاع رسانی شکفت انگیز
                    </MaybeItems>
                    <MaybeItems>
                        اشتراک گذاری کالا
                    </MaybeItems>
                    <MaybeItems>
                        محصولات مرتبط
                    </MaybeItems>
                </DropBox>

                <DropBox name={"سبد خرید"} delay={1.4}>
                    <MostItems>
                        حذف کالا
                    </MostItems>
                    <MostItems>
                        مشاهده مشخصات و قیمت محصولات
                    </MostItems>
                    <MostItems>
                        محاسبه قیمت کل
                    </MostItems>
                    <MostItems>
                        افزایش و کاهش محصولات
                    </MostItems>
                    <MaybeItems>
                        ذخیره در لیست بعدی
                    </MaybeItems>
                    <MaybeItems>
                        تخفیف
                    </MaybeItems>
                    <MaybeItems>
                        دریافت تکی یا کلی محصولات
                    </MaybeItems>
                </DropBox>

                <DropBox name={"صفحه ادمین"} delay={1.6}>
                    <MostItems>
                        اضافه کردن محصولات
                    </MostItems>
                    <MostItems>
                        تغییر محصولات
                    </MostItems>
                    <MostItems>
                        حذف محصولات
                    </MostItems>
                    <MostItems>
                        پشتیبانی
                    </MostItems>
                    <MostItems>
                        اضافه کردن دسته بندی
                    </MostItems>
                    <MostItems>
                        تغییر دسته بندی
                    </MostItems>
                    <MostItems>
                        حذف دسته بندی
                    </MostItems>
                    <MostItems>
                        لیست خرید های اخیر
                    </MostItems>
                    <MostItems>
                        لیست کاربران وارد شده
                    </MostItems>
                    <MostItems>
                        محصولات موجود
                    </MostItems>
                    <MostItems>
                        محصولات در حال اتمام
                    </MostItems>
                    <MostItems>
                        محصولات ناموجود
                    </MostItems>
                    <MaybeItems>
                        مشاهده نظرات کاربران
                    </MaybeItems>
                    <MaybeItems>
                        تایید نظرات کاربران
                    </MaybeItems>
                    <MaybeItems>
                        ایجاد تخفیف
                    </MaybeItems>
                    <MaybeItems>
                        ایجاد پیشنهاد شگفت انگیز
                    </MaybeItems>
                    <MaybeItems>
                        اضافه کردن زیر گزوه ادمین
                    </MaybeItems>
                    <MaybeItems>
                        اضافه کردن مشخصات کلی محصولات
                    </MaybeItems>
                    <MaybeItems>
                        نمودار خرید
                    </MaybeItems>
                    <MaybeItems>
                        کیف پول
                    </MaybeItems>
                </DropBox>

                <DropBox name={"صفحه کاربر"} delay={1.8}>
                    <MostItems>
                        سفارش های کاربر
                    </MostItems>
                    <MostItems>
                        اطلاعات شخصی
                    </MostItems>
                    <MostItems>
                        ویرایش اطلاعات شخصی
                    </MostItems>
                    <MostItems>
                        اخرین سفارش ها
                    </MostItems>
                    <MaybeItems>
                        نظرات
                    </MaybeItems>
                    <MaybeItems>
                        پیغام ها
                    </MaybeItems>
                    <MaybeItems>
                        بازدید های اخیر
                    </MaybeItems>
                    <MaybeItems>
                        کیف پول
                    </MaybeItems>
                    <MaybeItems>
                        اطلاعات حساب
                    </MaybeItems>
                    <MaybeItems>
                        نمودار خرید
                    </MaybeItems>
                </DropBox>

            </section>


        </main>
    )
}

export default Shopping
