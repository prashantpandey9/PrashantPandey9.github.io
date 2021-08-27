const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blogPost.js`)
  return graphql(
    `
	{
		allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___date]}) {
		  edges {
			node {
			  frontmatter {
				title
				date
				path
			  }
        html
			}
		  }
		}
	  }
	  
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      // const postpath = 
      // console.log(post.node.frontmatter.path)
      createPage({
        path: post.node.frontmatter.path,
        component: blogPost,
        context: {
          previous,
          next,
          post
          
        },
      })
    })

    return null
  })
}