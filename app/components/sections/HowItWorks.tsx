import createExpAppScreen from "../../assets/images/create-experience.png";
import chatAppScreen from "../../assets/images/chat.png";
import bookingAppScreen from "../../assets/images/booking.png";
import { BookIcon, ChatIcon, PenIcon, SearchIcon } from "../Icons";
import AppScreenShot from "../../assets/images/yoliday app home screen.png";
import Link from "next/link";
import Image from "next/image";
import YobotScreen from "../../assets/images/yobot.png";
function HowItWorks() {
  return (
    <section className="mx-5 mt-20 flex flex-col items-center md:mt-10 lg:mt-20">
      <h2 className="text-3xl font-medium text-gray-800 text-opacity-80">
        How it works
      </h2>
      <div className="mb-10 mt-10 flex flex-col items-center md:flex-row md:gap-40 lg:mb-0 lg:gap-56">
        <div className="flex flex-col md:w-1/2">
          <h3 className="flex items-center text-lg font-bold text-[#4d4b4a]">
            <div className="size-6">
              <SearchIcon />
            </div>
            Discover Your Experience
          </h3>
          <p className="pl-6 lg:w-80">
            Explore unique experiences, from guided tours and cultural journeys
            to adventure treks and food tastings.
          </p>
        </div>

        <div className="pattern-1 w-72">
          <Image
            className="mt-5 h-[540px] w-full object-cover lg:mt-0 lg:h-[500px]"
            src={AppScreenShot}
            width={250}
            height={500}
            alt=""
          ></Image>
        </div>
      </div>
      <div className="mb-10 mt-10 flex flex-col items-center md:flex-row-reverse md:gap-40 lg:mb-0 lg:gap-56">
        <div className="flex flex-col md:w-1/2">
          <h3 className="flex items-center text-lg font-bold text-[#4d4b4a]">
            <div className="size-6">
              <PenIcon />
            </div>
            Create Your Own Experience
          </h3>
          <p className="pl-6 lg:w-80">
            Have a unique adventure in mind? Easily create and share your own
            experience for others to join.
          </p>
        </div>
        <div className="pattern-2 w-72">
          <Image
            className="mt-5 h-[500px] object-cover lg:mt-0"
            src={createExpAppScreen}
            width={250}
            height={500}
            alt=""
          ></Image>
        </div>
      </div>
      <div className="mb-10 mt-10 flex flex-col items-center md:flex-row md:gap-40 lg:mb-0 lg:gap-56">
        <div className="flex flex-col md:w-1/2">
          <h3 className="flex items-center text-lg font-bold text-[#4d4b4a]">
            <div className="size-6">
              <BookIcon />
            </div>
            Book with Ease
          </h3>
          <p className="pl-6 lg:w-80">
            Choose your perfect experience, confirm your spot in just a few
            clicks.
          </p>
        </div>
        <div className="pattern-3 w-72">
          <Image
            className="mt-5 h-[520px] object-cover lg:mt-0"
            src={bookingAppScreen}
            width={250}
            height={500}
            alt=""
          ></Image>
        </div>
      </div>
      <div className="mb-10 mt-10 flex flex-col items-center md:mb-0 md:flex-row-reverse md:gap-40 lg:gap-56">
        <div className="flex flex-col md:w-1/2">
          <h3 className="flex items-center text-lg font-bold text-[#4d4b4a]">
            <div className="size-6">
              <ChatIcon />
            </div>
            Connect with Fellow Explorers
          </h3>
          <p className="pl-6 lg:w-80">
            Meet like-minded adventurers and share insights before you embark on
            your journey.
          </p>
        </div>
        <div className="pattern-4 w-72">
          <Image
            className="mt-5 h-[500px] object-cover lg:mt-0"
            src={chatAppScreen}
            width={250}
            height={500}
            alt=""
          ></Image>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center md:flex-row md:gap-40 lg:mb-0 lg:gap-56">
        <div className="flex flex-col md:w-1/2">
          <h3 className="flex items-center text-lg font-bold text-[#4d4b4a]">
            <div className="size-6">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.51854 2.1898C9.71664 2.17674 9.88209 2.16368 9.88644 2.15715C9.8908 2.15279 10.2522 2.14844 11.4778 2.14844L11.8 2.21592C11.9763 2.25293 12.207 2.30518 12.3159 2.33565C12.4247 2.36613 12.6402 2.43579 12.7948 2.49021C12.9494 2.54464 13.1758 2.63171 13.2955 2.68178C13.4152 2.73185 13.6046 2.81893 13.7156 2.87553C13.8245 2.92995 14.0269 3.04097 14.1619 3.12152C14.2947 3.19989 14.4558 3.30003 14.5146 3.34139C14.5755 3.38493 14.7649 3.53078 14.9391 3.66793C15.1132 3.80507 15.3766 4.04018 15.5247 4.19256C15.6727 4.34277 15.8926 4.58876 16.0123 4.73897C16.1342 4.88918 16.2953 5.10469 16.3715 5.21789C16.4477 5.33109 16.5565 5.50742 16.6131 5.60974C16.6719 5.71205 16.7786 5.9145 16.8526 6.06036C16.9244 6.20839 17.0246 6.42826 17.0746 6.55016C17.1225 6.67425 17.2074 6.905 17.2597 7.06174C17.3119 7.22065 17.3685 7.42311 17.3859 7.50801C17.4033 7.59508 17.4382 7.76053 17.4621 7.87373C17.4861 7.98693 17.5209 8.23292 17.5427 8.41796C17.571 8.69225 17.5753 8.89253 17.5666 9.47376C17.5579 10.0659 17.547 10.2379 17.51 10.4534C17.4839 10.5971 17.436 10.8322 17.4012 10.9758C17.3663 11.1195 17.3032 11.359 17.2597 11.5092C17.2139 11.6594 17.1443 11.8684 17.1007 11.9772C17.0572 12.0861 16.9527 12.319 16.8656 12.4997C16.7807 12.6782 16.6414 12.9438 16.5565 13.0874C16.4716 13.2311 16.3541 13.4118 16.2953 13.4902C16.2365 13.5685 16.0819 13.7688 15.9535 13.9364C15.8098 14.1193 15.6836 14.3109 15.6335 14.4154C15.5878 14.5111 15.5355 14.6526 15.5181 14.731C15.4985 14.8094 15.4833 14.9378 15.4833 15.0184C15.4833 15.1011 15.4985 15.2426 15.5181 15.334C15.5377 15.4276 15.5878 15.5822 15.627 15.678C15.6683 15.7738 15.7489 15.9261 15.8033 16.0154C15.8686 16.1199 16.0036 16.2766 16.1777 16.4508C16.3279 16.601 16.55 16.7969 16.6697 16.8862C16.7894 16.9754 16.9897 17.1191 17.116 17.204C17.2422 17.2889 17.4186 17.4021 17.5078 17.4565C17.5971 17.5109 17.7103 17.5741 17.7582 17.598C17.8061 17.622 17.8627 17.6677 17.8844 17.7003C17.904 17.7308 17.9214 17.7787 17.9214 17.8048C17.9214 17.8331 17.8997 17.8767 17.8714 17.905C17.8235 17.9529 17.817 17.955 17.2575 17.9529C16.8286 17.9529 16.6044 17.942 16.3323 17.9093C16.1342 17.8854 15.8991 17.8549 15.8098 17.8418C15.7206 17.8288 15.4898 17.7896 15.2983 17.7548C15.1067 17.7177 14.8215 17.6568 14.667 17.6154C14.5124 17.5741 14.2512 17.4979 14.0901 17.4456C13.929 17.3934 13.5415 17.241 13.2302 17.1082C12.9189 16.9776 12.5401 16.8078 12.3877 16.736C12.2332 16.6619 12.096 16.6032 12.083 16.6032C12.0677 16.6032 12.0438 16.5945 12.0329 16.5836C12.022 16.5705 11.9436 16.5335 11.7063 16.4399L10.6723 16.4247C10.1041 16.416 9.50984 16.4029 9.35528 16.3964C9.10058 16.3855 9.06792 16.3877 9.03309 16.4225C9.01132 16.4443 8.99391 16.4791 8.99608 16.4987C8.99608 16.527 8.98302 16.5357 8.95255 16.527C8.9286 16.5204 8.88942 16.5117 8.86547 16.5052C8.82628 16.4965 8.83499 16.4834 8.92642 16.3985C8.98302 16.3463 9.05704 16.2483 9.09187 16.1765C9.13758 16.0829 9.15718 16.0067 9.16588 15.8957C9.17241 15.7738 9.16371 15.7172 9.1267 15.6127C9.09187 15.5191 9.0418 15.4472 8.95472 15.3601C8.86765 15.2731 8.79581 15.223 8.7022 15.1882C8.58247 15.1446 8.54764 15.1403 8.28859 15.1533C8.13403 15.1599 7.91851 15.1708 7.80966 15.1773C7.703 15.1838 7.44177 15.1991 7.23278 15.2143C6.89754 15.2361 6.83658 15.2448 6.73427 15.2948C6.66896 15.3253 6.57535 15.3884 6.43821 15.5125L6.15521 15.3166L6.17045 15.112L5.97888 14.9574C5.87221 14.8703 5.55438 14.5677 5.27356 14.2804C4.99273 13.9952 4.72497 13.7122 4.67926 13.6534C4.63354 13.5925 4.49422 13.3813 4.36796 13.1789C4.24387 12.9786 4.07843 12.6912 4.00224 12.5367C3.92604 12.3843 3.83026 12.1818 3.79325 12.0861C3.75407 11.9903 3.6757 11.7704 3.61692 11.5963C3.55815 11.4221 3.49066 11.2022 3.46889 11.1065C3.44495 11.0107 3.39705 10.7603 3.36222 10.5513C3.32522 10.3424 3.28385 10.0877 3.27297 9.98534C3.25991 9.88302 3.24902 9.56519 3.24902 9.27784C3.24902 8.96001 3.26208 8.65307 3.28168 8.49415C3.29909 8.35047 3.34263 8.08054 3.37964 7.8955C3.41665 7.71046 3.47107 7.46447 3.49937 7.35127C3.52767 7.23807 3.59515 7.01602 3.64958 6.86146C3.70182 6.7069 3.8172 6.41737 3.9021 6.21927C3.98918 6.02117 4.07625 5.82525 4.09802 5.78389C4.11979 5.74253 4.24605 5.55096 4.37884 5.35939C4.51164 5.16782 4.64225 4.97843 4.66837 4.93924C4.69667 4.89788 4.76851 4.80645 4.82729 4.73462C4.88824 4.6606 5.06893 4.46468 5.23002 4.29923C5.39111 4.13161 5.61751 3.91392 5.73071 3.81378C5.84391 3.71364 6.06595 3.53949 6.22052 3.42629C6.37508 3.31527 6.58188 3.17812 6.67767 3.1237C6.77345 3.06927 6.96067 2.97131 7.09128 2.906C7.22407 2.83852 7.4483 2.73838 7.59197 2.68178C7.73565 2.62518 7.94681 2.54681 8.06001 2.50545C8.17321 2.46409 8.34083 2.41184 8.43009 2.38572C8.51934 2.36178 8.72179 2.31171 8.87635 2.27688C9.08098 2.22898 9.25949 2.20504 9.51854 2.1898Z"
                  fill="#4D4D4D"
                />
                <path
                  d="M9.27739 0.225372C9.43848 0.20578 9.63005 0.188365 9.70189 0.184011C9.77373 0.179657 10.0676 0.175303 10.355 0.173126C10.688 0.170949 11.0037 0.181834 11.2257 0.201426C11.4173 0.221018 11.6372 0.244965 11.7155 0.258026C11.7939 0.268911 11.9985 0.308095 12.1727 0.345103C12.3468 0.379933 12.6103 0.445241 12.7605 0.486602C12.9107 0.530141 13.1262 0.597625 13.2394 0.63681C13.3526 0.675994 13.5485 0.750009 13.6748 0.800078C13.801 0.850147 14.0405 0.956816 14.2081 1.03736C14.3757 1.11791 14.6217 1.24635 14.7523 1.32036C14.883 1.39655 15.1181 1.54241 15.2748 1.6469C15.4294 1.74921 15.6993 1.94731 15.8734 2.08664C16.0476 2.22596 16.3262 2.46977 16.4917 2.63087C16.6571 2.79196 16.901 3.04448 17.0337 3.19469C17.1644 3.34489 17.3625 3.58653 17.4713 3.73239C17.5802 3.88042 17.7543 4.13512 17.861 4.29838C17.9655 4.46383 18.144 4.77948 18.255 5.00153C18.3682 5.22357 18.5053 5.51746 18.5619 5.6546C18.6185 5.79175 18.7165 6.06169 18.7796 6.25326C18.8449 6.44482 18.9211 6.69952 18.9516 6.81925C18.9799 6.93898 19.03 7.15885 19.0605 7.30906C19.0909 7.45927 19.1258 7.67043 19.1649 7.97302L19.3195 7.99044C19.4066 7.99914 19.5241 8.02962 19.5851 8.05574C19.6439 8.08404 19.7418 8.14935 19.8006 8.2016C19.8572 8.25602 19.929 8.34527 20.0096 8.50636V12.4248L19.9573 12.5271C19.929 12.5859 19.8572 12.6752 19.8006 12.7296C19.7418 12.7818 19.6395 12.8515 19.4545 12.9364L18.6272 12.9429C17.8697 12.9473 17.7935 12.9451 17.7238 12.9103C17.6825 12.8885 17.6259 12.8363 17.5976 12.7949C17.5497 12.7252 17.5475 12.7013 17.5562 12.5228C17.5649 12.3443 17.5758 12.3007 17.6955 12.0112C17.7674 11.837 17.8653 11.5671 17.9132 11.4125C17.9633 11.258 18.0373 10.9815 18.0808 10.803C18.1222 10.6223 18.1766 10.3154 18.2027 10.1173C18.2267 9.91918 18.2572 9.68408 18.2681 9.59482C18.2811 9.50557 18.2898 9.26611 18.2898 9.06148C18.2898 8.85032 18.2702 8.52378 18.2463 8.29956C18.2245 8.08404 18.1897 7.80975 18.1701 7.69002C18.1527 7.57029 18.1026 7.33518 18.0613 7.16756C18.0221 6.99994 17.9568 6.76483 17.9176 6.6451C17.8806 6.52537 17.8 6.29897 17.7391 6.14441C17.6781 5.98985 17.5475 5.70032 17.4495 5.50222C17.3516 5.30412 17.2188 5.06031 17.1578 4.95799C17.0969 4.85568 16.9946 4.69894 16.9336 4.60968C16.8727 4.52043 16.7638 4.36805 16.692 4.27226C16.6201 4.17648 16.4873 4.01103 16.3981 3.90219C16.3067 3.79552 16.1456 3.61483 16.0367 3.50163C15.9279 3.38843 15.7037 3.17945 15.5339 3.0336C15.3662 2.88774 15.1072 2.68311 14.957 2.57862C14.8089 2.47195 14.6 2.33045 14.4911 2.26514C14.3823 2.19766 14.1667 2.07793 14.0122 1.99521C13.8576 1.91466 13.6269 1.80364 13.5006 1.74921C13.3743 1.69697 13.1784 1.6186 13.0652 1.57724C12.952 1.53588 12.7409 1.46622 12.5972 1.42485C12.4535 1.38132 12.1988 1.31601 12.0312 1.28118C11.8636 1.24635 11.6328 1.20281 11.5196 1.18322C11.4064 1.1658 11.167 1.13968 10.9863 1.12662C10.7816 1.1092 10.4682 1.10267 10.1482 1.11138C9.79767 1.11791 9.53427 1.1375 9.31004 1.17015C9.13154 1.19628 8.82677 1.2507 8.6352 1.29424C8.44363 1.3356 8.11492 1.42703 7.90593 1.49451C7.69695 1.56418 7.4183 1.66649 7.28551 1.72527C7.15272 1.78187 6.92414 1.89071 6.77394 1.96691C6.62373 2.04092 6.4191 2.15412 6.31678 2.21507C6.21447 2.27821 6.07732 2.3631 6.01202 2.40664C5.94671 2.45018 5.81827 2.53726 5.72902 2.60257C5.63976 2.66787 5.47214 2.79631 5.35894 2.88774C5.24574 2.977 4.98451 3.21863 4.77988 3.42326C4.57525 3.62572 4.30531 3.92178 4.18123 4.07852C4.05714 4.23525 3.88081 4.47689 3.78938 4.61186C3.69795 4.74901 3.56298 4.9667 3.48679 5.09949C3.4106 5.23228 3.29305 5.4565 3.22556 5.60018C3.1559 5.74386 3.06447 5.95502 3.01875 6.06822C2.97304 6.18142 2.89902 6.38822 2.85113 6.52537C2.80542 6.66252 2.73358 6.90851 2.69222 7.0696C2.65303 7.23069 2.59861 7.47015 2.57466 7.60294C2.55072 7.73574 2.51153 8.0405 2.48541 8.28214C2.46146 8.52596 2.44187 8.87644 2.44187 9.06148C2.44187 9.26175 2.45929 9.55782 2.48541 9.78421C2.51153 9.99755 2.54636 10.261 2.56378 10.3676C2.58119 10.4765 2.62909 10.7007 2.67045 10.8683C2.70963 11.0359 2.78147 11.295 2.83154 11.4452C2.87943 11.5954 2.95998 11.8153 3.00787 11.935C3.05485 12.0474 3.1095 12.1865 3.13584 12.2536L3.14066 12.2659C3.16824 12.3428 3.18202 12.4372 3.18202 12.5489C3.18202 12.6795 3.17114 12.7339 3.13848 12.7884C3.11454 12.8275 3.06665 12.8776 3.02964 12.8972C2.97739 12.9299 2.96869 12.9473 2.97957 12.9908C2.9861 13.0213 3.01658 13.128 3.04488 13.2303C3.07318 13.3326 3.1559 13.5329 3.22774 13.6765C3.29958 13.8202 3.42366 14.0248 3.50421 14.1337C3.58475 14.2425 3.71754 14.4015 3.80244 14.4907C3.88517 14.5778 4.02884 14.7106 4.1181 14.7824C4.20735 14.8543 4.36191 14.9653 4.46205 15.0306C4.56001 15.0937 4.71675 15.183 4.80818 15.2309C4.90179 15.2766 5.06723 15.3484 5.1739 15.392C5.28057 15.4333 5.50697 15.5008 5.67459 15.5443C5.84222 15.5857 6.04685 15.6271 6.13175 15.6358C6.21665 15.6445 6.29937 15.6554 6.31678 15.6597C6.33855 15.6662 6.37556 15.6314 6.42128 15.5596C6.45828 15.5008 6.5323 15.4203 6.58454 15.3832C6.63461 15.3462 6.71516 15.3005 6.76305 15.2788C6.82401 15.2526 6.96115 15.233 7.23109 15.2156C7.44007 15.2004 7.7013 15.1851 7.80797 15.1786C7.91464 15.1721 8.13233 15.1612 8.28689 15.1547C8.54595 15.1416 8.58078 15.146 8.70051 15.1895C8.79412 15.2243 8.86595 15.2744 8.95303 15.3615C9.04011 15.4486 9.09018 15.5204 9.12501 15.614C9.16201 15.7185 9.17072 15.7751 9.16419 15.897C9.15548 16.008 9.13589 16.0842 9.09018 16.1778C9.05534 16.2497 8.98351 16.3454 8.92691 16.3955C8.87248 16.4456 8.77888 16.5022 8.7201 16.524C8.65697 16.5457 8.50023 16.5697 8.34132 16.5827C8.19111 16.5936 7.80579 16.6132 7.48143 16.6263C6.90891 16.6524 6.89149 16.6524 6.77394 16.6089C6.70427 16.5827 6.60414 16.5196 6.41474 16.3476L6.17528 16.3237C6.04249 16.3084 5.85745 16.2823 5.76167 16.2627C5.66589 16.2453 5.47432 16.1974 5.33717 16.1582C5.20003 16.119 4.98886 16.0472 4.86913 15.9993C4.7494 15.9514 4.56872 15.8687 4.4664 15.8165C4.36409 15.7642 4.19211 15.6641 4.08544 15.5944C3.97877 15.5247 3.80027 15.3963 3.6936 15.3092C3.58693 15.2222 3.40407 15.0545 3.29087 14.9348C3.17767 14.8151 3.02093 14.6279 2.94256 14.519C2.86419 14.408 2.75535 14.2382 2.69875 14.1381C2.64215 14.0401 2.55289 13.8507 2.49847 13.7201C2.44623 13.5895 2.37656 13.3783 2.34609 13.252C2.31561 13.1258 2.28949 13.0061 2.28949 12.9843C2.28949 12.9495 2.24813 12.9473 1.78444 12.9407L1.78349 12.9407C1.28157 12.9364 1.27714 12.9364 1.15096 12.8754C1.08348 12.8428 0.98116 12.7731 0.92456 12.7209C0.859253 12.6621 0.796122 12.5728 0.689453 12.3486V8.56079L0.756938 8.43017C0.796122 8.35833 0.874491 8.25602 0.931091 8.2016C0.989868 8.14935 1.08565 8.08404 1.14661 8.05574C1.20974 8.02744 1.32076 7.99914 1.56022 7.97955L1.59723 7.72485C1.619 7.58553 1.66907 7.31124 1.7126 7.11314C1.75614 6.91504 1.83016 6.62551 1.87805 6.47095C1.92594 6.31639 1.9956 6.10523 2.03261 6.00291C2.06962 5.9006 2.13275 5.73515 2.17411 5.63283C2.21547 5.53052 2.32649 5.29106 2.4201 5.09949C2.51371 4.90792 2.67262 4.61621 2.77276 4.45077C2.87072 4.2875 3.0427 4.02845 3.14937 3.87606C3.25604 3.72586 3.44543 3.48204 3.56516 3.33836C3.68707 3.19251 3.91782 2.94434 4.07674 2.78325C4.23783 2.62216 4.4664 2.40664 4.58613 2.30215C4.70586 2.19984 4.90179 2.04092 5.02152 1.95167C5.14125 1.86024 5.34152 1.71656 5.46779 1.63384C5.59405 1.54894 5.79432 1.42485 5.91405 1.35519C6.03378 1.28771 6.26889 1.16145 6.43651 1.07872C6.60414 0.993824 6.86972 0.874094 7.02428 0.810963C7.17884 0.747832 7.42483 0.656402 7.56851 0.60851C7.71219 0.560618 7.94294 0.490956 8.08009 0.453949C8.21723 0.416941 8.47628 0.358164 8.65697 0.323334C8.83548 0.288503 9.1163 0.242788 9.27739 0.225372Z"
                  fill="#282828"
                />
                <path
                  d="M9.28974 1.99353C9.38553 1.97829 9.53791 1.9587 9.62717 1.94999C9.71642 1.93911 10.0495 1.9304 10.3673 1.92822C10.733 1.92822 11.053 1.93693 11.2381 1.95652C11.3992 1.97394 11.6604 2.0153 11.815 2.04578C11.9695 2.07843 12.1567 2.11761 12.2286 2.13503C12.3004 2.15245 12.468 2.20251 12.5987 2.24388C12.7293 2.28524 12.9317 2.3549 13.0449 2.39844C13.1581 2.44198 13.4281 2.56171 13.6436 2.66837C13.8591 2.77287 14.1334 2.9209 14.2553 2.99709C14.375 3.0711 14.5666 3.19954 14.6798 3.28009C14.793 3.36063 14.9824 3.50649 15.1021 3.60445C15.2218 3.70459 15.4482 3.91357 15.6028 4.07031C15.7595 4.22487 15.9598 4.44256 16.0491 4.54923C16.1405 4.65808 16.2581 4.80393 16.3125 4.87577C16.3669 4.94761 16.4757 5.10434 16.5541 5.22408C16.6325 5.34381 16.7479 5.53102 16.811 5.63769C16.8719 5.74654 16.9743 5.94246 17.0396 6.07307C17.1027 6.20586 17.1985 6.42138 17.2529 6.55199C17.3052 6.68479 17.3835 6.9003 17.4271 7.03092C17.4684 7.16371 17.525 7.3531 17.549 7.45542C17.5729 7.55773 17.6034 7.69052 17.6165 7.7493C17.6295 7.81025 17.6556 7.93651 17.673 8.0323C17.6905 8.12808 17.7188 8.3436 17.7362 8.51122C17.7536 8.67884 17.7688 9.01626 17.7688 9.26226C17.7688 9.50825 17.758 9.82608 17.7449 9.96976C17.734 10.1134 17.7079 10.3289 17.6905 10.4487C17.6731 10.5684 17.6295 10.7948 17.5925 10.9494C17.5555 11.1039 17.4815 11.3695 17.4271 11.5371C17.3726 11.7048 17.2856 11.9508 17.2311 12.0814C17.1789 12.212 17.0744 12.4384 17.0026 12.5821C16.9307 12.7257 16.8328 12.9108 16.7827 12.9957C16.7348 13.0806 16.6303 13.246 16.5519 13.3657C16.4736 13.4855 16.3364 13.677 16.2472 13.7902C16.1579 13.9034 16.0229 14.0711 15.9446 14.1603C15.8662 14.2496 15.7835 14.3671 15.7617 14.4216C15.7378 14.476 15.7051 14.5783 15.6877 14.6501C15.6725 14.722 15.6572 14.8765 15.6572 14.9941C15.6572 15.1095 15.6703 15.2705 15.6877 15.3533C15.7051 15.4338 15.7399 15.5535 15.7639 15.6189C15.7878 15.6842 15.8553 15.817 15.9097 15.9127C15.9838 16.0368 16.0839 16.1566 16.2537 16.3264C16.3865 16.4591 16.6325 16.6703 16.8001 16.7944C16.9677 16.9207 17.2377 17.1079 17.3988 17.2102C17.5599 17.3125 17.7754 17.4453 17.8777 17.5041C17.9931 17.5716 18.0823 17.6412 18.1128 17.6891C18.1433 17.7348 18.1629 17.7958 18.1629 17.8502C18.1629 17.9046 18.1433 17.9656 18.1128 18.0113C18.0845 18.0526 18.0344 18.1071 18.0018 18.131C17.943 18.1746 17.9169 18.1767 17.4684 18.1702C17.2072 18.168 16.8153 18.1506 16.5933 18.131C16.3713 18.1136 16.0142 18.0744 15.7987 18.0461C15.5832 18.0178 15.2654 17.9634 15.0912 17.9264C14.9171 17.8894 14.658 17.8241 14.5143 17.7827C14.3707 17.7414 14.1552 17.6717 14.0354 17.6281C13.9157 17.5868 13.6806 17.4975 13.513 17.43C13.3453 17.3647 12.9818 17.208 12.7075 17.0817C12.4332 16.9555 12.0936 16.8053 11.9565 16.7487C11.8193 16.6899 11.6626 16.6311 11.6082 16.6159C11.5341 16.5963 11.4471 16.5985 11.2381 16.6181C11.0879 16.6311 10.7069 16.6442 10.3891 16.6442C10.0713 16.6442 9.71424 16.6355 9.59451 16.6202C9.47478 16.6072 9.31804 16.5876 9.24621 16.5745C9.17437 16.5636 9.08947 16.5484 9.05681 16.544C9.01763 16.5375 8.99586 16.5201 8.99586 16.4962C8.99368 16.4744 9.0111 16.4396 9.03287 16.4178C9.0677 16.383 9.10035 16.3808 9.35505 16.3917C9.50961 16.3982 10.1039 16.4113 11.7061 16.4352L11.8585 16.4962C11.9434 16.5288 12.0218 16.5658 12.0327 16.5789C12.0435 16.5898 12.0675 16.5985 12.0827 16.5985C12.0958 16.5985 12.2329 16.6572 12.3875 16.7313C12.5399 16.8031 12.9187 16.9729 13.23 17.1035C13.5413 17.2363 13.9288 17.3887 14.0898 17.4409C14.2509 17.4932 14.5122 17.5694 14.6667 17.6107C14.8213 17.6521 15.1065 17.713 15.298 17.7501C15.4896 17.7849 15.7204 17.8241 15.8096 17.8371C15.8989 17.8502 16.134 17.8807 16.3321 17.9046C16.6064 17.9373 16.8241 17.9482 17.2573 17.9482C17.8124 17.9482 17.8233 17.946 17.8733 17.8981C17.8995 17.872 17.9212 17.8284 17.9212 17.8023C17.9212 17.774 17.9038 17.7261 17.8842 17.6956C17.8624 17.663 17.8058 17.6173 17.758 17.5933C17.7101 17.5694 17.5969 17.5062 17.5076 17.4518C17.4184 17.3974 17.242 17.2842 17.1158 17.1993C16.9895 17.1144 16.7892 16.9707 16.6695 16.8815C16.5498 16.7922 16.3277 16.5963 16.1775 16.4461C16.0034 16.2719 15.8684 16.1152 15.8031 16.0107C15.7487 15.9214 15.6681 15.7691 15.6267 15.6733C15.5876 15.5775 15.5375 15.4229 15.5179 15.3315C15.4983 15.2379 15.4831 15.0964 15.4831 15.0159C15.4831 14.9331 15.4983 14.8047 15.5179 14.7263C15.5353 14.648 15.5876 14.5065 15.6333 14.4107C15.6834 14.3062 15.8096 14.1146 15.9533 13.9317C16.0817 13.7641 16.2363 13.5638 16.2951 13.4855C16.3538 13.4071 16.4714 13.2264 16.5563 13.0827C16.6412 12.9391 16.7805 12.6757 16.8654 12.495C16.9525 12.3165 17.057 12.0814 17.1005 11.9725C17.1441 11.8637 17.2137 11.6547 17.2594 11.5045C17.303 11.3543 17.3661 11.1148 17.4009 10.9711C17.4358 10.8275 17.4837 10.5924 17.5098 10.4487C17.5468 10.2332 17.5577 10.0612 17.5664 9.46906C17.5751 8.88783 17.5707 8.68755 17.5424 8.41326C17.5207 8.22822 17.4858 7.98223 17.4619 7.86903C17.4379 7.75583 17.4031 7.59038 17.3857 7.50549C17.3683 7.41841 17.3117 7.21595 17.2594 7.05922C17.2072 6.9003 17.1223 6.66955 17.0744 6.54764C17.0243 6.42356 16.9242 6.20369 16.8524 6.05783C16.7783 5.9098 16.6717 5.70735 16.6129 5.60504C16.5563 5.50272 16.4474 5.32639 16.3713 5.21319C16.2951 5.09999 16.134 4.88448 16.0121 4.73427C15.8923 4.58406 15.6725 4.33807 15.5244 4.18786C15.3764 4.03548 15.113 3.80037 14.9388 3.66323C14.7647 3.52608 14.5753 3.38023 14.5143 3.33669C14.4556 3.29533 14.2945 3.19519 14.1617 3.11682C14.0267 3.03627 13.8243 2.92525 13.7154 2.87083C13.6044 2.81423 13.415 2.72715 13.2953 2.67708C13.1755 2.62701 12.9491 2.53994 12.7946 2.48551C12.64 2.43109 12.4245 2.36143 12.3157 2.33095C12.2068 2.30048 11.9674 2.24605 11.4449 2.13938L10.585 2.15027C10.1126 2.1568 9.59669 2.17204 9.44213 2.1851C9.27886 2.19598 9.0394 2.23299 8.87613 2.27218C8.72157 2.30701 8.51912 2.35708 8.42986 2.38102C8.34061 2.40714 8.17299 2.45939 8.05979 2.50075C7.94659 2.54211 7.73542 2.62048 7.59175 2.67708C7.44807 2.73368 7.22385 2.83382 7.09106 2.9013C6.95827 2.96661 6.77323 3.06457 6.67744 3.119C6.58166 3.17342 6.37485 3.31057 6.22029 3.42159C6.06573 3.53479 5.84368 3.70894 5.73048 3.80908C5.61729 3.90922 5.39089 4.12691 5.22979 4.29453C5.0687 4.45998 4.88802 4.6559 4.82706 4.72992C4.76829 4.80175 4.69645 4.89318 4.66815 4.93455C4.64203 4.97373 4.51141 5.16312 4.37862 5.35469C4.24583 5.54626 4.11957 5.73783 4.0978 5.77919C4.07603 5.82055 3.98895 6.01647 3.90187 6.21457C3.81697 6.41267 3.7016 6.7022 3.64935 6.85676C3.59493 7.01132 3.52744 7.23337 3.49914 7.34657C3.47084 7.45977 3.41642 7.70576 3.37941 7.8908C3.34241 8.07584 3.29887 8.34578 3.28145 8.48945C3.26186 8.64837 3.2488 8.95531 3.2488 9.27314C3.2488 9.56049 3.25968 9.87832 3.27275 9.98064C3.28363 10.083 3.32499 10.3377 3.362 10.5466C3.39683 10.7556 3.44472 11.006 3.46867 11.1018C3.49044 11.1975 3.55792 11.4174 3.6167 11.5916C3.67548 11.7657 3.75384 11.9856 3.79303 12.0814C3.83004 12.1771 3.92582 12.3796 4.00201 12.5342C4.0782 12.6865 4.24365 12.9739 4.36773 13.1764C4.494 13.3766 4.63332 13.5878 4.67903 13.6487C4.72475 13.7075 4.99251 13.9905 5.27333 14.2757C5.55415 14.5631 5.86981 14.8635 5.9743 14.9462C6.15716 15.0899 6.16587 15.1007 6.16587 15.1835C6.16587 15.2314 6.15716 15.2749 6.1441 15.2814C6.13104 15.288 6.04178 15.2314 5.94165 15.1573C5.84368 15.0812 5.64994 14.9222 5.51279 14.8003C5.37565 14.6784 5.17972 14.4934 5.07959 14.3867C4.97727 14.2801 4.82489 14.1103 4.73999 14.0079C4.65509 13.9056 4.5027 13.7053 4.40039 13.5617C4.29807 13.418 4.15875 13.2068 4.08909 13.0936C4.01943 12.9804 3.87575 12.7105 3.77126 12.495C3.66459 12.2795 3.52962 11.966 3.47084 11.7984C3.41207 11.6307 3.33152 11.3848 3.29451 11.2541C3.25751 11.1235 3.20961 10.9211 3.18567 10.8079C3.16172 10.6947 3.12036 10.4552 3.09424 10.2745C3.0507 9.99152 3.04417 9.86091 3.04199 9.31668C3.04199 8.91395 3.05288 8.60265 3.07029 8.4568C3.08771 8.33054 3.12472 8.09543 3.15301 7.93434C3.18349 7.77325 3.24227 7.51202 3.28581 7.35745C3.32717 7.20289 3.41207 6.93731 3.47084 6.76969C3.52962 6.60206 3.66459 6.28859 3.77126 6.07307C3.87575 5.85756 4.01943 5.58762 4.09127 5.47442C4.16093 5.35904 4.27848 5.17836 4.3525 5.07169C4.42651 4.96285 4.56148 4.78216 4.65291 4.66896C4.74434 4.55576 4.91414 4.35984 5.03169 4.23358C5.14925 4.10732 5.35606 3.90704 5.4932 3.78513C5.63035 3.6654 5.83933 3.49125 5.95906 3.39982C6.07879 3.31057 6.30954 3.15165 6.47064 3.04716C6.63173 2.94484 6.92997 2.77722 7.1346 2.67708C7.33923 2.57694 7.59828 2.45721 7.71148 2.41585C7.82468 2.37231 8.04019 2.2983 8.1904 2.25041C8.34061 2.20251 8.60837 2.13068 8.78905 2.08931C8.96756 2.05013 9.19396 2.00659 9.28974 1.99353Z"
                  fill="#888888"
                />
                <path
                  d="M5.34808 8.01637C5.41992 7.98807 5.54618 7.95542 5.63108 7.94671C5.71598 7.93583 5.86619 7.93147 5.9685 7.93365C6.09912 7.94018 6.20143 7.9576 6.31681 7.99896C6.40606 8.02943 6.54321 8.09692 6.6194 8.14916C6.69559 8.19923 6.81315 8.29937 6.87628 8.37121C6.94159 8.44305 7.02648 8.5606 7.06785 8.63244C7.10921 8.70428 7.16145 8.84142 7.18758 8.93721C7.21588 9.04605 7.23112 9.18102 7.23112 9.2964C7.23112 9.41178 7.21588 9.54675 7.18758 9.65559C7.16145 9.75138 7.10485 9.89287 7.06132 9.97124C7.01778 10.0496 6.92199 10.1759 6.84798 10.2542C6.77396 10.3326 6.65206 10.4328 6.57586 10.4785C6.49967 10.5242 6.35817 10.5851 6.26239 10.6156C6.12306 10.6613 6.0447 10.6722 5.87054 10.6744C5.73122 10.6744 5.60278 10.6613 5.51135 10.6374C5.43298 10.6156 5.30237 10.5634 5.21747 10.5198C5.11298 10.4654 5.01066 10.387 4.89093 10.2673C4.78861 10.1628 4.68848 10.0366 4.64711 9.96036C4.61011 9.88852 4.55568 9.75573 4.52956 9.66648C4.49038 9.54021 4.47949 9.45531 4.47949 9.28552C4.48167 9.11354 4.49473 9.03299 4.54045 8.89367C4.57092 8.79789 4.62535 8.66945 4.658 8.61067C4.69283 8.54972 4.77991 8.43869 4.84957 8.3625C4.91923 8.28849 5.03243 8.19053 5.09774 8.14699C5.16304 8.10345 5.27624 8.04467 5.34808 8.01637Z"
                  fill="#F7FDFD"
                />
                <path
                  d="M9.90872 8.00766C9.97403 7.98372 10.0829 7.95542 10.1482 7.94453C10.2135 7.93583 10.3659 7.93147 10.4856 7.93583C10.6445 7.94018 10.7447 7.95542 10.8557 7.9946C10.9406 8.0229 11.0799 8.09474 11.1692 8.15352C11.2584 8.21447 11.3803 8.31679 11.4369 8.38209C11.4957 8.4474 11.5828 8.58019 11.6307 8.67598C11.6786 8.77176 11.7308 8.90891 11.7482 8.98075C11.7656 9.05259 11.7787 9.19191 11.7809 9.28987C11.7809 9.39001 11.77 9.5228 11.7569 9.58375C11.7439 9.64688 11.6916 9.78838 11.6394 9.89505C11.5828 10.0104 11.4979 10.1432 11.4282 10.2194C11.3651 10.2913 11.2453 10.3936 11.1605 10.4502C11.0756 10.5046 10.9449 10.5721 10.8666 10.5982C10.7882 10.6265 10.6511 10.657 10.5618 10.67C10.4551 10.6831 10.3463 10.6831 10.2461 10.6679C10.1612 10.657 10.0306 10.6265 9.95226 10.6004C9.87389 10.5742 9.74763 10.5133 9.66926 10.4654C9.59089 10.4153 9.47987 10.3261 9.42109 10.2651C9.36232 10.2064 9.27959 10.1019 9.23823 10.0366C9.19687 9.97124 9.13809 9.85587 9.10979 9.77968C9.08367 9.70566 9.04884 9.55981 9.03578 9.45531C9.01401 9.2964 9.01619 9.23109 9.04666 9.06782C9.06843 8.94156 9.10979 8.81095 9.16422 8.69775C9.21864 8.58237 9.29483 8.47135 9.38844 8.37339C9.46463 8.29066 9.58654 8.184 9.65838 8.13828C9.73022 8.09256 9.84342 8.03379 9.90872 8.00766Z"
                  fill="#F7FDFD"
                />
                <path
                  d="M14.4697 8.0023C14.5284 7.98053 14.6416 7.95441 14.72 7.94352C14.7984 7.93481 14.9486 7.93046 15.0574 7.93481C15.1837 7.93917 15.3012 7.95876 15.384 7.98924C15.4558 8.01318 15.5733 8.06761 15.6452 8.10679C15.717 8.14815 15.8346 8.2374 15.9064 8.30707C15.9804 8.3789 16.0784 8.50299 16.1285 8.58789C16.1785 8.67279 16.2395 8.8034 16.2634 8.88177C16.3004 8.99497 16.3091 9.0777 16.3091 9.30192C16.3091 9.52396 16.3004 9.60451 16.2634 9.71553C16.2395 9.78955 16.1851 9.90928 16.1459 9.98112C16.1045 10.053 16.0283 10.1618 15.9761 10.2206C15.9238 10.2815 15.8128 10.3751 15.7301 10.4317C15.6474 10.4883 15.5168 10.558 15.4384 10.5863C15.36 10.6168 15.2229 10.6516 15.1336 10.6668C15.0117 10.6843 14.9246 10.6843 14.7962 10.6668C14.7004 10.6538 14.5546 10.619 14.4697 10.5885C14.3848 10.5602 14.2585 10.497 14.1867 10.4492C14.1148 10.4034 14.0212 10.3272 13.9777 10.2815C13.9341 10.2358 13.8623 10.1509 13.8188 10.09C13.7752 10.0312 13.7099 9.91363 13.6751 9.82873C13.6402 9.74383 13.6011 9.60886 13.5858 9.52396C13.5706 9.43689 13.5662 9.29756 13.5728 9.19743C13.5815 9.08205 13.6076 8.96014 13.6533 8.83823C13.6903 8.73592 13.7491 8.60966 13.7839 8.55523C13.8188 8.50081 13.9124 8.39197 13.9951 8.3136C14.0756 8.23523 14.191 8.14162 14.252 8.10897C14.3107 8.07414 14.4087 8.02624 14.4697 8.0023Z"
                  fill="#F7FDFD"
                />
              </svg>
            </div>
            Meet Yobot, Your Experience Assistant
          </h3>
          <p className="pl-6 lg:w-96">
            Yobot is your AI guide, designed to simplify experience planning.
            Whether you&apos;re looking for destination recommendations or packing
            tips, Yobot offers quick, personalized suggestions.
          </p>
        </div>

        <div className="pattern-1 w-72">
          <Image
            className="mt-5 h-[500px] w-full object-contain lg:mt-0 lg:h-[500px]"
            src={YobotScreen}
            width={250}
            height={500}
            alt=""
          ></Image>
        </div>
      </div>
      <Link href={"/beta-signup"} className="mt-20">
        <div className="rounded-full bg-gradient-linear px-5 py-3 font-semibold text-white lg:px-12 lg:py-5">
          Join Beta Testing
        </div>
      </Link>
    </section>
  );
}

export default HowItWorks;
