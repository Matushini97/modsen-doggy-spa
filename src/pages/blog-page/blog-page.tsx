import { ArticleBoilerplate } from "@/components/ui/article-boilerplate/article-boilerplate";
import { BlogArticle } from "@/constants/articles";

const BlogPage = () => {
  const { title, subheading, subtitle, sections } = BlogArticle;
  return (
    <main>
      <ArticleBoilerplate
        title={title}
        subheading={subheading}
        subtitle={subtitle}
        sections={sections}
      />
    </main>
  );
};

export default BlogPage;