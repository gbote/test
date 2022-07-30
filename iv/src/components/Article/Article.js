import {Card, Img, Body, Button, Text} from 'react-bootstrap'
import {Link} from 'react-router-dom'



function Article({ article,image }) {
  console.log(article) 
  return (
    <>
      <Card style={{ width: '18rem' }}>
        {image && <Card.Img variant="top" src={image} />}
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.abstract}</Card.Text>
          <Card.Text>{article.created_date}</Card.Text>
          <Card.Text>{article.byline}</Card.Text>
          <Link to={"/"}><Button variant="warning">Home</Button></Link>
        </Card.Body>
      </Card>

    </>
  )
}

export default Article;

