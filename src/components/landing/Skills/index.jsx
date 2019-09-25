import React from 'react'
import { Container } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="submit">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="Submit your Project!" />
			</Thumbnail>
			<Details>
				<h1>Submit your Project!</h1>
				<p>
					Would you like to see your Open Source Project featured here?
					See our <a href="https://github.com/mozdevz/repos">Guide</a> to learn how to submit a project.
				</p>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
