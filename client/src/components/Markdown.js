import ReactMarkdown from "react-markdown"
import styled from "styled-components"

const StyledMarkdown = styled.section`
	margin-top: 2rem;
	max-width: 1024px;
	max-width: 720px;
	margin: 0 auto;
	padding: 3rem 0;
	/* outline: 1px solid green; */
	border-top: 2px solid #595959;

	h1 {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 2rem;
		text-transform: uppercase;
		letter-spacing: 1px;
	}
	h2 {
		font-size: 1.8rem;
		font-weight: 600;
		margin: 2rem 0 1rem;
		display: inline-block;
		border-bottom: 1px solid white;
		padding-bottom: 2px;
	}
	h3 {
		font-size: 1.6rem;
		font-weight: 600;
		margin: 2rem 0 1rem;
	}
	p {
		font-size: 1.2rem;
		line-height: 1.2;
	}
	ul {
		list-style: inherit;
		margin: 1rem 2rem;
		li {
			margin-bottom: 0.5rem;
			line-height: 1.7;
		}
	}
`

const Markdown = (props) => {
	return (
		<StyledMarkdown>
			<ReactMarkdown>{props.children}</ReactMarkdown>
		</StyledMarkdown>
	)
}

export default Markdown
