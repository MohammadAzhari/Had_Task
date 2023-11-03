import { ILoginAccount } from '../types/types'
import CrossIcon from './icons/CrossIcon'

interface IProps {
    user: ILoginAccount
}

export default function UserCard({ user: { name, lastLogin, image } }: IProps) {
    return (
        <div className='w-[145px] flex flex-col mr-4 items-center h-[164px] bg-sky-50 rounded-[9px]'>
            <div className='flex w-full justify-end mt-2 mr-2'>
                <CrossIcon className='cursor-pointer hover:bg-red-400' w={13} h={13} />
            </div>
            <img className='w-[76px] h-[76px] rounded-full' src={image} />
            <p className='text-black text-[15px] font-medium'>{name}</p>
            <p className='text-zinc-400 text-[13px] font-light'>{lastLogin}</p>
        </div>
    )
}
