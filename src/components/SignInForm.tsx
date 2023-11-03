import { FormEvent, useState } from 'react'
import Button from './common/Button'
import InputWithLable from './common/InputWithLable'
import AppleIcon from './icons/AppleIcon'
import FacebookIcon from './icons/FacebookIcon'
import GoogleIcon from './icons/GoogleIcon'
import { sleep } from '../utils/helpers'
import { IAuthFormProps } from '../types/auth'

interface UserData {
    username: string
    password: string
}

const emptyUserData = {
    username: '',
    password: '',
}

export default function SignInForm({ toggleFormType }: IAuthFormProps) {
    const [userData, setUserData] = useState(emptyUserData)
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (name: keyof UserData, value: any) => {
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        console.log(userData)
        await sleep(2000)
        setUserData(emptyUserData)
        setIsLoading(false)
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-evenly h-full w-full'>
            <div className='flex justify-between w-full'>
                <div>
                    <p>
                        <span className='text-[21px] font-normal'>Welcome to </span>
                        <span className='text-sky-500 text-[21px] font-semibold'>LOREM</span>
                    </p>
                    <p className=' text-[40px] font-medium'>Sign In</p>
                </div>
                <div className='min-w-[76px]'>
                    <span className='text-neutral-400 text-[13px] font-normal'>No Account?</span>
                    <div>
                        <button type='button' onClick={toggleFormType} className='text-sky-500 text-[13px] font-normal'>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center justify-around'>
                <button
                    type='button'
                    className='w-2/3 h-[55px] bg-indigo-50 hover:bg-white rounded-[9px] flex justify-center items-center'
                >
                    <GoogleIcon w={26} h={26} />{' '}
                    <p className=' text-blue-500 mx-3 text-xs font-normal'>Sign in with Google</p>
                </button>
                <button
                    type='button'
                    className='w-[12%] h-[55px] bg-indigo-50 hover:bg-white rounded-[9px] flex justify-center items-center'
                >
                    <FacebookIcon w={30} h={30} />
                </button>
                <button
                    type='button'
                    className='w-[12%] h-[55px] bg-indigo-50 hover:bg-white rounded-[9px] flex justify-center items-center'
                >
                    <AppleIcon w={30} h={30} />
                </button>
            </div>
            <div className='w-full'>
                <InputWithLable
                    required
                    value={userData.username}
                    onChange={(e) => handleChange('username', e.target.value)}
                    lableText='Enter your username or email address'
                    placeholder='Username or email address'
                    inputStyle='border-sky-300'
                />
            </div>
            <div className='w-full'>
                <InputWithLable
                    required
                    value={userData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    lableText='Enter your Password'
                    type='password'
                    placeholder='Password'
                />
                <a href='#'>
                    <p className='text-blue-500 text-[11xp] mt-2 mr-2 font-normal text-right'>Forgot Password</p>
                </a>
            </div>
            <div className='w-full'>
                <Button isLoading={isLoading} type='submit' content='Sign In' />
            </div>
        </form>
    )
}
