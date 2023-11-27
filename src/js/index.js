import m from 'mithril'
import fs from 'fs'
import path from 'path'

import '../assets/styles/base.scss'
import './index.scss'

const root = document.body

let click = false
let email = '@'

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
        return m('div', { class: 'flex flex-col' }, [
            m(
                'div',
                {
                    class: 'flex flex-col lg:flex-row-reverse w-screen h-screen'
                },
                [
                    m(
                        'div',
                        {
                            class: 'page flex-1 ml-0 mt-0  grid place-content-center lg:flex lg:justify-start'
                        },
                        [
                            m(
                                'div',
                                {
                                    class: 'mas grid place-content-center p-4 relative z-20'
                                },
                                [
                                    m(
                                        'div',
                                        {
                                            class: 'logo w-32 h-32 cursor-pointer animate-pulse hover:animate-none hover:scale-125 transition-all duration-300 ease-in-out grid place-content-center'
                                        },
                                        [
                                            m(
                                                'span',
                                                {
                                                    class: `${
                                                        click
                                                            ? 'opacity-0 hover:opacity-100 text-white block sm:text-xl md:text-6xl transform transition-all duration-300 ease-in-out bg-[#02385f] underline p-4 rounded-lg'
                                                            : 'opacity-0 hover:opacity-100 text-white block sm:text-xl md:text-6xl'
                                                    }`,
                                                    onclick: () => {
                                                        click = true
                                                    }
                                                },

                                                click
                                                    ? [
                                                          m(
                                                              'a',
                                                              {
                                                                  href: `mailto:${email}`,
                                                                  class: 'animate-pulse grid place-content-center text-sm  sm:p-2 sm:text-md lg:text-4xl p-4'
                                                              },
                                                              `${email}`
                                                          )
                                                      ]
                                                    : '@'
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
                            class: 'info pl-8 pt-12 lg:px-4 lg:w-1/4 z-10 leading-8 text-white bg-[#02385f] '
                        },
                        [
                            m(
                                'h2',
                                { class: 'text-3xl leading-10 pb-8' },
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
                            )
                        ]
                    )
                ]
            ),
            m(
                'div',
                {
                    class: 'footer grid place-content-center w-screen min-h-min bg-[#c0c0c0]'
                },
                [m('span', { class: 'p-4' }, 'mohdsaleem.uk © 2021')]
            )
        ])
    }
})
