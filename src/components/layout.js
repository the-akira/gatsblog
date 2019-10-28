import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { FaAtom } from 'react-icons/fa';
import { rhythm } from "../utils/typography"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
    <Helmet>
      <meta charSet="utf-8" />
      <title>Akira Gats Blog</title>
    </Helmet>
      <FaAtom 
          css={css`
            color: white;
            font-size: 2.6rem;
            padding-top: 2px;
            margin-right: 15px;
          `}
      />
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
            font-size: 1.6rem;
            color: white;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
          color: white;
        `}
      >
        About
      </Link>
      <Link
        to={`/list/`}
        css={css`
          float: right;
          color: white;
          padding-right: 13px;
        `}
      >
        List
      </Link>
      {children}
    </div>
  )
}