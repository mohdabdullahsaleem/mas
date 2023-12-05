import m from 'mithril'
import fs from 'fs'
import path from 'path'

import logo from '../assets/images/mas-logo.svg'
import photoLight from '../assets/images/mohammad-saleem-light.webp'
import darkMode from '../assets/images/dark-mode.webp'
import colorMode from '../assets/images/color-mode.webp'
import css3 from '../assets/images/branding-icons/css3-logo.png'
import html5 from '../assets/images/branding-icons/html5-logo.png'
import javascript from '../assets/images/branding-icons/javascript-logo.svg'
import php from '../assets/images/branding-icons/php-logo.svg'
import typescript from '../assets/images/branding-icons/typescript-logo.svg'

import '../assets/styles/base.scss'
import './index.scss'

const root = document.body

let click = false
let email = '@'
let lightsOff
let colourModeOn = false

const data = () => {
    return JSON.parse(
        fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8')
    )
}

if (data().email) {
    email = data().email
}

m.mount(root, {
    oncreate: function () {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
            document.documentElement.classList.remove('light')
            lightsOff = true
        } else if (
            localStorage.theme === 'light' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: light)').matches)
        ) {
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.add('light')
            lightsOff = false
        }

        if (localStorage.colorMode === 'color-mode') {
            document.documentElement.classList.add('color-mode')
            colourModeOn = true
        } else {
            document.documentElement.classList.remove('color-mode')
            colourModeOn = false
        }
    },
    view: function () {
        return m(
            'div',
            {
                class: 'flex flex-col dark:bg-black min-h-screen w-auto'
            },
            [
                m(
                    'div',
                    {
                        class: `${
                            colourModeOn
                                ? 'bg-[#370b4c] dark:bg-[#2d2d2d] bg-[#9fe1ea]'
                                : 'bg-[#fafafa] dark:bg-[#2d2d2d]'
                        } header w-screen h-24 sm:block flex flex-row justify-between items-center px-8 min-w-[460px]`
                    },
                    [
                        m('div', [
                            m(
                                'a',
                                {
                                    class: `${
                                        colourModeOn
                                            ? 'text-[#d47c7c]  border-[#024b7b]'
                                            : 'text-black dark:text-white '
                                    }  hidden sm:block sm:float-left p-4 my-4 text-xl pl-8 md:text-4xl md:my-3 lg:pl-5 lg:py-1 lg:text-6xl font-bold border-b-4 border-solid `,
                                    href: '/'
                                },
                                'Code'
                            ),
                            m(
                                'a',
                                {
                                    class: `${
                                        colourModeOn
                                            ? 'text-[#f2f0ac] border-[#024b7b] '
                                            : 'text-black dark:text-white'
                                    }  hidden sm:block sm:float-left p-4 my-4 text-xl pl-8 md:text-4xl md:my-3 lg:pl-5 lg:py-1 lg:text-6xl font-bold border-b-4 border-solid`,
                                    href: '/'
                                },

                                ' & '
                            ),
                            m(
                                'a',
                                {
                                    class: `${
                                        colourModeOn
                                            ? 'text-[#95d266] border-[#024b7b] '
                                            : 'text-black dark:text-white'
                                    }  hidden sm:block sm:float-left p-4 my-4 text-xl pl-8 md:text-4xl md:my-3 lg:pl-5 lg:py-1 lg:text-6xl font-bold border-b-4 border-solid`,
                                    href: '/'
                                },

                                'Creativity'
                            ),
                            m(
                                'a',
                                {
                                    class: `${
                                        colourModeOn
                                            ? 'text-[#512da8] border-b-4 border-dotted border-[#512da8]'
                                            : 'text-black dark:text-white'
                                    }  hidden sm:block sm:float-left p-4 my-4 text-xl pl-8 md:text-4xl md:my-3 lg:pl-5 lg:py-1 lg:text-6xl font-bold border-b-4 border-dotted`,
                                    href: '/'
                                },

                                'Unleashed'
                            ),
                            m('img', {
                                class: 'logo sm:float-left w-12 h-12 m-6 mx-8 sm:mx-0 text-xl md:text-4xl lg:text-6xl font-bold text-black ',
                                src: logo,
                                alt: 'Mohammad Saleem Logo',
                                title: 'Mohammad Saleem Logo'
                            })
                        ]),
                        m(
                            'div',
                            {
                                class: 'flex flex-row justify-end'
                            },
                            [
                                m(
                                    'button',
                                    {
                                        class: 'pointer border-white block text-white block',
                                        id: 'lightsOff',
                                        type: 'button',
                                        onclick: function () {
                                            lightsOff = !lightsOff
                                            if (lightsOff) {
                                                document.documentElement.classList.add(
                                                    'dark'
                                                )
                                                document.documentElement.classList.remove(
                                                    'light'
                                                )
                                                localStorage.theme = 'dark'
                                            } else if (!lightsOff) {
                                                document.documentElement.classList.add(
                                                    'light'
                                                )
                                                document.documentElement.classList.remove(
                                                    'dark'
                                                )
                                                localStorage.theme = 'light'
                                            }
                                        }
                                    },
                                    [
                                        m('img', {
                                            src: darkMode,
                                            alt: 'Dark Mode',
                                            class: 'w-16 h-16 m-3',
                                            title: 'Dark Mode'
                                        })
                                    ]
                                ),
                                m(
                                    'button',
                                    {
                                        class: 'pointer border-white block text-white block',
                                        id: 'colorMode',
                                        type: 'button',
                                        onclick: function () {
                                            colourModeOn = !colourModeOn
                                            if (colourModeOn) {
                                                colourModeOn = true
                                                document.documentElement.classList.add(
                                                    'color-mode'
                                                )
                                                localStorage.colorMode =
                                                    'color-mode'
                                            } else {
                                                colourModeOn = false
                                                document.documentElement.classList.remove(
                                                    'color-mode'
                                                )
                                                localStorage.removeItem(
                                                    'colorMode'
                                                )
                                            }
                                        }
                                    },
                                    [
                                        m('img', {
                                            src: colorMode,
                                            alt: 'Colour Mode',
                                            class: 'w-12 h-12 m-3 filter-none dark:filter-none',
                                            title: 'Colour Mode'
                                        })
                                    ]
                                )
                            ]
                        )
                    ]
                ),

                m('div', { class: 'flex justify-between flex-1' }, [
                    m(
                        'div',
                        {
                            class: `main flex flex-col w-screen flex-1 py-8`
                        },
                        [
                            m(
                                'div',
                                {
                                    class: `${
                                        colourModeOn
                                            ? 'text-black bg-white dark:text-white dark:bg-[#595959]'
                                            : 'text-black bg-white dark:text-white dark:bg-[#595959]'
                                    }  auto h-auto flex flex-col mx-auto my-8 px-8 py-8 grid place-content-center rounded-lg`
                                },
                                [
                                    m(
                                        'div',
                                        {
                                            class: 'text-lg md:text-2xl text-center'
                                        },
                                        'Full Stack Website Developer'
                                    ),
                                    m(
                                        'div',
                                        {
                                            class: 'text-sm md:text-lg text-center'
                                        },
                                        'with over 15 years of experience'
                                    ),
                                    m(
                                        'div',
                                        {
                                            class: 'flex flex-row justify-space-evenly mx-auto my-4 min-w-max'
                                        },
                                        [
                                            m('img', {
                                                class: `h-6 m-2 xs:h-10 dark:filter-none filter-none`,
                                                src: css3,
                                                alt: 'CSS3 Logo',
                                                title: 'CSS3 Logo'
                                            }),
                                            m('img', {
                                                class: `h-6 m-2 xs:h-10 dark:filter-none filter-none`,
                                                src: html5,
                                                alt: 'HTML5 Logo',
                                                title: 'HTML5 Logo'
                                            }),
                                            m('img', {
                                                class: `h-6 m-2 xs:h-10 dark:filter-none filter-none`,
                                                src: javascript,
                                                alt: 'JavaScript Logo',
                                                title: 'JavaScript Logo'
                                            }),
                                            m('img', {
                                                class: `h-6 m-2 xs:h-10`,
                                                src: typescript,
                                                alt: 'TypeScript Logo',
                                                title: 'TypeScript Logo'
                                            }),
                                            m('img', {
                                                class: `h-6 m-2 xs:h-10`,
                                                src: php,
                                                alt: 'PHP Logo',
                                                title: 'PHP Logo'
                                            })
                                        ]
                                    )
                                ]
                            ),
                            m(
                                'div',
                                {
                                    class: 'flex flex-col flex-wrap md:flex-row justify-evenly mx-auto'
                                },
                                [
                                    m(
                                        'div',
                                        {
                                            class: 'mx-auto'
                                        },
                                        [
                                            m(
                                                'div',
                                                {
                                                    class: `${
                                                        colourModeOn
                                                            ? 'text-black bg-white dark:text-white dark:bg-[#595959]'
                                                            : 'text-black bg-white dark:text-white dark:bg-[#595959]'
                                                    } rounded-lg text-center grid place-content-center w-72 h-72 mx-8 my-16 p-8`
                                                },
                                                [
                                                    m(
                                                        'div',
                                                        {
                                                            class: 'xs:text-lg md:text-2xl'
                                                        },
                                                        'Skilled with the frameworks & CMS:'
                                                    ),
                                                    m('div', [
                                                        m(
                                                            'a',
                                                            {
                                                                href: 'https://wordpress.org/',
                                                                class: 'text-sm'
                                                            },
                                                            'WordPress '
                                                        ),
                                                        m(
                                                            'a',
                                                            {
                                                                href: 'https://react.dev/',
                                                                class: 'text-sm'
                                                            },
                                                            'React '
                                                        ),
                                                        m(
                                                            'a',
                                                            {
                                                                href: 'https://svelte.dev/',
                                                                class: 'text-sm'
                                                            },
                                                            'Svelte '
                                                        ),
                                                        m(
                                                            'a',
                                                            {
                                                                href: 'https://vuejs.org/',
                                                                class: 'text-sm'
                                                            },
                                                            'Vue '
                                                        ),
                                                        m(
                                                            'a',
                                                            {
                                                                href: 'https://mithril.js.org/',
                                                                class: 'text-sm'
                                                            },
                                                            'Mithril '
                                                        ),
                                                        [
                                                            m(
                                                                'span',
                                                                {
                                                                    class: 'text-sm'
                                                                },
                                                                'and many more...'
                                                            )
                                                        ]
                                                    ])
                                                ]
                                            )
                                        ]
                                    ),
                                    m(
                                        'div',
                                        {
                                            class: 'md:grid md:place-content-center min-w-max mx-8 my-8'
                                        },
                                        [
                                            m('img', {
                                                class: `${
                                                    colourModeOn
                                                        ? 'grayscale-0'
                                                        : 'grayscale'
                                                } w-72 mx-16 rounded-full`,
                                                src: photoLight,
                                                alt: 'Mohammad Saleem',
                                                title: 'Mohammad Saleem'
                                            })
                                        ]
                                    )
                                ]
                            ),
                            m('div', { class: 'w-full h-auto' }, [
                                m(
                                    'span',
                                    {
                                        class: `relative w-100 ${
                                            click ? 'm-0' : ''
                                        } ${
                                            colourModeOn
                                                ? 'text-black bg-white dark:text-white dark:bg-[#595959]'
                                                : 'text-black bg-white dark:text-white dark:bg-[#595959]'
                                        } w-max block p-4 rounded-lg h-16 grid place-content-center xs:text-sm md:text-xl text-center shadow-xl mx-auto my-8`
                                    },
                                    [
                                        m(
                                            'a',
                                            {
                                                href: `mailto:${email}`,
                                                class: 'animate-pulse px-4',
                                                onclick: () => {
                                                    return (
                                                        (click = !click),
                                                        setTimeout(
                                                            () =>
                                                                (click =
                                                                    !click),
                                                            5000
                                                        )
                                                    )
                                                }
                                            },
                                            click
                                                ? email
                                                : 'Click to Reveal Email'
                                        )
                                    ]
                                )
                            ])
                        ]
                    )
                ]),
                m(
                    'div',
                    {
                        class: `${
                            colourModeOn
                                ? 'bg-[#95d266] dark:bg-[#024b7b]'
                                : 'bg-[#ffffff] dark:text-black dark:bg-[#fff]'
                        } footer grid place-content-center min-h-min dark:text w-auto  min-w-[460px] mt-8`
                    },
                    [m('span', { class: 'p-4' }, 'mohdsaleem.uk © 2021')]
                )
            ]
        )
    }
})
