import React from 'react'
import '../style-pages.css';
import Imageone from '../../images/pages/go/20.jpg'
import Imagetwo from '../../images/pages/go/21.png'
import Imagethree from '../../images/pages/go/22.jpg'
import Imagefour from '../../images/pages/go/23.jpg'
import Imagefive from '../../images/pages/go/24.webp'
import Imagesix from '../../images/pages/go/25.jpg'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Go() {
    return (
        <main className="page">
            <img className="img-page" src={Imageone} alt="laravel" />
            <div className="title">
                <h3> Go چیست </h3>
            </div>
            <p className="text-page">
                گو یا گولینگ یک زبان برنامه نویسی، که توسط شرکت گوگل عرضه و ارائه شده است. زبان گولنگ به صورت Open Source منتشر شده تا برنامه نویس ها بتوانند آن را توسعه دهند. با استفاده از زبان برنامه نویسی Go می شود هر نوع نرم افزاری رو پیاده سازی کرد.
            </p>
            <img className="img-page" src={Imagetwo} alt="laravel" />
            <div className="title">
                <h3>چرا Goمحبوب است ؟</h3>
            </div>
            <p className="text-page">
                اگر تاریخ برنامه نویسی رو مورد بررسی قرار دهیم متوجه می شویم زبان های برنامه نویسی که توسط یک برنامه نویس (یا چند برنامه نویس) طراحی شده اند (منظور برنامه نویسانی است که روزی پروژه‌ها و سیستم‌های واقعی مشغول کار بودند) خیلی خیلی کاربردی تر و محبوب تر از زبان هایی هستند که توسط محققان رایانه ها و با نگرش ایده آل گرا به وجود آمده اند.
                </p>
            <img className="img-page" src={Imagethree} alt="laravel" />
            <div className="title">
                <h3>ویژگی های GO</h3>
            </div>
            <p className="text-page">
                سادگی و سهولت استفاده دو ویژگی بارز و متمایز زبان برنامه نویسی گولنگ هستند. زبان گولنگ از نظر ساختاری طراحی ساده‌ای دارد و یادگیری زبان غالبا بسیار نرم و روان صورت می‌گیرد.
                </p>
            <img className="img-page" src={Imagefour} alt="laravel" />
            <div className="title">
                <h3>مزیت های Go</h3>
            </div>
            <p className="text-page">
                <FiberManualRecordIcon />برقراری ارتباط بیشتر با سخت افزار<br />
                <FiberManualRecordIcon />افزایش سرعت در نوشتن و اجرای برنامه ها<br />
                <FiberManualRecordIcon />نوشتن برنامه ها با کیفیت بهتر<br />
                <FiberManualRecordIcon />نزدیک بودن به دو زبان انسان و کامپیوتر<br />
                <FiberManualRecordIcon />ساخت برنامه های اندروید<br />
                <FiberManualRecordIcon />دارای ویژگی های مختصر<br />
                <FiberManualRecordIcon />املای آسان، تمیز و کارآمد<br />
                <FiberManualRecordIcon />دارای مکانیسم های همپوشانی<br />
                <FiberManualRecordIcon />قابلیت کامپایل شدن سریع به زبان ماشین<br />
                <FiberManualRecordIcon />بهینه ترین زبان<br />
            </p>
            <img className="img-page" src={Imagefive} alt="laravel" />
            <div className="title">
                <h3>اهداف Go</h3>
            </div>
            <p className="text-page">
                <FiberManualRecordIcon />کارایی زبان‌های ترجمه‌شده دارای سامانه نوع ایستا<br />
                <FiberManualRecordIcon />آسانی برنامه‌نویسی زبان‌های پویا<br />
                <FiberManualRecordIcon />امنیت نوع‌ها<br />
                <FiberManualRecordIcon />امنیت حافظه<br />
                <FiberManualRecordIcon />پشتیبانی برای همروندی و ارتباط<br />
                <FiberManualRecordIcon />زمان ترجمه کوتاه<br />
            </p>
            <img className="img-page" src={Imagesix} alt="laravel" />
            <div className="title">
                <h3>شرکت هایی که از Go استفاده میکنند :</h3>
            </div>
            <p className="text-page">
                <FiberManualRecordIcon />Google<br />
                <FiberManualRecordIcon />Youtube<br />
                <FiberManualRecordIcon />Twitter<br />
                <FiberManualRecordIcon />Dropbox<br />
                <FiberManualRecordIcon />Mozilla<br />
                <FiberManualRecordIcon />Bitly<br />
            </p>
        </main>
    )
}
export default Go