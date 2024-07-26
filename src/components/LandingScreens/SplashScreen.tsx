import anime from 'animejs';
import { useEffect } from 'react';

const SplashScreen = ({ finish }) => {
  useEffect(() => {
    const splasher = anime.timeline({
      complete: () => finish('splashed')
    })

    splasher.add({
      targets: '#splash-screen',
      delay: 0,
      duration: 5_000,
      easing: 'easeInOutExpo',
    })
  }, [])

  return (
    <div id='splash-screen' className='w-screen h-screen flex items-center justify-center bg-white'>
      <img src='/intro.gif' alt='' />
    </div>
  )
}

export default SplashScreen;
