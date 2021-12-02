import { useState } from 'react';

import Picker from '../../components/Picker/Picker';
import Character from '../../components/Character/Character';

import './Home.css';

export default function Home() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [pants, setPants] = useState('');
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
        }}
      />
    </main>
  );
}
