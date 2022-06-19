import ReactMarkdown from "react-markdown"
import styled from "styled-components"

const StyledMarkdown = styled.section`
	margin-top: 5rem;
	max-width: 1024px;
	margin: 0 auto;
	padding: 3rem 0;
`

const Markdown = (props) => {
	return (
		<StyledMarkdown>
			<ReactMarkdown>{props.children}</ReactMarkdown>
		</StyledMarkdown>
	)
}

export default Markdown
