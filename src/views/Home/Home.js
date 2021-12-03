import { useState } from 'react';

import Picker from '../../components/Picker/Picker';
import Character from '../../components/Character/Character';

import './Home.css';

export default function Home() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [pants, setPants] = useState('');
  const [text, setText] = useState('');
  const [textList, setTextList] = useState([]);
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [pantsCount, setPantsCount] = useState(0);

  return (
    <main>
      <Picker
        {...{
          head,
          setHead,
          middle,
          setMiddle,
          pants,
          setPants,
          text,
          setText,
          textList,
          setTextList,
          headCount,
          setHeadCount,
          middleCount,
          setMiddleCount,
          pantsCount,
          setPantsCount,
        }}
      />
      <Character
        {...{
          head,
          setHead,
          middle,
          setMiddle,
          pants,
          setPants,
          text,
          setText,
          textList,
          setTextList,
        }}
      />
      <p>You have changed the head {headCount} times.</p>
      <p>You have changed the middle {middleCount} times.</p>
      <p>You have changed the pants {pantsCount} times.</p>
    </main>
  );
}
