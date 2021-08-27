import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components'
import Seo from '../components/seo'
const Wrapper = styled.div`
	display: flex;
	@media only screen and (min-width: 100px) {
		flex-direction: column;
	}
	@media only screen and (min-width: 420px) {
		flex-direction: row;
	}
`
const Button = styled.button`
	width: 50%;
	margin-inline: 10px;
	margin-bottom: 10px;
	a{
		text-decoration: none;
		color: #343a40;
		width: 100%
	}
	@media only screen and (min-width: 100px) {
		width: 100%;
	  }
	  @media only screen and (min-width: 420px) {
		width: 50%;
	  }
`
const Template = ({ data, pageContext }) => {
    
	const title = pageContext.post.node.frontmatter.title;
	const date = pageContext.post.node.frontmatter.date;
	const html = pageContext.post.node.html;
    const prev = pageContext.previous;
	const next = pageContext.next
	return (
		
		<Layout>
			<Seo title={title}/>
			<div>
			<h1>{title}</h1>
			<div>
				<em>{date}</em>
			</div>
			<br />
			<div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
			<Wrapper>
				{prev && (
					<Button>
						<Link to={prev.frontmatter.path}>
							{prev.frontmatter.title}{' '}
							<br/>
							<span role="img" aria-label="point-left">
							←
							</span>
							Previous
						</Link>
					</Button>
				)}
				
				
				{next && (
					<Button>
						<Link to={next.frontmatter.path}>
							Next{' '}
							<span role="img" aria-label="point-right">
							→
							</span>
							<br/>
							{next.frontmatter.title}
						</Link>
					</Button>
				)}
				
			</Wrapper>
		</div>
		</Layout>
	);
};

export const postQuery = graphql`
	query($pathSlug: String) {
		markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
			html	
			frontmatter {
				title
				date(formatString: "MMMM, DD, YYYY")
				path
			}
		}
	}
`;

export default Template;