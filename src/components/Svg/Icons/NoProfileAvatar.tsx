import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#BAA2B1"/>
      <path d="M11.422 18.9999C14.9687 18.9999 17.844 18.4964 17.844 17.8753C17.844 17.2542 14.9687 16.7507 11.422 16.7507C7.87522 16.7507 5 17.2542 5 17.8753C5 18.4964 7.87522 18.9999 11.422 18.9999Z" fill="#6E4560"/>
      <path d="M13.6086 18.8703L13.1277 18.8646L12.6514 18.8703V18.859H12.6398V18.8533C10.8047 18.7878 9.46005 18.466 8.51835 17.3037C7.61205 16.1854 7.21233 14.775 7.25931 12.8652C7.29407 11.4573 7.78327 9.8699 7.99118 9.25535C7.40028 8.4815 7.38097 7.52567 7.94934 6.59062C8.16754 6.23172 8.56727 6.00756 8.9921 6.00693C9.7201 6.00567 11.4516 6.00189 13.1232 6H13.1316C14.8058 6.00189 16.5354 6.00567 17.2634 6.00693C17.6882 6.00819 18.0879 6.23172 18.3061 6.59062C18.8745 7.52504 18.8552 8.48087 18.2643 9.25535C18.4722 9.8699 18.9614 11.4567 18.9961 12.8652C19.0431 14.775 18.6434 16.1854 17.7371 17.3037C16.796 18.4654 15.4533 18.7872 13.6201 18.8527V18.8583H13.6079L13.6086 18.8703ZM13.129 6.94449C11.4542 6.94638 9.72203 6.95016 8.99338 6.95142C8.9052 6.95142 8.82474 6.99738 8.77775 7.07357C8.37159 7.74102 8.40828 8.33353 8.88718 8.83411L9.08929 9.04567L8.98823 9.31832C8.98115 9.33784 8.26281 11.291 8.22354 12.8872C8.18235 14.564 8.51577 15.7805 9.27403 16.7162C9.96083 17.5637 11.0049 17.8899 13.1271 17.9189C15.2493 17.8899 16.294 17.5631 16.9801 16.7162C17.7384 15.7805 18.0718 14.564 18.0306 12.8872C17.9914 11.291 17.273 9.33721 17.2659 9.31769L17.1649 9.04567L17.367 8.83411C17.8459 8.33353 17.8826 7.74102 17.4764 7.07357C17.4301 6.99738 17.3496 6.95142 17.2608 6.95142C16.5321 6.95016 14.8 6.94638 13.129 6.94449Z" fill="#EFD7E7"/>
      <path d="M13.9684 10.7874C13.9684 10.7874 14.0958 9.61745 14.8837 9.52048C15.6716 9.42351 16.5077 10.0683 16.9499 10.6652C17.3921 11.2621 17.9643 12.517 17.8594 13.0371C17.7545 13.5572 16.9814 14.1164 16.2644 14.2732C15.5473 14.43 14.7743 14.6579 14.2136 14.1384C13.653 13.619 13.8313 11.4095 13.9684 10.7874Z" fill="#A77E99"/>
      <path d="M17.1295 13.136C17.271 13.136 17.3857 13.0238 17.3857 12.8854C17.3857 12.747 17.271 12.6348 17.1295 12.6348C16.988 12.6348 16.8733 12.747 16.8733 12.8854C16.8733 13.0238 16.988 13.136 17.1295 13.136Z" fill="white"/>
      <path d="M17.1295 13.1674C16.9705 13.1674 16.8411 13.0409 16.8411 12.8854C16.8411 12.7298 16.9705 12.6033 17.1295 12.6033C17.2885 12.6033 17.4179 12.7298 17.4179 12.8854C17.4179 13.0409 17.2885 13.1674 17.1295 13.1674ZM17.1295 12.6656C17.0059 12.6656 16.9055 12.7638 16.9055 12.8847C16.9055 13.0056 17.0059 13.1039 17.1295 13.1039C17.2531 13.1039 17.3535 13.0056 17.3535 12.8847C17.3535 12.7638 17.2531 12.6656 17.1295 12.6656Z" fill="white"/>
      <path d="M16.563 11.8295C16.697 11.8295 16.8056 11.7232 16.8056 11.5921C16.8056 11.461 16.697 11.3547 16.563 11.3547C16.429 11.3547 16.3203 11.461 16.3203 11.5921C16.3203 11.7232 16.429 11.8295 16.563 11.8295Z" fill="white"/>
      <path d="M16.563 11.861C16.4111 11.861 16.2881 11.7401 16.2881 11.5921C16.2881 11.4435 16.4117 11.3232 16.563 11.3232C16.7143 11.3232 16.8378 11.4441 16.8378 11.5921C16.8378 11.7401 16.7143 11.861 16.563 11.861ZM16.563 11.3856C16.4471 11.3856 16.3525 11.4781 16.3525 11.5915C16.3525 11.7048 16.4471 11.7974 16.563 11.7974C16.6789 11.7974 16.7735 11.7048 16.7735 11.5915C16.7735 11.4781 16.6789 11.3856 16.563 11.3856Z" fill="white"/>
      <path d="M15.389 10.7471C15.5379 10.7471 15.6587 10.629 15.6587 10.4833C15.6587 10.3376 15.5379 10.2195 15.389 10.2195C15.24 10.2195 15.1193 10.3376 15.1193 10.4833C15.1193 10.629 15.24 10.7471 15.389 10.7471Z" fill="white"/>
      <path d="M15.389 10.7786C15.2223 10.7786 15.0871 10.6458 15.0871 10.4833C15.0871 10.3208 15.2223 10.188 15.389 10.188C15.5557 10.188 15.6909 10.3202 15.6909 10.4833C15.6909 10.6464 15.5557 10.7786 15.389 10.7786ZM15.389 10.251C15.2577 10.251 15.1515 10.3555 15.1515 10.4833C15.1515 10.6118 15.2583 10.7156 15.389 10.7156C15.5203 10.7156 15.6265 10.6111 15.6265 10.4833C15.6265 10.3548 15.5203 10.251 15.389 10.251Z" fill="white"/>
      <path d="M15.2809 12.1197C15.4298 12.1197 15.5506 12.0016 15.5506 11.8559C15.5506 11.7102 15.4298 11.592 15.2809 11.592C15.1319 11.592 15.0112 11.7102 15.0112 11.8559C15.0112 12.0016 15.1319 12.1197 15.2809 12.1197Z" fill="white"/>
      <path d="M15.2809 12.1512C15.1142 12.1512 14.979 12.0183 14.979 11.8559C14.979 11.6934 15.1142 11.5605 15.2809 11.5605C15.4476 11.5605 15.5828 11.6934 15.5828 11.8559C15.5828 12.0183 15.4476 12.1512 15.2809 12.1512ZM15.2809 11.6235C15.1496 11.6235 15.0434 11.728 15.0434 11.8559C15.0434 11.9837 15.1502 12.0882 15.2809 12.0882C15.4122 12.0882 15.5184 11.9837 15.5184 11.8559C15.5184 11.728 15.4122 11.6235 15.2809 11.6235Z" fill="white"/>
      <path d="M11.6311 14.9482C13.345 14.9482 14.7343 13.5891 14.7343 11.9126C14.7343 10.236 13.345 8.87695 11.6311 8.87695C9.91729 8.87695 8.52795 10.236 8.52795 11.9126C8.52795 13.5891 9.91729 14.9482 11.6311 14.9482Z" fill="#EFD7E7"/>
      <path d="M11.6311 14.9796C9.90223 14.9796 8.49579 13.6038 8.49579 11.9125C8.49579 10.2213 9.90223 8.84546 11.6311 8.84546C13.3601 8.84546 14.7665 10.2213 14.7665 11.9125C14.7665 13.6038 13.3601 14.9796 11.6311 14.9796ZM11.6311 8.90843C9.93763 8.90843 8.56016 10.2559 8.56016 11.9125C8.56016 13.5692 9.93763 14.9167 11.6311 14.9167C13.3247 14.9167 14.7021 13.5692 14.7021 11.9125C14.7021 10.2559 13.3247 8.90843 11.6311 8.90843Z" fill="white"/>
      <path d="M11.4677 12.259C11.4613 13.0178 11.1072 13.7683 10.5144 14.2809C10.4848 14.3061 10.4526 14.3325 10.4133 14.3375C10.3432 14.3464 10.2827 14.2821 10.2724 14.2167C10.2627 14.1505 10.2898 14.0857 10.3168 14.024C10.618 13.3477 11.0075 12.708 11.4677 12.259Z" fill="white"/>
      <path d="M11.3036 12.0598C10.7506 12.5919 9.95762 12.8777 9.16847 12.8299C9.12921 12.8274 9.08737 12.8236 9.05583 12.7997C8.99983 12.7575 9.00305 12.67 9.0436 12.6171C9.08415 12.5635 9.15045 12.5365 9.21417 12.5119C9.91578 12.2424 10.6541 12.0592 11.3036 12.0598Z" fill="white"/>
      <path d="M11.3312 11.8056C10.5556 11.7993 9.78835 11.453 9.26439 10.8737C9.23864 10.8448 9.21161 10.8133 9.20646 10.7749C9.19745 10.7062 9.2631 10.647 9.33005 10.637C9.39763 10.6275 9.46393 10.654 9.52701 10.6804C10.2177 10.9745 10.8723 11.3554 11.3312 11.8056Z" fill="white"/>
      <path d="M11.5346 11.6449C10.9907 11.1034 10.6985 10.3283 10.7474 9.55631C10.75 9.5179 10.7539 9.47697 10.7783 9.44675C10.8214 9.39197 10.9109 9.39512 10.965 9.43479C11.0197 9.47446 11.0474 9.53931 11.0725 9.60165C11.348 10.2874 11.5353 11.0096 11.5346 11.6449Z" fill="white"/>
      <path d="M11.7947 11.6721C11.8011 10.9134 12.1551 10.1628 12.7473 9.65026C12.7769 9.62507 12.8091 9.59863 12.8484 9.59359C12.9185 9.58477 12.979 9.649 12.9893 9.71448C12.999 9.7806 12.972 9.84545 12.9449 9.90716C12.6437 10.5828 12.2543 11.2232 11.7947 11.6721Z" fill="white"/>
      <path d="M11.9588 11.8707C12.5117 11.3387 13.3047 11.0528 14.0939 11.1006C14.1331 11.1032 14.175 11.1069 14.2059 11.1309C14.2619 11.173 14.2587 11.2606 14.2181 11.3135C14.1776 11.367 14.1113 11.3941 14.0475 11.4186C13.3466 11.6881 12.6083 11.8713 11.9588 11.8707Z" fill="white"/>
      <path d="M11.9312 12.1252C12.7068 12.1315 13.474 12.4779 13.998 13.0571C14.0238 13.0861 14.0508 13.1176 14.0559 13.156C14.0649 13.224 13.9993 13.2838 13.9323 13.2933C13.8648 13.3027 13.7985 13.2763 13.7354 13.2498C13.0441 12.9558 12.3901 12.5748 11.9312 12.1252Z" fill="white"/>
      <path d="M11.7278 12.2859C12.2717 12.8274 12.5639 13.6025 12.515 14.3745C12.5124 14.4129 12.5086 14.4538 12.4841 14.484C12.441 14.5388 12.3515 14.5357 12.2974 14.496C12.2427 14.4563 12.2151 14.3915 12.19 14.3291C11.9145 13.6434 11.7265 12.9212 11.7278 12.2859Z" fill="white"/>
      <path d="M13.6529 13.387C13.6529 13.387 14.6951 12.6006 15.2814 12.6157C15.8678 12.6308 16.1408 12.9104 16.3203 13.1547C16.4999 13.399 16.8758 14.0104 16.7683 14.9895C16.6609 15.9686 16.1253 17.3042 15.5647 17.488C15.004 17.6719 14.1093 17.5749 13.2745 17.0586C12.4396 16.5423 11.897 16.2621 11.8732 15.5537C11.8494 14.8447 12.8174 13.9525 13.6529 13.387Z" fill="#A77E99"/>
      <path d="M14.9699 17.607C14.4254 17.607 13.8042 17.4238 13.2564 17.0851C13.1979 17.0492 13.1412 17.0139 13.0859 16.9799C12.3495 16.5284 11.8635 16.23 11.8404 15.5543C11.8165 14.8485 12.7512 13.9588 13.633 13.3619C13.6845 13.3235 14.6732 12.5842 15.2634 12.5842C15.2692 12.5842 15.2757 12.5842 15.2815 12.5842C15.8769 12.6 16.1627 12.8871 16.3455 13.1358C16.6061 13.4909 16.8971 14.1017 16.7992 14.9927C16.7452 15.4876 16.583 16.0694 16.3648 16.5492C16.1208 17.0857 15.8402 17.4295 15.5737 17.517C15.3915 17.5774 15.1868 17.607 14.9699 17.607ZM15.2641 12.6472C14.6931 12.6472 13.6832 13.4047 13.6729 13.4122L13.6716 13.4135C12.8026 14.001 11.8828 14.8718 11.906 15.5525C11.9272 16.1947 12.3765 16.4699 13.1213 16.927C13.1766 16.961 13.2339 16.9963 13.2925 17.0322C14.2039 17.5957 15.0813 17.614 15.555 17.4584C16.0873 17.284 16.6274 15.9863 16.7368 14.9864C16.8321 14.1156 16.5489 13.5199 16.2946 13.173C16.1099 12.9211 15.8447 12.6617 15.2808 12.6472C15.275 12.6472 15.2692 12.6472 15.2641 12.6472Z" fill="white"/>
      <path d="M14.2123 14.1756C14.3389 14.1756 14.4415 14.0753 14.4415 13.9515C14.4415 13.8277 14.3389 13.7273 14.2123 13.7273C14.0857 13.7273 13.9832 13.8277 13.9832 13.9515C13.9832 14.0753 14.0857 14.1756 14.2123 14.1756Z" fill="white"/>
      <path d="M14.2123 14.2076C14.0681 14.2076 13.951 14.093 13.951 13.9519C13.951 13.8109 14.0681 13.6963 14.2123 13.6963C14.3565 13.6963 14.4737 13.8109 14.4737 13.9519C14.4737 14.093 14.3565 14.2076 14.2123 14.2076ZM14.2123 13.7586C14.1035 13.7586 14.0154 13.8449 14.0154 13.9513C14.0154 14.0577 14.1035 14.144 14.2123 14.144C14.3211 14.144 14.4093 14.0577 14.4093 13.9513C14.4099 13.8449 14.3211 13.7586 14.2123 13.7586Z" fill="white"/>
      <path d="M15.6722 14.9307C15.8137 14.9307 15.9284 14.8185 15.9284 14.68C15.9284 14.5416 15.8137 14.4294 15.6722 14.4294C15.5307 14.4294 15.416 14.5416 15.416 14.68C15.416 14.8185 15.5307 14.9307 15.6722 14.9307Z" fill="white"/>
      <path d="M15.6722 14.9621C15.5132 14.9621 15.3839 14.8356 15.3839 14.68C15.3839 14.5245 15.5132 14.3979 15.6722 14.3979C15.8312 14.3979 15.9606 14.5245 15.9606 14.68C15.9606 14.8356 15.8312 14.9621 15.6722 14.9621ZM15.6722 14.4609C15.5486 14.4609 15.4482 14.5591 15.4482 14.68C15.4482 14.8009 15.5486 14.8992 15.6722 14.8992C15.7958 14.8992 15.8962 14.8009 15.8962 14.68C15.8962 14.5591 15.7958 14.4609 15.6722 14.4609Z" fill="white"/>
      <path d="M14.323 15.2738C14.457 15.2738 14.5657 15.1676 14.5657 15.0365C14.5657 14.9054 14.457 14.7991 14.323 14.7991C14.189 14.7991 14.0803 14.9054 14.0803 15.0365C14.0803 15.1676 14.189 15.2738 14.323 15.2738Z" fill="white"/>
      <path d="M14.323 15.3053C14.1711 15.3053 14.0482 15.1844 14.0482 15.0364C14.0482 14.8878 14.1717 14.7676 14.323 14.7676C14.4749 14.7676 14.5979 14.8885 14.5979 15.0364C14.5979 15.185 14.4749 15.3053 14.323 15.3053ZM14.323 14.8305C14.2071 14.8305 14.1125 14.9231 14.1125 15.0364C14.1125 15.1498 14.2071 15.2423 14.323 15.2423C14.4389 15.2423 14.5335 15.1498 14.5335 15.0364C14.5335 14.9231 14.4395 14.8305 14.323 14.8305Z" fill="white"/>
      <path d="M15.5106 13.6899C15.6446 13.6899 15.7533 13.5836 15.7533 13.4525C15.7533 13.3214 15.6446 13.2151 15.5106 13.2151C15.3766 13.2151 15.2679 13.3214 15.2679 13.4525C15.2679 13.5836 15.3766 13.6899 15.5106 13.6899Z" fill="white"/>
      <path d="M15.5106 13.7213C15.3587 13.7213 15.2358 13.6004 15.2358 13.4525C15.2358 13.3045 15.3594 13.1836 15.5106 13.1836C15.6619 13.1836 15.7855 13.3045 15.7855 13.4525C15.7855 13.6004 15.6619 13.7213 15.5106 13.7213ZM15.5106 13.2466C15.3948 13.2466 15.3001 13.3391 15.3001 13.4525C15.3001 13.5658 15.3948 13.6584 15.5106 13.6584C15.6265 13.6584 15.7211 13.5658 15.7211 13.4525C15.7211 13.3391 15.6265 13.2466 15.5106 13.2466Z" fill="white"/>
      <path d="M15.0382 16.7256C15.2095 16.7256 15.3484 16.5898 15.3484 16.4221C15.3484 16.2545 15.2095 16.1187 15.0382 16.1187C14.8668 16.1187 14.7279 16.2545 14.7279 16.4221C14.7279 16.5898 14.8668 16.7256 15.0382 16.7256Z" fill="white"/>
      <path d="M15.0382 16.7571C14.8496 16.7571 14.6957 16.6066 14.6957 16.4221C14.6957 16.2376 14.8496 16.0872 15.0382 16.0872C15.2268 16.0872 15.3806 16.2376 15.3806 16.4221C15.3806 16.6066 15.2268 16.7571 15.0382 16.7571ZM15.0382 16.1501C14.885 16.1501 14.7601 16.2723 14.7601 16.4221C14.7601 16.572 14.885 16.6942 15.0382 16.6942C15.1914 16.6942 15.3162 16.572 15.3162 16.4221C15.3162 16.2723 15.1914 16.1501 15.0382 16.1501Z" fill="white"/>
      <path d="M12.9198 15.3533C13.0389 15.3533 13.1354 15.2588 13.1354 15.1423C13.1354 15.0258 13.0389 14.9314 12.9198 14.9314C12.8007 14.9314 12.7042 15.0258 12.7042 15.1423C12.7042 15.2588 12.8007 15.3533 12.9198 15.3533Z" fill="white"/>
      <path d="M12.9198 15.3847C12.7834 15.3847 12.672 15.2758 12.672 15.1423C12.672 15.0088 12.7834 14.8999 12.9198 14.8999C13.0563 14.8999 13.1676 15.0088 13.1676 15.1423C13.1676 15.2758 13.0569 15.3847 12.9198 15.3847ZM12.9198 14.9622C12.8188 14.9622 12.7364 15.0428 12.7364 15.1417C12.7364 15.2405 12.8188 15.3211 12.9198 15.3211C13.0209 15.3211 13.1033 15.2405 13.1033 15.1417C13.1033 15.0428 13.0215 14.9622 12.9198 14.9622Z" fill="white"/>
    </Svg>
  );
};

export default Icon;