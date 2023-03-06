import Datetime from "./Datetime";
import type { BlogFrontmatter, ShowFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter | ShowFrontmatter;
  secHeading?: boolean;
  oldShow?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true, oldShow = false }: Props) {
  const { title, datetime, description } = frontmatter;
  const className = oldShow ? "text-lg font-small line-through" : "text-lg font-medium decoration-dashed hover:underline";
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
      <p>{description}</p>
    </li>
  );
}
