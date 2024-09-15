import style from "./style.module.css";
import Form from "..//Form/index";

const ContInf = ()=> {
    return (
        <content>
            <article>
                <div className={style.contener}>
                    <div className={style.title}>
                        <h4 className={style.titleName}>
                        CONTACT INFORMATION
                        </h4>
                        <p className={style.titleP}>
                        Feel free to reach out to us through various channels. We are available by phone, email, and social media for your convenience.
                        </p>
                    </div>
                    <div className={style.adressblock}>
                        <a className={style.stylea} href="tel:+1-123-456-7890">+1-123-456-7890 ↗</a>
                        <a className={style.stylea} href="mailto:info@damien braunphotography.com">info@damien braunphotography.com ↗</a> 
                    </div>
                </div>
            </article>
            <article>
                <div className={style.contener}>
                    <div className={style.title}>
                        <h4 className={style.titleName}>
                        SEND ME A MESSAGE
                        </h4>
                        <p className={style.titleP}>
                        Have a specific inquiry or message for us? Please use the contact form below, and we'll get back to you promptly.
                        </p>
                    </div>
                    <div>
                        <Form />
                    </div>
                </div>
            </article>
        </content>
       
    );
}

export default ContInf;