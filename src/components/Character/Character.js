import './Character.css';

export default function Character({ head, middle, pants, text, textList }) {
  return (
    <div className="character">
      <img width="100px" src={process.env.PUBLIC_URL + `/assets/${head}.png`} />
      <img width="100px" src={process.env.PUBLIC_URL + `/assets/${middle}.png`} />
      <img width="100px" src={process.env.PUBLIC_URL + `/assets/${pants}.png`} />
      <span>{text}</span>
      <span>{textList}</span>
    </div>
  );
}
