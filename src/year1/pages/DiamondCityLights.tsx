import React from 'react'
import LazulightCorner from '../assets/Corners/LazuLight-Corner.webp'
import SusElira from '../assets/DCL/Elira_sus_small.png'
import TwerkElira from '../assets/DCL/twerk_elira_t.gif'
import TwerkFinana from '../assets/DCL/twerk_finana_t.gif'
import TwerkPomu from '../assets/DCL/twerk_pomu_t.gif'
import PomuImage from '../assets/Portraits/Pomu-Portrait_BJ_cf50.webp?format=png;avif;webp&imagetools&meta'
import FramedTextbox from '../components/FramedTextbox'
import Image from '../components/Image'
import ImportMessages from '../components/ImportMessages'
import MessageBoxesLayout from '../components/MessageBoxesLayout'
import MessageBoxesWithCorners from '../components/MessageBoxesWithCorners'
import tp from '../components/TalentProfile.module.scss'
import classesCredits from '../components/Credits.module.scss'
import classesVideo from '../components/Video.module.scss'
import classesDcl from '../components/ProjectDcl.module.scss'
import classesP from '../components/ProjectPages.module.scss'
import '../components/TalentLayout.scss'
import ExLinkA from '../../shared/components/ExLinkA'

interface Props {
  page: string
}

export default function DiamondCityLights (props: Props): JSX.Element {
  return (
    <>
      {/* Heading */}
      <div className={classesP['heading-container-imagetext']}>
        <Image src={PomuImage} enableZoom />
        <h1 className={`${tp['talent-title']} ${tp['talent-title-pomu']}`}>
          Diamond City
          <br />
          Lights Cover
        </h1>
      </div>

      <FramedTextbox corner={LazulightCorner} border={props.page}>
        <div className={classesVideo.container}>
          <iframe
            src='https://www.youtube.com/embed/QTHJ8jwKgQg'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
        {/* Description */}
        <div className={classesP['description-container']}>
          <h3>A Fan Cover Song</h3>
          <p>
            In celebration of Lazulight's first anniversary, fans from the
            LazuLight Fan Discord servers have come together to sing and make
            music, covering Lazulight's famous, twerkable, banger of a song,
            Diamond City Lights.
          </p>
          <p>
            We'd like to thank Finana, Pomu, and Elira for being a big
            inspiration to all of us, and for being a great source of joy and
            happiness. We also thank everyone who has worked hard to complete
            this project. It is your passion and effort that made all of this
            possible. Thank you.
          </p>
          <h3>Calls/Mix/Chants:</h3>
          <p>
            For those who are wondering about the chanting in the middle of
            the song, this chant is commonly referred to as a ‘mix’. Mixing is
            associated with Japanese Idol concerts where the crowd mix to the
            performance. For further information, please refer to <ExLinkA href='https://www.youtube.com/watch?v=YuLfQC4LCdM'>【IDOL CALLS】Learning wotagei with Pomu Sensei!【NIJISANJI EN | Pomu Rainpuff】</ExLinkA> and the <ExLinkA href='https://en.wikipedia.org/wiki/Wotagei'>Wikipedia page on Wotagei</ExLinkA>. IETTAIGA!
          </p>

          <h3>Permissions &amp; Notice</h3>
          <p>Diamond City Lights is the property of ANYCOLOR Inc.</p>
          <p>
            We give permission to all Nijisanji Livers to monetize this cover
            by any means, including livestream and video publication.
          </p>
          <p>If there are any concerns or enquiries, please contact us by email at <a href='mailto:lazuprojectsteam@gmail.com'>lazuprojectsteam@gmail.com</a>.</p>
        </div>
      </FramedTextbox>

      {/* Messages */}
      <MessageBoxesLayout
        titleType='all'
        heading='Messages from the DCL Team'
        page='dcl'
        enableFolding
      >
        <MessageBoxesWithCorners messages={ImportMessages({ enableDcl: true })} />
      </MessageBoxesLayout>

      <FramedTextbox corner={LazulightCorner} border={props.page}>
        <h2>Credits</h2>
        <DiamondCityLightsCredits />
      </FramedTextbox>
    </>
  )
}

