
import fetch from 'isomorphic-unfetch'
import App from '../components/App'
import GlobalContainer from '../components/GlobalContainer'
import endpoints from '../config'

const Index = props => 
  <GlobalContainer>
    <App data={ props.posts } />
  </GlobalContainer>

Index.getInitialProps = async ({ req }) => {
  const res = await fetch(`${endpoints.dev}/wp-json/wp/v2/posts?_embed`)
  const json = await res.json()
  return { posts: json }
}

export default Index
