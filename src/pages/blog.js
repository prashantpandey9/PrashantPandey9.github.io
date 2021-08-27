import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import styled from 'styled-components'

const Wrapper = styled.div`
	a{
		text-decoration: none;
	}
`
const Heading = styled.h1`
	color: #343a40;
`
const Pagetitle = styled.p`
	color: #343a40;
	font-family: 'DM Sans', monospace;
	font-size: 1.2rem;
	line-height: 1.5;
	padding-bottom: 10px; 
	border-bottom: solid 5px #343a40;
`

const BlogList = styled.div`
	font-family: 'DM Mono', monospace;
	padding: 12px;
	cursor: pointer;
	color: #343a40;
	display: flex;
	margin-bottom: 20px!important;
	&:hover{
		background: #e8eef7;
	}
`
const Small = styled.small`
	width: 25%;
	font-size: 1rem;
	@media only screen and (min-width: 100px) {
		font-size: .8rem;
	}
	@media only screen and (min-width: 420px) {
		font-size: 1rem;
	}
`
const Title = styled.h3`
	font-family: 'DM Sans', monospace;
	width: 75%;
	@media only screen and (min-width: 100px) {
		font-size: 1rem;
	}
	@media only screen and (min-width: 420px) {
		font-size: 1.38316rem;;
	}
`

const IndexPage = ({ data }) => {
	const { edges } = data.allMarkdownRemark;

	return (
		<Layout>
			<Seo title="Blog" />
			<Wrapper>
				<Heading>Blog.</Heading>
				<Pagetitle>Posts, tutorials, snippets, musings, notes, and everything else. The archive of everything I've written.</Pagetitle>
				{edges.map((edge, index) => {
					const { frontmatter } = edge.node;
					return (
						<Link to={frontmatter.path} key={index}>
							<BlogList key={frontmatter.path}>
								<Small>
									{frontmatter.date}
								</Small>
								&nbsp;
								<Title>{frontmatter.title}</Title>
								
								
								<br />
							</BlogList>
						</Link>
					);
				})}
			</Wrapper>
		</Layout>
	);
};

export const query = graphql`
	query HomePageQuery {
		allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						path
						description
					}
				}
			}
		}
	}
`;

export default IndexPage;
