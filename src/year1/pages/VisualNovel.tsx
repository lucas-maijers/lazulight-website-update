import React from 'react'

// Countdown timer
// Doc: https://github.com/ndresx/react-countdown
import Countdown, { CountdownRenderProps } from 'react-countdown'

import EliraFrame from '../assets/Corners/Elira-LiverCorner.webp'
import FinanaFrame from '../assets/Corners/Finana-LiverCorner.webp'
import LazulightCorner from '../assets/Corners/LazuLight-Corner.webp'
import PomuFrame from '../assets/Corners/Pomu-LiverCorner.webp'

import SlideShow from '../components/SlideShow'
import Slide1 from '../assets/VN/cg_elira_classroom_hair_tuck_watermark.webp'
import Slide2 from '../assets/VN/cg_finana_rooftop_lunch_watermark.webp'
import Slide3 from '../assets/VN/cg_pomu_pomusuke_ver1_watermark.webp'
import Slide4 from '../assets/VN/vn-screenshot1.webp'
import Slide5 from '../assets/VN/vn-screenshot2.webp'

import EliraImage from '../assets/VN/elira school happy_cf50.webp'
import FinanaImage from '../assets/VN/finana school happy_cf50.webp'
import VisualNovelLogo from '../assets/VN/lazulight_vn_logo_cf50.webp'
import PomuImage from '../assets/VN/pomu school happy_cf50.webp'
import Image from '../components/Image'
import classesCredits from '../components/Credits.module.scss'
import classesSlideShow from '../components/SlideShow.module.scss'
import classesVideo from '../components/Video.module.scss'
import classesVn from '../components/ProjectVn.module.scss'
import classesP from '../components/ProjectPages.module.scss'
import '../components/TalentLayout.scss'
import FramedTextbox from '../components/FramedTextbox'
import ExLinkA from '../../shared/components/ExLinkA'
import ExLink from '../../shared/components/ExLink'

interface Props {
  page: string
}

interface Character {
  portrait: string
  frame: string
  firstNameLower: string
  name: string
  info: string[]
}

