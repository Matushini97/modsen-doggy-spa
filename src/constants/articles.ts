import { ArticleType, Section } from "@/components/ui/article-boilerplate/article-boilerplate";

export const BlogSections: Section[] = [
    {
        isReversed: false,
        text: 'Sometimes it is difficult to get dogs interested in the toys you buy for them. .. Luckily for Rex, everything he sees is a potential toy for him! Never let him around your valuables or any socks. He will steal them and you will never see them again...',
        imgSrc: "/bark-two.png",
        altImg: "rex under blanket",
    },
    {
        isReversed: true,
        text: 'One day, we started noticing Rex was ripping apart all of our sheets when he was bored except for this blanket over here. Rex decided to spare this ugly white blanket that my grandmother gave me from her war days. We never threw it away because we felt bad. Seeing Rex sleep on this blanket made us happy. At least someone was using this blanket, even if we had to rebuy brand new sheets because we have such an amazing dog. We love you Rex.',
        imgSrc: "/bark-one.png",
        altImg: "Rex playing",
    }
]

export const BlogArticle: ArticleType = {
    title: 'The Bark Chronicles',
    subheading: 'Where To Read All About The Bark!',
    subtitle: 'Rex, The Dog Who Never Stops Playing ... Ever',
    sections: BlogSections,
}

export const AboutUsSections: Section[] = [
    {
        isReversed: false,
        text: 'Here at Luxe Animal Spa we aim to provide you with the best service possible for both you and your pet! We pride ourselves in offering a true first-class experience. Our grooming equipment is top quality.  We use only the most trusted brands in the industry which provides a beautiful, calming, and safe salon experience for your pets. ',
        imgSrc: "/about-two.png",
        altImg: "rex under blanket",
    },
    {
        isReversed: true,
        text: 'One day, we started noticing Rex was ripping apart all of our sheets when he was bored except for this blanket over here. Rex decided to spare this ugly white blanket that my grandmother gave me from her war days. We never threw it away because we felt bad. Seeing Rex sleep on this blanket made us happy. At least someone was using this blanket, even if we had to rebuy brand new sheets because we have such an amazing dog. We love you Rex.',
        imgSrc: "/about-one.png",
        altImg: "Rex playing",
    }
]

export const AboutUsArticle: ArticleType = {
    title: 'About Us',
    subheading: 'Our Owners Love Dogs and Cats Only',
    subtitle: '',
    sections: AboutUsSections,
}


