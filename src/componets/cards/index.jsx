import style from "./style.module.css";
import Card from "..//..//componets/Card/index";
import BtnNav from "..//..//componets/btnNav/index";

const MockComment = [
    {
        id:1,
        name:"Emily Johnson",
        location:"USA, California",
        text: "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing.",
    },
    {
        id:2,
        name:"John Smith",
        location:"USA, California",
        text: "Damien has an incredible talent for making every event feel effortless, and the results speak for themselves.",
    },
    {
        id:3,
        name:"Samantha Davis",
        location:"USA, California",
        text: "I was blown away by Damien's ability to capture the essence of our wedding day. Hes photographs are our cherished memories.",
    },
];

const Cards = ()=> {
    return (
        <content>
            <div className={style.title}>
               <div className={style.mainTitle}>
                   <div>
                      <h3>Testimonials</h3>
                      <h2>What My Clients Say</h2>
                   </div>
                   <div>
                    <p>
                       Total Reviews
                    </p>
                    <p>
                        323
                    </p>
                   </div>
               </div>
               <div className={style.titleBtn}>
                   <BtnNav />
                   <button className="main-btn btn">
                       View All Testimonials &rarr;
                   </button>
               </div>
            </div>
           
            <div className={style.cards}>
            {
                MockComment.map(comment =>
                    <Card  key={comment.id} comment={comment}/>
                )
            }
            </div>
        </content>
    );
}

export default Cards;