import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<AnchorLink href="#projects">All Projects</AnchorLink>
		<AnchorLink href="#submit">Submit</AnchorLink>
	</Wrapper>
)

export default NavbarLinks
