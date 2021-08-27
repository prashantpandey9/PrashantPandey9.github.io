import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
const Template = ({ data, pageContext }) => {
    
	const title = pageContext.post.node.frontmatter.title;
	const date = pageContext.post.node.frontmatter.date;
	const html = pageContext.post.node.html;
    const prev = pageContext.previous;
	const next = pageContext.next
	return (
		
		<Layout>
			<div>
			<h1>{title}</h1>
			<div>
				<em>{date}</em>
			</div>
			<br />
			<div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
			<p>
				{prev && (
					<Link to={prev.frontmatter.path}>
						{prev.frontmatter.title}{' '}
						<span role="img" aria-label="point-left">
							👈{' '}
						</span>
						Previous
					</Link>
				)}
			</p>
			<p>
				{next && (
					<Link to={next.frontmatter.path}>
						Next{' '}
						<span role="img" aria-label="point-right">
							👉
						</span>
						{next.frontmatter.title}
					</Link>
				)}
			</p>
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