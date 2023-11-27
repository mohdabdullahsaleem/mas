import m from 'mithril'
import '../assets/styles/base.scss'
import './index.scss'

const root = document.body

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
                                    class: 'opacity-0 hover:opacity-100 text-white block text-6xl'
                                },
                                '@'
                            )
                        ]
                    )
                ])
            ]
        )
    }
})
