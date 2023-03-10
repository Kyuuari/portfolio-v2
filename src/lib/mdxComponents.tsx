import React from "react";
import { MDXComponents } from "mdx/types";

const mdxComponents = (): MDXComponents => ({
  h1: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="font-bold text-blue-500">{children}</h1>
  ),
  h2: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="text-red-600">{children}</h1>
  ),
  a: (props: React.HTMLProps<HTMLAnchorElement>) => (
    <a href={props.href} title={props.title} className="text-red-600">
      {props.children}
    </a>
  ),
  ul: ({ children }: React.HTMLProps<HTMLUListElement>) => (
    <ul className="list-inside list-disc">{children}</ul>
  ),
  // li: ({ children }: React.HTMLProps<HTMLUListElement>) => <li>{children}</li>,
});

export default mdxComponents;