export default function VisualNovel (props: Props): JSX.Element {
  const characters: Character[] = [
    {
      portrait: EliraImage,
      frame: EliraFrame,
      firstNameLower: 'elira',
      name: 'Elira Pendora',
      info: [
        'A shy president that while commands respect from her classmates, finds herself in an awkward position without a club to join for the exact same reason',
        'She loves playing the violin, but it seems she focused on the piano when she was little. What lead to the change? A simple change of heart? Or a deeper secret she’s trying to hide...'
      ]
    },
    {
      portrait: PomuImage,
      frame: PomuFrame,
      firstNameLower: 'pomu',
      name: 'Pomu Rainpuff',
      info: [
        'A forest fairy with a true passion for cross country. She loves the feeling of the wind blowing through her hair while running or being in high places more than anything.',
        'She’s always bubbly and energetic on the outside, but deep inside she’s also compassionate and thoughtful toward her friends. And once you get her nerding out about her interests, you’ll never be able to get her to stop.'
      ]
    },
    {
      portrait: FinanaImage,
      frame: FinanaFrame,
      firstNameLower: 'finana',
      name: 'Finana Ryugu',
      info: [
        'A quiet student during the day but a fierce gamer at night, Finana Ryugu is the type of person who seems to always be living in her own world.',
        'She’s usually soft spoken and can be a little… questionable sometimes, but she tries her best to express her feelings to everyone.',
        'She loves teaching others about her interests, but what happens when she’s the one looking for help?'
      ]
    }
  ]

  const countdownRenderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
    props
  }: CountdownRenderProps): JSX.Element => {
    if (completed) {
      // Return the child of the <Countdown> element
      // e.g.
      // <Countdown date='...' renderer={countdownRenderer}>
      //    Content here is passed to props.children
      // </Countdown>
      return <>{props.children}</>
    }
    // Render countdown
    return (
      <>
        <p><b>Releases at 12:12PM on 12 December 2022 EST</b></p>
        <button className={`${classesP['download-button']} lazulight-border`}>
          {days} days, {hours}h, {minutes}min, {seconds}s
        </button>
      </>
    )
  }

  const releaseDate = '2022-12-12T12:12:00-05:00'

  return (
    <>
      {/* Heading */}
      <div className={classesP['heading-container-logo']}>
        <Image src={VisualNovelLogo} enableZoom />
      </div>

      {/* Slide Show */}
      <FramedTextbox corner={LazulightCorner} border={props.page}>
        <SlideShow>
          <div className={classesSlideShow.slide}>
            <div className={classesVideo.container}>
              <iframe
                src='https://www.youtube.com/embed/qe7hVYakK0s'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
          </div>
          <div>
            <Image src={Slide1} className={classesSlideShow.slide} enableZoom />
          </div>
          <div>
            <Image src={Slide2} className={classesSlideShow.slide} enableZoom />
          </div>
          <div>
            <Image src={Slide3} className={classesSlideShow.slide} enableZoom />
          </div>
          <div>
            <Image src={Slide4} className={classesSlideShow.slide} enableZoom />
          </div>
          <div>
            <Image src={Slide5} className={classesSlideShow.slide} enableZoom />
          </div>
        </SlideShow>

        {/* Description & Download */}
        <div className={classesP['description-container']}>
          <h3>Story</h3>
          <p>Like a star pulled from the skies, a bird torn of its wings, you were bound to the Earth that day. You once ruled the skies, feeling the air rush through your hair as you flew between the clouds, clothes fluttering in the wind as you raced higher and higher. However, that's all in the past now, ever since the accident.</p>
          <p>Now, completely opposite to what you once felt, the world is monotonous, gray, and dead. You find no meaning in life, as if frozen in time, now that your freedom was taken away from you.</p>
          <p> However, that would all come to change with three fated encounters. The appearance of an old acquaintance from the track team, a reserved class president that seems to be hiding something, and a kindred soul seeking solace in the silence.</p>
          <p>Faced with these new people who suddenly appeared in your life, you have to make the choice. Do you wallow in your failure in this monochrome prison, or do you take their hand and repaint this world?</p>
          <p>By their side, the hands of the clock start ticking once more.</p>

          <h3>Content</h3>
          <p>“Lazulight: By Your Side” is an English fan-made visual novel for Lazulight. Despite being made by fans, the length, scope, and quality of the story, design, and art showcase the tremendous amount of effort devoted to the project, culminating in a full-length game that we are proud of as volunteer developers.</p>
          <p>Not only is the game comprised of over 96000 words (for reference “The Hobbit” by J. R. R. Tolkien has only 95000 words), the game also features custom-made sprites for all the Lazulight talents and other Nijisanji livers who are present, along with over 50 backgrounds and over 30 unique CGs to accompany them. In addition to the art, there are also over 50 individually composed BGMs that play throughout the visual novel to round out the experience.</p>
          <p>The game is around 7 hours in length with the estimated duration for each section of the game broken down below. Note that the length can vary depending on the reading speed of the player and the pace at which the player decides to play the game.</p>
          <p>
            <ul>
              <li className={classesVn['route-list-item']}>Common route: 1 hour</li>
              <li className={classesVn['route-list-item']}>Pomu route: 1 hour 30 minutes</li>
              <li className={classesVn['route-list-item']}>Elira route: 2 hours</li>
              <li className={classesVn['route-list-item']}>Finana route: 2 hours 15 minutes</li>
              <li className={classesVn['route-list-item']}>??? route: 30 minutes</li>
            </ul>
          </p>
          <p>The game features multiple endings, good and bad, depending on choices made during the game. Reaching a good ending unlocks the gallery to view all the art assets seen so far (along with additional art!) and the music room to replay all the BGMs</p>
          <p>The downloadable version and the web version are identical in content with the sole exception that the videos and music room for the web redirect to videos on YouTube instead due to software limitations. As RenPyWeb is still in beta, the web version may be less stable than the desktop version, so we recommend playing the desktop version for the best experience.</p>
          <p><b>Content Warning:</b> Some routes contain certain horror and suggestive elements.</p>

          <h3>Notice</h3>
          <p>
            <b>Copyright &amp; Permissions: </b>
            We give permission to all Nijisanji Livers to monetize playing
            this game by any means, including livestream and video
            publication. We declare that the game does not contain any
            copyrighted material other than that which is property of ANYCOLOR
            Inc. We declare that this game does not contain any material that
            violates the YouTube Community Guidelines.
          </p>
          <p>
            <b>Disclaimer: </b>
            This is a work of fiction. Any similarity to real businesses,
            locations, and events is purely coincidental. The characters
            portrayed in this story are not intended to represent the views
            and opinions of the actual talents, Nijisanji, or ANYCOLOR Inc.
          </p>
          <p>
            This is a fan-made game intended for the enjoyment of other fans
            and the talents in celebration of LazuLight's one year
            anniversary. The creators are in no way related to ANYCOLOR Inc,
            Nijisanji, or the talents portrayed in this game.
          </p>
          <p>If there are any concerns or enquiries, please contact us by email at <a href='mailto:lazuprojectsteam@gmail.com'>lazuprojectsteam@gmail.com</a>.</p>

          <h3>How to Play</h3>
          <p>The full game is freely playable either online or by download. Click the buttons below to play.</p>
          <p>For the best experience, we recommend to download the game. Otherwise, online players should preferably play on desktop.</p>

          <h3>Play Online</h3>
          <Countdown date={releaseDate} renderer={countdownRenderer}>
            <a href='https://vn.lazulight.com/' target='_blank' rel='noopener noreferrer'>
              <button className={`${classesP['download-button']} lazulight-border`}>Play Online</button>
            </a>
          </Countdown>

          <p>Playable on desktop or phone. Recommended browser: Google Chrome</p>
          <p>Save data is retained between sessions. To retain save data, do not play in incognito mode, clear your browsing data, or change browser between sessions. You may wish to use the export/import save data feature in case of accidental data loss.</p>
          <p><b>Version 1.1:</b> Fixed a crash that would happen when entering the Music Room.</p>

          <h3>Download (1GB Approx)</h3>
          <Countdown date={releaseDate} renderer={countdownRenderer}>
            <>
              <ExLink href='https://drive.google.com/file/d/1wIT_jutfLV1GHa3CuNBekytnpx6p8OnW/view?usp=share_link'>
                <button className={`${classesP['download-button']} lazulight-border`}>Download for Windows</button>
              </ExLink>

              <ExLink href='https://drive.google.com/file/d/1A_BYcCXLZ1M7yGaB_TG65p02LYvf8Yzi/view?usp=share_link'>
                <button className={`${classesP['download-button']} lazulight-border`}>Download for Mac</button>
              </ExLink>
              <div>
                <a href='/downloads/LazulightVN-1.0-pc.zip' download>
                  <button className={`${classesP['download-button']} lazulight-border`}>Download for Windows (Mirror)</button>
                </a>

                <a href='/downloads/LazulightVN-1.0-mac.zip' download>
                  <button className={`${classesP['download-button']} lazulight-border`}>Download for Mac (Mirror)</button>
                </a>
              </div>
            </>
          </Countdown>

          <h4>Install / Uninstall (Windows)</h4>
          <p>No installation is required. First download the zip, then unzip the game files into any folder.</p>
          <p>To play, run the file <code>LazulightVN.exe</code></p>
          <p>To remove the game, simply delete the unzipped game files.</p>
          <p>To fully remove the game (including save and settings data), additionally delete the folder<br /><code>C:\Users\&lt;username&gt;\AppData\Roaming\RenPy\LazulightVN-1643777295</code> <br />This folder is automatically created when you run the game.</p>

          <h4>Install / Uninstall (Mac)</h4>
          <p>No installation is required. First download the zip, then unzip the game files into any folder.</p>
          <p>To play, run the <code>LazulightVN</code> app.</p>
          <p>To remove the game, simply delete the unzipped game files.</p>
          <p>To fully remove the game (including save and settings data), additionally delete the folder<br /><code>~/Library/RenPy/LazulightVN-1643777295</code> <br />This folder is automatically created when you run the game.</p>
        </div>
      </FramedTextbox>

      {/* Character Profiles */}
      {characters.map((character: Character, idx: number) => (
        <div className={classesVn['profile-container']} key={idx}>
          <div
            className={`${classesVn['picture-box']} ${character.firstNameLower === 'elira' ? classesVn['picture-box-elira'] : ''}`}
          >
            <Image src={character.portrait} enableZoom />
          </div>
          <div className={classesVn['info-container']}>
            <FramedTextbox corner={character.frame} border={character.firstNameLower}>
              <h2>{character.name}</h2>
              {character.info.map((paragraph, idx2) => (
                <p key={idx2}>{paragraph}&nbsp;</p>
              ))}
            </FramedTextbox>
          </div>
        </div>
      ))}

      {/* Credits */}
      <FramedTextbox corner={LazulightCorner} border={props.page}>
        <h2>Credits</h2>
        <VisualNovelCredits />
      </FramedTextbox>
    </>
  )
}

