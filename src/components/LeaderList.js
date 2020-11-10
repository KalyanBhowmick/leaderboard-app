import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Form } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Modal } from "antd";

import { connect } from "react-redux";
import { addLeader, incrementPoint, decrementPoint } from "../actions";

const LeaderList = (props) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [point, setPoint] = useState(0);

  function showModal() {
    setVisible(true);
  }

  function handleOk(e) {

    let newLeader = {
      name: name,
      point: point
    }
    props.addLeader(newLeader);

    setVisible(false);
  }

  function handleCancel(e) {
    setVisible(false);
  }

  return (
    <Container>
      <h1>Leader App</h1>

      <Button variant="contained" color="primary" onClick={showModal}>
        Add Leader
      </Button>

      <Modal
        title="Leader Details"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" onChange={e => setName(e.target.value)} value={name}/>
          </Form.Group>

          <Form.Group controlId="point">
            <Form.Label>Point</Form.Label>
            <Form.Control type="number" onChange={ e => setPoint(e.target.value)} value={point}/>
          </Form.Group>
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
      </Modal>
      <Row className="mt-5">
        <Col>
          <ListGroup>
            {props?.leaders.map((leader) => (
              <ListGroup.Item>
                <span key={leader.name}>
                  {leader.name} {leader.point}
                  <IconButton
                    aria-label="increase"
                    onClick={() => props.incrementPoint(leader)}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    aria-label="decrease"
                    onClick={() => props.decrementPoint(leader)}
                  >
                    <RemoveIcon />
                  </IconButton>
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            {props?.leaders.map((leader) => (
              <ListGroup.Item>
                <span>
                  {leader.name} {leader.point}
                  <IconButton
                    aria-label="increase"
                    onClick={() => props.incrementPoint(leader)}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    aria-label="decrease"
                    onClick={() => props.decrementPoint(leader)}
                  >
                    <RemoveIcon />
                  </IconButton>
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {

  let updatedLeaders = state.leaders.leaders.sort(function (a, b) {
    return b.point - a.point;
  })
  return { leaders: updatedLeaders };
};

export default connect(mapStateToProps, {
  addLeader,
  incrementPoint,
  decrementPoint,
})(LeaderList);
