import m from 'mithril'
import fs from 'fs'
import path from 'path'

import atPC from '../assets/images/at-pc.webp'
import '../assets/styles/base.scss'
import './index.scss'

const root = document.body

let click = false
let email = '@'

let lightsOff = false

const data = () => {
    return JSON.parse(
        fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8')
    )
}

if (data().email) {
    email = data().email
}

m.mount(root, {
    view: function () {
        return m(
            'div',
            {
                class: 'bg-white'
            },
            [
                m(
                    'div',
                    {
                        class: 'w-screen h-24 bg-[#f5f5f5] sm:block flex flex-row'
                    },
                    [
                        m(
                            'div',
                            {
                                class: 'hidden sm:block sm:float-left p-4 my-4 text-xl pl-8 md:text-4xl md:my-3 lg:pl-5 lg:py-1 lg:text-6xl font-bold text-black'
                            },

                            'Code & Creativity Unleashed'
                        ),
                        m('span', {
                            class: 'logo sm:float-left w-12 h-12 mt-6 mx-8 sm:mx-0 text-xl md:text-4xl lg:pl-5  lg:text-6xl font-bold text-black'
                        }),
                        m(
                            'button',
                            {
                                class: 'pointer border-white bg-black block text-white block my-4 mr-8 md:mx-4 p-4 rounded-full h-16 w-auto text-xl absolute top-0 right-0',
                                id: 'lightsOff',
                                type: 'button',
                                onclick: function () {
                                    lightsOff = !lightsOff
                                    if (lightsOff) {
                                        document.body.classList.add('invert')
                                        document.getElementById(
                                            'lightsOff'
                                        ).innerHTML = 'Lights On'
                                    } else {
                                        document.body.classList.remove('invert')
                                        document.getElementById(
                                            'lightsOff'
                                        ).innerHTML = 'Lights Off'
                                    }
                                }
                            },
                            'Lights Off'
                        )
                    ]
                ),

                m('div', { class: 'flex flex-col p-10 pb-0 w-screen h-auto' }, [
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
                                        src: atPC
                                    })
                                ]
                            ),
                            m(
                                'div',
                                {
                                    class: 'info xl:grid xl:place-content-center lg:px-4 lg:w-2/5 pt-4 md:mt-0 leading-8 text-black lg:mr-12'
                                },
                                [
                                    m(
                                        'div',
                                        {
                                            class: 'rounded-lg p-4 shadow-md shadow-slate-600 leading-8 text-black'
                                        },
                                        [
                                            m(
                                                'h2',
                                                {
                                                    class: 'text-3xl leading-10 pb-4'
                                                },
                                                'Website Design and Development'
                                            ),
                                            m(
                                                'p',

                                                ' • 15+ years of experience'
                                            ),
                                            m('p', ' • full-stack'),
                                            m(
                                                'p',

                                                ' • experience with PHP, JavaScript, Python, Node, html, CSS, SASS etc.'
                                            ),
                                            m(
                                                'p',

                                                ' • proficient in JS frameworks including React, Vue and many others'
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
                                                    class: 'border-white bg-black text-white block p-4 rounded-full h-16 w-auto m-4 grid place-content-center text-xl text-center'
                                                },
                                                [
                                                    m(
                                                        'a',
                                                        {
                                                            href: `mailto:${email}`,
                                                            class: 'animate-pulse',
                                                            onclick: () => {
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
                                                            : 'Click to reveal email'
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
                            class: ''
                        },
                        [
                            m(
                                'div',
                                {
                                    class: 'w-5/6 mx-auto cursor-pointer grid place-content-center  '
                                },
                                []
                            )
                        ]
                    ),
                    m(
                        'div',
                        {
                            class: 'footer grid place-content-center min-h-min'
                        },
                        [m('span', { class: 'p-4' }, 'mohdsaleem.uk © 2021')]
                    )
                ])
            ]
        )
    }
})
