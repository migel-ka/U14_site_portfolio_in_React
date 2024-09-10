import style from "./style.module.css";

const BtnNav = ()=> {
    return (
        <div className={style.bord}>
            <button className={style.btnNav}>
                &gt;
            </button>
            <button className={style.btnNav}>
                &lt;
            </button>
        </div>

    );
}

export default BtnNav;