import React from "react"
import styles from "./list.module.css"
import { css } from "@emotion/core"
import Container from "../components/container"
import Layout from "../components/layout"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 css={css`
      color: #dad9da;
      `} className={styles.username}>{props.username}</h2>
      <p  css={css`
      color: #dad9da;
      `} className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
<Layout>
  <Container>
    <h1 css={css`
      color: #dad9da;
    `}>About CSS Modules</h1>
    <p css={css`
      color: #dad9da;
    `}>CSS Modules are cool</p>
    <User 
      username="Jane Doe"
      avatar="https://i.imgur.com/yk6ReBW.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://i.imgur.com/kCeGLaP.jpg"
      excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
</Layout>
)