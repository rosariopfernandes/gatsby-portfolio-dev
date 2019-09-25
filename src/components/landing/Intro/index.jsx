import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>MozDevz Repos</h1>
				<h4>List of Open Source projects maintained by Mozambican Developers</h4>
				<Button as={AnchorLink} href="#projects">
					See all
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="List of Open Source projects by Mozambican Developers" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
