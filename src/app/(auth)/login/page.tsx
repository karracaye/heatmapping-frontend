'use client';
import React from 'react';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from '@/lib/axios';

function Login() {
  const router = useRouter();

  const [ db, setDb ] = useState<any>();

  useEffect(() => {
    const request = indexedDB.open('heatmap_db', 1);

    request.onsuccess = () => {
      const database = request.result;
      setDb(database);
    }

    // request.onerror = (event) => {
    //   console.error(event.target.error);
    // }

    request.onupgradeneeded = () => {
      const database = request.result;
      let objectStore = database.createObjectStore('user', {
          keyPath: '_id',
          autoIncrement: true,
      })
      
      objectStore.createIndex('username', 'username', { unique: false });
      objectStore.createIndex('name', 'name', { unique: false });
      objectStore.createIndex('email', 'email', { unique: false });
      objectStore.createIndex('role', 'role', { unique: false });
    }
  }, [])

  const [ loginData, setLoginData ] = useState({
    username: '',
    password: '',
  })

  const [ loginError, setLoginError ] = useState();

  const handleLoginData = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setLoginData((prevState) => ({
      ...prevState,
      [ name ]: value,
    }));
  }

  const submitLoginData = () => {
    axios.instance.post('/login', {
      username: loginData.username,
      password: loginData.password,
    })
    .then((response) => {
      if (!response.data.error) {
        const token = response.data.token;
        Cookies.set('token', token, { expires: 7, secure: true });

        axios.instance.get('/users', {
          params: {
            _id: response.data._id,
          },
          headers: axios.authorization.headers,
        })
        .then((response) => {
          response.data.result.map((item) => {
            const transaction = db.transaction(['user'], 'readwrite');
            const store = transaction.objectStore('user');
            const request = store.add({
              username: item.username,
              name: item.firstname + ' ' + item.lastname,
              email: item.email,
              role: item.roleID.role_type,
            })

            request.onsuccess = () => {
              console.log('Data successfully added to IndexedDB!');
            }

            request.onerror = (event) => {
              console.error(event.target.error);
            }
          })
        })
        router.push('/dashboard');
      }
      setLoginError(response.data.error);
    })
  }

  return (
    <div className='w-screen h-screen px-[6%] py-[4%]'>
      <img src='/images/heatmapping-tracker-system.svg' alt=''
        className='h-full absolute top-0 left-0'
      />

      <div className='w-full h-full flex items-center justify-center rounded-[20px] border-2 border-gray-100 shadow-[0_0_2px_2px_rgba(0,0,0,0.01)]'>
        <div className='w-[32.5%] h-full flex flex-col items-center justify-center translate-x-1/2'>
          <img src='/logos/intelliseven-logo.svg' alt='' 
            className='w-[30%]'
          />
          <p className='font-semibold text-3xl'>Login</p>
          <p className='font-normal text-lg text-gray-500'>Hello, Welcome back!</p>

          <div className='w-full my-6 flex flex-col items-center gap-2'>
            <p className='h-5 font-normal text-xs text-guardsman-red'>
              {
                loginError
              }
            </p>

            <div className='w-3/4 relative flex items-center'>
              <img src='/icons/at.svg' alt='' 
                className='w-9 absolute opacity-30 px-2 border-r-2 border-gray-500'
              />
              <input type='text' placeholder='username'
                className='w-full h-9 border border-gray-400 rounded-[10px] text-sm font-normal pl-10 pr-2'
                name='username'
                value={ loginData.username }
                onChange={ handleLoginData }
              />
            </div>

            <div className='w-3/4 relative flex items-center'>
              <img src='/icons/padlock.svg' alt='' 
                className='w-9 absolute opacity-30 px-2 border-r-2 border-gray-500'
              />
              <input type='password' placeholder='password'
                className='w-full h-9 border border-gray-400 rounded-[10px] text-sm font-normal pl-10 pr-2'
                name='password'
                value={ loginData.password }
                onChange={ handleLoginData }
              />
            </div>
          </div>

          <button onClick={ submitLoginData }
            className='h-9 w-3/4 bg-guardsman-red font-semibold text-md text-white rounded-[10px]'
          >
            Log in
          </button>
          
          <div className='w-3/4 flex justify-end'>
            <button
              className='font-normal text-xs text-right text-gray-400 my-2'
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
