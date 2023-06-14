import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 192 40" {...props}>
      <path d="M56.9759 33.153L56.2094 28.7124C56.1436 28.3501 56.3759 28.1699 56.8095 28.1447L65.3963 27.6798V11.6709C65.3963 11.3357 65.6286 11.1536 66.0622 11.1536H72.2526C72.6862 11.1536 72.9185 11.3337 72.9185 11.6709V26.5173C72.9185 31.3202 71.4203 32.1726 65.9964 32.9205C64.3994 33.153 61.4029 33.463 57.7425 33.618C57.3089 33.6431 57.0418 33.463 56.9759 33.153Z" fill="#F556AB"/>
      <path d="M90.7117 35.0498L86.7705 35.4954C86.5344 35.5128 86.3757 35.4024 86.3176 35.1989L85.2529 31.9751C84.6413 32.8837 83.4605 33.1608 82.239 33.1608C81.5499 33.1608 80.3865 33.1608 79.2058 33.124L78.4973 35.2183C78.4179 35.4218 78.2805 35.5147 78.0443 35.4973L74.3394 35.2009C74.0838 35.1834 73.9445 35.0149 74.0238 34.7747C75.4814 29.6773 77.452 24.8415 79.4613 20.0406C79.5406 19.8371 79.6974 19.7441 79.9142 19.7441H85.0574C85.2742 19.7441 85.431 19.8371 85.5104 20.0231C87.5603 24.8221 89.5502 29.4739 91.0078 34.608C91.0872 34.8444 90.9691 35.013 90.7117 35.0498ZM80.3285 29.7315H84.5058L83.0675 25.3568C82.8314 24.6536 82.6533 23.9677 82.5158 23.2625H82.299C82.181 23.9658 82.0222 24.671 81.7861 25.3743L80.3285 29.7315Z" fill="#F556AB"/>
      <path d="M106.676 31.6768C106.552 31.9132 106.379 31.9984 106.108 31.9984H104.407C104.136 31.9984 103.964 31.9132 103.84 31.6768L99.4282 23.6791H99.1824L98.1971 33.2384C98.1719 33.5174 97.9745 33.6665 97.6551 33.6239L92.8487 33.1105C92.5274 33.0679 92.3802 32.8974 92.4306 32.6184L95.2645 16.0437C95.3129 15.7648 95.5103 15.6582 95.8065 15.6582H99.7495C100.021 15.6582 100.193 15.7435 100.317 15.9585L105.123 24.1073H105.394L110.2 15.9585C110.324 15.7454 110.497 15.6582 110.768 15.6582H114.711C115.007 15.6582 115.204 15.7648 115.253 16.0437L118.087 32.6184C118.135 32.8954 117.988 33.0466 117.668 33.0892L112.862 33.6026C112.541 33.6452 112.345 33.5387 112.32 33.2384L111.335 23.6791H111.089L106.676 31.6768Z" fill="#F556AB"/>
      <path d="M131.412 20.3253V22.6347C131.412 22.8284 131.304 22.933 131.102 22.933H125.299V25.6009C125.843 25.5117 126.401 25.4672 126.944 25.4672H130.638C130.839 25.4672 130.948 25.5718 130.948 25.7655V28.0149C130.948 28.2086 130.839 28.3132 130.638 28.3132H125.299V32.2772C125.299 32.4709 125.191 32.5756 124.989 32.5756H122.15C121.948 32.5756 121.84 32.4709 121.84 32.2772V20.3272C121.84 20.1335 121.948 20.0288 122.15 20.0288H131.102C131.304 20.0269 131.412 20.1315 131.412 20.3253Z" fill="#520235"/>
      <path d="M136.114 32.5735H132.841C132.639 32.5735 132.531 32.4689 132.531 32.2752V22.9329C132.531 22.7392 132.639 22.6346 132.841 22.6346H136.098C136.3 22.6346 136.408 22.7392 136.408 22.9329L136.424 32.2752C136.426 32.4689 136.317 32.5735 136.114 32.5735ZM132.732 19.804C132.732 18.8062 133.493 18.1204 134.47 18.1204C135.417 18.1204 136.178 18.8062 136.178 19.804C136.178 20.7882 135.417 21.4585 134.47 21.4585C133.493 21.4585 132.732 20.7882 132.732 19.804Z" fill="#520235"/>
      <path d="M147.597 25.7638V32.2755C147.597 32.4692 147.488 32.5739 147.287 32.5739H144.184C143.983 32.5739 143.874 32.4692 143.874 32.2755V25.7793H141.282V32.2755C141.282 32.4692 141.174 32.5739 140.973 32.5739H137.87C137.668 32.5739 137.56 32.4692 137.56 32.2755V22.9178C137.56 22.724 137.668 22.6194 137.87 22.6194H140.694C140.864 22.6194 140.988 22.693 141.05 22.8577C141.081 22.9468 141.112 23.0359 141.143 23.1406C141.78 22.6795 142.523 22.4102 143.704 22.4102C146.062 22.4121 147.597 23.3808 147.597 25.7638Z" fill="#520235"/>
      <path d="M159.002 25.436V32.2751C159.002 32.4689 158.893 32.5735 158.692 32.5735H154.379C150.655 32.5735 148.731 31.6494 148.731 29.8011C148.731 27.8636 150.717 26.5229 155.372 26.4183V25.3895H154.178L149.616 25.6724C149.414 25.6879 149.29 25.5678 149.29 25.374V23.2739C149.29 23.1092 149.352 22.991 149.507 22.9465C151.075 22.5299 152.517 22.4543 154.534 22.4543C157.016 22.4563 159.002 23.2913 159.002 25.436ZM155.372 30.1905V28.2531C153.557 28.2821 152.331 28.656 152.331 29.3419C152.331 30.0704 153.774 30.1905 155.372 30.1905Z" fill="#520235"/>
      <path d="M170.175 25.7638V32.2755C170.175 32.4692 170.066 32.5739 169.865 32.5739H166.762C166.561 32.5739 166.452 32.4692 166.452 32.2755V25.7793H163.861V32.2755C163.861 32.4692 163.752 32.5739 163.551 32.5739H160.448C160.247 32.5739 160.138 32.4692 160.138 32.2755V22.9178C160.138 22.724 160.247 22.6194 160.448 22.6194H163.272C163.442 22.6194 163.566 22.693 163.628 22.8577C163.659 22.9468 163.69 23.0359 163.721 23.1406C164.358 22.6795 165.101 22.4102 166.282 22.4102C168.64 22.4121 170.175 23.3808 170.175 25.7638Z" fill="#520235"/>
      <path d="M180.014 22.7394V25.1825C180.014 25.3762 179.906 25.4808 179.689 25.4653C179.379 25.4498 178.866 25.4498 178.183 25.4498C176.708 25.4498 174.987 26.0466 174.987 27.6101C174.987 29.129 176.71 29.6657 178.183 29.6657H179.72C179.921 29.6657 180.03 29.7703 180.03 29.964L180.014 32.4071C180.014 32.5854 179.906 32.7055 179.72 32.7191C179.317 32.7191 178.649 32.7191 177.718 32.7191C173.233 32.7191 171.123 30.2159 171.123 27.6236C171.123 25.0159 173.419 22.4236 178.183 22.4236C178.882 22.4236 179.377 22.4236 179.72 22.4236C179.906 22.441 180.014 22.5611 180.014 22.7394Z" fill="#520235"/>
      <path d="M191.654 27.8947C191.623 28.0729 191.499 28.164 191.313 28.164H184.656C184.966 29.2663 186.208 29.6693 188.038 29.6693C188.86 29.6693 189.807 29.6693 190.661 29.5512C190.877 29.5221 191.001 29.6248 191.001 29.8185V32.2616C191.001 32.4398 190.908 32.5445 190.723 32.5735C189.776 32.7227 188.706 32.7227 187.573 32.7227C183.088 32.7227 180.978 30.2196 180.978 27.6273C180.978 25.0195 182.732 22.4272 186.58 22.4272C190.181 22.4272 191.7 24.6766 191.7 26.7477C191.698 27.3134 191.685 27.6273 191.654 27.8947ZM188.611 26.7477C188.673 25.839 187.788 25.2733 186.764 25.2733C185.647 25.2733 184.995 25.9592 184.732 26.7477H188.611Z" fill="#520235"/>
      <path d="M19.3127 40.0001C29.9788 40.0001 38.6253 38.4509 38.6253 36.5398C38.6253 34.6288 29.9788 33.0796 19.3127 33.0796C8.64658 33.0796 0 34.6288 0 36.5398C0 38.4509 8.64658 40.0001 19.3127 40.0001Z" fill="#520235"/>
      <path d="M25.8883 39.6009L24.4423 39.5835L23.0098 39.6009V39.566H22.975V39.5486C17.4563 39.3471 13.4125 38.3571 10.5806 34.7806C7.8551 31.3397 6.65302 26.9999 6.79432 21.1237C6.89885 16.7916 8.37 11.9074 8.99524 10.0165C7.21825 7.63538 7.16018 4.69437 8.86942 1.8173C9.52562 0.712971 10.7277 0.0232491 12.0053 0.0213116C14.1946 0.0174368 19.4017 0.00581226 24.4287 0H24.4539C29.4887 0.00581226 34.69 0.0174368 36.8793 0.0213116C38.1568 0.0251865 39.3589 0.712971 40.0151 1.8173C41.7244 4.69243 41.6663 7.63344 39.8893 10.0165C40.5145 11.9074 41.9857 16.7897 42.0902 21.1237C42.2315 26.9999 41.0294 31.3397 38.304 34.7806C35.4739 38.3551 31.436 39.3451 25.9231 39.5466V39.5641H25.8863L25.8883 39.6009ZM24.4461 2.90613C19.4094 2.91194 14.2004 2.92357 12.0092 2.92744C11.744 2.92744 11.502 3.06887 11.3607 3.3033C10.1392 5.35697 10.2496 7.18008 11.6898 8.72033L12.2976 9.37131L11.9937 10.2102C11.9724 10.2703 9.81211 16.2801 9.69403 21.1915C9.57015 26.3509 10.5728 30.094 12.8531 32.973C14.9185 35.5807 18.0583 36.5843 24.4403 36.6734C30.8224 36.5843 33.9641 35.5788 36.0275 32.973C38.3078 30.094 39.3105 26.3509 39.1866 21.1915C39.0686 16.2801 36.9083 10.2683 36.887 10.2083L36.5831 9.37131L37.1909 8.72033C38.6311 7.18008 38.7414 5.35697 37.52 3.3033C37.3806 3.06887 37.1387 2.92744 36.8715 2.92744C34.6803 2.92357 29.4713 2.91194 24.4461 2.90613Z" fill="#F556AB"/>
      <path d="M26.9704 14.7303C26.9704 14.7303 27.3536 11.1306 29.723 10.8322C32.0923 10.5339 34.6068 12.5178 35.9366 14.3544C37.2665 16.1911 38.9873 20.0524 38.6718 21.6527C38.3563 23.253 36.0315 24.9735 33.8751 25.4559C31.7187 25.9383 29.3939 26.6396 27.7079 25.0413C26.0219 23.4429 26.5581 16.6445 26.9704 14.7303Z" fill="#F556AB"/>
      <path d="M36.4772 21.9575C36.9027 21.9575 37.2476 21.6122 37.2476 21.1864C37.2476 20.7605 36.9027 20.4153 36.4772 20.4153C36.0517 20.4153 35.7068 20.7605 35.7068 21.1864C35.7068 21.6122 36.0517 21.9575 36.4772 21.9575Z" fill="white"/>
      <path d="M36.4767 22.0538C35.9986 22.0538 35.6095 21.6644 35.6095 21.1858C35.6095 20.7073 35.9986 20.3179 36.4767 20.3179C36.9548 20.3179 37.3439 20.7073 37.3439 21.1858C37.3439 21.6644 36.9548 22.0538 36.4767 22.0538ZM36.4767 20.5097C36.105 20.5097 35.8031 20.8119 35.8031 21.1839C35.8031 21.5559 36.105 21.8581 36.4767 21.8581C36.8484 21.8581 37.1503 21.5559 37.1503 21.1839C37.1503 20.8119 36.8484 20.5097 36.4767 20.5097Z" fill="white"/>
      <path d="M34.7737 17.9374C35.1767 17.9374 35.5035 17.6104 35.5035 17.207C35.5035 16.8036 35.1767 16.4766 34.7737 16.4766C34.3707 16.4766 34.0439 16.8036 34.0439 17.207C34.0439 17.6104 34.3707 17.9374 34.7737 17.9374Z" fill="white"/>
      <path d="M34.7732 18.0337C34.3164 18.0337 33.9467 17.6617 33.9467 17.2064C33.9467 16.7492 34.3183 16.3792 34.7732 16.3792C35.2281 16.3792 35.5998 16.7511 35.5998 17.2064C35.5998 17.6617 35.2281 18.0337 34.7732 18.0337ZM34.7732 16.571C34.4248 16.571 34.1402 16.8558 34.1402 17.2045C34.1402 17.5532 34.4248 17.838 34.7732 17.838C35.1216 17.838 35.4062 17.5532 35.4062 17.2045C35.4062 16.8558 35.1216 16.571 34.7732 16.571Z" fill="white"/>
      <path d="M31.2429 14.607C31.6909 14.607 32.054 14.2435 32.054 13.7952C32.054 13.3468 31.6909 12.9834 31.2429 12.9834C30.795 12.9834 30.4319 13.3468 30.4319 13.7952C30.4319 14.2435 30.795 14.607 31.2429 14.607Z" fill="white"/>
      <path d="M31.2424 14.7033C30.7411 14.7033 30.3346 14.2945 30.3346 13.7946C30.3346 13.2948 30.7411 12.886 31.2424 12.886C31.7438 12.886 32.1503 13.2928 32.1503 13.7946C32.1503 14.2964 31.7438 14.7033 31.2424 14.7033ZM31.2424 13.0797C30.8476 13.0797 30.5282 13.4013 30.5282 13.7946C30.5282 14.1899 30.8495 14.5095 31.2424 14.5095C31.6373 14.5095 31.9567 14.1879 31.9567 13.7946C31.9567 13.3994 31.6373 13.0797 31.2424 13.0797Z" fill="white"/>
      <path d="M30.9178 18.8306C31.3657 18.8306 31.7288 18.4671 31.7288 18.0188C31.7288 17.5705 31.3657 17.207 30.9178 17.207C30.4698 17.207 30.1067 17.5705 30.1067 18.0188C30.1067 18.4671 30.4698 18.8306 30.9178 18.8306Z" fill="white"/>
      <path d="M30.9173 18.9269C30.4159 18.9269 30.0094 18.5181 30.0094 18.0183C30.0094 17.5184 30.4159 17.1096 30.9173 17.1096C31.4186 17.1096 31.8251 17.5184 31.8251 18.0183C31.8251 18.5181 31.4186 18.9269 30.9173 18.9269ZM30.9173 17.3034C30.5224 17.3034 30.203 17.625 30.203 18.0183C30.203 18.4116 30.5243 18.7332 30.9173 18.7332C31.3121 18.7332 31.6315 18.4116 31.6315 18.0183C31.6315 17.625 31.3121 17.3034 30.9173 17.3034Z" fill="white"/>
      <path d="M19.9423 27.5332C25.0963 27.5332 29.2744 23.3514 29.2744 18.1928C29.2744 13.0343 25.0963 8.85254 19.9423 8.85254C14.7884 8.85254 10.6102 13.0343 10.6102 18.1928C10.6102 23.3514 14.7884 27.5332 19.9423 27.5332Z" fill="#FCA547"/>
      <path d="M19.9418 27.6295C14.7425 27.6295 10.5129 23.3962 10.5129 18.1923C10.5129 12.9884 14.7425 8.75513 19.9418 8.75513C25.1412 8.75513 29.3707 12.9884 29.3707 18.1923C29.3707 23.3962 25.1412 27.6295 19.9418 27.6295ZM19.9418 8.94887C14.8489 8.94887 10.7065 13.095 10.7065 18.1923C10.7065 23.2897 14.8489 27.4357 19.9418 27.4357C25.0347 27.4357 29.1771 23.2897 29.1771 18.1923C29.1771 13.095 25.0347 8.94887 19.9418 8.94887Z" fill="white"/>
      <path d="M19.4501 19.2581C19.4308 21.5927 18.3661 23.9021 16.5833 25.4791C16.4943 25.5566 16.3975 25.638 16.2794 25.6535C16.0684 25.6806 15.8865 25.483 15.8555 25.2815C15.8265 25.0781 15.9078 24.8785 15.9891 24.6887C16.895 22.6079 18.0661 20.6394 19.4501 19.2581Z" fill="white"/>
      <path d="M18.9565 18.6455C17.2937 20.2826 14.9089 21.1622 12.5357 21.015C12.4176 21.0072 12.2918 20.9956 12.197 20.922C12.0286 20.7922 12.0382 20.5229 12.1602 20.3601C12.2821 20.1954 12.4815 20.1121 12.6732 20.0366C14.7831 19.2074 17.0034 18.6436 18.9565 18.6455Z" fill="white"/>
      <path d="M19.0398 17.8631C16.7072 17.8437 14.3999 16.7781 12.8242 14.9957C12.7468 14.9066 12.6655 14.8097 12.65 14.6915C12.6229 14.4804 12.8203 14.2982 13.0216 14.2672C13.2249 14.2382 13.4243 14.3196 13.614 14.4009C15.691 15.3057 17.6596 16.4778 19.0398 17.8631Z" fill="white"/>
      <path d="M19.6514 17.3689C18.0157 15.7028 17.1369 13.3178 17.284 10.9425C17.2917 10.8243 17.3033 10.6984 17.3769 10.6054C17.5066 10.4369 17.7757 10.4465 17.9383 10.5686C18.1028 10.6907 18.186 10.8902 18.2615 11.082C19.09 13.1919 19.6533 15.4141 19.6514 17.3689Z" fill="white"/>
      <path d="M20.4335 17.4524C20.4528 15.1178 21.5175 12.8084 23.2983 11.2313C23.3874 11.1538 23.4842 11.0724 23.6022 11.0569C23.8132 11.0298 23.9952 11.2274 24.0262 11.4289C24.0552 11.6324 23.9739 11.8319 23.8926 12.0218C22.9867 14.1006 21.8156 16.071 20.4335 17.4524Z" fill="white"/>
      <path d="M20.9271 18.0644C22.5899 16.4272 24.9747 15.5476 27.3479 15.6949C27.466 15.7026 27.5918 15.7143 27.6847 15.7879C27.8531 15.9177 27.8434 16.187 27.7215 16.3497C27.5995 16.5144 27.4002 16.5977 27.2085 16.6733C25.1005 17.5025 22.8803 18.0663 20.9271 18.0644Z" fill="white"/>
      <path d="M20.8439 18.8472C23.1764 18.8665 25.4838 19.9321 27.0595 21.7146C27.1369 21.8037 27.2182 21.9005 27.2337 22.0187C27.2608 22.228 27.0633 22.412 26.862 22.4411C26.6588 22.4701 26.4594 22.3888 26.2697 22.3074C24.1907 21.4026 22.224 20.2305 20.8439 18.8472Z" fill="white"/>
      <path d="M20.2322 19.3411C21.8679 21.0072 22.7467 23.3922 22.5996 25.7675C22.5918 25.8857 22.5802 26.0116 22.5067 26.1046C22.377 26.2732 22.1079 26.2635 21.9453 26.1414C21.7808 26.0194 21.6975 25.8198 21.622 25.628C20.7936 23.5181 20.2283 21.2959 20.2322 19.3411Z" fill="white"/>
      <path d="M26.0225 22.7304C26.0225 22.7304 29.1564 20.3106 30.9199 20.3571C32.6833 20.4036 33.5041 21.2638 34.0441 22.0155C34.5842 22.7673 35.7146 24.6485 35.3914 27.6612C35.0681 30.6739 33.4576 34.7831 31.7716 35.3489C30.0856 35.9146 27.3949 35.6162 24.8843 34.0276C22.3737 32.4389 20.7419 31.5767 20.6702 29.3971C20.5986 27.2156 23.5099 24.4703 26.0225 22.7304Z" fill="#F556AB"/>
      <path d="M29.9824 35.7143C28.3448 35.7143 26.4768 35.1505 24.8295 34.1082C24.6534 33.9978 24.483 33.8893 24.3165 33.7847C22.1021 32.3955 20.6406 31.4772 20.5709 29.3983C20.4993 27.2265 23.31 24.4889 25.9619 22.6522C26.1168 22.5341 29.09 20.2595 30.8651 20.2595C30.8825 20.2595 30.9019 20.2595 30.9193 20.2595C32.7098 20.308 33.5693 21.1914 34.119 21.9567C34.903 23.0494 35.7779 24.9287 35.4837 27.6702C35.3211 29.193 34.8333 30.9831 34.1771 32.4595C33.4435 34.1101 32.5995 35.168 31.7981 35.4373C31.2503 35.6233 30.6347 35.7143 29.9824 35.7143ZM30.867 20.4533C29.15 20.4533 26.1129 22.784 26.0819 22.8072L26.078 22.8111C23.4648 24.6187 20.6987 27.2982 20.7684 29.3925C20.8322 31.3687 22.1834 32.2153 24.423 33.6219C24.5895 33.7265 24.7618 33.835 24.9379 33.9455C27.6789 35.6795 30.3173 35.7356 31.742 35.2571C33.3428 34.7204 34.9669 30.7274 35.2959 27.6508C35.5824 24.9713 34.7307 23.1385 33.9661 22.071C33.4105 21.296 32.613 20.4978 30.9173 20.4533C30.8999 20.4533 30.8825 20.4533 30.867 20.4533Z" fill="white"/>
      <path d="M27.7045 25.1558C28.0851 25.1558 28.3936 24.847 28.3936 24.4661C28.3936 24.0852 28.0851 23.7764 27.7045 23.7764C27.3239 23.7764 27.0154 24.0852 27.0154 24.4661C27.0154 24.847 27.3239 25.1558 27.7045 25.1558Z" fill="white"/>
      <path d="M27.704 25.2541C27.2704 25.2541 26.9181 24.9015 26.9181 24.4675C26.9181 24.0335 27.2704 23.6809 27.704 23.6809C28.1376 23.6809 28.4899 24.0335 28.4899 24.4675C28.4899 24.9015 28.1376 25.2541 27.704 25.2541ZM27.704 23.8727C27.3769 23.8727 27.1117 24.1381 27.1117 24.4656C27.1117 24.793 27.3769 25.0584 27.704 25.0584C28.0311 25.0584 28.2963 24.793 28.2963 24.4656C28.2983 24.1381 28.0311 23.8727 27.704 23.8727Z" fill="white"/>
      <path d="M32.0948 27.479C32.5202 27.479 32.8652 27.1337 32.8652 26.7079C32.8652 26.282 32.5202 25.9368 32.0948 25.9368C31.6693 25.9368 31.3243 26.282 31.3243 26.7079C31.3243 27.1337 31.6693 27.479 32.0948 27.479Z" fill="white"/>
      <path d="M32.0943 27.5753C31.6161 27.5753 31.2271 27.1859 31.2271 26.7073C31.2271 26.2288 31.6161 25.8394 32.0943 25.8394C32.5724 25.8394 32.9615 26.2288 32.9615 26.7073C32.9615 27.1859 32.5724 27.5753 32.0943 27.5753ZM32.0943 26.0331C31.7226 26.0331 31.4206 26.3353 31.4206 26.7073C31.4206 27.0793 31.7226 27.3815 32.0943 27.3815C32.4659 27.3815 32.7679 27.0793 32.7679 26.7073C32.7679 26.3353 32.4659 26.0331 32.0943 26.0331Z" fill="white"/>
      <path d="M28.0375 28.535C28.4405 28.535 28.7673 28.208 28.7673 27.8046C28.7673 27.4012 28.4405 27.0742 28.0375 27.0742C27.6345 27.0742 27.3077 27.4012 27.3077 27.8046C27.3077 28.208 27.6345 28.535 28.0375 28.535Z" fill="white"/>
      <path d="M28.037 28.6314C27.5802 28.6314 27.2104 28.2594 27.2104 27.8041C27.2104 27.3469 27.5821 26.9768 28.037 26.9768C28.4938 26.9768 28.8636 27.3488 28.8636 27.8041C28.8636 28.2613 28.4938 28.6314 28.037 28.6314ZM28.037 27.1705C27.6886 27.1705 27.404 27.4553 27.404 27.8041C27.404 28.1528 27.6886 28.4376 28.037 28.4376C28.3854 28.4376 28.67 28.1528 28.67 27.8041C28.67 27.4553 28.3874 27.1705 28.037 27.1705Z" fill="white"/>
      <path d="M31.6089 23.662C32.012 23.662 32.3387 23.335 32.3387 22.9316C32.3387 22.5282 32.012 22.2012 31.6089 22.2012C31.2059 22.2012 30.8792 22.5282 30.8792 22.9316C30.8792 23.335 31.2059 23.662 31.6089 23.662Z" fill="white"/>
      <path d="M31.6084 23.7583C31.1516 23.7583 30.7819 23.3863 30.7819 22.931C30.7819 22.4757 31.1535 22.1038 31.6084 22.1038C32.0633 22.1038 32.435 22.4757 32.435 22.931C32.435 23.3863 32.0633 23.7583 31.6084 23.7583ZM31.6084 22.2975C31.26 22.2975 30.9754 22.5823 30.9754 22.931C30.9754 23.2798 31.26 23.5646 31.6084 23.5646C31.9568 23.5646 32.2414 23.2798 32.2414 22.931C32.2414 22.5823 31.9568 22.2975 31.6084 22.2975Z" fill="white"/>
      <path d="M30.188 33.0024C30.7033 33.0024 31.121 32.5843 31.121 32.0686C31.121 31.5529 30.7033 31.1348 30.188 31.1348C29.6727 31.1348 29.255 31.5529 29.255 32.0686C29.255 32.5843 29.6727 33.0024 30.188 33.0024Z" fill="white"/>
      <path d="M30.1875 33.0988C29.6204 33.0988 29.1577 32.6357 29.1577 32.0681C29.1577 31.5004 29.6204 31.0374 30.1875 31.0374C30.7547 31.0374 31.2173 31.5004 31.2173 32.0681C31.2173 32.6357 30.7547 33.0988 30.1875 33.0988ZM30.1875 31.2311C29.7268 31.2311 29.3513 31.607 29.3513 32.0681C29.3513 32.5292 29.7268 32.905 30.1875 32.905C30.6482 32.905 31.0237 32.5292 31.0237 32.0681C31.0237 31.607 30.6482 31.2311 30.1875 31.2311Z" fill="white"/>
      <path d="M23.8175 28.7788C24.1757 28.7788 24.466 28.4882 24.466 28.1298C24.466 27.7713 24.1757 27.4807 23.8175 27.4807C23.4594 27.4807 23.1691 27.7713 23.1691 28.1298C23.1691 28.4882 23.4594 28.7788 23.8175 28.7788Z" fill="white"/>
      <path d="M23.817 28.8751C23.4067 28.8751 23.0718 28.5399 23.0718 28.1292C23.0718 27.7185 23.4067 27.3833 23.817 27.3833C24.2274 27.3833 24.5623 27.7185 24.5623 28.1292C24.5623 28.5399 24.2293 28.8751 23.817 28.8751ZM23.817 27.5751C23.5131 27.5751 23.2653 27.8231 23.2653 28.1273C23.2653 28.4314 23.5131 28.6794 23.817 28.6794C24.1209 28.6794 24.3687 28.4314 24.3687 28.1273C24.3687 27.8231 24.1229 27.5751 23.817 27.5751Z" fill="white"/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
