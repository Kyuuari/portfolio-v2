import React from "react";
import { MDXComponents } from "mdx/types";

const mdxComponents = (): MDXComponents => ({
  h1: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="text-2xl font-bold">{children}</h1>
  ),
  h2: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 className="text-lg font-bold">{children}</h2>
  ),
  h3: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 className="text-base font-bold">{children}</h2>
  ),
  p: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <p className="max-w-[60ch]">{children}</p>
  ),
  a: (props: React.HTMLProps<HTMLAnchorElement>) => (
    <a
      href={props.href}
      title={props.title}
      className="rounded bg-neutral py-2 px-1 text-primary-content hover:opacity-30"
    >
      {props.children}
    </a>
  ),
  ul: ({ children }: React.HTMLProps<HTMLUListElement>) => (
    <ul className="list-inside list-disc">{children}</ul>
  ),
  pre: ({ children }: React.HTMLProps<HTMLPreElement>) => (
    <div className="mockup-code rounded text-sm">
      <pre>
        <code className="language-javascript">{children}</code>
      </pre>
    </div>
  ),
});

export default mdxComponents;
