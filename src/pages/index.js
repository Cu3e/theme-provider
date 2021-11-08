import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"

import Layout from "../components/layout"

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main
  }
}))

const IndexPage = () => {
  const theme = useTheme()
  const classes = useStyles()
  return (
    <Layout>
      <div style={{ color: 'red' }}>theme.palette.primary.main: {theme.palette.primary.main} created in pages</div>
      <strong>Why they are different?</strong>
    </Layout>
  )
}

export default IndexPage
