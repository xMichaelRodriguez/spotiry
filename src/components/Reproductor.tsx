import { useContext, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';

export const Reproductor = () => {
  const audioRef = useRef(new Audio());
  const { songUri } = useContext(AuthContext);
  audioRef.current.src = songUri;
  return <audio ref={audioRef} controls></audio>;
};
