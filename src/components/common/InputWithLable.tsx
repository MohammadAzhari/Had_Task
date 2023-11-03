import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'

type Props = {
    lableText: string
    inputStyle?: string
    type?: HTMLInputTypeAttribute
    value?: any
} & InputHTMLAttributes<HTMLInputElement>

export default function InputWithLable({ lableText, inputStyle = '', type = 'text', value , ...inputProps }: Props) {
    return (
        <div className='w-full'>
            <div>
                <label className='text-black text-base font-normal'>{lableText}</label>
            </div>
            <input
                value={value}
                className={`w-full p-3 focus:outline-none border rounded-lg border-gray-200 mt-2 ${inputStyle}`}
                type={type}
                {...inputProps}
            />
        </div>
    )
}
