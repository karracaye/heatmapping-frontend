'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SplashScreen from '@/components/LandingScreen/SplashScreen';
import LoadingScreen from '@/components/LandingScreen/LoadingScreen';

function Home() {
  const router = useRouter();

  const [ screen, setScreen ] = useState<string>();

  const finish = (newScreen) => {
    setScreen(newScreen);
  }

  return (
    <>
      {
        !screen ? (
          <SplashScreen finish={finish} />
        ): screen === 'splashed' ? (
          <LoadingScreen finish={finish} />
        ): screen === 'loaded' ? (
          router.push('/login')
        ): ''
      }
    </>
  )
}

export default Home;