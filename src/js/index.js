import m from 'mithril'
import fs from 'fs'
import path from 'path'

import logo from '../assets/images/mas-logo.svg'
import atPC from '../assets/images/at-pc-bw.webp'
import atPCColor from '../assets/images/at-pc-colour.webp'
import darkMode from '../assets/images/dark-mode.webp'
import colorMode from '../assets/images/color-mode.webp'

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
                class: 'flex flex-col dark:bg-black'
            },
            [
                m(
                    'div',
                    {
                        class: `${
                            colourModeOn
                                ? 'bg-[#370b4c] dark:bg-[#2d2d2d] bg-[#dadada]'
                                : 'bg-[#fafafa] dark:bg-[#2d2d2d]'
                        } header w-screen h-24 sm:block flex flex-row justify-between items-center`
                    },
                    [
                        m('div', {}, [
                            m(
                                'a',
                                {
                                    class: `${
                                        colourModeOn
                                            ? 'text-[#d47c7c] '
                                            : 'text-black dark:text-white'
                                    }  hidden sm:block sm:float-left p-4 my-4 text-xl pl-8 md:text-4xl md:my-3 lg:pl-5 lg:py-1 lg:text-6xl font-bold`,
                                    href: '/'
                                },
                                'Code'
                            ),
                            m(
                                'a',
                                {
                                    class: `${
                                        colourModeOn
                                            ? 'text-[#f2f0ac]'
                                            : 'text-black dark:text-white'
                                    }  hidden sm:block sm:float-left p-4 my-4 text-xl pl-8 md:text-4xl md:my-3 lg:pl-5 lg:py-1 lg:text-6xl font-bold`,
                                    href: '/'
                                },

                                ' & '
                            ),
                            m(
                                'a',
                                {
                                    class: `${
                                        colourModeOn
                                            ? 'text-[#95d266]'
                                            : 'text-black dark:text-white'
                                    }  hidden sm:block sm:float-left p-4 my-4 text-xl pl-8 md:text-4xl md:my-3 lg:pl-5 lg:py-1 lg:text-6xl font-bold`,
                                    href: '/'
                                },

                                'Creativity'
                            ),
                            m(
                                'a',
                                {
                                    class: `${
                                        colourModeOn
                                            ? 'text-[#512da8]'
                                            : 'text-black dark:text-white'
                                    }  hidden sm:block sm:float-left p-4 my-4 text-xl pl-8 md:text-4xl md:my-3 lg:pl-5 lg:py-1 lg:text-6xl font-bold`,
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
                                            class: 'w-12 h-12 m-3',
                                            title: 'Colour Mode'
                                        })
                                    ]
                                )
                            ]
                        )
                    ]
                ),

                m(
                    'div',
                    {
                        class: `${
                            colourModeOn ? '' : 'grayscale'
                        }  main flex flex-col flex-1 pb-0 w-screen bg-[#ffffff0a] h-100`
                    },
                    [
                        m(
                            'div',
                            {
                                class: 'lg:flex lg:flex-row lg:flex-1 lg:flex-row-reverse xl:w-5/6 mx-auto w-full justify-evenly light:bg-[#2d2d2d0a]'
                            },
                            [
                                m(
                                    'div',
                                    {
                                        class: ''
                                    },
                                    [
                                        m('img', {
                                            src: colourModeOn
                                                ? atPCColor
                                                : atPC,
                                            alt: 'At my PC',
                                            title: 'At my PC',
                                            class: `${
                                                colourModeOn
                                                    ? 'bg-gradient-to-b from-[#f2f0ac] to-[#0f5c05]'
                                                    : 'grayscale'
                                            } rounded-xl m-8 bg-gradient-to-b from-[#000] to-[#fff] dark:invert`
                                        })
                                    ]
                                ),
                                m(
                                    'div',
                                    {
                                        class: 'info grid place-content-center lg:px-4 lg:w-3/5 pt-4 md:mt-0 leading-8 text-black lg:mr-12 dark:invert'
                                    },
                                    [
                                        m(
                                            'div',
                                            {
                                                class: 'rounded-lg'
                                            },
                                            [
                                                m(
                                                    'div',
                                                    {
                                                        class: `${
                                                            colourModeOn
                                                                ? 'text-[#024b7b]'
                                                                : 'text-[#000]'
                                                        } rounded-md p-4 leading-8 text-black`
                                                    },
                                                    [
                                                        m(
                                                            'h2',
                                                            {
                                                                class: 'text-3xl leading-10 pb-4'
                                                            },
                                                            `Mohammad Saleem's Web Development`
                                                        ),
                                                        m(
                                                            'p',

                                                            ' • 15+ years of experience'
                                                        ),
                                                        m('p', ' • full-stack'),
                                                        m(
                                                            'p',

                                                            ' • Experience with PHP, JavaScript, TypeScript, Python, Node, html, CSS, SASS etc.'
                                                        ),
                                                        m(
                                                            'p',

                                                            ' • Proficient in JS frameworks including React, Vue and many others'
                                                        ),
                                                        m(
                                                            'p',

                                                            ' • Wordpress & PHP frameworks including Laravel, CodeIgniter, CakePHP, etc.'
                                                        ),
                                                        m(
                                                            'p',
                                                            { class: 'pb-4' },
                                                            ' • CSS frameworks Tailwind & Bootstrap'
                                                        ),
                                                        m(
                                                            'span',
                                                            {
                                                                class: `relative w-100 ${
                                                                    click
                                                                        ? 'm-0'
                                                                        : ''
                                                                } border-white bg-black text-white block p-4 rounded-full h-16 grid place-content-center text-sm md:text-xl text-center`
                                                            },
                                                            [
                                                                m(
                                                                    'a',
                                                                    {
                                                                        href: `mailto:${email}`,
                                                                        class: 'animate-pulse px-4',
                                                                        onclick:
                                                                            () => {
                                                                                return (
                                                                                    (click =
                                                                                        !click),
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
                                                    ]
                                                )
                                            ]
                                        )
                                    ]
                                )
                            ]
                        ),

                        m(
                            'div',
                            {
                                class: `${
                                    colourModeOn
                                        ? 'bg-[#95d266] dark:bg-[#024b7b]'
                                        : 'bg-[#fafafa] dark:bg-[#2d2d2d]'
                                } footer grid place-content-center min-h-min dark:text-white`
                            },
                            [
                                m(
                                    'span',
                                    { class: 'p-4' },
                                    'mohdsaleem.uk © 2021'
                                )
                            ]
                        )
                    ]
                )
            ]
        )
    }
})
