'use client'
import { useState } from 'react';
import SplashScreen from '@/components/LandingScreens/SplashScreen';
import LoadingScreen from '@/components/LandingScreens/LoadingScreen';
import Login from './(auth)/login/page';

function Home() {
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
          <Login />
        ): ''
      }
    </>
  )
}

export default Home;