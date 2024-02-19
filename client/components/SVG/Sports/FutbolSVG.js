import React from 'react'
import { Svg, G, Path, Defs, ClipPath, Rect } from 'react-native-svg'

const FutbolSVG = ({ showColor }) => {
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <G clipPath="url(#clip0_1419_29214)">
        <Path
          d="M14.7845 0.367188C6.6432 0.367188 0.0195312 6.99085 0.0195312 15.1322C0.0195312 23.2735 6.6432 29.8972 14.7845 29.8972C22.9259 29.8972 29.5495 23.2735 29.5495 15.1322C29.5495 6.99085 22.9259 0.367188 14.7845 0.367188ZM24.9355 21.9468H21.7255C21.626 21.9466 21.5284 21.9202 21.4423 21.8704C21.3562 21.8206 21.2847 21.749 21.235 21.6629L20.0893 19.698C20.0139 19.5695 19.9919 19.4165 20.0282 19.2721L21.0831 15.0186C21.1042 14.9329 21.1451 14.8533 21.2024 14.7862C21.2597 14.719 21.3319 14.6661 21.4132 14.6317L23.4079 13.787C23.5053 13.7457 23.6124 13.7324 23.717 13.7487C23.8216 13.765 23.9196 13.8103 23.9999 13.8793L26.955 16.422C27.0279 16.4847 27.0836 16.5649 27.117 16.655C27.1504 16.7452 27.1604 16.8423 27.146 16.9374C26.9012 18.6164 26.3146 20.2274 25.4224 21.6707C25.372 21.7548 25.3007 21.8245 25.2153 21.8729C25.13 21.9213 25.0336 21.9468 24.9355 21.9468ZM6.1612 13.7927L8.1559 14.6374C8.2372 14.6718 8.30937 14.7247 8.36667 14.7918C8.42396 14.859 8.46482 14.9386 8.48598 15.0243L9.54083 19.2777C9.57713 19.4222 9.55521 19.5752 9.47978 19.7037L8.33407 21.6629C8.28434 21.749 8.21285 21.8206 8.12677 21.8704C8.04069 21.9202 7.94303 21.9466 7.84356 21.9468H4.63359C4.53651 21.9469 4.44103 21.922 4.35628 21.8747C4.27152 21.8273 4.20032 21.7591 4.14947 21.6763C3.25728 20.2331 2.67068 18.6221 2.42594 16.943C2.41155 16.848 2.42152 16.7508 2.45492 16.6607C2.48832 16.5706 2.54405 16.4904 2.61689 16.4277L5.57202 13.885C5.65202 13.8165 5.74948 13.7716 5.85353 13.7553C5.95757 13.739 6.0641 13.7519 6.1612 13.7927ZM24.4002 7.59991L23.1175 11.2471C23.0917 11.3217 23.0507 11.39 22.9971 11.4478C22.9434 11.5057 22.8783 11.5517 22.8059 11.5829L20.7062 12.4724C20.6098 12.5131 20.504 12.5265 20.4006 12.5109C20.2971 12.4954 20.1999 12.4516 20.1198 12.3843L16.1262 9.03453C16.0623 8.98173 16.0109 8.91561 15.9753 8.84081C15.9397 8.76601 15.921 8.68434 15.9203 8.60151V6.21782C15.9204 6.12442 15.9434 6.03248 15.9875 5.95014C16.0316 5.8678 16.0953 5.7976 16.173 5.74576L19.2133 3.71984C19.2927 3.66688 19.3841 3.63476 19.4791 3.62644C19.5741 3.61813 19.6697 3.63389 19.7571 3.67228C21.5065 4.43528 23.059 5.58696 24.2966 7.03983C24.3617 7.11579 24.4055 7.20759 24.4237 7.30594C24.4419 7.40428 24.4338 7.50569 24.4002 7.59991ZM10.355 3.71984L13.3961 5.74576C13.4737 5.7976 13.5375 5.8678 13.5815 5.95014C13.6256 6.03248 13.6487 6.12442 13.6488 6.21782V8.60151C13.6488 8.68447 13.6306 8.76642 13.5955 8.8416C13.5604 8.91678 13.5093 8.98336 13.4457 9.03666L9.4521 12.3865C9.37195 12.4537 9.27479 12.4975 9.17132 12.5131C9.06786 12.5286 8.96211 12.5153 8.86575 12.4745L6.76316 11.5829C6.69029 11.5521 6.62468 11.5063 6.57053 11.4486C6.51637 11.3909 6.47488 11.3225 6.4487 11.2479L5.16599 7.60062C5.13265 7.50606 5.12495 7.40437 5.14365 7.30587C5.16235 7.20738 5.20679 7.11559 5.27246 7.03983C6.51081 5.5855 8.06458 4.43279 9.81554 3.66944C9.90254 3.63222 9.99747 3.61734 10.0917 3.62614C10.1859 3.63495 10.2764 3.66715 10.355 3.71984ZM11.5838 26.9648L10.1832 23.4375C10.1512 23.3573 10.1379 23.2709 10.1443 23.1848C10.1507 23.0987 10.1766 23.0152 10.2202 22.9406L11.297 21.095C11.3467 21.0088 11.4182 20.9373 11.5043 20.8874C11.5904 20.8376 11.6881 20.8113 11.7875 20.811H17.7815C17.881 20.8113 17.9787 20.8376 18.0648 20.8874C18.1508 20.9373 18.2223 21.0088 18.2721 21.095L19.3496 22.9406C19.3933 23.0151 19.4193 23.0986 19.4258 23.1847C19.4324 23.2708 19.4192 23.3573 19.3872 23.4375L17.9966 26.9634C17.9626 27.0496 17.908 27.1261 17.8376 27.1864C17.7672 27.2466 17.6831 27.2888 17.5927 27.3091C15.7474 27.7326 13.8302 27.7326 11.9849 27.3091C11.8951 27.2885 11.8117 27.2464 11.7418 27.1864C11.672 27.1264 11.6177 27.0504 11.5838 26.9648Z"
          fill={showColor.includes('futbol') ? 'white' : '#B6B6B6'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1419_29214">
          <Rect
            width="29.5302"
            height="29.5302"
            fill="white"
            transform="translate(0.179688 0.472656)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FutbolSVG
