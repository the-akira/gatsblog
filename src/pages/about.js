import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"

export default ({ data }) => (
  <Layout>
    <h1
      css={css`
        color: #dad9da;
      `}
    >About {data.site.siteMetadata.title}</h1>
    <p
      css={css`
        color: #dad9da;
      `}
    >
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`