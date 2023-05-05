import React from 'react'
import InfoCardImages from './InfoCardImages'
import { InfoCardData } from '@/data/home'
import InfoCardText from './InfoCardText'

type Props = {}

const PutYourMoney = (props: Props) => {
  return (
    <div className=' desktop-container lg:pt-24  lg:mx-auto sm:flex 
    sm:flex-row sm:justify-between sm:items-center lg:pt-10 lg:max-w-[1050px]
     '>
      <InfoCardImages
        image_one={InfoCardData[1].image_one}
        image_two={InfoCardData[1].image_two}
      />
      <InfoCardText title={InfoCardData[2].title} text={InfoCardData[2].text} 
       location="put_your_money"/>

    </div>
  )
}

export default PutYourMoney