function DiamondCityLightsCredits (): JSX.Element {
  return (
    <div className={classesCredits.text}>
      <h3>Organizer &amp; Leader</h3>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/HirokawaKiro'>Kiro</ExLinkA></p></li>
      </ul>
      <h3>Sound Mixer</h3>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/TCBNmusic'>Tachibana Music</ExLinkA></p></li>
      </ul>
      <h3>Instrumentals</h3>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/darylbarnes'>Daryl Barnes of UTAlive</ExLinkA></p></li>
      </ul>
      <h3>MV Director</h3>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/coldace_24'>Zephyr Monochrome</ExLinkA></p></li>
      </ul>
      <h3>Video Editors</h3>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/PomuPowerCenter'>Pomu Power Distribution Center</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/peeboggs'>Pendora’s Box</ExLinkA></p>
          <div className={classesDcl['twerk-container']}><Image className={classesDcl['twerk-gif']} src={SusElira} /></div>
        </li>
        <li><p><ExLinkA href='https://twitter.com/Rexhernan22'>Rexhernan 22</ExLinkA></p></li>
      </ul>
      <h3>Sprite Artists</h3>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/lemonostril'>Lemon</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/hyunicat'>hyuni</ExLinkA></p></li>
      </ul>
      <h3>Video Assets</h3>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/wizwaaz'>wizwaaz</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/keekispecial'>Keektang</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/a1d8e2316745'>Mini</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/rem26_art'>fyretruck</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/ajaniiiiiii'>Ajani Akasakaspicy</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/snowharasho'>Squish</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/Arqodeon'>arqo</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/TakezoMitsurugi'>Takezo</ExLinkA></p></li>
      </ul>
      <h3>Credits BGM</h3>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/SonicFan53alt'>SonicFan53</ExLinkA></p></li>
      </ul>
      <h3>Elira Vocalists</h3>
      <ul>
        <li><p>Tzu</p></li>
        <li><p>Thunderwing</p></li>
        <li><p><ExLinkA href='https://twitter.com/hyunicat'>hyuni</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/_kaerrie_'>Kaerrie</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/sinibladekat'>thatmtrx</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/Icy_Meerkat'>IcyMeerkat</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/hikikneekomori'>ottrbottl</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/eia_vsinger'>Eia Mhara</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/csenge_furi'>Sen</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/_arisamisaki_'>jessica</ExLinkA></p></li>
      </ul>
      <h3>Pomu Vocalists</h3>
      <ul>
        <li><p>The Holy Wooomy with 69 Nuggets of Toasted Squidies</p></li>
        <li><p>xchgeaxeax</p></li>
        <li><p><ExLinkA href='https://twitter.com/acidpiss_'>Acid</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/Phin86_'>PhinAgain</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/ACWalker20'>AC Walker</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/PastelSonico'>PastelSonico</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/Soul_Jamelson'>Soul Jam</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/Kohibeats1'>Kohibeats</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/outhaleart'>Outhale</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/rocky_2d'>rocky.</ExLinkA></p></li>
      </ul>
      <h3>Finana Vocalists</h3>
      <ul>
        <li><p>mashirooo</p></li>
        <li><p>Pink/ジン</p></li>
        <li><p>Aibi</p></li>
        <li><p>shushidesu</p></li>
        <li><p><ExLinkA href='https://twitter.com/DrSuccessful_'>DrSuccessful</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/P1usJ'>PlusJ</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/lemonostril'>Lemon</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/dead_ninja1'>DeadNinja1</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/jotamide'>Jotamide</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/CoughAMania'>Fonzie</ExLinkA></p></li>
      </ul>
      <h3>Mixes</h3>
      <ul>
        <li><p>root1overXcubed</p></li>
        <li><p>Splinterman</p></li>
        <li><p>WildestDuck</p></li>
        <li><p>KiluDoz</p></li>
        <li><p>hafiezer</p></li>
        <li><p>Akatsukin</p></li>
        <li><p>Gay for pomu</p></li>
        <li><p>Oh Deer</p></li>
        <li><p>mashirooo</p></li>
        <li><p>YamateRailgun</p></li>
        <li><p>troosh</p></li>
        <li><p>ChizuDesu</p></li>
        <li><p>Yasusi</p></li>
        <li><p>Remoam</p></li>
        <li><p>Fero</p></li>
        <li><p><ExLinkA href='https://twitter.com/JF__ND'>JFND</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/DrSuccessful_'>DrSuccessful</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/ErawanLH'>Erawan</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/kid_poro'>Poro</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/NoxShadow24904'>NoxShadow</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/HirokawaKiro'>Kiro</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/BrandonJohns96'>Brandon Johns</ExLinkA></p>
          <div className={classesDcl['twerk-container']}><Image className={classesDcl['twerk-gif']} src={TwerkPomu} /></div>
        </li>
        <li><p><ExLinkA href='https://twitter.com/_arisamisaki_'>jessica</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/KeZunjian'>Kei_ZJ (Hanashi)</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/third12_'>third12</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/wildnexus'>wildnexus</ExLinkA></p>
          <div className={classesDcl['twerk-container']}><Image className={classesDcl['twerk-gif']} src={TwerkElira} /></div>
        </li>
        <li><p><ExLinkA href='https://twitter.com/aletheia024'>Aletheia</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/Ghirocks_Log'>Ghirocks_Log</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/reiykhuu'>Saeren</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/KakaTan91'>KakaTan</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/pumpurumpum2'>Sleep</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/Icy_Meerkat'>IcyMeerkat</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/Phin86_'>PhinAgain</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/Roboticpaladin'>Robotic Paladin</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/sinibladekat'>thatmtrx</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/THEEBINNS'>Binns</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/cyanara_o7'>cyanara</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/YukiBaskerville'>Yuki Baskerville</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/akaasianguy'>akaasianguy</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/HiNu_Nova'>NovaNazo</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/Bel_something'>Belsomething</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/csenge_furi'>Sen</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/rockyyy_dp'>rocky.</ExLinkA></p></li>
      </ul>
      <h3>Special Thanks to</h3>
      <ul className={classesCredits['text-special-final']}>
        <li><p><ExLinkA href='https://twitter.com/NoxShadow24904'>NoxShadow</ExLinkA></p></li>
        <li><p>KB</p></li>
        <li><p>LazuLight 1st Anniversary Website Team</p></li>
        <li><p>Nijisanji EN Fan Discord Server</p></li>
        <li><p>Elicord Discord Server</p></li>
        <li><p>Pomucord Discord Server</p></li>
        <li><p>Finanacord Discord Server</p></li>
        <li><p>And every member of the NijiEN community who helped us out, or showed their support for our project!</p></li>
      </ul>
      <div className={classesDcl['twerk-container']}>
        <Image className={classesDcl['twerk-gif']} src={TwerkFinana} />
      </div>
    </div>
  )
}
