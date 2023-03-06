import Datetime from "./Datetime";
import type { BlogFrontmatter, ShowFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter | ShowFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true}: Props) {
  const { title, datetime, description } = frontmatter;
  // "show" is a special tag that does things. this is probably an anti-pattern and i will change it when i am less tired.
  const oldShow = frontmatter.tags.includes("show") && datetime < new Date(Date.now());
  const className = oldShow ? "text-lg line-through font-small" : "text-lg font-medium decoration-dashed hover:underline";
  
  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 className={className}>
            {title}
          </h2>
        ) : (
          <h3 className={className}>
            {title}
          </h3>
        )}
      </a>
      <Datetime datetime={datetime} />
      <></>
      <p>{description}</p>
    </li>
  );
}
