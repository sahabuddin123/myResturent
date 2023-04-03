import React from "react";
import { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
import {Modal,ModalBody,ModalFooter,Button } from "reactstrap";

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish : null,
        modalOpen:false,
    }
    onDishSelect = dish => {
        // console.log(dish);
        this.setState({
            selectedDish:dish,
            modalOpen: !this.state.modalOpen
        });
    }
    ToggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }
    render() {
        const menu = this.state.dishes.map(item => {
            return(
                <MenuItem 
                dish={item} 
                key={item.id}
                DishSelect={() => this.onDishSelect(item)}
                />
            );
        });
        let dishDetail = null;
        if(this.state.selectedDish!=null){
            dishDetail = <DishDetails dish={this.state.selectedDish} />
        }
        return (
            <div className="container">
                <div className="row">
                    {/* <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDetail}
                    </div> */}
                        {menu}
                        <Modal isOpen={this.state.modalOpen}>
                            <ModalBody>
                                {dishDetail}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="dander" onClick={this.ToggleModal}>Close</Button>
                            </ModalFooter>
                        </Modal>
                </div>
            </div>
        );
    }
}

export default Menu;