/*
Formatting from Kiro's Credits document
  Regex the line spacing and the colons for headings and ul
  Regex twitter links, then non-linked
    ^([^<\n].+) \| @(.+) on Twitter$
    <li><p><ExLinkA href='https://twitter.com/$2'>$1</ExLinkA></p></li>
  Manual edits
    Non-Twitter links
      .. | ..
      freesound.org
    & to &amp;
    Links with parentheses to
      </ExLinkA>{' '}&nbsp;(Keyboard sounds)
    ul for "Special Thanks To"
      <ul className={classesCredits['text-special-final']}>
*/

function VisualNovelCredits (): JSX.Element {
  return (
    <div className={classesCredits.text}>
      <h3>Management Team</h3>
      <h4>Organizer &amp; Producer</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/HirokawaKiro'>Kiro</ExLinkA></p></li>
      </ul>
      <h4>VN Team Leader &amp; Producer</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/Treebobber1'>SinSin</ExLinkA></p></li>
      </ul>
      <h4>VN Team Assistant Leader</h4>
      <ul>
        <li><p>Carateca</p></li>
      </ul>

      <h3>Writing Team</h3>
      <h4>Writing Team Leader</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/coldace_24'>Zephyr Monochrome</ExLinkA></p></li>
      </ul>
      <h4>Scenario</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/coldace_24'>Zephyr Monochrome</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/aikatsukin'>Akatsukin</ExLinkA></p></li>
      </ul>
      <h4>Common Route Writer</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/coldace_24'>Zephyr Monochrome</ExLinkA></p></li>
      </ul>
      <h4>Elira Route Writer</h4>
      <ul>
        <li><p><ExLinkA href='https://www.instagram.com/brainstorm_13201/'>ShittyDrawer’s Den</ExLinkA></p></li>
      </ul>
      <h4>Pomu Route Writer</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/aikatsukin'>Akatsukin</ExLinkA></p></li>
      </ul>
      <h4>Finana Route Writer</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/keekispecial'>Keektang</ExLinkA></p></li>
      </ul>
      <h4>Finana Route Assistant Writer</h4>
      <ul>
        <li><p>The Holy Wooomy with 69 Nuggets of Toasted Squidies</p></li>
      </ul>
      <h4>??? Route Writer</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/aikatsukin'>Akatsukin</ExLinkA></p></li>
      </ul>
      <h4>Proofreading Lead</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/JF__ND'>JFND</ExLinkA></p></li>
      </ul>
      <h4>Proofreaders</h4>
      <ul>
        <li><p>Johnny Lacone</p></li>
        <li><p><ExLinkA href='https://twitter.com/wildnexus'>wildnexus</ExLinkA></p></li>
        <li><p>Zephyr Kitten</p></li>
        <li><p><ExLinkA href='https://twitter.com/JF__ND'>JFND</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/reiykhuu'>Saeren</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/citrusblush'>Calix</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/erawanLH'>Erawan</ExLinkA></p></li>
      </ul>

      <h3>Art Team</h3>
      <h4>Art Team Leader (Organizational)</h4>
      <ul>
        <li><p>The Holy Wooomy with 69 Nuggets of Toasted Squidies</p></li>
      </ul>
      <h4>Art Team Leader (Art QC &amp; Feedback)</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/ann_teasocial'>Ann_TeaSocial</ExLinkA></p></li>
      </ul>
      <h3>Sprite Artists</h3>
      <h4>Elira Sprites</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/ann_teasocial'>Ann_TeaSocial</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/Lost_B_unny'>Lost B'unny</ExLinkA></p></li>
      </ul>
      <h4>Pomu Sprites</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/MizMillificent'>MizMillificent</ExLinkA></p></li>
      </ul>
      <h4>Finana Sprites</h4>
      <ul>
        <li><p><span><ExLinkA href='https://twitter.com/amechi_doki'>Amechi</ExLinkA>{' '}&nbsp;(Lineart)</span></p></li>
        <li><p><span><ExLinkA href='https://twitter.com/Vitaminechan'>Vitaminechan</ExLinkA>{' '}&nbsp;(Colouring)</span></p></li>
      </ul>
      <h4>Selen Sprites</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/SkullGrimoire'>Grim</ExLinkA></p></li>
      </ul>
      <h4>Rosemi Sprites</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/YukiBaskerville'>Yuki Baskerville</ExLinkA></p></li>
        <li><p>Arien</p></li>
      </ul>
      <h4>Petra Sprites</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/amechi_doki'>Amechi</ExLinkA></p></li>
      </ul>
      <h4>Oliver-sensei Sprites</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/flakesnpie'>Bee</ExLinkA></p></li>
      </ul>
      <h4>Pikl Sprites</h4>
      <ul>
        <li><p><ExLinkA href='https://www.instagram.com/brainstorm_13201/'>ShittyDrawer’s Den</ExLinkA></p></li>
      </ul>
      <h4>CG Artists</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/anatom_orange'>Anatom</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/gudanco'>Guda</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/yexinR5'>R5</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/snowharasho'>Squish</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/SyxhSevenEight'>Syxh</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/sejvon'>VonB</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/natttsume'>Nattsume</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/aelis_k5'>Aeri</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/tsukinaga_b'>tsukinaga</ExLinkA></p></li>
        <li><p>Dokuro_DX</p></li>
        <li><p><ExLinkA href='https://twitter.com/ginga_elyka'>naokomama</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/art_pixelnoodle'>sleepy</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/TakezoMitsurugi'>Takezo</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/ACatKat'>A.Cat</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/sheep_tamura'>ひつじ</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/_namestaken_'>Name Taken</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/AliceVu134'>Alice Vu</ExLinkA></p></li>
        <li><p>Arien</p></li>
        <li><p>FragileQ</p></li>
        <li><p>Neroshi</p></li>
        <li><p><ExLinkA href='https://twitter.com/Jeamteerasakul'>RockyBirdy</ExLinkA></p></li>
      </ul>
      <h4>Backgrounds</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/ajaniiiiiii'>Ajani Akasakaspicy</ExLinkA></p></li>
        <li><p>Arien</p></li>
        <li><p><ExLinkA href='https://twitter.com/Arqodeon'>arqo</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/flakesnpie'>Bee</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/rem26_art'>fyretruck</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/Lost_B_unny'>Lost B'unny</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/miuzhik_'>Michi</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/snowharasho'>Squish</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/wizwaaz'>wizwaaz</ExLinkA></p></li>
        <li><p><ExLinkA href='https://www.instagram.com/bianneart'>Bianne</ExLinkA></p></li>
      </ul>
      <h4>UI/Assets</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/ACatKat'>A.Cat</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/juiceinkf'>juice</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/miuzhik_'>Michi</ExLinkA></p></li>
        <li><p>mrj</p></li>
        <li><p><ExLinkA href='https://twitter.com/TakezoMitsurugi'>Takezo</ExLinkA></p></li>
        <li><p>The Holy Wooomy with 69 Nuggets of Toasted Squidies</p></li>
        <li><p><ExLinkA href='https://twitter.com/questipher'>questipher</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/coldace_24'>Zephyr Monochrome</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/tsukinaga_b'>tsukinaga</ExLinkA></p></li>
        <li><p><ExLinkA href='https://www.youtube.com/crisuskeer'>Crisu</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/kanasquared'>kana²</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/Treebobber1'>SinSin</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/_tecnd'>tecnd</ExLinkA></p></li>
      </ul>

      <h3>Programming Team</h3>
      <h4>Programming Team Leaders</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/_tecnd'>tecnd</ExLinkA></p></li>
        <li><p>Usaruru</p></li>
      </ul>
      <h4>Animation Director</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/kanasquared'>kana²</ExLinkA></p></li>
      </ul>
      <h4>Programmers</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/_tecnd'>tecnd</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/kanasquared'>kana²</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/BadScribbler'>BadScribbler</ExLinkA></p></li>
        <li><p>mrj</p></li>
        <li><p><ExLinkA href='https://twitter.com/Treebobber1'>SinSin</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/tsukinaga_b'>tsukinaga</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/monkey2821920'>Austinx88</ExLinkA></p></li>
      </ul>
      <h4>Visual Novel Engine</h4>
      <ul>
        <li><p><ExLinkA href='https://www.renpy.org/'>Ren’Py</ExLinkA></p></li>
      </ul>

      <h3>BGM Team</h3>
      <h4>BGM Team Leaders</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/HirokawaKiro'>Kiro</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/itsbreeziness'>breeziness</ExLinkA></p></li>
      </ul>
      <h4>Composers</h4>
      <ul>
        <li><p><ExLinkA href='https://www.youtube.com/channel/UCV1NmC2vTGSLPegKcp83k4A'>Nikolai Levnekov</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/itsbreeziness'>breeziness</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/SonicFan53alt'>SonicFan53</ExLinkA></p></li>
      </ul>
      <h4>Instrumentalists</h4>
      <ul>
        <li><p><span><ExLinkA href='https://twitter.com/peeboggs'>Pendora’s Box</ExLinkA>{' '}&nbsp;(Guitar)</span></p></li>
        <li><p><span><ExLinkA href='https://twitter.com/HiiragiEmuri'>Hiiragi Emuri</ExLinkA>{' '}&nbsp;(Violin)</span></p></li>
      </ul>
      <h4>Sound Effects</h4>
      <ul>
        <li><p><ExLinkA href='https://freesound.org'>freesound.org under the CC0 license</ExLinkA></p></li>
        <li><p><span><ExLinkA href='https://twitter.com/Tophrii'>Tophrii</ExLinkA>{' '}&nbsp;(Keyboard sounds)</span></p></li>
      </ul>
      <h4>Diamond City Lights (Song)</h4>
      <ul>
        <li><p>LazuLight (Vocals)</p></li>
        <li><p>Mafumafu (Composer)</p></li>
      </ul>
      <h4>Diamond City Lights (Fan Instrumental)</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/utalivepro'>Daryl Barnes of UTALIVE</ExLinkA></p></li>
      </ul>
      <h3>Video Team</h3>
      <h4>Video Team Leaders</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/HirokawaKiro'>Kiro</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/kanasquared'>kana²</ExLinkA></p></li>
      </ul>
      <h4>Video Editors</h4>
      <ul>
        <li><p><span><ExLinkA href='https://twitter.com/PomuPowerCenter'>PomuPower Distribution Center</ExLinkA>{' '}&nbsp;(Opening Video)</span></p></li>
        <li><p><span><ExLinkA href='https://twitter.com/peeboggs'>Pendora’s Box</ExLinkA>{' '}&nbsp;(Credits)</span></p></li>
      </ul>
      <h3>QA Team</h3>
      <ul>
        <li><p><ExLinkA href='https://www.youtube.com/crisuskeer'>Crisu</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/HirokawaKiro'>Kiro</ExLinkA></p></li>
        <li><p><ExLinkA href='https://www.facebook.com/TPYMSYCSTE'>Thexty</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/aikatsukin'>Akatsukin</ExLinkA></p></li>
        <li><p>Rundas9000</p></li>
      </ul>

      <h3>Community Feedback</h3>
      <h4>Initial Scenario Ideas</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/coldace_24'>Zephyr Monochrome</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/suminoja'>suminoja</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/aikatsukin'>Akatsukin</ExLinkA></p></li>
        <li><p><ExLinkA href='https://www.instagram.com/brainstorm_13201/'>ShittyDrawer’s Den</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/Kei_Shiromiya'>Kei Shiromiya</ExLinkA></p></li>
      </ul>
      <h4>Additional Feedback</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/gonxale0'>Gonxaleo</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/Feet_man69'>Feetman69</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/JF__ND'>JFND</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/kanasquared'>kana²</ExLinkA></p></li>
        <li><p>All VN Team Members</p></li>
      </ul>
      <h4>Feet Quality Inspector</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/Feet_man69'>Feetman69</ExLinkA></p></li>
      </ul>
      <h3>Special Thanks To</h3>
      <ul className={classesCredits['text-special-final']}>
        <li><p>LazuLight 1st Anniversary Website Team</p></li>
        <li><p>Nijisanji EN Fan Discord Server</p></li>
        <li><p>Elicord Discord Server</p></li>
        <li><p>Pomucord Discord Server</p></li>
        <li><p>Finanacord Discord Server</p></li>
        <li><p>PPDC’s Right Hand</p></li>
        <li><p>And every member of the NijiEN community who helped us out, or showed their support for our project!</p></li>
      </ul>
    </div>
  )
}
