import { Inst, FB, Pinterest, X, Snapchat } from "@/assets/icons";
import { ReactNode } from "react";

interface Social {
    name: string;
    href: string;
    icon?: ReactNode;
  }

export const Socials: Social[] = [
    { name: 'Inst', href: 'https://www.instagram.com/', icon: <Inst />},
    { name: 'FB', href: 'https://www.facebook.com/', icon: <FB />},
    { name: 'Pinterest', href: 'https://www.pinterest.com/', icon: <Pinterest />},
    { name: 'X', href: 'https://x.com/?lang=en', icon: <X />},
    { name: 'Snapchat', href: 'https://www.snapchat.com/', icon: <Snapchat />},
]