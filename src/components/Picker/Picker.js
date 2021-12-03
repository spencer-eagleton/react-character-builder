import './Picker.css';

export default function Picker({
  head,
  setHead,
  middle,
  setMiddle,
  pants,
  setPants,
  text,
  setText,
  setTextList,
  setHeadCount,
}) {
  const handleTextList = () => {
    setTextList((prevState) => [...prevState, text]);
  };
  const handleHead = (e) => {
    setHead(e.target.value);
    setHeadCount((prevState) => prevState + 1);
  };
  return (
    <div className="picker">
      <div className="form-control">
        <label>Head: </label>
        <select value={head} onChange={handleHead}>
          <option value="bird-head">Bird Head</option>
          <option value="dog-head">Dog Head</option>
          <option value="duck-head">Duck Head</option>
          <option value="horse-head">Horse Head</option>
        </select>
      </div>
      <div className="form-control">
        <label>Middle: </label>
        <select value={middle} onChange={(e) => setMiddle(e.target.value)}>
          <option value="blue-middle">Blue Middle</option>
          <option value="dress-middle">Dress Middle</option>
          <option value="pink-middle">Pink Middle</option>
          <option value="red-middle">Red Middle</option>
        </select>
      </div>
      <div className="form-control">
        <label>Pants: </label>
        <select value={pants} onChange={(e) => setPants(e.target.value)}>
          <option value="blue-pants">Blue Pants</option>
          <option value="dog-pants">Dog Pants</option>
          <option value="leg-pants">Leg Pants</option>
          <option value="white-pants">White Pants</option>
        </select>
      </div>
      <div className="form-control">
        <label>Catch Phrase: </label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleTextList}>Submit</button>
      </div>
    </div>
  );
}
