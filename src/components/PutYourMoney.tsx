import React from 'react'
import InfoCardImages from './InfoCardImages'
import { InfoCardData } from '@/data/home'
import InfoCardText from './InfoCardText'

type Props = {}

const PutYourMoney = (props: Props) => {
  return (
    <div className=' desktop-container   lg:mx-auto sm:flex 
    sm:flex-row sm:justify-between sm:items-center lg:pb-20 lg:max-w-[1050px]
     '>
      <InfoCardImages
        image_one={InfoCardData[2].image_one}
        image_two={InfoCardData[2].image_two}
      />
      <InfoCardText title={InfoCardData[2].title} text={InfoCardData[2].text} buttonText={InfoCardData[2].buttonText} buttonColor={InfoCardData[2].buttonColor} buttonLink={InfoCardData[2].buttonLink} location="put_your_money" />

    </div>
  )
}

export default PutYourMoney