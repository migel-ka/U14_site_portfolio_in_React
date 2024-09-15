import style from "./style.module.css";
import Btn from "../../../componets/btn/index";

const Form = ()=> {
    return (
        <content>
            <div className={style.formblock}>
                <div className={style.form}>
                    <label className={style.label} for="fname">First Name</label> <br />
                    <input className={style.input} id="fname" type="text" placeholder="FIRST NAME"/>
                </div>
                <div className={style.form}>
                    <label className={style.label} for="lname">Last Name</label> <br />
                    <input className={style.input} id="lname" type="text" placeholder="LAST NAME"/>
                </div>
            </div>
            <div className={style.formblock}>
                <div className={style.form}>
                    <label className={style.label} for="email">Email</label> <br />
                    <input className={style.input} id="email" type="email" placeholder="EMAIL ADDRESS"/>
                </div>
                <div className={style.form}>
                    <label className={style.label} for="PhoneN">Phone Numbe</label> <br />
                    <input className={style.input} id="PhoneN" type="phone" placeholder="PHONE NUMBE"/>
                </div>
            </div>
            <div className={style.textarea}>
                <label  className={style.label}>Your Message </label> <br />
                <textarea className={style.input} name="" id="" placeholder="MESSAGE"> </textarea>
            </div>
            <div className={style.send}>
                <h4>SEND MESSAGE</h4>
                <Btn />
            </div>
        </content>
    );
}

export default Form;