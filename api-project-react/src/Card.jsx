import './App.css';

export default function Card(props) {
    return (
    <div className="card">
      <img src={props.flag} alt={`${props.name} flag`} className="flag" />
      <h2>{props.name}</h2>
      <h4>Capital : {props.capital}</h4>
    </div>
    );
}