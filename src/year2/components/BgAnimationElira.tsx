import Image from '../../year1/components/Image'
import pw from './PageWrapper.module.scss'

import spaceElira from '../assets/background/Space-Elira.webp'
import animate1 from '../assets/background/Elira-KagamineLen1.png'
import animate2 from '../assets/background/Elira-KagamineLen2.png'
import animate3 from '../assets/background/Elira-SpaceWeewa.png'
import animate4 from '../assets/background/Elira-AgitatedPikl.png'
import animate5 from '../assets/background/Elira-LabEquipment.png'

export default function BgAnimationElira (): JSX.Element {
  return (
    <>
      <Image src={spaceElira} className={pw['page-bg-animation-liver']} />
      <Image src={animate1} className={pw['page-bg-animation-elira-a']} />
      <Image src={animate2} className={pw['page-bg-animation-elira-b']} />
      <Image src={animate3} className={pw['page-bg-animation-elira-c']} />
      <Image src={animate4} className={pw['page-bg-animation-elira-d']} />
      <Image src={animate5} className={pw['page-bg-animation-elira-e']} />
    </>
  )
}