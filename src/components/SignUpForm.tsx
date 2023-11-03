import { FormEvent, useState } from 'react'
import { IAuthFormProps } from '../types/auth'
import Button from './common/Button'
import InputWithLable from './common/InputWithLable'
import { sleep } from '../utils/helpers'

interface UserData {
    username: string
    password: string
    name: string
    number: string
}

const emptyUserData = {
    username: '',
    password: '',
    name: '',
    number: '',
}

export default function SignUpForm({ toggleFormType }: IAuthFormProps) {
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
                    <p className=' text-[40px] font-medium'>Sign up</p>
                </div>
                <div className='min-w-[76px]'>
                    <span className='text-neutral-400 text-[13px] font-normal'>Have an Account?</span>
                    <div>
                        <button onClick={toggleFormType} className='text-sky-500 text-[13px] font-normal'>
                            Sign in
                        </button>
                    </div>
                </div>
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
            <div className='w-full flex justify-between items-center gap-3'>
                <InputWithLable
                    required
                    value={userData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    lableText='User name'
                    placeholder='User name'
                />
                <InputWithLable
                    required
                    value={userData.number}
                    onChange={(e) => handleChange('number', e.target.value)}
                    lableText='Contact Number'
                    placeholder='Contact Number'
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
            </div>
            <div className='w-full'>
                <Button isLoading={isLoading} content='Sign In' />
            </div>
        </form>
    )
}
