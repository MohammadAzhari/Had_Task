import { useState } from 'react'
import salyImg from '../assets/Saly-1.png'
import UserCard from '../components/UserCard'
import { loginUsers } from '../data/loginUsers'
import constants from '../utils/constants'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'

export default function AuthPage() {
    const [isSignInPage, setIsSignInPage] = useState(true)

    const toggleFormType = () => {
        setIsSignInPage((prev) => !prev)
    }

    return (
        <main>
            {/* blue half */}
            <div className='bg-primary lg:p-10 p-5 text-white overflow-hidden w-full md:h-[458px] md:min-h-[458px] min-h-[100vh]'>
                <p className='text-xl font-semibold'>Your Logo</p>
                <div className='lg:flex pl-[70px] hidden items-center h-full w-1/2'>
                    <div className='mt-5'>
                        <p className='text-[34px] font-semibold'>Sign in to</p>
                        <p className='text-white text-2xl font-normal'>Lorem Ipsum is simply</p>
                        <p className='w-[311px] text-[13px] font-light'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </div>
                    <img className='w-[385px] h-[385px] xl:block hidden' src={salyImg} />
                </div>
            </div>
            {/* white half */}
            <div className='lg:block hidden p-[70px]'>
                <p className='text-black text-base font-normal'>Login as</p>
                <div className='mt-3 flex items-center'>
                    {loginUsers.slice(0, constants.MAXIMUM_DISPLAY_LOGIN_USERS).map((user, i) => (
                        <UserCard key={i} user={user} />
                    ))}
                </div>
            </div>
            {/*  */}
            <div className='absolute lg:w-1/2 flex flex-col items-center w-full right-0 top-[80px] md:bg-transparent bg-primary z-10'>
                <div className='lg:w-4/5 w-[87%] h-[741px] bg-white mb-5 text-black rounded-[40px] shadow px-[5%] py-3'>
                    {isSignInPage ? (
                        <SignInForm toggleFormType={toggleFormType} />
                    ) : (
                        <SignUpForm toggleFormType={toggleFormType} />
                    )}
                </div>
            </div>
        </main>
    )
}
