import pic from "./logo.png";

export default function Card(props) {
    console.log(props);
  return (
    <div className="card">
      <img src={pic} alt="" width="100px"></img>
      <div>
        <p>
          📍{props.cardData.location} <span className="grey"><a href={props.cardData.googleMapsUrl}>View on Google maps</a></span>
        </p>
        <h1>{props.cardData.title}</h1>
        <p>{props.cardData.startDate} - {props.cardData.endDate}</p>
        <p>
          {props.cardData.description}
        </p>
      </div>
    </div>
    
  );
}