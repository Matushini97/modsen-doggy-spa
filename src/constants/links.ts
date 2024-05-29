import React, { ReactNode, SVGProps } from "react";

import { FB, Inst, Pinterest, Snapchat, X } from "@/assets/icons"


type Link = {
    name: string
    href: string
}

export type Links = Link[]

export const HeaderLinks: Link[] = [
    { name: 'Home', href: '/'},
    { name: 'Info',  href: '/info' },
    { name: 'Spa services', href: '/spa-services'},
    { name: 'Book Appointments', href: '/appointments'},
    { name: 'Blog', href: '/blog'},
    { name: 'About Us', href: '/about-us'},
    { name: 'Contact Us', href: '/contacts'},
];

export const FooterLinksLeft: Link[] = [
    { name: 'Blog', href: '/blog'},
    { name: 'Cancellation', href: '/'},
    { name: 'Track Your Animal', href: '/'},
    { name: 'Luxe\'s Annual Spa Day 2021', href: '/'},
    { name: 'Payment Options', href: '/'},
]
export const FooterLinksRight: Link[] = [
    { name: 'Home', href: '/'},
    { name: 'About Us', href: '/about-us'},
    { name: 'Contact Us', href: '/contacts'},
    { name: 'FAQs', href: '/'},
    { name: 'Help With Navigation', href: '/'},
]

