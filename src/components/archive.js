import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import './layout.css'

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

const POST_ARCHIVE_QUERY = graphql``

const Archive = () => <p>Archive</p>

export default Archive
