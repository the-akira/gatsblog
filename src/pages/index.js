import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            margin-bottom: 30px;
            border-bottom: 1px solid;
            color: #dad9da;
          `}
        >
          Gats Blog
        </h1>
        <h4
          css={css`
            color: #dad9da;
          `}
        >{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: #dad9da;
              `}
            >
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
                color: #dad9da;
                &:hover {color: gray;}
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: gray;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p
              css={css`
                color: #dad9da;
                &:hover {color: gray;}
              `}
            >{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`