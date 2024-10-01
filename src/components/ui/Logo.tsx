import React from 'react'

type Props = {
    width?: number
    height?: number
}

export const Logo = (props: Props) => {
    return (
        <svg width={props?.width || "99"} height={props?.height || "99"} className='cursor-pointer' viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6503 96.2914C20.6874 96.3099 20.7307 96.3285 20.7678 96.3471C20.7121 96.3037 20.6565 96.2604 20.6071 96.2109L20.6503 96.2914ZM15.2803 86.4462C17.8881 86.9911 20.1251 88.1985 21.6762 90.4338C22.2447 91.2511 22.7514 92.1056 23.2643 92.9601C23.5609 93.4555 23.8576 93.9508 24.1604 94.44C25.2294 96.1428 26.6569 97.3997 28.6097 97.9879C28.8816 98.0746 29.172 98.1118 29.4625 98.1427C29.6046 98.1613 29.7529 98.1799 29.895 98.2047C29.9012 98.1799 29.9074 98.1551 29.9136 98.1304C29.9136 98.1056 29.9259 98.0808 29.9321 98.0561C28.5788 97.5855 27.4294 96.7743 26.558 95.666C25.7609 94.6505 25.0502 93.5483 24.4261 92.4152C23.6413 90.9849 22.6958 89.697 21.5093 88.5948C21.4413 88.5329 21.3857 88.4648 21.3054 88.3657C21.2621 88.31 21.2065 88.2419 21.1385 88.1676C21.5773 88.2666 22.0099 88.3595 22.4239 88.4524C23.3632 88.6567 24.2531 88.8487 25.1306 89.084C25.7485 89.2512 26.4097 89.505 26.8917 89.9075C28.0288 90.8672 29.104 91.9075 30.1422 92.9787C30.7046 93.5607 31.236 94.1675 31.7674 94.7743C32.3607 95.4493 32.9539 96.1242 33.5781 96.7681C34.8263 98.0375 36.4454 98.5886 38.1819 98.8053C36.7049 97.9446 35.5185 96.7434 34.3567 95.5297C33.9118 95.0654 33.4854 94.5824 33.059 94.1056C31.8972 92.8053 30.7416 91.505 29.3018 90.4833C29.0546 90.3038 28.8136 90.118 28.5355 89.9013C28.3996 89.796 28.2574 89.6784 28.0968 89.5546C28.2636 89.5731 28.4243 89.5855 28.5788 89.5979C29.5799 89.6846 30.4574 89.7651 31.2484 90.3967C33.6399 92.3161 36.0684 94.1799 38.5032 96.0375C40.252 97.3749 42.211 98.3223 44.3429 98.83C46.0732 99.2387 47.7417 98.8796 49.3793 98.0808C49.1259 98.0808 48.8788 98.087 48.6316 98.0932C48.1125 98.1118 47.6181 98.1242 47.1237 98.0684C44.2441 97.7279 41.6672 96.5514 39.3189 94.9168C37.8729 93.9137 36.4887 92.8177 35.1106 91.7217C34.5112 91.2511 33.9179 90.7806 33.3185 90.3162C33.2505 90.2604 33.1826 90.1985 33.1084 90.1242C33.0713 90.0871 33.0281 90.0437 32.9786 89.9942C34.0477 89.8827 34.987 90.0437 35.8645 90.5329C36.2724 90.762 36.6864 90.9787 37.1004 91.2016C37.8482 91.6041 38.5959 92.0065 39.3313 92.4338C39.8442 92.731 40.3509 93.0406 40.8576 93.3502C42.6003 94.409 44.3367 95.474 46.308 96.1242C47.544 96.5328 48.7428 96.7372 50.0096 96.5019C51.6719 96.1985 53.1674 95.4493 54.632 94.6443C55.6331 94.0932 56.6774 93.7217 57.8145 93.6103C57.9319 93.5979 58.0431 93.5731 58.1605 93.5483C58.2099 93.536 58.2594 93.5298 58.3088 93.5174C58.3212 93.4802 58.3274 93.4431 58.3335 93.3997C58.3397 93.3626 58.3521 93.3254 58.3583 93.2821C58.3088 93.2821 58.2594 93.2821 58.2099 93.2821C58.0925 93.2821 57.9689 93.2821 57.8515 93.2883C57.6105 93.313 57.3695 93.3254 57.1285 93.3378C56.5353 93.375 55.9482 93.4121 55.3859 93.5545C54.737 93.7279 54.1067 93.9756 53.4764 94.2233C53.1118 94.3657 52.7472 94.5143 52.3764 94.6443C49.0827 95.8022 46.1659 94.892 43.4531 92.9601C43.4345 92.9477 43.4283 92.9106 43.4222 92.8548C43.416 92.8115 43.4098 92.762 43.3913 92.6939C43.9536 92.7682 44.5036 92.8363 45.0598 92.9044C46.2586 93.053 47.4389 93.2016 48.613 93.3812C51.6658 93.8517 54.4219 93.3192 56.8195 91.2388C57.4066 90.731 58.1543 90.3719 58.8773 90.0623C59.4953 89.796 60.1442 89.5979 60.7868 89.3998C61.0464 89.3193 61.2997 89.2388 61.5593 89.1583C59.897 89.0778 58.2594 89.1335 56.7516 89.9508C56.5909 90.0375 56.4364 90.1242 56.2757 90.2047C55.7196 90.5019 55.1572 90.7991 54.6258 91.1459C53.2601 92.0375 51.7832 92.2109 50.2135 91.9694C50.0591 91.9508 49.8984 91.957 49.7377 91.9632C49.6697 91.9632 49.6018 91.9632 49.5338 91.9632C49.5709 91.9199 49.6079 91.8703 49.645 91.827C50.7141 90.5638 50.7574 90.5143 52.2343 90.4462C54.0387 90.3657 55.5898 89.6908 57.0049 88.6382C59.0813 87.1026 61.2627 85.7899 63.7716 85.1026C63.8705 85.0778 63.9632 85.0345 64.062 84.9973C64.1115 84.9787 64.1547 84.9602 64.2042 84.9416C63.9199 84.7992 63.6542 84.7434 63.3946 84.7249C62.1464 84.632 60.9413 84.8797 59.8352 85.4122C58.5931 86.0128 57.3819 86.7125 56.183 87.406C56.0903 87.4555 56.0038 87.5112 55.9111 87.5608C54.7679 88.2171 53.5752 88.6505 52.2281 88.6134C52.3393 87.4121 52.3702 87.375 53.4208 87.1645C53.4764 87.1521 53.532 87.1459 53.5876 87.1335C53.7792 87.0964 53.9769 87.0654 54.1561 86.9849C54.5393 86.8177 54.9162 86.6567 55.2994 86.4957C56.4488 86.0066 57.5982 85.5174 58.7105 84.9478C59.9341 84.3224 61.1638 83.8085 62.5357 83.6227C63.1104 83.5484 63.6789 83.4307 64.2474 83.3193C64.4884 83.2698 64.7294 83.2202 64.9766 83.1769C64.0126 82.7001 63.0486 82.341 61.9795 82.3162C60.2554 82.279 58.8279 83.0097 57.4746 83.9694C56.2448 84.8425 54.9409 85.5422 53.4208 85.7837H53.3899C52.6483 85.9034 52.1828 85.5897 51.9933 84.8425C51.9933 84.8425 51.9933 84.793 52.0056 84.7682C52.0056 84.7558 52.0056 84.7434 52.0118 84.7372C54.0634 84.3781 55.4106 83.7837 56.6094 82.5639C57.5426 81.6227 58.6549 81.0469 59.8846 80.6444C60.2183 80.5329 60.5644 80.4339 60.9043 80.3348C61.0649 80.2914 61.2256 80.2419 61.3863 80.1986C59.2605 79.6227 57.3015 80.0128 55.6022 81.3069C54.323 82.279 52.914 82.8982 51.4371 83.4617C50.8068 83.7032 50.4669 83.4741 50.0961 83.0159C50.1641 82.9787 50.2321 82.9416 50.2939 82.9044C50.4113 82.8363 50.5225 82.7744 50.6338 82.7187C52.0056 82.0252 53.3095 81.2326 54.4342 80.1676C55.2561 79.3998 56.1892 78.8178 57.2583 78.4772C57.524 78.3905 57.7959 78.3162 58.0678 78.2357C58.1976 78.1986 58.3212 78.1614 58.451 78.1243C58.451 78.0933 58.451 78.0624 58.451 78.0314C58.451 78.0004 58.451 77.9695 58.4448 77.9385C58.2223 77.9385 57.9998 77.9385 57.7774 77.9323C57.2583 77.9199 56.733 77.9076 56.2201 77.9757C54.6752 78.1738 53.4517 79.0716 52.2281 79.9633L52.2096 79.9818C51.4 80.5763 50.5658 81.1335 49.7315 81.6908C49.5214 81.8332 49.3113 81.9695 49.1012 82.1119C48.5203 82.502 47.9704 82.2976 47.3709 81.9942C49.0085 80.1057 51.0787 78.8797 53.1489 77.6413C53.6865 77.3193 54.2241 77.0035 54.7556 76.6692C53.705 76.7992 52.6669 76.9416 51.7028 77.2946C49.404 78.1367 47.6058 79.6908 46.0052 81.5051C45.9805 81.5298 45.962 81.5608 45.9373 81.5856C45.8322 81.7156 45.7148 81.858 45.5912 81.8766C45.1463 81.9385 44.7013 81.9756 44.2132 82.0128C43.9969 82.0314 43.7806 82.0438 43.5458 82.0685C45.8199 79.4246 48.1496 77.0469 51.3382 75.6599C51.0354 75.5732 50.7697 75.5608 50.5163 75.5794C48.9776 75.6847 47.6243 76.3038 46.4193 77.2326C44.2255 78.9292 42.3593 80.9664 40.7649 83.2264C39.183 85.4617 37.0448 86.9168 34.6842 88.1614C33.9921 88.5267 33.3371 88.44 32.7315 88.3533C32.5028 88.3224 32.2742 88.2914 32.0579 88.2852C32.3854 88.0747 32.7253 87.8642 33.0713 87.6536C33.85 87.1769 34.6533 86.6877 35.401 86.1242C37.3909 84.632 38.9234 82.6877 40.4003 80.7125C42.0688 78.4834 43.9413 76.4834 46.5676 75.3565C46.7283 75.2884 46.8827 75.2141 47.0434 75.1398C47.1485 75.0902 47.2473 75.0407 47.3524 74.9912C47.2103 74.9169 47.0929 74.9107 46.9878 74.9354C44.1143 75.5422 41.5312 76.7001 39.5167 78.9168C38.7813 79.7404 38.0336 80.5701 37.4218 81.4803C35.5864 84.2047 33.059 86.0437 30.2164 87.5855C29.2029 88.1366 28.381 87.9199 27.3428 87.6227C29.9877 86.9601 31.8354 85.3812 33.3556 83.3255C33.4359 83.214 33.5163 83.1088 33.5966 82.9973C34.9685 81.1397 36.3403 79.2822 38.4229 78.1181C38.4229 78.1181 38.4229 78.1119 38.4352 78.0933C38.4352 78.0747 38.4476 78.0438 38.4661 78.0004C38.392 78.0004 38.3178 78.0004 38.2498 78.0066C38.083 78.0066 37.9285 78.019 37.774 78.0376C36.3712 78.2419 35.1786 78.9045 34.2084 79.8766C32.9539 81.1397 31.7922 82.502 30.6428 83.858C29.6602 85.0221 28.4675 85.8456 27.0339 86.31C24.8525 87.0282 22.6958 86.9292 20.5144 86.1614C20.5391 86.1366 20.5577 86.118 20.57 86.0995C20.5947 86.0747 20.6133 86.0561 20.6318 86.0499C20.6751 86.0375 20.7183 86.0252 20.7616 86.019C20.9222 85.9756 21.0891 85.9323 21.2559 85.9075C24.0677 85.4307 26.3479 84.0437 28.2142 81.8952C28.7394 81.2945 29.3574 80.762 29.9692 80.2357C30.1669 80.0685 30.3647 79.8952 30.5562 79.7218C30.7046 79.5856 30.8838 79.4803 31.0877 79.3565C31.1989 79.2884 31.3102 79.2202 31.4337 79.1397C30.5501 78.9168 29.9259 79.2574 29.3512 79.6413C29.1658 79.7651 28.9804 79.889 28.7889 80.019C27.0771 81.1707 25.3592 82.3162 23.7031 83.5546C21.979 84.8425 20.088 85.3626 17.9808 85.214C17.8942 85.2078 17.8139 85.1892 17.7089 85.1583C17.678 85.1521 17.6471 85.1397 17.61 85.1335L17.0662 85.4369L15.2926 86.4276L15.2803 86.4462ZM41.9267 89.1025C41.1913 87.0592 42.1615 84.7063 44.2193 83.5732C46.9816 82.0623 50.3062 83.4246 50.9118 86.3348C51.4248 88.8115 49.6265 91.375 47.0249 91.8641C44.7508 92.2914 42.6683 91.1645 41.9267 89.1025Z" fill="#191414" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6503 96.2914C20.6874 96.3099 20.7307 96.3285 20.7678 96.3471C20.7121 96.3037 20.6565 96.2604 20.6071 96.2109L20.6503 96.2914ZM15.2803 86.4462C17.8881 86.9911 20.1251 88.1985 21.6762 90.4338C22.2447 91.2511 22.7514 92.1056 23.2643 92.9601C23.5609 93.4555 23.8576 93.9508 24.1604 94.44C25.2294 96.1428 26.6569 97.3997 28.6097 97.9879C28.8816 98.0746 29.172 98.1118 29.4625 98.1427C29.6046 98.1613 29.7529 98.1799 29.895 98.2047C29.9012 98.1799 29.9074 98.1551 29.9136 98.1304C29.9136 98.1056 29.9259 98.0808 29.9321 98.0561C28.5788 97.5855 27.4294 96.7743 26.558 95.666C25.7609 94.6505 25.0502 93.5483 24.4261 92.4152C23.6413 90.9849 22.6958 89.697 21.5093 88.5948C21.4413 88.5329 21.3857 88.4648 21.3054 88.3657C21.2621 88.31 21.2065 88.2419 21.1385 88.1676C21.5773 88.2666 22.0099 88.3595 22.4239 88.4524C23.3632 88.6567 24.2531 88.8487 25.1306 89.084C25.7485 89.2512 26.4097 89.505 26.8917 89.9075C28.0288 90.8672 29.104 91.9075 30.1422 92.9787C30.7046 93.5607 31.236 94.1675 31.7674 94.7743C32.3607 95.4493 32.9539 96.1242 33.5781 96.7681C34.8263 98.0375 36.4454 98.5886 38.1819 98.8053C36.7049 97.9446 35.5185 96.7434 34.3567 95.5297C33.9118 95.0654 33.4854 94.5824 33.059 94.1056C31.8972 92.8053 30.7416 91.505 29.3018 90.4833C29.0546 90.3038 28.8136 90.118 28.5355 89.9013C28.3996 89.796 28.2574 89.6784 28.0968 89.5546C28.2636 89.5731 28.4243 89.5855 28.5788 89.5979C29.5799 89.6846 30.4574 89.7651 31.2484 90.3967C33.6399 92.3161 36.0684 94.1799 38.5032 96.0375C40.252 97.3749 42.211 98.3223 44.3429 98.83C46.0732 99.2387 47.7417 98.8796 49.3793 98.0808C49.1259 98.0808 48.8788 98.087 48.6316 98.0932C48.1125 98.1118 47.6181 98.1242 47.1237 98.0684C44.2441 97.7279 41.6672 96.5514 39.3189 94.9168C37.8729 93.9137 36.4887 92.8177 35.1106 91.7217C34.5112 91.2511 33.9179 90.7806 33.3185 90.3162C33.2505 90.2604 33.1826 90.1985 33.1084 90.1242C33.0713 90.0871 33.0281 90.0437 32.9786 89.9942C34.0477 89.8827 34.987 90.0437 35.8645 90.5329C36.2724 90.762 36.6864 90.9787 37.1004 91.2016C37.8482 91.6041 38.5959 92.0065 39.3313 92.4338C39.8442 92.731 40.3509 93.0406 40.8576 93.3502C42.6003 94.409 44.3367 95.474 46.308 96.1242C47.544 96.5328 48.7428 96.7372 50.0096 96.5019C51.6719 96.1985 53.1674 95.4493 54.632 94.6443C55.6331 94.0932 56.6774 93.7217 57.8145 93.6103C57.9319 93.5979 58.0431 93.5731 58.1605 93.5483C58.2099 93.536 58.2594 93.5298 58.3088 93.5174C58.3212 93.4802 58.3274 93.4431 58.3335 93.3997C58.3397 93.3626 58.3521 93.3254 58.3583 93.2821C58.3088 93.2821 58.2594 93.2821 58.2099 93.2821C58.0925 93.2821 57.9689 93.2821 57.8515 93.2883C57.6105 93.313 57.3695 93.3254 57.1285 93.3378C56.5353 93.375 55.9482 93.4121 55.3859 93.5545C54.737 93.7279 54.1067 93.9756 53.4764 94.2233C53.1118 94.3657 52.7472 94.5143 52.3764 94.6443C49.0827 95.8022 46.1659 94.892 43.4531 92.9601C43.4345 92.9477 43.4283 92.9106 43.4222 92.8548C43.416 92.8115 43.4098 92.762 43.3913 92.6939C43.9536 92.7682 44.5036 92.8363 45.0598 92.9044C46.2586 93.053 47.4389 93.2016 48.613 93.3812C51.6658 93.8517 54.4219 93.3192 56.8195 91.2388C57.4066 90.731 58.1543 90.3719 58.8773 90.0623C59.4953 89.796 60.1442 89.5979 60.7868 89.3998C61.0464 89.3193 61.2997 89.2388 61.5593 89.1583C59.897 89.0778 58.2594 89.1335 56.7516 89.9508C56.5909 90.0375 56.4364 90.1242 56.2757 90.2047C55.7196 90.5019 55.1572 90.7991 54.6258 91.1459C53.2601 92.0375 51.7832 92.2109 50.2135 91.9694C50.0591 91.9508 49.8984 91.957 49.7377 91.9632C49.6697 91.9632 49.6018 91.9632 49.5338 91.9632C49.5709 91.9199 49.6079 91.8703 49.645 91.827C50.7141 90.5638 50.7574 90.5143 52.2343 90.4462C54.0387 90.3657 55.5898 89.6908 57.0049 88.6382C59.0813 87.1026 61.2627 85.7899 63.7716 85.1026C63.8705 85.0778 63.9632 85.0345 64.062 84.9973C64.1115 84.9787 64.1547 84.9602 64.2042 84.9416C63.9199 84.7992 63.6542 84.7434 63.3946 84.7249C62.1464 84.632 60.9413 84.8797 59.8352 85.4122C58.5931 86.0128 57.3819 86.7125 56.183 87.406C56.0903 87.4555 56.0038 87.5112 55.9111 87.5608C54.7679 88.2171 53.5752 88.6505 52.2281 88.6134C52.3393 87.4121 52.3702 87.375 53.4208 87.1645C53.4764 87.1521 53.532 87.1459 53.5876 87.1335C53.7792 87.0964 53.9769 87.0654 54.1561 86.9849C54.5393 86.8177 54.9162 86.6567 55.2994 86.4957C56.4488 86.0066 57.5982 85.5174 58.7105 84.9478C59.9341 84.3224 61.1638 83.8085 62.5357 83.6227C63.1104 83.5484 63.6789 83.4307 64.2474 83.3193C64.4884 83.2698 64.7294 83.2202 64.9766 83.1769C64.0126 82.7001 63.0486 82.341 61.9795 82.3162C60.2554 82.279 58.8279 83.0097 57.4746 83.9694C56.2448 84.8425 54.9409 85.5422 53.4208 85.7837H53.3899C52.6483 85.9034 52.1828 85.5897 51.9933 84.8425C51.9933 84.8425 51.9933 84.793 52.0056 84.7682C52.0056 84.7558 52.0056 84.7434 52.0118 84.7372C54.0634 84.3781 55.4106 83.7837 56.6094 82.5639C57.5426 81.6227 58.6549 81.0469 59.8846 80.6444C60.2183 80.5329 60.5644 80.4339 60.9043 80.3348C61.0649 80.2914 61.2256 80.2419 61.3863 80.1986C59.2605 79.6227 57.3015 80.0128 55.6022 81.3069C54.323 82.279 52.914 82.8982 51.4371 83.4617C50.8068 83.7032 50.4669 83.4741 50.0961 83.0159C50.1641 82.9787 50.2321 82.9416 50.2939 82.9044C50.4113 82.8363 50.5225 82.7744 50.6338 82.7187C52.0056 82.0252 53.3095 81.2326 54.4342 80.1676C55.2561 79.3998 56.1892 78.8178 57.2583 78.4772C57.524 78.3905 57.7959 78.3162 58.0678 78.2357C58.1976 78.1986 58.3212 78.1614 58.451 78.1243C58.451 78.0933 58.451 78.0624 58.451 78.0314C58.451 78.0004 58.451 77.9695 58.4448 77.9385C58.2223 77.9385 57.9998 77.9385 57.7774 77.9323C57.2583 77.9199 56.733 77.9076 56.2201 77.9757C54.6752 78.1738 53.4517 79.0716 52.2281 79.9633L52.2096 79.9818C51.4 80.5763 50.5658 81.1335 49.7315 81.6908C49.5214 81.8332 49.3113 81.9695 49.1012 82.1119C48.5203 82.502 47.9704 82.2976 47.3709 81.9942C49.0085 80.1057 51.0787 78.8797 53.1489 77.6413C53.6865 77.3193 54.2241 77.0035 54.7556 76.6692C53.705 76.7992 52.6669 76.9416 51.7028 77.2946C49.404 78.1367 47.6058 79.6908 46.0052 81.5051C45.9805 81.5298 45.962 81.5608 45.9373 81.5856C45.8322 81.7156 45.7148 81.858 45.5912 81.8766C45.1463 81.9385 44.7013 81.9756 44.2132 82.0128C43.9969 82.0314 43.7806 82.0438 43.5458 82.0685C45.8199 79.4246 48.1496 77.0469 51.3382 75.6599C51.0354 75.5732 50.7697 75.5608 50.5163 75.5794C48.9776 75.6847 47.6243 76.3038 46.4193 77.2326C44.2255 78.9292 42.3593 80.9664 40.7649 83.2264C39.183 85.4617 37.0448 86.9168 34.6842 88.1614C33.9921 88.5267 33.3371 88.44 32.7315 88.3533C32.5028 88.3224 32.2742 88.2914 32.0579 88.2852C32.3854 88.0747 32.7253 87.8642 33.0713 87.6536C33.85 87.1769 34.6533 86.6877 35.401 86.1242C37.3909 84.632 38.9234 82.6877 40.4003 80.7125C42.0688 78.4834 43.9413 76.4834 46.5676 75.3565C46.7283 75.2884 46.8827 75.2141 47.0434 75.1398C47.1485 75.0902 47.2473 75.0407 47.3524 74.9912C47.2103 74.9169 47.0929 74.9107 46.9878 74.9354C44.1143 75.5422 41.5312 76.7001 39.5167 78.9168C38.7813 79.7404 38.0336 80.5701 37.4218 81.4803C35.5864 84.2047 33.059 86.0437 30.2164 87.5855C29.2029 88.1366 28.381 87.9199 27.3428 87.6227C29.9877 86.9601 31.8354 85.3812 33.3556 83.3255C33.4359 83.214 33.5163 83.1088 33.5966 82.9973C34.9685 81.1397 36.3403 79.2822 38.4229 78.1181C38.4229 78.1181 38.4229 78.1119 38.4352 78.0933C38.4352 78.0747 38.4476 78.0438 38.4661 78.0004C38.392 78.0004 38.3178 78.0004 38.2498 78.0066C38.083 78.0066 37.9285 78.019 37.774 78.0376C36.3712 78.2419 35.1786 78.9045 34.2084 79.8766C32.9539 81.1397 31.7922 82.502 30.6428 83.858C29.6602 85.0221 28.4675 85.8456 27.0339 86.31C24.8525 87.0282 22.6958 86.9292 20.5144 86.1614C20.5391 86.1366 20.5577 86.118 20.57 86.0995C20.5947 86.0747 20.6133 86.0561 20.6318 86.0499C20.6751 86.0375 20.7183 86.0252 20.7616 86.019C20.9222 85.9756 21.0891 85.9323 21.2559 85.9075C24.0677 85.4307 26.3479 84.0437 28.2142 81.8952C28.7394 81.2945 29.3574 80.762 29.9692 80.2357C30.1669 80.0685 30.3647 79.8952 30.5562 79.7218C30.7046 79.5856 30.8838 79.4803 31.0877 79.3565C31.1989 79.2884 31.3102 79.2202 31.4337 79.1397C30.5501 78.9168 29.9259 79.2574 29.3512 79.6413C29.1658 79.7651 28.9804 79.889 28.7889 80.019C27.0771 81.1707 25.3592 82.3162 23.7031 83.5546C21.979 84.8425 20.088 85.3626 17.9808 85.214C17.8942 85.2078 17.8139 85.1892 17.7089 85.1583C17.678 85.1521 17.6471 85.1397 17.61 85.1335L17.0662 85.4369L15.2926 86.4276L15.2803 86.4462ZM41.9267 89.1025C41.1913 87.0592 42.1615 84.7063 44.2193 83.5732C46.9816 82.0623 50.3062 83.4246 50.9118 86.3348C51.4248 88.8115 49.6265 91.375 47.0249 91.8641C44.7508 92.2914 42.6683 91.1645 41.9267 89.1025Z" fill="url(#paint0_linear_18_280)" />
            <path d="M44.7438 87.7467C44.3792 87.3814 44.0455 87.0594 43.7242 86.7312C43.3596 86.3597 43.3534 85.9387 43.5882 85.5052C43.9405 84.8365 44.509 84.4774 45.2443 84.3783C46.814 84.174 48.569 85.0099 49.1375 86.335C49.3291 86.7808 49.397 87.369 49.292 87.8458C48.9954 89.2266 47.2589 90.4711 45.8561 90.4154C44.4286 90.3597 43.8848 89.4557 44.5152 88.1678C44.5831 88.0315 44.6635 87.8953 44.7438 87.7529V87.7467Z" fill="url(#paint1_linear_18_280)" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M40.1845 1.45348C39.7348 1.46119 39.4145 1.59399 38.7104 1.81367C38.0354 2.02305 38.3552 2.74024 38.635 3.19176C38.7739 3.41069 39.0335 3.8234 38.9317 4.14829C38.7221 4.79623 37.5852 4.76285 36.9109 5.0114C36.0813 5.32135 36.6073 5.98018 36.6073 5.98018C36.7949 6.18848 36.8906 6.40032 36.9734 6.5497C37.6501 7.76214 35.9011 7.7373 35.9011 7.7373L34.157 7.65558C34.157 7.65558 33.486 7.64555 33.3583 8.05315C33.2602 8.36623 33.7998 8.79568 33.7998 8.79568C33.7998 8.79568 34.5956 9.33823 34.8341 9.54957C34.987 9.68209 35.1834 9.94508 35.0959 10.3069C35.0685 10.4151 35.0281 10.5647 35.0281 10.5647L11.5879 85.8611C11.5879 85.8611 11.5471 85.9911 11.4941 86.2016C11.4701 86.2784 11.4442 86.3611 11.4204 86.4574C11.3134 86.8196 10.9688 86.9058 10.7736 86.9288C10.4574 86.9655 9.49494 86.9546 9.49494 86.9546C9.49494 86.9546 8.80725 86.9977 8.70914 87.3108C8.58326 87.7125 9.13767 88.0947 9.13767 88.0947L10.6152 89.0271C10.6152 89.0271 12.0643 90.0089 10.8174 90.6158C10.6642 90.6909 10.4649 90.8099 10.1922 90.8733C10.1922 90.8733 9.38292 91.1183 9.88861 91.8421C10.3 92.4324 11.2518 93.0565 11.0541 93.7081C10.9523 94.033 10.5057 94.217 10.2651 94.3229C9.77787 94.533 9.10638 94.9382 9.54069 95.4967C9.99305 96.0804 10.1801 96.373 10.5447 96.637C10.9151 96.9029 11.3754 97.0477 11.831 97.0419C12.2807 97.0342 12.601 96.9014 13.3051 96.6817C13.9801 96.4723 13.6603 95.7551 13.3805 95.3036C13.2416 95.0846 12.982 94.6719 13.0838 94.347C13.2934 93.6991 14.4303 93.7325 15.1046 93.4839C15.9342 93.174 15.4082 92.5152 15.4082 92.5152C15.2166 92.2991 15.115 92.0854 15.034 91.9301C14.4266 90.7654 15.9989 90.7541 15.9989 90.7541L17.8585 90.8398C17.8585 90.8398 18.5295 90.8498 18.6572 90.4422C18.7553 90.1291 18.2157 89.6997 18.2157 89.6997L17.2349 88.9821C17.2349 88.9821 16.8242 88.7619 17.0556 88.0235C17.063 87.9999 17.0685 87.9822 17.0759 87.9585C17.15 87.7223 17.1914 87.6315 17.1914 87.6315L40.6705 12.2109C40.6705 12.2109 40.7812 11.8369 40.9433 11.7127C41.1382 11.5664 41.3028 11.5792 41.3028 11.5792L42.5169 11.5525C42.5169 11.5525 43.2046 11.5094 43.3027 11.1963C43.4285 10.7946 42.8741 10.4125 42.8741 10.4125L41.2997 9.41714C41.2997 9.41714 40.0162 8.50691 41.1789 7.89942C41.3339 7.81842 41.5333 7.69945 41.8196 7.63383C41.8196 7.63383 42.6289 7.38884 42.1232 6.66505C41.7118 6.07477 40.76 5.45067 40.9577 4.79901C41.0595 4.47412 41.5061 4.2902 41.7467 4.18422C42.2339 3.97415 42.9054 3.56897 42.4711 3.01042C42.0187 2.42672 41.8317 2.1342 41.4671 1.87018C41.0967 1.60431 40.6364 1.45944 40.1808 1.46529L40.1845 1.45348ZM17.7135 80.3389C17.358 81.4731 16.4438 82.1977 15.665 81.9526C14.8861 81.7074 14.5494 80.589 14.9049 79.4548C15.2603 78.3206 16.1745 77.596 16.9534 77.8412C17.7322 78.0863 18.0689 79.2047 17.7135 80.3389ZM27.1784 50.1354C26.823 51.2695 25.9088 51.9942 25.1299 51.749C24.3511 51.5039 24.0144 50.3855 24.3698 49.2513C24.7252 48.1171 25.6395 47.3925 26.4183 47.6376C27.1972 47.8828 27.5338 49.0012 27.1784 50.1354ZM29.0869 44.045C28.7315 45.1792 27.8173 45.9039 27.0384 45.6587C26.2596 45.4135 25.9229 44.2951 26.2783 43.161C26.6338 42.0268 27.548 41.3021 28.3268 41.5473C29.1057 41.7924 29.4424 42.9108 29.0869 44.045ZM30.9899 37.9724C30.6345 39.1066 29.7203 39.8313 28.9414 39.5861C28.1626 39.3409 27.8259 38.2225 28.1813 37.0883C28.5368 35.9542 29.451 35.2295 30.2298 35.4747C31.0087 35.7198 31.3453 36.8382 30.9899 37.9724ZM32.8911 31.9057C32.5356 33.0399 31.6214 33.7645 30.8426 33.5194C30.0637 33.2742 29.727 32.1558 30.0825 31.0217C30.4379 29.8875 31.3521 29.1628 32.131 29.408C32.9098 29.6531 33.2465 30.7715 32.8911 31.9057ZM34.8477 25.6618C34.4923 26.796 33.5781 27.5206 32.7992 27.2755C32.0204 27.0303 31.6837 25.9119 32.0391 24.7777C32.3946 23.6435 33.3088 22.9189 34.0876 23.1641C34.8665 23.4092 35.2031 24.5276 34.8477 25.6618ZM36.697 19.7605C36.3416 20.8947 35.4274 21.6193 34.6485 21.3742C33.8697 21.129 33.533 20.0106 33.8884 18.8764C34.2439 17.7422 35.1581 17.0176 35.9369 17.2628C36.7158 17.5079 37.0524 18.6263 36.697 19.7605Z" fill="#FFA643" />
            <path d="M98.6302 57.6343H83.9907C84.0772 59.7209 84.6396 61.3494 85.6839 62.5073C86.753 63.7519 88.2299 64.3773 90.1147 64.3773C92.7225 64.3773 95.0213 63.8138 97.0235 62.6807V67.0769C94.7062 67.95 92.3641 68.3834 89.9849 68.3834C86.2525 68.3834 83.4716 67.1946 81.6425 64.8169C80.0481 62.6993 79.251 59.7395 79.251 55.9377C79.251 52.1358 80.1347 49.3061 81.902 47.0151C83.6694 44.7241 86.0424 43.5786 89.0271 43.5786C92.3579 43.5786 94.8483 44.7675 96.4982 47.1452C97.9195 49.1761 98.624 51.8572 98.624 55.1947V57.6343H98.6302ZM93.8966 53.4981C93.8966 51.8758 93.4764 50.5074 92.636 49.4052C91.7647 48.2473 90.6214 47.6653 89.2063 47.6653C87.7912 47.6653 86.5305 48.2597 85.5171 49.4486C84.5036 50.6374 83.9969 51.9872 83.9969 53.4981H93.8966Z" fill="white" />
            <path d="M74.9682 67.9376C73.8682 68.402 72.62 68.6311 71.2357 68.6311C68.4858 68.6311 66.7061 67.8943 65.8966 66.4144C65.291 65.4299 64.982 63.529 64.982 60.7117V48.3959H61.2495V44.0864H64.982V38.9099L69.6723 37.3867V44.0864H74.2761V48.3959H69.6723V61.9315C69.6723 63.6157 70.4386 64.4578 71.9711 64.4578C72.9846 64.4578 73.8683 64.2658 74.6222 63.8943L74.9682 67.9438V67.9376Z" fill="white" />
            <path d="M50.7321 67.9628V65.5666C49.1687 67.4799 47.1109 68.4396 44.5649 68.4396C41.7284 68.4396 39.5718 67.5851 38.0948 65.87C36.7909 64.2724 36.1421 62.13 36.1421 59.4304V44.1982H40.7891V58.5573C40.7891 62.4149 42.1919 64.3467 45.0036 64.3467C46.8884 64.3467 48.3221 63.6347 49.3046 62.2167C50.0894 61.0588 50.4788 59.4737 50.4788 57.4737V44.1982H55.0826V61.9567C55.0826 64.1053 55.1691 66.1052 55.3421 67.9628H50.7383H50.7321Z" fill="white" />
            <path d="M16.0836 40.588H5.18279V49.5539H15.478V54.0369H5.18279V68.3526H0.449219V36.1484H16.0836V40.588Z" fill="white" />
            <defs>
                <linearGradient id="paint0_linear_18_280" x1="88.2726" y1="87.9154" x2="61.5875" y2="126.116" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2EC859" />
                    <stop offset="1" stop-color="#10B9EA" />
                </linearGradient>
                <linearGradient id="paint1_linear_18_280" x1="44.0208" y1="89.3502" x2="46.4361" y2="84.8683" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2EC859" />
                    <stop offset="1" stop-color="#10B9EA" />
                </linearGradient>
            </defs>
        </svg>
    )
}
export default Logo