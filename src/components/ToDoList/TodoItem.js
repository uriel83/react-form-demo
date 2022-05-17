import React, {} from "react";


export default ({task}) => {
    return(
        // <Card style={{ width: '18rem' }}>
        //     <Card.Body>
        //         <Card.Title>Card Title</Card.Title>
        //         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        //         <Card.Text>
        //         Some quick example text to build on the card title and make up the bulk of
        //         the card's content.
        //         </Card.Text>
        //         <Card.Link href="#">Card Link</Card.Link>
        //         <Card.Link href="#">Another Link</Card.Link>
        //     </Card.Body>
        // </Card>
        <li>
            <h1>{task.id}</h1>
            <h5>{task.title}</h5>
            <p>{task.description}</p>
            <p>{task.createdAt}</p>
            <p>{task.updatedAt}</p>

        </li>
    )
}
