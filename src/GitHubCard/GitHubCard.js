import React from "react"
import Card from "react-bootstrap/Card"
import github from "../github.png"

function GitHubCard() {
    return (
        <div className="card">
            <Card style={{ width: "18rem"}}>
            <Card.Img variant="top" src={github} />
            <Card.Body>
                <Card.Title>chrisebrell</Card.Title>
                <Card.Text>
                Junior Developer. 20 years old. Hockey fan
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
}

export default GitHubCard