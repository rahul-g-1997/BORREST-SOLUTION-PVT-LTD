import style from "./home.module.css";

export default function Travler() {
  return (
    <section className={style.roadmap}>
      <h1 className={style.roadmapheading}>
        <span className={"material-symbols-outlined"}>route</span>
        <span> ROAD MAP </span>
      </h1>

      <div className={style.roadmap}>
        <div className={style.roadmapitem}>
          <div className="step-description">
            <h3>Registration</h3>
            <p>Sign up or log in to participate in the auction.</p>
          </div>
        </div>

        <div className={style.roadmapitem}>
          <div className="step-description">
            <h3>Item Listing</h3>
            <p>
              Sellers list their items with detailed descriptions and images.
            </p>
          </div>
        </div>

        <div className={style.roadmapitem}>
          <div className="step-description">
            <h3>Bidding</h3>
            <p>
              Buyers place bids on their desired items within the auction
              period.
            </p>
          </div>
        </div>

        <div className={style.roadmapitem}>
          <div className="step-description">
            <h3>Winning Bid</h3>
            <p>Identify the highest bidder and winning bid for each item.</p>
          </div>
        </div>

        <div className={style.roadmapitem}>
          <div className="step-description">
            <h3>Payment</h3>
            <p>Facilitate the payment process for the winning bidders.</p>
          </div>
        </div>

        <div className={style.roadmapitem}>
          <div className="step-description">
            <h3>Delivery</h3>
            <p>Arrange for the delivery or pickup of purchased items.</p>
          </div>
        </div>

        <div className={style.timelinedivider}>
          <div className={style.timelinetraveller}>
            <img src={traveller} style={{ transform: "rotate(270deg)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
