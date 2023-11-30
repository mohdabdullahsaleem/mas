import m from 'mithril'
import fs from 'fs'
import path from 'path'

import logo from '../assets/images/mas-logo.svg'
import atPC from '../assets/images/at-pc.webp'
import darkMode from '../assets/images/dark-mode.webp'

import '../assets/styles/base.scss'
import './index.scss'

const root = document.body

let click = false
let email = '@'

let lightsOff

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
    },
    view: function () {
        return m(
            'div',
            {
                class: 'page min-h-screen flex flex-col'
            },
            [
                m(
                    'div',
                    {
                        class: 'header w-screen h-24 sm:block flex flex-row dark:bg-[#2d2d2d] '
                    },
                    [
                        m(
                            'a',
                            {
                                class: 'hidden sm:block sm:float-left p-4 my-4 text-xl pl-8 md:text-4xl md:my-3 lg:pl-5 lg:py-1 lg:text-6xl font-bold dark:text-white',
                                href: '/'
                            },

                            'Code & Creativity Unleashed'
                        ),
                        m('img', {
                            class: 'logo sm:float-left w-12 h-12 mt-6 mx-8 sm:mx-0 text-xl md:text-4xl lg:text-6xl font-bold text-black',
                            src: logo,
                            alt: 'Mohammad Saleem Logo',
                            title: 'Mohammad Saleem Logo'
                        }),
                        m(
                            'button',
                            {
                                class: 'pointer border-white block text-white block absolute top-0 right-0',
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
                        )
                    ]
                ),

                m(
                    'div',
                    {
                        class: 'main flex flex-col flex-1 pb-0 w-screen bg-[#f5f4f4] dark:invert h-100'
                    },
                    [
                        m(
                            'div',
                            {
                                class: 'lg:flex lg:flex-row lg:flex-1 lg:flex-row-reverse xl:w-5/6 mx-auto w-full justify-evenly'
                            },
                            [
                                m(
                                    'div',
                                    {
                                        class: ''
                                    },
                                    [
                                        m('img', {
                                            src: atPC,
                                            alt: 'At my PC',
                                            title: 'At my PC'
                                        })
                                    ]
                                ),
                                m(
                                    'div',
                                    {
                                        class: 'info grid place-content-center lg:px-4 lg:w-3/5 pt-4 md:mt-0 leading-8 text-black lg:mr-12'
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
                                                        class: 'rounded-md p-4 leading-8 text-black'
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
                                class: 'footer grid place-content-center min-h-min dark:bg-[#2d2d2d] dark:text-white'
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
