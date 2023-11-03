import { IconProps } from '../../types/types'

export default function FacebookIcon({ w = 20, h = 20, className }: IconProps) {
    return (
        <svg width={w} height={h} className={className} viewBox="0 0 18 18" fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='Facebook'>
                <ellipse id='bg' cx='9' cy='8.27978' rx='7.875' ry='7.875' fill='url(#paint0_linear_34_172)' />
                <path
                    id='f'
                    d='M11.9327 11.4084L12.2825 9.18568H10.0942V7.74393C10.0942 7.13571 10.3993 6.54248 11.3795 6.54248H12.375V4.65018C12.375 4.65018 11.4719 4.5 10.6089 4.5C8.80585 4.5 7.62844 5.56478 7.62844 7.49163V9.18568H5.625V11.4084H7.62844V16.7819C8.03065 16.8435 8.44213 16.875 8.86131 16.875C9.28049 16.875 9.69197 16.8435 10.0942 16.7819V11.4084H11.9327Z'
                    fill='white'
                />
            </g>
            <defs>
                <linearGradient
                    id='paint0_linear_34_172'
                    x1='9'
                    y1='0.404785'
                    x2='9'
                    y2='16.1081'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stop-color='#18ACFE' />
                    <stop offset='1' stop-color='#0163E0' />
                </linearGradient>
            </defs>
        </svg>
    )
}
