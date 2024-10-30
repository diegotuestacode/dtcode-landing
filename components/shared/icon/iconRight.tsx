import { IconInterface } from "@/interfaces/components.interface"


const IconRigth = ({w=9,h=9,color='#1FC188'}:IconInterface) => {

    return  (
        <svg width={`${w}`} height={`${h}`} viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 13.0487C0 14.1226 1.2649 14.6966 2.0731 13.9894L8.3838 8.46759C9.1806 7.77029 9.1806 6.53079 8.3838 5.83349L2.0731 0.311707C1.2649 -0.395493 0 0.178476 0 1.25243V13.0487Z" fill={`${color}`} />
        </svg>

    )
}

export default IconRigth