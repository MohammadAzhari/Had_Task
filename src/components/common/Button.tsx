import { ButtonHTMLAttributes } from 'react'

type Props = {
    content: string
    isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ content, isLoading = false , ...buttonProps }: Props) {
    return <button  className={`${isLoading? 'bg-secondary text-black' : 'bg-primary text-white'}  rounded-[10px] shadow w-full py-5`} {...buttonProps}>{isLoading? 'Loading...' : content}</button>
}
