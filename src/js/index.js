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
        return m(
            'div',
            {
                class: 'flex flex-col lg:flex-row-reverse w-screen h-screen'
            },
            [
                m(
                    'div',
                    {
                        class: 'page flex-1 ml-0 mt-0 grid place-content-center'
                    },
                    [
                        m('div', { class: 'mas grid place-content-center' }, [
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
                                                          class: 'animate-pulse'
                                                      },
                                                      `${email}`
                                                  )
                                              ]
                                            : '@'
                                    )
                                ]
                            )
                        ])
                    ]
                ),
                m(
                    'div',
                    {
                        class: 'info flex flex-col p-4 lg:w-1/5 mt-3/4 lg:pt-12 lg:px-4 z-20 text-white bg-[#02385f]'
                    },
                    [
                        m(
                            'h2',
                            { class: 'text-3xl' },
                            'Website design and development'
                        ),
                        m(
                            'p',

                            ' • 15+ years of experience'
                        ),
                        m('p', ' • full-stack'),
                        m(
                            'p',

                            ' • experience with PHP, JavaScript, Node, html, css, sass, scss, handlebars, ejs, etc.'
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

                            ' • CSS frameworks Tailwind & Bootstrap'
                        )
                    ]
                )
            ]
        )
    }
})
