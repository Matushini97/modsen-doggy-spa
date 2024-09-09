import { ArticleBoilerplate } from "@/components/ui/article-boilerplate/article-boilerplate";
import { AboutUsArticle } from "@/constants/articles";

const AboutUsPage = () => {
  const { title, subheading, subtitle, sections } = AboutUsArticle;
  return (
    <main>
      <ArticleBoilerplate
        title={title}
        subheading={subheading}
        subtitle={subtitle}
        sections={sections}
      />
      <p>Changes on remote to make conflict</p>
    </main>
  );
};

export default AboutUsPage;
