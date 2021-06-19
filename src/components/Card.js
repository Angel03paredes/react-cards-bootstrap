import './Card.css'

const Card = (props) => {
    const card = props.card;
  return (
   
      <div className="card bg-dark  ">
        <div className="card-body text-center">
         <div className="overflow">
         <img src={card.image} alt="" className="card-img-top" />
         </div>
          <div className=" h4 card-title text-light">{card.title ? card.title : "No title"}</div>
          <div className="card-text text-secondary">
           {card.text}
          </div>
            <a href={card.url ? card.url : "#!"} className=" mt-3 btn btn-outline-secondary">
                Go To This Web Site
            </a>
        </div>
      </div>
    
  );
};

export default Card;
