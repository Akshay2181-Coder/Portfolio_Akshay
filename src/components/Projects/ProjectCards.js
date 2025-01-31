import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
        <center>
            <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ width: "150px", height:"150px",textAlign:"center"}} />
        </center>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">&nbsp;
          {"App Link"}
        </Button>
        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
