import { gmail, linkedin, github, shieldTick, support, truckFast } from "../assets/icons";
import { big72four1, big72four2, bigAqua1, bigAqua2, bigAqua3, bigBaccaratExt1, bigBaccaratExt2, bigGrandSoir1, bigGrandSoir2, bigOudSatin1,  bigOudSatin2,  customer1, customer2, shoe7, thumbnailAqua1, thumbnailAqua2, thumbnailAqua3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "HOME" },
    { href: "#products", label: "COLLECTIONS" },
    { href: "#about-us", label: "ABOUT US" },
    { href: "#contact-us", label: "CONTACTS" },
    
];

// export const shoes = [
//     {
//         thumbnail: thumbnailShoe1,
//         bigShoe: bigShoe1,
//     },
//     {
//         thumbnail: thumbnailShoe2,
//         bigShoe: bigShoe2,
//     },
//     {
//         thumbnail: thumbnailShoe3,
//         bigShoe: bigShoe3,
//     },
// ];

export const fragrances = [
    {
        thumbnail: thumbnailAqua1,
        bigAqua: bigAqua1,
    },
    {
        thumbnail: thumbnailAqua2,
        bigAqua: bigAqua2,
    },
    {
        thumbnail: thumbnailAqua3,
        bigAqua: bigAqua3,
    },
];



export const statistics = [
    { value: '12', label: 'Collections' },
    { value: '100+', label: 'Fragrances' },
    { value: '$9M', label: 'Annual Profit' },
];

// export const products = [
//     {
//         imgURL: shoe4,
//         name: "Nike Air Jordan-01",
//         price: "$200.20",
//     },
//     {
//         imgURL: shoe5,
//         name: "Nike Air Jordan-10",
//         price: "$210.20",
//     },
//     {
//         imgURL: shoe6,
//         name: "Nike Air Jordan-100",
//         price: "$220.20",
//     },
//     {
//         imgURL: shoe7,
//         name: "Nike Air Jordan-001",
//         price: "$230.20",
//     },
// ];

export const products = [
    {
        imgURL: bigBaccaratExt1,
        imgTopURL: bigBaccaratExt2,
        name: "Baccarat Rouge 540",
        consentration: 'Extrait de parfum',
        price: "$465.00",
    },
    {
        imgURL: bigGrandSoir1,
        imgTopURL: bigGrandSoir2,
        name: "Grand Soir",
        consentration: 'Eau de parfum',
        price: "$240.00",
    },
    {
        imgURL: bigOudSatin1,
        imgTopURL: bigOudSatin2,
        name: "Oud Satin Mood",
        consentration: 'Extrait de parfum',
        price: "$435.00",
    },
    {
        imgURL: big72four1,
        imgTopURL: big72four2,
        name: "724",
        consentration: 'Eau de parfum',
        price: "$275.00",
    },
];

export const services = [
    {
        imgURL: support,
        label: "Free sample",
        subtext: "Each order above $250 will receive a complementary sample."
    },
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Baccarat Rouge 540", link: "/#products" },
            { name: "Grand Soir", link: "/#products" },
            { name: "Gentle Fluidity Silver", link: "/#products" },
            { name: "Amyris Homme", link: "/#products" },
            { name: "Amyris Femme", link: "/#products" },
            { name: "Feminim Pluriel", link: "/#products" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "almer.nfly@gmail.com", link: "mailto:almer.nfly@gmail.com" },
        ],
    },
];

export const socialMedia = [
    { src: github, alt: "github logo", link: "https://github.com/AL-NFLY" },
    { src: linkedin, alt: "linkedin logo", link: "https://www.linkedin.com/in/almer-naufaly/" },
    { src: gmail, alt: "gmail logo", link:"/"},
];