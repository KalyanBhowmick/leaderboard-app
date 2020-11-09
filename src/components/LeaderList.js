import React, { useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Modal } from "antd";

import { connect } from "react-redux";
import { addLeader, incrementPoint, decrementPoint } from '../actions';

const LeaderList = (props) => {

  console.log(props)

  const [visible, setVisible] = useState(false);

  function showModal() {
    setVisible(true);
  }

  function handleOk(e) {
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
        <p>Modal</p>
      </Modal>
      <Row className="mt-5">
        <Col>
          <ListGroup>
            {props?.leaders.map((leader) => (
              <ListGroup.Item>
                <span key={leader.name}>
                  {leader.name} {leader.point}
                  <IconButton aria-label="increase" onClick={() => props.incrementPoint(leader)}>
                    <AddIcon />
                  </IconButton>
                  <IconButton aria-label="decrease" onClick={() => props.decrementPoint(leader)}>
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
                  <IconButton aria-label="increase" onClick={() => props.incrementPoint(leader)}>
                    <AddIcon />
                  </IconButton>
                  <IconButton aria-label="decrease" onClick={() => props.decrementPoint(leader)}>
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
  return { leaders: state.leaders.leaders };
};

export default connect(mapStateToProps, {
  addLeader, incrementPoint, decrementPoint
})(LeaderList);
