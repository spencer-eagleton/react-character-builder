import './Character.css';

export default function Character({ head, middle, pants, text, textList }) {
  return (
    <div className="character">
      <span>{text}</span>

      <img width="100px" src={process.env.PUBLIC_URL + `/assets/${head}.png`} />
      <img width="100px" src={process.env.PUBLIC_URL + `/assets/${middle}.png`} />
      <img width="100px" src={process.env.PUBLIC_URL + `/assets/${pants}.png`} />
      <span className="phrases">{textList}</span>
    </div>
  );
}
