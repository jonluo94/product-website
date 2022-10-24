module.exports = {
    title: 'XIBO(C-BOXBAG)',
    description: 'the bag manufactuer with nearly 15 years making bags experience, trend setting, eco-friendly, reusable bags',
    base:'/',
    head: [
        [ 'link', {rel:'icon',href:'/favicon.ico'}],
        [ 'meta', {name:'keywords',content:'XIBO,C-BOXBAG,diaper bag,laptop backpack,laptop bag,school bag,shoulder bag,sport bag'}],
        [ 'meta', {name:'description',content:'the bag manufactuer with nearly 15 years making bags experience, trend setting, eco-friendly, reusable bags'}],
        [ 'meta', {property:'og:title',content:'XIBO(C-BOXBAG)'}],
        [ 'meta', {property:'og:description',content:'the bag manufactuer with nearly 15 years making bags experience, trend setting, eco-friendly, reusable bags'}],
        [ 'meta', {name:'viewport',content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0'}]
    ],
    themeConfig: {
        logo: '',
        search: false,
        navbar: false,
        nav: [
            {text:'HOME', link: '/', target: '_self'},
            {text:'PRODUCT', link: '/product', target:'_self'},
            {text:'BLOG', link: '/news', target:'_self'},
            {text:'ABOUT US', link: '/aboutus', target:'_self'},
            {text:'FAQ', link: '/faq', target:'_self'},
        ]
    },
    plugins: ['@vuepress/pwa', {
        serviceWorker: true
    }]
}
