import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Projects } from 'Components/landing'

export default () => (
	<Layout>
		<SEO />
		<Intro />
		<Projects />
		<Skills />
	</Layout>
)
