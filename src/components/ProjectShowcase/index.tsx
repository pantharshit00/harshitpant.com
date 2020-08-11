import * as React from 'react';
import theme from '@utils/theme';
import ProfileCard from '@components/ProjectCard';
import SvgBezier from '@components/SvgBezier';
import * as L from './styles';
import * as G from '../Shared';

const ShoppableSvg = () => (
  <svg
    width="257"
    height="68"
    viewBox="0 0 257 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="257" height="68" rx="6" fill="#061021" />
    <path
      d="M35.376 47.252C33.528 47.252 31.872 46.952 30.408 46.352C28.944 45.752 27.768 44.864 26.88 43.688C26.016 42.512 25.56 41.096 25.512 39.44H32.064C32.16 40.376 32.484 41.096 33.036 41.6C33.588 42.08 34.308 42.32 35.196 42.32C36.108 42.32 36.828 42.116 37.356 41.708C37.884 41.276 38.148 40.688 38.148 39.944C38.148 39.32 37.932 38.804 37.5 38.396C37.092 37.988 36.576 37.652 35.952 37.388C35.352 37.124 34.488 36.824 33.36 36.488C31.728 35.984 30.396 35.48 29.364 34.976C28.332 34.472 27.444 33.728 26.7 32.744C25.956 31.76 25.584 30.476 25.584 28.892C25.584 26.54 26.436 24.704 28.14 23.384C29.844 22.04 32.064 21.368 34.8 21.368C37.584 21.368 39.828 22.04 41.532 23.384C43.236 24.704 44.148 26.552 44.268 28.928H37.608C37.56 28.112 37.26 27.476 36.708 27.02C36.156 26.54 35.448 26.3 34.584 26.3C33.84 26.3 33.24 26.504 32.784 26.912C32.328 27.296 32.1 27.86 32.1 28.604C32.1 29.42 32.484 30.056 33.252 30.512C34.02 30.968 35.22 31.46 36.852 31.988C38.484 32.54 39.804 33.068 40.812 33.572C41.844 34.076 42.732 34.808 43.476 35.768C44.22 36.728 44.592 37.964 44.592 39.476C44.592 40.916 44.22 42.224 43.476 43.4C42.756 44.576 41.7 45.512 40.308 46.208C38.916 46.904 37.272 47.252 35.376 47.252ZM70.2684 21.728V47H64.1124V36.596H54.5364V47H48.3804V21.728H54.5364V31.628H64.1124V21.728H70.2684ZM86.6645 47.252C84.2885 47.252 82.1045 46.7 80.1125 45.596C78.1445 44.492 76.5725 42.956 75.3965 40.988C74.2445 38.996 73.6685 36.764 73.6685 34.292C73.6685 31.82 74.2445 29.6 75.3965 27.632C76.5725 25.664 78.1445 24.128 80.1125 23.024C82.1045 21.92 84.2885 21.368 86.6645 21.368C89.0405 21.368 91.2125 21.92 93.1805 23.024C95.1725 24.128 96.7325 25.664 97.8605 27.632C99.0125 29.6 99.5885 31.82 99.5885 34.292C99.5885 36.764 99.0125 38.996 97.8605 40.988C96.7085 42.956 95.1485 44.492 93.1805 45.596C91.2125 46.7 89.0405 47.252 86.6645 47.252ZM86.6645 41.636C88.6805 41.636 90.2885 40.964 91.4885 39.62C92.7125 38.276 93.3245 36.5 93.3245 34.292C93.3245 32.06 92.7125 30.284 91.4885 28.964C90.2885 27.62 88.6805 26.948 86.6645 26.948C84.6245 26.948 82.9925 27.608 81.7685 28.928C80.5685 30.248 79.9685 32.036 79.9685 34.292C79.9685 36.524 80.5685 38.312 81.7685 39.656C82.9925 40.976 84.6245 41.636 86.6645 41.636ZM122.273 29.864C122.273 31.328 121.937 32.672 121.265 33.896C120.593 35.096 119.561 36.068 118.169 36.812C116.777 37.556 115.049 37.928 112.985 37.928H109.169V47H103.013V21.728H112.985C115.001 21.728 116.705 22.076 118.097 22.772C119.489 23.468 120.533 24.428 121.229 25.652C121.925 26.876 122.273 28.28 122.273 29.864ZM112.517 33.032C113.693 33.032 114.569 32.756 115.145 32.204C115.721 31.652 116.009 30.872 116.009 29.864C116.009 28.856 115.721 28.076 115.145 27.524C114.569 26.972 113.693 26.696 112.517 26.696H109.169V33.032H112.517ZM144.738 29.864C144.738 31.328 144.402 32.672 143.73 33.896C143.058 35.096 142.026 36.068 140.634 36.812C139.242 37.556 137.514 37.928 135.45 37.928H131.634V47H125.478V21.728H135.45C137.466 21.728 139.17 22.076 140.562 22.772C141.954 23.468 142.998 24.428 143.694 25.652C144.39 26.876 144.738 28.28 144.738 29.864ZM134.982 33.032C136.158 33.032 137.034 32.756 137.61 32.204C138.186 31.652 138.474 30.872 138.474 29.864C138.474 28.856 138.186 28.076 137.61 27.524C137.034 26.972 136.158 26.696 134.982 26.696H131.634V33.032H134.982ZM163.675 42.536H154.243L152.731 47H146.287L155.431 21.728H162.559L171.703 47H165.187L163.675 42.536ZM162.091 37.784L158.959 28.532L155.863 37.784H162.091ZM189.786 34.04C191.25 34.352 192.426 35.084 193.314 36.236C194.202 37.364 194.646 38.66 194.646 40.124C194.646 42.236 193.902 43.916 192.414 45.164C190.95 46.388 188.898 47 186.258 47H174.486V21.728H185.862C188.43 21.728 190.434 22.316 191.874 23.492C193.338 24.668 194.07 26.264 194.07 28.28C194.07 29.768 193.674 31.004 192.882 31.988C192.114 32.972 191.082 33.656 189.786 34.04ZM180.642 31.952H184.674C185.682 31.952 186.45 31.736 186.978 31.304C187.53 30.848 187.806 30.188 187.806 29.324C187.806 28.46 187.53 27.8 186.978 27.344C186.45 26.888 185.682 26.66 184.674 26.66H180.642V31.952ZM185.178 42.032C186.21 42.032 187.002 41.804 187.554 41.348C188.13 40.868 188.418 40.184 188.418 39.296C188.418 38.408 188.118 37.712 187.518 37.208C186.942 36.704 186.138 36.452 185.106 36.452H180.642V42.032H185.178ZM204.372 42.248H212.436V47H198.216V21.728H204.372V42.248ZM221.529 26.66V31.772H229.773V36.524H221.529V42.068H230.853V47H215.373V21.728H230.853V26.66H221.529Z"
      fill="white"
    />
  </svg>
);

