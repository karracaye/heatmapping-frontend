import anime from 'animejs';
import { useEffect } from 'react';
import LoadingStyles from '@/styles/Loading.module.css';

const LoadingScreen = ({ finish }) => {
  useEffect(() => {
    const loader = anime.timeline({
      complete: () => finish('loaded')
    })

    loader.add({
      targets: '#loading-screen',
      delay: 0,
      duration: 10_000,
      easing: 'easeInOutExpo',
    })
  }, [])

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-2">
      <img src="/logos/undraw-world.svg" alt="" 
        className='w-[30%]'
      />

      <div className="w-[30%]">
        <div className={LoadingStyles.point_map}>
          <div className="min-w-5 flex flex-col items-center gap-1 translate-x-[10px]">
            <img src="/icons/point-map.svg" alt="" 
              className="h-5"
            />
            <div className="w-2 h-2 bg-[#FF7373] rounded-full"></div>
          </div>
        </div>
      </div>

      <div className='w-[30%] h-4 rounded-[20px] overflow-hidden bg-[#EDEDED]'>
        <div className={LoadingStyles.loader}>
          <div className={LoadingStyles.render}></div>
        </div>
      </div>

      <p className={LoadingStyles.texter}></p>
    </div>
  )
}

export default LoadingScreen;
