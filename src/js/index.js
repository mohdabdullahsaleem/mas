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
                class: 'page w-screen h-screen absolute ml-0 mt-0 grid place-content-center'
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
                                            ? 'opacity-0 hover:opacity-100 text-white block text-2xl md:text-6xl transform transition-all duration-300 ease-in-out bg-[#02385f] underline p-4 rounded-lg'
                                            : 'opacity-0 hover:opacity-100 text-white block text-2xl md:text-6xl'
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
        )
    }
})
