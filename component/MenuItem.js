import React from 'react'
import styled from 'styled-components'
import { Icon } from 'expo'

const MenuItem = props => {
  <Container>
    <IconView>
      <Icon.Ionicons name={props.icon} size={24} color="#546bfb" />
    </IconView>
  </Container>

/**
 * polishing menu item 
 */