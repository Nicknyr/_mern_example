import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                // uuid generates random ids for the API
                { id: uuid(), name: "Eggs" },
                { id: uuid(), name: "Milk" },
                { id: uuid(), name: "Steak" },
                { id: uuid(), name: "Water" }
            ]
        };
    }


    render() {
        // Uses destructuring to get this.state.items and just store them in {items}
        const { items } = this.state;
        console.log({items});

        return(
            <Container>
              <Button 
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={() => {
                    const name = prompt('Enter Item')
                    if(name) {
                        this.setState(state => ({
                            items: [...state.items, { id: uuid(), name: name }]
                        }))
                    }
                }}
                >
                Add Item
              </Button>

              <ListGroup>
                  <TransitionGroup className="shopping-list">
                    {items.map(({id, name}) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={() => {
                                    this.setState(state => ({
                                        items: state.items.filter(item => item.id !== id)
                                    }));
                                }}
                                >&times;</Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                  </TransitionGroup>
              </ListGroup>

            </Container>
        );
    }

}

export default ShoppingList;