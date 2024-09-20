import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { TypeAnimation } from 'react-type-animation';
import { Row } from './components/Row';
import { Section } from './components/Section';
import { Image } from './components/Image';
import { ScrollIndicator } from './components/ScrollIndicator';
import { Column } from './components/Column';
import { ProjectDescription } from './components/ProjectDescription';
import { translate } from './translation';

import { radarColors, radarDataOther, radarDataProgramming } from './RadarSettings';
import RadarChart from 'react-animate-radar-chart';

import {
  Animator,
  ScrollContainer,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  ZoomIn,
  ZoomOut
} from 'react-scroll-motion';

import programmingSkills from './img/radar/programming.png';
import otherSkills from './img/radar/other.png';

import style from './Page.module.css';

import me2_small from './img/me2_small.png';
import me5_small from './img/me5_small.png';
import me7_small from './img/me7_small.png';
import me8_small from './img/me8_small.png';
import FlagDK from './img/flag-dk.svg';
import FlagUS from './img/flag-us.svg';

export const Page = () => {
  const en = localStorage.getItem('en');
  const isMobile = useMediaQuery({ query: '(max-aspect-ratio: 3/2.7)' });
  const [isEnglish, setIsEnglish] = useState(en === 'true');

  return <main className={style.main}>
    <div className={style.lang} onClick={() => {
      setIsEnglish(prev => {
        localStorage.setItem('en', `${!prev}`);
        return !prev;
      });
    }}>
      <Row style={{ gap: isMobile ? '1vw' : '0.2vw', flexDirection: 'row' }}>
        <span><strong>{isEnglish ? 'EN' : 'DK'}</strong></span>
        {isEnglish ? <FlagUS /> : <FlagDK />}
      </Row>
    </div>
    <Column>
      <ScrollContainer className={style.scrollContainer}>
        <Section id='hero'>
          <Row>
            <Animator animation={batch(
              Move(0, 0, -1000, 0),
              FadeOut(1, 0)
            )}>
              <Image src={me5_small} />
            </Animator>
            <Animator animation={batch(
              Move(0, 0, 1000, 0),
              FadeOut(1, 0)
            )}>
              <Column>
                <h3>Victor Sango</h3>
                {
                  isEnglish ?
                    <TypeAnimation
                      sequence={[
                        `full stack developer`, 2000,
                        `web developer`, 2000,
                        `web designer`, 2000,
                      ]}
                      wrapper="p"
                      speed={40}
                      repeat={Infinity}
                    /> :
                    <TypeAnimation
                      sequence={[
                        `full stack udvikler`, 2000,
                        `web udvikler`, 2000,
                        `web designer`, 2000,
                      ]}
                      wrapper="p"
                      speed={40}
                      repeat={Infinity}
                    />
                }
                <Animator animation={batch(
                  Move(0, 0, -1000, 200),
                  FadeOut(1, 0)
                )}>
                  <ScrollIndicator text={isEnglish ? 'scroll to explore' : 'scroll for at gå på opdagelse'} />
                </Animator>
              </Column>
            </Animator>
          </Row>
        </Section>
        <Section id='about'>
          <Animator animation={batch(
            Move(0, -500, 0, 1500),
            ZoomIn(0.5, 1),
            Fade()
          )}>
            <Column>
              <h1>{isEnglish ? 'who am i?' : 'hvem er jeg?'}</h1>
            </Column>
          </Animator>
        </Section>
        <Section id='about-intro'>
          <Column>
            <Row style={{ gap: isMobile ? undefined : '3vw' }}>
              <Animator animation={batch(
                Fade()
              )}>
                <Image
                  src={me2_small}
                  scale={isMobile ? '100%' : '70%'}
                  height={isMobile ? '35vh' : undefined}
                />
              </Animator>
              <Animator animation={batch(
                Fade()
              )}>
                <Column
                  width={isMobile ? '80vw' : '50vw'}
                  style={{ alignItems: 'flex-start' }}
                >
                  {translate(style, isEnglish).intro}
                </Column>
              </Animator>
            </Row>
          </Column>
        </Section>
        <Section id='about-skills-1'>
          <Animator animation={batch(
            MoveIn(0, 500),
            MoveOut(isMobile ? 0 : -1000, isMobile ? -1000 : 700),
            Fade()
          )}>
            <Row style={{ alignItems: 'flex-start' }}>
              <Column>
                <p><strong>{isEnglish ? 'programming skills' : 'programmering skills'}</strong></p>
                <img src={programmingSkills} className={style.skillsImg} alt="programming skills" />
                {/* <RadarChart
                data={radarDataProgramming}
                showData={true}
                size={480}
                colors={radarColors}
              /> */}
              </Column>
              <Column>
                <p><strong>{isEnglish ? 'other skills' : 'andre skills'}</strong></p>
                <img src={otherSkills} className={style.skillsImg} alt="other skills" />
                {/* <RadarChart
                data={radarDataOther}
                showData={true}
                size={480}
                colors={radarColors}
              /> */}
              </Column>
              {
                isMobile ? <></> :
                  <Column>
                    <p><strong>{isEnglish ? 'stacks & more' : 'stacks & mere'}</strong></p>
                    <Column className={style.stacks} style={{ gap: '0.5vw' }}>
                      <span>Node.js</span>
                      <span>React.js</span>
                      <span>Strapi</span>
                      <span>Railway.app</span>
                      <span>AWS S3</span>
                      <span>.NET</span>
                      <span>LangChain (AI)</span>
                      <span className={style.stacksMore}>Figma</span>
                      <span className={style.stacksMore}>Adobe CC</span>
                    </Column>
                  </Column>
              }
            </Row>
          </Animator>
        </Section>
        {
          isMobile ?
            <Section id='about-skills-2-mobile'>
              <Animator animation={batch(
                MoveIn(0, 700),
                MoveOut(0, 700),
                Fade()
              )}>
                <Column>
                  <p><strong>{isEnglish ? 'stacks & more' : 'stacks & mere'}</strong></p>
                  <Column className={style.stacksMobile} style={{ gap: '2vw' }}>
                    <span>Node.js</span>
                    <span>React.js</span>
                    <span>Strapi</span>
                    <span>Railway.app</span>
                    <span>AWS S3</span>
                    <span>.NET</span>
                    <span>LangChain (AI)</span>
                    <span className={style.stacksMoreMobile}>Figma</span>
                    <span className={style.stacksMoreMobile}>Adobe CC</span>
                  </Column>
                </Column>
              </Animator>
            </Section> :
            <Section id='about-skills-2-desktop'>
              <Animator animation={batch(
                MoveIn(0, -700),
                MoveOut(-1000, 700),
                Fade()
              )}>
                <Column>
                  <h3>{isEnglish ? 'a little bit more about me' : 'lidt mere om mig'}</h3>
                </Column>
              </Animator>
            </Section>
        }
        <Section id='about-journey'>
          <Column>
            <Row style={{ gap: isMobile ? undefined : '3vw' }}>
              <Animator animation={batch(
                MoveIn(0, -700),
                Fade()
              )}>
                <Column
                  width={isMobile ? '80vw' : '50vw'}
                  style={{ alignItems: 'flex-start' }}
                >
                  {translate(style, isEnglish).journey}
                </Column>
              </Animator>
              {
                isMobile ? <></> :
                  <Animator animation={batch(
                    MoveIn(1000, 0),
                    Fade()
                  )}>
                    <Image
                      src={me7_small}
                      scale={'70%'}
                      width={'20vw'}
                      height={'60vh'}
                    />
                  </Animator>
              }
            </Row>
          </Column>
        </Section>
        <Section id='projects'>
          <Animator animation={batch(
            Move(0, -500, 0, 1500),
            Fade()
          )}>
            <Column>
              <h1>{isEnglish ? 'my projects?' : 'mine projekter?'}</h1>
            </Column>
          </Animator>
        </Section>
        <Section id='projects-pre-content'>
          <Animator animation={batch(
            Move(0, 0, 1000, 0),
            Fade()
          )}>
            <Column>
              <h3>{isEnglish ? 'take a look' : 'tag et kig'}</h3>
            </Column>
          </Animator>
        </Section>
        <Section id='projects-1'>
          <Animator animation={batch(
            Move(-1000, 0, 1000, 0),
            Fade()
          )}>
            <ProjectDescription
              isEnglish={isEnglish}
              title='steno museet'
              description='HTML + CSS + JavaScript'
              url='https://eaaa.deltabox.studio/steno-museet/web'
            />
          </Animator>
        </Section>
        <Section id='projects-2'>
          <Animator animation={batch(
            MoveIn(-1000, 0),
            MoveOut(0, 700),
            Fade()
          )}>
            <ProjectDescription
              isEnglish={isEnglish}
              title='studietur'
              description='Node.js + HTML + CSS + JavaScript'
              url='https://eaaa-studietur.deltabox.studio'
            />
          </Animator>
        </Section>
        <Section id='projects-3'>
          <Animator animation={batch(
            MoveIn(0, -700),
            MoveOut(-1000, 0),
            Fade()
          )}>
            <ProjectDescription
              isEnglish={isEnglish}
              title='nippon'
              description='HTML + CSS + JavaScript'
              url='https://eaaa.deltabox.studio/nippon-maeltidskasser'
            />
          </Animator>
        </Section>
        <Section id='projects-4'>
          <Animator animation={batch(
            MoveIn(1000, 0),
            MoveOut(0, -700),
            Fade()
          )}>
            <ProjectDescription
              isEnglish={isEnglish}
              title={isEnglish ? 'price calculator' : 'pris udregner'}
              description='HTML + CSS + JavaScript'
              url='https://github.com/viggotico/pris-udregner'
            />
          </Animator>
        </Section>
        <Section id='projects-5'>
          <Animator animation={batch(
            MoveIn(0, 700),
            MoveOut(0, -700),
            Fade()
          )}>
            <ProjectDescription
              isEnglish={isEnglish}
              title='online magasin'
              description='HTML + CSS + JavaScript'
              url='https://eaaa.deltabox.studio/onlinemagasin'
            />
          </Animator>
        </Section>
        <Section id='cta'>
          <Animator animation={batch(
            MoveIn(0, 700),
            ZoomOut(1, 0),
            Fade()
          )}>
            <Column>
              <h1>{isEnglish ? 'what now?' : 'hvad nu?'}</h1>
            </Column>
          </Animator>
        </Section>
        <Section id='cta-contact'>
          <Row style={{ gap: isMobile ? '10vw' : undefined }}>
            <Animator animation={batch(
              MoveIn(-1000, 0),
              FadeIn(0, 1)
            )}>
              <Image
                src={me8_small}
                scale='70%'
                width={isMobile ? undefined : '20vw'}
                height={isMobile ? '40vh' : '60vh'}
              />
            </Animator>
            <Animator animation={batch(
              MoveIn(1000, 0),
              FadeIn(0, 1)
            )}>
              <Column style={{ alignItems: 'flex-start', gap: isMobile ? '4vw' : '2vw' }}>
                <h3>{isEnglish ? 'contact me' : 'kontakt mig'}</h3>
                <table className={style.tableCompact} cellPadding='0'>
                  <tbody>
                    <tr>
                      <td><p>email</p></td>
                      <td><a href='mailto:viggo_tico@hotmail.com' target='_blank'><p>viggo_tico@hotmail.com</p></a></td>
                    </tr>
                    <tr>
                      <td><p>github</p></td>
                      <td><a href='https://github.com/viggotico' target='_blank'><p>@viggotico</p></a></td>
                    </tr>
                  </tbody>
                </table>
              </Column>
            </Animator>
          </Row>
        </Section>
      </ScrollContainer>
    </Column>
  </main>
}