const PrismaSvg = () => (
  <svg
    width="109"
    height="40"
    viewBox="0 0 109 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M33.7753 30.4749L19.6557 1.25993C19.4803 0.900386 19.2084 0.593746 18.8687 0.372468C18.529 0.151189 18.1343 0.0235052 17.7262 0.00293118C17.3174 -0.0237544 16.909 0.0592759 16.5452 0.242992C16.1815 0.426708 15.8764 0.704076 15.6632 1.04493L0.349 25.2119C0.116122 25.5768 -0.00515381 25.9989 -0.000609227 26.4286C0.00393536 26.8583 0.134112 27.2778 0.374658 27.6379L7.86191 38.9349C8.14517 39.359 8.56155 39.6825 9.04894 39.8571C9.53633 40.0317 10.0686 40.0482 10.5664 39.9039L32.2943 33.6419C32.6214 33.5487 32.9242 33.3882 33.1822 33.1712C33.4402 32.9541 33.6473 32.6857 33.7897 32.3839C33.93 32.0837 34.0015 31.7574 33.9992 31.4275C33.9969 31.0976 33.9208 30.7722 33.7763 30.4739L33.7753 30.4749ZM30.6141 31.7279L12.1767 37.0399C11.6143 37.2029 11.0744 36.7279 11.1914 36.1749L17.7785 5.44393C17.9017 4.86893 18.7166 4.77793 18.9742 5.30993L31.1684 30.5399C31.2223 30.6524 31.2505 30.7748 31.2511 30.8989C31.2518 31.023 31.2247 31.1458 31.172 31.2587C31.1192 31.3716 31.0419 31.4721 30.9454 31.5531C30.8489 31.6341 30.7355 31.6937 30.6131 31.7279H30.6141Z"
        fill="black"
      />
    </g>
    <path
      d="M50.3418 19.1973H51.2383C52.0762 19.1973 52.7031 19.0332 53.1191 18.7051C53.5352 18.3711 53.7432 17.8877 53.7432 17.2549C53.7432 16.6162 53.5674 16.1445 53.2158 15.8398C52.8701 15.5352 52.3252 15.3828 51.5811 15.3828H50.3418V19.1973ZM56.4941 17.1582C56.4941 18.541 56.0605 19.5986 55.1934 20.3311C54.332 21.0635 53.1045 21.4297 51.5107 21.4297H50.3418V26H47.6172V13.1504H51.7217C53.2803 13.1504 54.4639 13.4873 55.2725 14.1611C56.0869 14.8291 56.4941 15.8281 56.4941 17.1582ZM64.1934 15.9893C64.5566 15.9893 64.8584 16.0156 65.0986 16.0684L64.8965 18.582C64.6797 18.5234 64.416 18.4941 64.1055 18.4941C63.25 18.4941 62.582 18.7139 62.1016 19.1533C61.627 19.5928 61.3896 20.208 61.3896 20.999V26H58.709V16.1738H60.7393L61.1348 17.8262H61.2666C61.5713 17.2754 61.9814 16.833 62.4971 16.499C63.0186 16.1592 63.584 15.9893 64.1934 15.9893ZM66.7686 13.6338C66.7686 12.7607 67.2549 12.3242 68.2275 12.3242C69.2002 12.3242 69.6865 12.7607 69.6865 13.6338C69.6865 14.0498 69.5635 14.375 69.3174 14.6094C69.0771 14.8379 68.7139 14.9521 68.2275 14.9521C67.2549 14.9521 66.7686 14.5127 66.7686 13.6338ZM69.5635 26H66.8828V16.1738H69.5635V26ZM79.2402 23.082C79.2402 24.0898 78.8887 24.8574 78.1855 25.3848C77.4883 25.9121 76.4424 26.1758 75.0479 26.1758C74.333 26.1758 73.7236 26.126 73.2197 26.0264C72.7158 25.9326 72.2441 25.792 71.8047 25.6045V23.3896C72.3027 23.624 72.8623 23.8203 73.4834 23.9785C74.1104 24.1367 74.6611 24.2158 75.1357 24.2158C76.1084 24.2158 76.5947 23.9346 76.5947 23.3721C76.5947 23.1611 76.5303 22.9912 76.4014 22.8623C76.2725 22.7275 76.0498 22.5781 75.7334 22.4141C75.417 22.2441 74.9951 22.0479 74.4678 21.8252C73.7119 21.5088 73.1553 21.2158 72.7979 20.9463C72.4463 20.6768 72.1885 20.3691 72.0244 20.0234C71.8662 19.6719 71.7871 19.2412 71.7871 18.7314C71.7871 17.8584 72.124 17.1846 72.7979 16.71C73.4775 16.2295 74.4385 15.9893 75.6807 15.9893C76.8643 15.9893 78.0156 16.2471 79.1348 16.7627L78.3262 18.6963C77.834 18.4854 77.374 18.3125 76.9463 18.1777C76.5186 18.043 76.082 17.9756 75.6367 17.9756C74.8457 17.9756 74.4502 18.1895 74.4502 18.6172C74.4502 18.8574 74.5762 19.0654 74.8281 19.2412C75.0859 19.417 75.6455 19.6777 76.5068 20.0234C77.2744 20.334 77.8369 20.624 78.1943 20.8936C78.5518 21.1631 78.8154 21.4736 78.9854 21.8252C79.1553 22.1768 79.2402 22.5957 79.2402 23.082ZM90.1299 26H87.4492V20.2607C87.4492 19.5518 87.3291 19.0215 87.0889 18.6699C86.8545 18.3125 86.4824 18.1338 85.9727 18.1338C85.2871 18.1338 84.7891 18.3857 84.4785 18.8896C84.168 19.3936 84.0127 20.2227 84.0127 21.377V26H81.332V16.1738H83.3799L83.7402 17.4307H83.8896C84.1533 16.9795 84.5342 16.6279 85.0322 16.376C85.5303 16.1182 86.1016 15.9893 86.7461 15.9893C88.2168 15.9893 89.2129 16.4697 89.7344 17.4307H89.9717C90.2354 16.9736 90.6221 16.6191 91.1318 16.3672C91.6475 16.1152 92.2275 15.9893 92.8721 15.9893C93.9854 15.9893 94.8262 16.2764 95.3945 16.8506C95.9688 17.4189 96.2559 18.333 96.2559 19.5928V26H93.5664V20.2607C93.5664 19.5518 93.4463 19.0215 93.2061 18.6699C92.9717 18.3125 92.5996 18.1338 92.0898 18.1338C91.4336 18.1338 90.9414 18.3682 90.6133 18.8369C90.291 19.3057 90.1299 20.0498 90.1299 21.0693V26ZM105.256 26L104.737 24.6641H104.667C104.216 25.2324 103.75 25.6279 103.27 25.8506C102.795 26.0674 102.174 26.1758 101.406 26.1758C100.463 26.1758 99.7188 25.9062 99.1738 25.3672C98.6348 24.8281 98.3652 24.0605 98.3652 23.0645C98.3652 22.0215 98.7285 21.2539 99.4551 20.7617C100.188 20.2637 101.289 19.9883 102.76 19.9355L104.465 19.8828V19.4521C104.465 18.4561 103.955 17.958 102.936 17.958C102.15 17.958 101.228 18.1953 100.167 18.6699L99.2793 16.8594C100.41 16.2676 101.664 15.9717 103.041 15.9717C104.359 15.9717 105.37 16.2588 106.073 16.833C106.776 17.4072 107.128 18.2803 107.128 19.4521V26H105.256ZM104.465 21.4473L103.428 21.4824C102.648 21.5059 102.068 21.6465 101.688 21.9043C101.307 22.1621 101.116 22.5547 101.116 23.082C101.116 23.8379 101.55 24.2158 102.417 24.2158C103.038 24.2158 103.533 24.0371 103.902 23.6797C104.277 23.3223 104.465 22.8477 104.465 22.2559V21.4473Z"
      fill="black"
    />
    <defs>
      <clipPath id="clip0">
        <rect width="34" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const FUSLogo = () => (
  <svg
    width="73"
    height="29"
    viewBox="0 0 73 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="61"
      y="0"
      width="13"
      height="29"
    >
      <path
        d="M73.0001 14.7854V28.8553H61.7002V0.715454H73.0001V14.7854Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M66.9223 28.8688C64.5257 28.8688 63.013 27.8113 62.4714 27.3638C62.1285 26.4687 61.7574 23.5792 61.7002 21.6679C61.8427 21.3826 62.2714 21.3014 62.3854 21.545C62.8136 23.6203 63.9829 27.6081 67.2928 27.6081C69.6902 27.6081 70.8604 25.3704 70.8604 22.9293C70.8604 21.1384 70.6029 19.1465 68.5196 17.2336L65.8091 14.7108C64.3833 13.3687 62.7279 11.0494 62.7279 7.71246C62.7279 3.84849 64.8398 0.715454 68.5486 0.715454C69.4331 0.715454 70.4599 0.919782 71.2023 1.24522C71.5728 1.36678 71.9727 1.48856 72.201 1.48856C72.4579 2.46555 72.7142 4.74293 72.7142 6.45243C72.6 6.69668 72.1438 6.81846 72.0008 6.57422C71.6298 4.62182 70.8604 1.97683 68.1205 1.97683C65.3238 1.97683 64.725 4.62182 64.725 6.49325C64.725 8.85273 66.0948 10.5207 67.1504 11.497L69.4331 13.5309C71.2303 15.1179 73.0001 17.4771 73.0001 21.3418C73.0001 25.8172 70.6317 28.8688 66.9223 28.8688Z"
        fill="#917E43"
      />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.2046 12.5757C33.2046 13.6738 33.2906 13.6738 34.1453 13.6738H36.0861C37.2561 13.6738 38.1691 13.5919 38.5113 13.4295C38.8248 13.2669 39.0538 13.0635 39.2249 12.0055L39.4818 10.3781C39.6248 10.1348 40.1094 10.1348 40.2234 10.3781C40.2234 11.3553 40.1094 12.9823 40.1094 14.4873C40.1094 15.9523 40.2234 17.4976 40.2234 18.4329C40.1094 18.6778 39.6812 18.6778 39.4818 18.4329L39.1967 16.8481C39.0818 16.1147 38.8248 15.5448 38.2832 15.3005C37.8831 15.1384 37.1706 15.0973 36.0861 15.0973H34.1453C33.2906 15.0973 33.2046 15.1384 33.2046 16.195V21.8512C33.2046 26.1229 33.2614 26.7334 34.9451 26.9366L35.9154 27.0589C36.0861 27.2219 36.0291 27.954 35.8584 28.0753C34.1741 27.9944 33.2046 27.954 32.0634 27.954C30.8078 27.954 29.8379 27.9944 28.4963 28.0753C28.3251 27.954 28.2682 27.3031 28.4393 27.0589L29.1521 26.9366C30.8078 26.6513 30.8647 26.1229 30.8647 21.8512V7.20541C30.8647 2.93323 30.8078 2.3631 29.1521 2.07848L28.6956 1.99797C28.5251 1.83423 28.5814 1.10262 28.7536 0.980835C29.9516 1.06157 30.9217 1.10262 32.0634 1.10262H37.3127C39.1396 1.10262 40.794 1.10262 41.1645 0.980835C41.1645 2.85136 41.1939 4.80399 41.2505 6.35066C41.1645 6.5949 40.7658 6.71669 40.5659 6.47334C40.3376 4.64273 39.9953 3.17658 38.5677 2.60825C37.9409 2.40459 36.9986 2.3631 35.801 2.3631H34.0607C33.2046 2.3631 33.2046 2.44451 33.2046 3.99096V12.5757Z"
      fill="#917E43"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M58.4269 11.3134C58.4269 8.79198 58.3703 4.11296 57.8851 2.89263C57.6853 2.40459 57.1711 2.11952 56.4583 2.03788L55.7447 1.95602C55.5738 1.67185 55.6308 1.14254 55.8019 0.980835C56.8858 1.06157 57.9421 1.10262 59.0549 1.10262C60.2531 1.10262 61.0235 1.06157 62.0509 0.980835C62.2785 1.18449 62.2503 1.7129 62.1073 1.95602L61.4227 2.03788C60.7094 2.11952 60.1387 2.48533 59.9966 3.01464C59.5677 4.35721 59.5971 9.03578 59.5971 11.3134V15.9108C59.5971 19.45 59.1972 23.1937 57.6 25.6344C56.3723 27.5473 54.2616 28.6041 52.1503 28.6041C50.1811 28.6041 48.2121 28.0753 46.8146 26.3664C45.3019 24.5767 44.5885 21.6069 44.5885 16.766V7.16412C44.5885 2.93323 44.5319 2.24131 42.8764 2.03788L42.1637 1.95602C41.9913 1.79431 42.0489 1.10262 42.2201 0.980835C43.6476 1.06157 44.6161 1.10262 45.7583 1.10262C46.9288 1.10262 47.8697 1.06157 49.2684 0.980835C49.439 1.10262 49.4959 1.79431 49.3248 1.95602L48.6402 2.03788C46.9845 2.24131 46.9288 2.93323 46.9288 7.16412V15.9523C46.9288 22.5014 48.3543 26.8146 52.7207 26.8146C56.8572 26.8146 58.4269 22.1759 58.4269 15.9917V11.3134Z"
      fill="#917E43"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.6506 20.2713L15.8752 21.4059L16.2031 25.3008H13.404L14.6506 20.2713ZM9.85479 10.8336L7.64453 19.0503C7.64453 19.0503 8.09388 18.8211 8.49132 18.8211C8.88958 18.8211 9.41314 19.1411 9.41314 19.3466C9.41314 19.55 8.58785 20.5004 8.93439 20.5004C9.27972 20.5004 9.42044 20.2629 9.56766 20.2629C9.71467 20.2629 9.83228 20.3285 9.83228 20.5586C9.83228 20.787 9.46465 20.9023 9.46465 21.1235C9.46465 21.3443 9.77449 21.2958 9.9655 21.442C10.1569 21.5908 10.1642 21.8028 10.1642 21.8028C10.1642 21.8028 10.1863 22.5737 10.1863 22.7458C10.1863 22.9169 10.5842 22.8603 10.9451 23.1061C11.3059 23.3524 11.5046 23.4586 11.7552 23.5078C12.0056 23.5563 12.2784 23.7453 12.2784 24.0074C12.2784 24.2692 11.7165 24.5552 11.7165 24.7597C11.7165 24.9638 12.394 25.706 12.394 25.706C12.394 25.706 12.672 25.7304 12.7612 25.8296C12.8504 25.9297 12.708 26.3145 13.0323 26.3145C13.3561 26.3145 13.4723 25.8731 13.8349 25.8731C13.975 25.8731 14.0385 25.8795 14.0385 26.0136C14.0385 26.1481 13.8738 26.2394 13.8738 26.4333C13.8738 26.6264 13.9417 26.6476 14.0675 26.6476C14.1936 26.6476 14.4493 26.2062 15.3151 26.2062C15.8543 26.2062 16.123 26.3077 16.123 26.7069C16.123 27.0835 15.3928 27.3693 15.3928 27.7405C15.3928 27.9234 15.5283 27.9938 15.625 27.9938C15.7215 27.9938 15.8036 27.81 15.9877 27.81C16.1715 27.81 16.3456 27.7834 16.3456 27.6968C16.3456 27.6519 16.253 27.6701 16.253 27.3898C16.253 27.2813 16.296 27.1859 16.5198 27.1859C16.7431 27.1859 16.7423 27.3258 16.9457 27.3258C17.1482 27.3258 17.2502 27.2398 17.2502 27.0678V26.7234C17.2502 26.7234 17.2356 26.5944 16.8974 26.3411C16.5586 26.0881 16.5677 26.0881 16.5677 25.8795C16.5677 25.6686 16.7664 25.4482 16.9552 25.4482C17.144 25.4482 17.5357 25.5238 17.7144 25.7926C17.8932 26.0615 18.0044 26.3896 18.1449 26.3896C18.2852 26.3896 18.3237 26.3576 18.3237 26.2062C18.3237 26.056 17.8742 25.6744 17.8742 25.4965C17.8742 25.3183 17.937 25.2277 18.1064 25.2277C18.2755 25.2277 18.2903 25.3357 18.3923 25.3089C18.4939 25.2809 18.7159 25.0926 18.7159 24.8459C18.7159 24.598 18.2712 23.8339 18.2712 23.63C18.2712 23.4253 18.3681 23.3448 18.5561 23.3448C18.7453 23.3448 19.0637 23.78 19.2143 23.78C19.3644 23.78 19.4607 23.7372 19.4607 23.5651C19.4607 23.3932 19.4366 23.1666 19.3155 23.0274C19.1951 22.8876 18.8171 22.5002 18.8171 22.2047C18.8171 21.9079 18.9913 21.8118 18.9913 21.6445C18.9913 21.4781 18.6382 21.1384 18.4943 21.0523C18.3481 20.967 18.2615 20.8854 18.2562 20.7681C18.255 20.7291 18.2542 20.6894 18.2542 20.6526C18.2542 20.525 18.2615 20.4181 18.2615 20.4181C15.7811 19.0471 13.8247 16.9544 12.426 15.0738V22.0137H11.3837V13.5681C10.3735 11.9962 9.85479 10.8336 9.85479 10.8336Z"
      fill="#2A4832"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.608074 27.9992C0.811387 27.895 0.813862 27.7229 0.623741 27.5867C0.623741 27.5867 0.393402 27.5494 0.393402 27.1939C0.393402 26.9639 0.544477 26.9224 0.544477 26.8284C0.544477 26.7341 0.440448 26.7122 0.440448 26.5451C0.440448 26.378 0.590712 26.0859 0.929362 26.0859C1.26801 26.0859 1.39982 26.2736 1.65351 26.2736C1.9076 26.2736 1.65351 26.002 1.65351 25.8764C1.65351 25.4057 2.4902 25.2909 2.4902 25.1231C2.4902 24.956 1.91672 24.8394 1.91672 24.4854C1.91672 23.5657 3.05495 23.2826 3.05495 23.0943C3.05495 22.906 2.20873 23.1782 2.20873 22.6344C2.20873 21.9543 3.69393 22.1112 3.69393 21.871C3.69393 21.7141 3.44977 21.5675 3.19548 21.5675C2.942 21.5675 2.38718 21.7141 2.23651 21.7141C2.08605 21.7141 1.85142 21.7265 1.85142 21.4836C1.85142 20.7208 2.99817 20.2808 2.99817 20.1448C2.99817 20.0091 2.84811 19.8318 2.64086 19.7274C2.43402 19.6225 2.00169 19.3192 2.00169 19.1315C2.00169 18.9432 2.69785 18.8066 3.13951 18.8066C3.58138 18.8066 3.84439 18.9637 4.0705 18.7439C4.2962 18.5242 4.1362 18.42 4.1362 18.0535C4.1362 17.6877 4.34263 17.4579 4.34263 17.4579L5.88542 18.922C5.88542 18.922 6.40495 18.4683 6.7436 18.4015L9.25448 9.06237H9.69067C9.89914 9.24866 10.1875 9.51321 10.5304 9.84608C10.7908 10.0991 11.0781 10.3869 11.3843 10.7072V6.78476H8.16999V5.62577H11.3843V2.04912H12.4266V5.62577H15.6408V6.78476H12.4266V11.8555C13.7314 13.3688 15.1328 15.3068 15.9354 17.369C16.8372 18.1873 17.7712 18.8654 18.7209 19.3907L19.0889 19.5936C19.2925 19.3523 19.4649 19.0734 19.6861 19.0734C20.0088 19.0734 20.186 19.36 20.186 19.36V20.13C20.4042 20.6327 20.8392 20.3988 20.9925 20.3988C21.3145 20.3988 21.4911 20.5474 21.4911 20.8122C21.4911 21.1881 21.2581 21.4741 21.3145 21.6723C21.4031 21.9856 21.9032 21.6992 21.9032 22.0751C21.9032 22.281 21.7657 22.4612 21.8782 22.5505C21.9914 22.6405 22.1449 22.4612 22.2737 22.4612C22.4014 22.4612 22.5067 22.569 22.5067 22.7565C22.5067 22.9448 22.3945 22.9353 22.3945 23.0431C22.3945 23.1509 22.4756 23.2587 22.5718 23.2587C22.6687 23.2587 22.7494 23.0068 22.9747 23.0068C23.2008 23.0068 23.3936 23.1155 23.3936 23.5009C23.3936 23.885 23.1282 24.3338 23.1282 24.4957C23.1282 24.6568 23.2407 24.8715 23.4585 24.8715C23.8771 24.8715 23.9902 24.6301 24.3289 24.6301C24.6673 24.6301 24.8687 24.8812 24.8687 24.8812V26.1985C24.9924 26.2817 25.0547 26.277 25.106 26.253V2.7548V1.36305C25.106 1.11407 24.9234 0.912231 24.7004 0.912231C24.7004 0.912231 23.9132 0.912231 23.449 0.912231H1.65695C1.23436 0.912231 0.405388 0.912231 0.405388 0.912231C0.181498 0.912231 0 1.11405 0 1.36289C0 1.36289 0 2.20709 0 2.7548V26.9901C0 27.4204 0.0766617 27.542 0.0766617 27.542C0.146314 27.7765 0.334423 28.106 0.355684 28.1285L0.202778 27.9666C0.287226 28.056 0.521973 28.0433 0.723816 27.9399L0.608074 27.9992Z"
      fill="#2A4832"
    />
  </svg>
);

const ProjectShowcase: React.FC = () => {
  return (
    <L.Container>
      <G.CenteredHeader color={theme.colors.gray[100]}>
        <h1>Projects I have worked on</h1>
      </G.CenteredHeader>
      <L.Grid>
        <ProfileCard
          logo={<ShoppableSvg />}
          name="Shoppable"
          tags={[
            {
              text: 'React',
              color: '#63B3ED',
              textColor: '#1B3082',
            },
            // { text: 'Node', color: '#68D391', textColor: '#276749' },
            { text: 'GraphQL  ', color: '#F687B3', textColor: '#5E266D' },
          ]}
          texts={[
            'Built a fullstack server side rendered GraphQL ecommerce store',
            'Integrated Braintree Payments APIs',
            'Implemented complex filterable search using Algolia',
            'Frontend is written in Next.js and backend is written in Node using Prisma for data access',
          ]}
          websiteLink="https://shoppable.app"
        />
        <ProfileCard
          logo={<PrismaSvg />}
          name="Prisma"
          tags={[
            {
              text: 'Typescript',
              color: '#63B3ED',
              textColor: '#1B3082',
            },
            { text: 'Rust', color: '#B7791F', textColor: '#1A202C' },
          ]}
          texts={[
            'My current project. I mainly do issue triaging and internal tooling',
            'Handling large projects on Github(over 4.6K stars on V2 and over 17K stars on V1)',
            'Worked on internal tooling like error reporting',
          ]}
          websiteLink="https://prisma.io"
          githubLink="https://github.com/prisma/prisma"
        />
        <ProfileCard
          logo={<FUSLogo />}
          name="Franciscan"
          tags={[
            {
              text: 'React',
              color: '#63B3ED',
              textColor: '#1B3082',
            },
            { text: 'GraphQL  ', color: '#F687B3', textColor: '#5E266D' },
          ]}
          texts={[
            'Contributed to two big React JS projects.',
            'Integrated headless wordpress using WPGraphQL',
            'Used GraphQL on the frontend using react-apollo',
            'Implemented passwordless authentication system',
          ]}
          websiteLink="https://rc.franciscan.university"
          githubLink="https://github.com/fus-marcom/bulletin-react"
        />
      </L.Grid>
      <SvgBezier color="white" svgType={2} />
    </L.Container>
  );
};

export default ProjectShowcase;
