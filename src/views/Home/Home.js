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
    </main>
  );
}
