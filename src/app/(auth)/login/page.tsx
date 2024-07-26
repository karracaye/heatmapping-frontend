'use client';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginStyles from '@/styles/Login.module.css';
import axiosInstance from '@/lib/axios';

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

  const saveUserInfo = (id) => {
    axiosInstance.get('/users', {
      params: {
        _id: id,
      },
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
  }

  const [ errorMessage, setErrorMessage ] = useState<string>();

  const [ loginData, setLoginData ] = useState({
    username: '',
    password: '',
  })

  const handleLoginData = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setLoginData((prevState) => ({
      ...prevState,
      [ name ]: value,
    }));
  }

  const submitLoginData = () => {
    axiosInstance.post('/login', loginData)
    .then((response) => {
      if (!response.data.error) {
        const token = response.data.token;
        Cookies.set('token', token, { expires: 7, secure: true });
        saveUserInfo(response.data._id);
        router.push('/dashboard');
      }
      else setErrorMessage(response.data.message);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })
  }

  const [ forgotPassword, setForgotPassword ] = useState(false);
  const [ isCover, setIsCover ] = useState(false);
  const [ modal, setModal ] = useState(false);

  const toggleForgotPassword = () => {
    setIsCover(true);
    
    setTimeout(() => {
      setIsCover(false);
      setErrorMessage('');
      setForgotPassword(!forgotPassword);
    }, 750)
  }

  const [ forgotData, setForgotData ] = useState({
    email: '',
  })

  const handleForgotData = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setForgotData((prevState) => ({
      ...prevState,
      [ name ]: value,
    }));
  }

  const submitForgotData = () => {
    axiosInstance.post('/users/forgotPass', forgotData)
    .then((response) => {
      console.log(response.data);
      if (response.data.success) {
        toggleForgotPassword();
        setModal(!modal)
      } else {
        setErrorMessage(response.data.message);
      }
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })
  }

  return (
    <>
      <div className='w-screen h-screen relative flex justify-center bg-white overflow-hidden px-[6%] py-[4%]'>
        <div className={`${LoginStyles.container} ${isCover ? LoginStyles.cover: ''} ${!forgotPassword ? LoginStyles.wipe_left: LoginStyles.wipe_right}`}>
          <img src='/images/heatmapping-tracker-system-left.png' alt=''
            className='min-w-fit h-full absolute left-0 -translate-x-full'
          />
  
          <img src='/images/heatmapping-tracker-system-right.png' alt=''
            className='min-w-fit h-full absolute right-0 translate-x-full'
            />
        </div>
  
        <div className='w-full h-full flex items-center justify-center rounded-[20px] border-2 border-gray-100 shadow-[0_0_2px_2px_rgba(0,0,0,0.01)]'>
          <div className={`${!forgotPassword ? 'translate-x-1/2': '-translate-x-1/2'} w-[32.5%] h-full flex flex-col items-center justify-center`}>
            <img src='/logos/intelliseven-logo.svg' alt=''
              className='w-[30%]'
            />
            
            {
              !forgotPassword ? (
                <>
                  <p className='font-semibold text-3xl'>Login</p>
                  <p className='font-normal text-base text-gray-500 text-center'>Hello, Welcome back!</p>
                </>
              ): (
                <>
                  <p className='font-semibold text-3xl'>Forgot Password?</p>
                  <p className='font-normal text-base text-gray-500 text-center'>
                    No worries, it happens. Enter your email<br />address to reset it.
                  </p>
                </>
              )
            }
  
            <div className='w-full my-6 flex flex-col items-center gap-2'>
              <p className='h-5 font-normal text-xs text-guardsman-red'>
                {
                  errorMessage
                }
              </p>
  
              {
                !forgotPassword ? (
                  <>
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
                  </>
                ): (
                  <>
                    <div className='w-3/4 relative flex items-center'>
                      <img src='/icons/at.svg' alt='' 
                        className='w-9 absolute opacity-30 px-2 border-r-2 border-gray-500'
                      />
                      <input type='text' placeholder='email'
                        className='w-full h-9 border border-gray-400 rounded-[10px] text-sm font-normal pl-10 pr-2'
                        name='email'
                        value={ forgotData.email }
                        onChange={ handleForgotData }
                      />
                    </div>
                  </>
                )
              }
            </div>
  
            {
              !forgotPassword ? (
                <>
                  <button onClick={ submitLoginData }
                    className='h-9 w-3/4 bg-guardsman-red font-semibold text-md text-white rounded-[10px]'
                  >
                    Log in
                  </button>
                  
                  <div className='w-3/4 flex justify-end'>
                    <button onClick={toggleForgotPassword}
                      className='font-normal text-xs text-right text-gray-400 my-2'
                    >
                      Forgot Password?
                    </button>
                  </div>
                </>
              ): (
                <div className='w-3/4 flex flex-col gap-2'>
                  <button onClick={ submitForgotData }
                    className='h-9 w-full bg-guardsman-red font-semibold text-md text-white rounded-[10px]'
                  >
                    Confirm
                  </button>
                  <button onClick={toggleForgotPassword}
                    className='h-9 w-full bg-[#F2F2F2] font-semibold text-md rounded-[10px]'
                  >
                    Cancel
                  </button>
                </div>
              )
            }
          </div>
        </div>
      </div>

      {
        modal ? (
          <div className='w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.2)] z-50'>
            <div className='w-[420px] h-[290px] flex flex-col items-center justify-center bg-white rounded-[10px] shadow-[0_2px_2px_2px_rgba(0,0,0,0.05)]'>
              <div className='rounded-full p-4 m-2 border-2 border-[#CF0000]'>
                <img src='/icons/open-envelope.svg' alt="" 
                  className='h-full w-[50px] object-cover translate-y-[-2px]'
                />
              </div>
              <p className='text-center font-medium'>Your password has been sent to your<br />email. Please check your inbox.</p>
              <button onClick={() => setModal(!modal)}
                className="w-[100px] font-medium text-lg text-white bg-guardsman-red rounded-[10px] py-4 mt-6 mb-4"
              >
                Okay
              </button>
            </div>
          </div>
        ): ''
      }
    </>
  );
}

export default Login;
