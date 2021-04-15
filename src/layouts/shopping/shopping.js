import React from 'react'
import '../style-website.css';
import { MostItems, MaybeItems, DropBox } from '../../components/drop-box-items/drop-box';



function Shopping() {
    return (
        <main className="website-page">
            <div className="title">
                <h3>سایت فروشگاهی</h3>
            </div>

            <section className="most">
                {/* TODO */}
                <DropBox name={"ادمین"} delay={0}>
                    <MostItems delay={0} >
                        ورود
                    </MostItems>
                </DropBox>
            </section>

            <span className='line'></span>
            <div className="title">
                <h3>قابلیت های بیشتر</h3>
            </div>

            <section className="maybe">
                {/* TODO */}
                <DropBox name="پست" delay={.2}>
                    <MaybeItems delay={.2}>
                        ارسال
                    </MaybeItems>
                </DropBox>
            </section>

        </main>
    )
}

export default Shopping
