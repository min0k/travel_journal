import pic from "./logo.png";

export default function Card() {
  return (
    <div className="card">
      <img src={pic} alt="" width="100px"></img>
      <CardInfo />
    </div>
  );
}

const CardInfo = () => {
  return (
    <div>
      <p>
        📍Japan <span className="grey">View on Google Maps</span>
      </p>
      <h1>Mount Fuji</h1>
      <p>12 Jan, 2021 - 24 Jan, 2021.</p>
      <p>
        Mount Fuji is the tallest mountain in Japan, standing at 3776 feet tall,
        Mount Fuji is the single most popular tourist site in Japan, for both
        Japanese and foreign tourists.
      </p>
    </div>
  );
};
