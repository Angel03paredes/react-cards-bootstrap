import Card from "./Card";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";

const cards = [
    {
        id:1,
        title:'Page 1',
        image: img1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore natus pariatur qui, nesciunt esse, assumenda numquam error quis suscipit perferendis maxime odio quia. Suscipit laboriosam sequi sunt incidunt eligendi?'
    },
    {
        id:2,
        title:'Page 2',
        image: img2,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore natus pariatur qui, nesciunt esse, assumenda numquam error quis suscipit perferendis maxime odio quia. Suscipit laboriosam sequi sunt incidunt eligendi?'
    },
    {
        id:3,
        title:'Page 3',
        image: img3,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quae, molestias natus distinctio, odio quis error ducimus quam modi omnis consectetur dolor beatae itaque ratione dolorem perferendis libero voluptate suscipit nemo iure ea et! Rem numquam iusto sequi velit minima.'
    }
]

const Cards = () => {
  return (
    <div className="container d-flex justify-content-center h-100 align-items-center">
      <div className="row">
        {
            cards.map(card=>(
                <div className="col-lg-4" key={card.id}>
                <Card card={card} ></Card>
              </div>
            ))
        }
       
      </div>
    </div>
  );
};

export default Cards;
