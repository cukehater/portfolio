import Image from 'next/image'
import Link from 'next/link'

import profile from '@/app/pages/resume/images/profile_img.jpg'
import html from '@/app/pages/resume/images/html.svg'
import css from '@/app/pages/resume/images/css.svg'
import sass from '@/app/pages/resume/images/sass.svg'
import javascript from '@/app/pages/resume/images/javascript.svg'
import jquery from '@/app/pages/resume/images/jquery.svg'
import react from '@/app/pages/resume/images/react.svg'
import typescript from '@/app/pages/resume/images/typescript.svg'
import nextjs from '@/app/pages/resume/images/next.svg'
import git from '@/app/pages/resume/images/git.svg'

export default function Resume() {
  const info = {
    basic: {
      name: '김경식',
      position: 'Front-end Engineer',
      career: `${new Date().getFullYear() - 2018}년차, `,
      highlight: '스스로 문제를 찾아 해결하는'
    },
    list: [
      { title: 'Name.', value: '김경식' },
      {
        title: 'Birth.',
        value: <>1993.02.27 ({new Date().getFullYear() - 1993}세)</>
      },
      { title: 'Gender.', value: '남성 (육군 만기 제대)' },
      {
        title: 'Phone.',
        value: (
          <>
            <Link
              className='outline-none text-black decoration-auto; hover:text-[#2847f1] hover:decoration-1 hover:underline hover:underline-offset-[0.25em]'
              href='tel:01051418101'
            >
              010.5141.8101
            </Link>
          </>
        )
      },
      {
        title: 'E-Mail.',
        value: (
          <>
            <Link
              className='outline-none text-black decoration-auto; hover:text-[#2847f1] hover:decoration-1 hover:underline hover:underline-offset-[0.25em]'
              href='mailto:cukehater@gmail.com'
            >
              cukehater@gmail.com
            </Link>
          </>
        )
      },
      {
        title: 'Portfolio.',
        value: (
          <Link
            className='outline-none text-black decoration-auto; hover:text-[#2847f1] hover:decoration-1 hover:underline hover:underline-offset-[0.25em]'
            href='https://kyoungsic.me'
            target='_blank'
          >
            https://kyoungsic.me
          </Link>
        )
      },
      {
        title: 'Github.',
        value: (
          <Link
            className='outline-none text-black decoration-auto; hover:text-[#2847f1] hover:decoration-1 hover:underline hover:underline-offset-[0.25em]'
            href='https://github.com/cukehater'
            target='_blank'
          >
            https://github.com/cukehater
          </Link>
        )
      },
      {
        title: 'Blog.',
        value: (
          <Link
            className='outline-none text-black decoration-auto; hover:text-[#2847f1] hover:decoration-1 hover:underline hover:underline-offset-[0.25em]'
            href='https://velog.io/@cukehater'
            target='_blank'
          >
            https://velog.io/@cukehater
          </Link>
        )
      }
    ],
    coverLetter: [
      `${
        new Date().getFullYear() - 2018
      }년 차 개발자로 기업에서 웹 퍼블리싱/프론트엔드 업무를 수행했습니다. 웹 에이전시에서 약 2년간 퍼블리싱 파트장 역할을 담당 했으며, 동료들과의 원활한 협업을 통해 80개의 프로젝트에 참여하여 모두 성공적으로 런칭한 경험이 있습니다.`,
      '반복되는 작업 비용을 줄이는 것에 관심이 있습니다. 개인 프로젝트로 UI 컴포넌트와 플러그인을 개발하여 Github과 팀에 배포하여 컴포넌트 작업 시간을 최대 80% 줄여 팀 개발 생산성에 기여한 경험이 있습니다.',
      '특히, 사용자 경험 개선에 깊은 관심이 있습니다. CSS와 JavaScript 애니메이션을 이용한 시각적으로 매력적인 UI 구현하는 것부터 로딩 속도, 브라우저 렌더링 성능 문제를 개선하여 사용자 중심의 빠르고 효율적인 서비스를 구현하는 것을 목표로 하고 있습니다.'
    ]
  }

  const skills = [
    { name: 'HTML', src: html },
    { name: 'CSS', src: css },
    { name: 'Sass', src: sass },
    { name: 'JavaScript', src: javascript },
    { name: 'jQuery', src: jquery },
    { name: 'React', src: react },
    { name: 'TypeScript', src: typescript },
    { name: 'NextJS', src: nextjs },
    { name: 'Git', src: git }
  ]

  const experiences = [
    {
      company: '(주)야나두',
      description: '간략한 설명이 들어갑니다.',
      position: 'Front-end Engineer / Lead Developer',
      period: '2023.11 ~ 현재',
      projects: [
        {
          work: 'Lorem ipsum dolor sit amet',
          list: [
            <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quos?</>,
            <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quos?</>,
            <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quos?</>
          ]
        }
      ]
    },
    {
      company: '마이엘허브(디자인허브)',
      description: '기업의 반응형 웹 사이트와 쇼핑몰을 구축하는 웹 에이전시',
      position: 'Web Publisher / Publishing Lead',
      period: '2019.09 ~ 2023.03 (3년 7개월)',
      projects: [
        {
          work: '기업 웹 서비스 구축',
          list: [
            <>
              Media Query, Flexbox, Grid 등의 레이아웃 패턴을 활용한 반응형 웹 서비스 구축, 디바이스 접근성 개선으로
              서비스 이용률 향상에 기여
            </>,
            <>
              다수 기업의 웹 접근성 인증 획득을 통해 기업의 사회공헌적 이미지 강화와 사용자 경험 개선 웹 성능 최적화를
              위한 클린 코드 작성과 동적 콘텐츠 리팩토링에 집중하여 페이지 이탈율 개 선
            </>,
            <>
              JavaScript, CSS를 활용한 인터랙티브 UI/UX 개발 역량에 집중한 결과 iF Design Award 2023 웹 사이트 부문 본상
              수상 경험
            </>,
            <>
              JavaScript를 활용한 쇼핑몰 솔루션 커스터마이징, 쇼핑몰 사용자 경험 향상에 따른 쇼핑몰 재방문율 15% 증가
            </>,
            <>
              기획, 디자인팀 동료들과 유연한 소통과 일정 관리를 통해 80개 이상의 프로젝트에 참여하여 모두 성공적으로
              런칭
            </>,
            <>Semantic 마크업, BEM, Sass 전처리기를 활용한 프로젝트 공통 작업 환경 구축</>,
            <>재사용 가능한 UI 컴포넌트 및 플러그인을 개발/배포, 작업 시간을 최대 80% 줄여 개발 생산 성에 기여</>,
            <>효율적이고 일관된 코드 패턴을 유지할 수 있도록 정기적 코드 리뷰 진행</>,
            <>신규 팀원이 팀에 빠르게 적응할 수 있도록 온보딩 프로세스 가이드 문서 작성</>
          ]
        },
        {
          work: 'CAFE24 쇼핑몰 서비스 구축',
          list: [
            <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quos?</>,
            <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quos?</>,
            <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quos?</>
          ]
        },
        {
          work: '퍼블리싱 파트장 역할 담당',
          list: [
            <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quos?</>,
            <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quos?</>,
            <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quos?</>
          ]
        }
      ]
    },
    {
      company: '(주)투비첸네트웍스',
      description: '디지털 사이니지 미디어 플랫폼 스타트업',
      position: 'Web Publisher',
      period: '2018.04 ~ 2019.06 (1년 3개월)',
      projects: [
        {
          work: '자사 웹 사이트 구축',
          list: [
            <>
              첫 번째 개발자로 입사하여 단독으로 필요한 모든 IT 서비스(웹 사이트, 인터랙티브 광고 콘텐 츠 등)
              기획/개발/배포/운영
            </>
          ]
        },
        {
          work: '인터랙티브 웹 콘텐츠 제작',
          list: [
            <>
              XX사 게임 사전 예약 이벤트 페이지에 Canvas, 애니메이션으로 UI를 개선하여 사용자 참여 유도, 전월 대비 CPA
              20% 상승
            </>
          ]
        }
      ]
    }
  ]

  const toys = [
    {
      title: '김경식 포트폴리오 웹 사이트',
      link: 'https://kyoungsic.me',
      description: '최대 320px까지 반응하는 포트폴리오 웹 사이트',
      contribution: '단독 작업',
      skills: 'React, Sass, Canvas, GSAP',
      list: [
        <>Design부터 Back-end까지, 전 과정을 단독으로 수행</>,
        <>JavaScript/CSS와 다양한 라이브러리를 활용한 애니메이션으로 스크롤 이벤트에 반응하는</>,
        <>콘텐츠의 스토리 텔링에 집중</>,
        <>기존 PHP로 제작한 웹 사이트를 React+TypeScript로 Migration</>,
        <>Firebase 실시간 데이터베이스를 활용한 프로젝트 관리자 CRUD 대시보드 작업</>,
        <>Firebase Authentication을 이용한 관리자 로그인과 접근 경로 보호 구현</>,
        <>Context API와 Hooks를 사용한 상태 관리</>,
        <>React Query를 활용한 API 데이터 관리</>,
        <>Netlify와 Github Actions를 이용한 Auto Deploy</>
      ]
    },
    {
      title: 'Roulette App',
      link: 'https://cukehater.github.io/react-roulette/',
      description: '선택지를 무작위로 추첨 하는 룰렛 웹 애플리케이션',
      contribution: '단독 작업',
      skills: 'React, Sass, Canvas, GSAP',
      list: [
        <>최대 25개의 생성/삭제 가능한 옵션</>,
        <>룰렛의 인터랙티브 애니메이션으로 흥미로운 사용자 경험을 제공</>,
        <>Context API와 Hooks를 사용한 상태 관리</>,
        <>로컬 스토리지를 활용하여 재방문 시 값이 유지되도록 구현</>
      ]
    }
  ]

  const certificates = [
    {
      name: '정보처리산업기사',
      issuer: '한국산업인력공단'
    },
    {
      name: 'OCJP(Oracle Certified Java Programmer)',
      issuer: 'Oracle'
    },
    {
      name: 'GTQ 1급(Adobe Photoshop)',
      issuer: '한국생산성본부'
    },
    {
      name: 'GTQi(Adobe Illustrator)',
      issuer: '한국생산성본부'
    },
    {
      name: 'ITQ OA Master',
      issuer: '한국생산성본부'
    }
  ]

  return (
    <main className=' bg-white'>
      <div className='w-[21cm] mx-auto block py-[1.75cm]'>
        <section className={`flex items-end mb-12 pb-12 border-b border-solid border-[#ddd];`}>
          <div className='w-28 rounded overflow-hidden mr-5'>
            <Image className='w-full scale-125 origin-top' src={profile} width={200} height={200} alt='프로필 사진' />
          </div>
          <hgroup>
            <h1 className='text-3xl font-bold'>{info.basic.name}</h1>
            <p className='font-semibold mt-1'>{info.basic.position}</p>
            <h3 className='mt-3 font-semibold text-lg'>
              {info.basic.career}
              <span className='relative before:content-[""] before:w-full before:h-2/5 before:bg-[#ffb90075] before:absolute before:bottom-0 before:left-0'>
                <b className='relative z-20'>{info.basic.highlight}</b>
              </span>{' '}
              개발자 {info.basic.name}입니다.
            </h3>
          </hgroup>
        </section>

        <section className='mb-12 pb-12 border-b border-solid border-[#ddd];'>
          <ul>
            {info.list.map((item, idx) => (
              <li key={`info-${idx}`} className='flex mb-2 last:mb-0'>
                <p className='w-24 text-justify font-semibold'>{item.title}</p>
                <p>{item.value}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className='mb-12 pb-12 border-b border-solid border-[#ddd];'>
          <h1 className='text-4xl font-semibold text-[#ffb900] mb-5'>Introduction.</h1>
          {info.coverLetter.map((item, idx) => (
            <p key={`coverLetter-${idx}`} className='mb-3 last:mb-0 break-keep'>
              {item}
            </p>
          ))}
        </section>

        <section className='mb-12 pb-12 border-b border-solid border-[#ddd];'>
          <h1 className='text-4xl font-semibold text-[#ffb900] mb-5'>Main Skills.</h1>
          <ul className='flex mt-5'>
            {skills.map((skill, idx) => (
              <li key={`key-skill-${idx}`} className='text-center mr-5 last:mr-0'>
                <div className='flex items-center justify-center mx-auto w-12 h-14'>
                  <Image src={skill.src} width={45} height={45} alt={skill.name} />
                </div>
                <p className='font-semibold text-gray-900 text-sm mt-1'>{skill.name}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className='mb-12 pb-12 border-b border-solid border-[#ddd];'>
          <h1 className='text-4xl font-semibold text-[#ffb900] mb-5'>Work Experience.</h1>

          {experiences.map((exp, idx) => (
            <article
              key={`exp-${idx}`}
              className='last:pb-0 last:mb-0 last:border-none pb-6 mb-6 border-b border-solid border-[#ddd]'
            >
              <hgroup className='flex items-end'>
                <h3 className='text-2xl font-bold mb-1'>{exp.company}</h3>
                <span className='text-[#888] ml-2 translate-y-[-.25rem]'>{exp.description}</span>
              </hgroup>

              <div className='mt-1 mb-6 font-semibold'>
                <p className='font-medium'>{exp.position}</p>
                <p className='text-[#888] font-normal'>{exp.period}</p>
              </div>

              {exp.projects.map((project, idx) => (
                <div key={`project-${idx}`} className='mb-6 last:mb-0'>
                  <h3 className='mb-2 text-lg'>
                    <span className='relative before:content-[""] before:w-full before:h-2/5 before:bg-[#ffb90075] before:absolute before:bottom-0 before:left-0'>
                      <b className='relative z-20'>{project.work}</b>
                    </span>
                  </h3>
                  <ul className='list-disc'>
                    {project.list.map((text, idx) => (
                      <li key={`list-${idx}`} className='break-keep ml-4 mb-1 last:mb-0'>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          ))}
        </section>

        <section className='mb-12 pb-12 border-b border-solid border-[#ddd];'>
          <h1 className='text-4xl font-semibold text-[#ffb900] mb-5'>Toy Projects.</h1>

          {toys.map((toy, idx) => (
            <article
              key={`toy-${idx}`}
              className='last:pb-0 last:mb-0 last:border-none pb-6 mb-6 border-b border-solid border-[#ddd]'
            >
              <hgroup className='mb-4 flex flex-col'>
                <Link href={toy.link} target='_blank' rel='noreferrer noopener' className='text-xl font-bold mb-1 '>
                  {toy.title}
                  <span className='text-sm ml-1 font-normal text-[#333]'>({toy.contribution})</span>
                </Link>
                <span className='text-[#888]'>{toy.description}</span>
              </hgroup>

              <Link
                href={toy.link}
                target='_blank'
                rel='noreferrer noopener'
                className='mt-1 mb-4 outline-none text-black decoration-auto; hover:text-[#2847f1] hover:decoration-1 hover:underline hover:underline-offset-[0.25em]'
              >
                🔗 {toy.link}
              </Link>

              <div className='mt-1 mb-4'>
                <p className='flex items-center mt-4'>
                  <span className='mr-1 text-[#ffb900] font-bold'>Skills.</span>
                  {toy.skills}
                </p>
              </div>

              <ul className='list-disc'>
                {toy.list.map(item => (
                  <li key={`list-${idx}`} className='break-keep mb-1 ml-4 last:mb-0'>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className='mb-12 pb-12 border-b border-solid border-[#ddd];'>
          <h1 className='text-4xl font-semibold text-[#ffb900] mb-5'>Certification.</h1>
          <ul className='list-disc'>
            {certificates.map((certi, idx) => (
              <li key={`certi-${idx}`} className='break-keep mb-1 ml-4 last:mb-0'>
                <h3 className='text-lg font-semibold'>{certi.name}</h3>
                <p>{certi.issuer}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h1 className='text-4xl font-semibold text-[#ffb900] mb-5'>Education.</h1>
          <ul>
            <li className='break-keep mb-1 last:mb-0'>
              <h3 className='text-lg font-semibold mb-1'>동양미래대학(동양공업전문대학) 컴퓨터정보공학</h3>
              <p>2012.03 ~ 2017.02 졸업 (3.98/4.5)</p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
