
import jobs from '../../pages/jobs'
import styled from 'styled-components'

import Link from "next/link"
export default function Header() {


  return (
    <Nav>
        <Logo>
        <Link href="/">
          <svg width="123" height="32" viewBox="0 0 123 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38.0921 31.656C37.7508 31.656 37.4758 31.5517 37.2672 31.3431C37.0776 31.1535 36.9828 30.888 36.9828 30.5467V17.1209C37.0017 15.6418 37.3525 14.3144 38.0352 13.1387C38.7368 11.944 39.6755 11.0053 40.8512 10.3227C42.0459 9.64 43.3828 9.29866 44.8619 9.29866C46.3789 9.29866 47.7348 9.64948 48.9294 10.3511C50.1241 11.0338 51.0628 11.9724 51.7454 13.1671C52.4471 14.3618 52.7979 15.7176 52.7979 17.2347C52.7979 18.7327 52.4565 20.0791 51.7739 21.2738C51.1102 22.4684 50.2 23.4166 49.0432 24.1182C47.8865 24.8009 46.578 25.1422 45.1179 25.1422C43.8474 25.1422 42.6906 24.8767 41.6477 24.3458C40.6237 23.7959 39.7988 23.0753 39.173 22.184V30.5467C39.173 30.888 39.0687 31.1535 38.8601 31.3431C38.6705 31.5517 38.4145 31.656 38.0921 31.656ZM44.8619 23.1511C45.9617 23.1511 46.9478 22.8951 47.8201 22.3831C48.6924 21.8711 49.3751 21.1695 49.8681 20.2782C50.3801 19.368 50.6361 18.3535 50.6361 17.2347C50.6361 16.0969 50.3801 15.0824 49.8681 14.1911C49.3751 13.2999 48.6924 12.5982 47.8201 12.0862C46.9478 11.5553 45.9617 11.2898 44.8619 11.2898C43.781 11.2898 42.8044 11.5553 41.9321 12.0862C41.0598 12.5982 40.3771 13.2999 39.8841 14.1911C39.3911 15.0824 39.1445 16.0969 39.1445 17.2347C39.1445 18.3535 39.3911 19.368 39.8841 20.2782C40.3771 21.1695 41.0598 21.8711 41.9321 22.3831C42.8044 22.8951 43.781 23.1511 44.8619 23.1511ZM70.0077 25C69.6853 25 69.4198 24.8957 69.2112 24.6871C69.0026 24.4785 68.8983 24.2225 68.8983 23.9191V16.5236C68.8983 15.3479 68.6708 14.3807 68.2157 13.6222C67.7795 12.8637 67.1727 12.2948 66.3952 11.9156C65.6367 11.5363 64.7739 11.3467 63.8068 11.3467C62.8776 11.3467 62.0337 11.5268 61.2752 11.8871C60.5357 12.2474 59.9478 12.7404 59.5117 13.3662C59.0755 13.992 58.8574 14.7031 58.8574 15.4996H57.293C57.3309 14.3049 57.6533 13.243 58.2601 12.3138C58.8669 11.3656 59.6728 10.6261 60.6779 10.0951C61.6829 9.54518 62.8017 9.27022 64.0343 9.27022C65.3807 9.27022 66.5848 9.55466 67.6468 10.1236C68.7087 10.6735 69.5431 11.4889 70.1499 12.5698C70.7757 13.6507 71.0885 14.9686 71.0885 16.5236V23.9191C71.0885 24.2225 70.9842 24.4785 70.7757 24.6871C70.5671 24.8957 70.3111 25 70.0077 25ZM57.7765 25C57.4352 25 57.1602 24.9052 56.9517 24.7156C56.762 24.507 56.6672 24.2415 56.6672 23.9191V10.5502C56.6672 10.2089 56.762 9.94341 56.9517 9.75378C57.1602 9.54518 57.4352 9.44089 57.7765 9.44089C58.0989 9.44089 58.3549 9.54518 58.5445 9.75378C58.7531 9.94341 58.8574 10.2089 58.8574 10.5502V23.9191C58.8574 24.2415 58.7531 24.507 58.5445 24.7156C58.3549 24.9052 58.0989 25 57.7765 25ZM57.7765 18.6569C57.4352 18.6569 57.1602 18.5526 56.9517 18.344C56.762 18.1354 56.6672 17.8699 56.6672 17.5476V3.89422C56.6672 3.55289 56.762 3.2874 56.9517 3.09777C57.1602 2.88918 57.4352 2.78489 57.7765 2.78489C58.0989 2.78489 58.3549 2.88918 58.5445 3.09777C58.7531 3.2874 58.8574 3.55289 58.8574 3.89422V17.5476C58.8574 17.8699 58.7531 18.1354 58.5445 18.344C58.3549 18.5526 58.0989 18.6569 57.7765 18.6569ZM82.5732 25.1422C81.0562 25.1422 79.7003 24.8009 78.5057 24.1182C77.311 23.4356 76.3723 22.4969 75.6897 21.3022C75.007 20.1076 74.6657 18.7517 74.6657 17.2347C74.6657 15.6987 75.007 14.3333 75.6897 13.1387C76.3723 11.944 77.311 11.0053 78.5057 10.3227C79.7003 9.64 81.0562 9.29866 82.5732 9.29866C84.0903 9.29866 85.4366 9.64 86.6123 10.3227C87.807 11.0053 88.7457 11.944 89.4283 13.1387C90.111 14.3333 90.4618 15.6987 90.4808 17.2347C90.4808 18.7517 90.13 20.1076 89.4283 21.3022C88.7457 22.4969 87.807 23.4356 86.6123 24.1182C85.4366 24.8009 84.0903 25.1422 82.5732 25.1422ZM82.5732 23.1511C83.6731 23.1511 84.6591 22.8951 85.5314 22.3831C86.4037 21.8711 87.0864 21.1695 87.5794 20.2782C88.0725 19.387 88.319 18.3724 88.319 17.2347C88.319 16.0969 88.0725 15.0824 87.5794 14.1911C87.0864 13.2809 86.4037 12.5698 85.5314 12.0578C84.6591 11.5458 83.6731 11.2898 82.5732 11.2898C81.4734 11.2898 80.4873 11.5458 79.615 12.0578C78.7427 12.5698 78.0505 13.2809 77.5385 14.1911C77.0455 15.0824 76.799 16.0969 76.799 17.2347C76.799 18.3724 77.0455 19.387 77.5385 20.2782C78.0505 21.1695 78.7427 21.8711 79.615 22.3831C80.4873 22.8951 81.4734 23.1511 82.5732 23.1511ZM100.401 25C99.396 25 98.4952 24.763 97.6988 24.2889C96.9213 23.8148 96.305 23.1701 95.8499 22.3547C95.3948 21.5203 95.1672 20.5721 95.1672 19.5102V5.60089C95.1672 5.27852 95.262 5.01303 95.4517 4.80444C95.6603 4.59585 95.9257 4.49155 96.2481 4.49155C96.5705 4.49155 96.836 4.59585 97.0445 4.80444C97.2531 5.01303 97.3574 5.27852 97.3574 5.60089V19.5102C97.3574 20.4773 97.6419 21.2738 98.2108 21.8996C98.7797 22.5064 99.5097 22.8098 100.401 22.8098H101.169C101.472 22.8098 101.719 22.9141 101.909 23.1227C102.098 23.3313 102.193 23.5967 102.193 23.9191C102.193 24.2415 102.079 24.507 101.852 24.7156C101.624 24.9052 101.34 25 100.998 25H100.401ZM93.3183 11.9156C93.0339 11.9156 92.7968 11.8302 92.6072 11.6596C92.4176 11.4699 92.3228 11.2424 92.3228 10.9769C92.3228 10.6924 92.4176 10.4649 92.6072 10.2942C92.7968 10.1046 93.0339 10.0098 93.3183 10.0098H100.572C100.856 10.0098 101.093 10.1046 101.283 10.2942C101.472 10.4649 101.567 10.6924 101.567 10.9769C101.567 11.2424 101.472 11.4699 101.283 11.6596C101.093 11.8302 100.856 11.9156 100.572 11.9156H93.3183ZM112.414 25.1422C110.897 25.1422 109.541 24.8009 108.347 24.1182C107.152 23.4356 106.213 22.4969 105.531 21.3022C104.848 20.1076 104.507 18.7517 104.507 17.2347C104.507 15.6987 104.848 14.3333 105.531 13.1387C106.213 11.944 107.152 11.0053 108.347 10.3227C109.541 9.64 110.897 9.29866 112.414 9.29866C113.931 9.29866 115.278 9.64 116.453 10.3227C117.648 11.0053 118.587 11.944 119.269 13.1387C119.952 14.3333 120.303 15.6987 120.322 17.2347C120.322 18.7517 119.971 20.1076 119.269 21.3022C118.587 22.4969 117.648 23.4356 116.453 24.1182C115.278 24.8009 113.931 25.1422 112.414 25.1422ZM112.414 23.1511C113.514 23.1511 114.5 22.8951 115.373 22.3831C116.245 21.8711 116.928 21.1695 117.421 20.2782C117.914 19.387 118.16 18.3724 118.16 17.2347C118.16 16.0969 117.914 15.0824 117.421 14.1911C116.928 13.2809 116.245 12.5698 115.373 12.0578C114.5 11.5458 113.514 11.2898 112.414 11.2898C111.314 11.2898 110.328 11.5458 109.456 12.0578C108.584 12.5698 107.892 13.2809 107.38 14.1911C106.887 15.0824 106.64 16.0969 106.64 17.2347C106.64 18.3724 106.887 19.387 107.38 20.2782C107.892 21.1695 108.584 21.8711 109.456 22.3831C110.328 22.8951 111.314 23.1511 112.414 23.1511Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M15.8464 2.96296H8.58307e-06L6.67216 9.63511H22.5185L15.8464 2.96296ZM6.67215 9.63512V25.4815L0 18.8093V2.96297L6.67215 9.63512Z" fill="#CCCCCC"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M6.67218 25.4815L22.5185 25.4815L15.8464 18.8093L2.28882e-05 18.8093L6.67218 25.4815ZM15.8464 18.8093L15.8464 2.96296L22.5186 9.63511L22.5186 25.4815L15.8464 18.8093Z" fill="white"/>
          </svg>
          </Link>
        </Logo>
   
       <MenuItems>

          <Link href="/jobs">
              Jobs
          </Link>
       </MenuItems>
    </Nav>
  )
}
const Nav=styled.nav`
/* ${(props) => (props.s ? 'flex' : ' block')} */
display: flex;
justify-content: space-between;
align-items: center;
background-color:${props=>console.log(props)};
padding: 15px 30px;
a{
  text-decoration: none;
  color: #fff;
  font-size: 1.4rem;
}
`
const Logo=styled.div`
width: 130px;
svg{
  width: 100%;
}
`
const MenuItems=styled.div`
display: flex;
width: 100%;
justify-content: flex-end;
a{
  margin-left:20px ;
}
`
