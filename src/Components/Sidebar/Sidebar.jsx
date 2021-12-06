import React from "react";
import s from "./Sidebar.module.css"
import {Col, Container, Row} from "react-bootstrap";
let sidebarItems = ['My Profile','Users', 'Massages', 'Settings']
let mapSidebarItems = sidebarItems.map(el => (<li className={s.item} key={el.id}>{el}</li>))

export const Sidebar = () => {
        return (
            <div className={s.container}>
                <ul className={s.wrapper}>
                    {mapSidebarItems}
                </ul>
            </div>
        )

        // <Col className="col-2 bg-dark">sss</Col>

        // <Col className="bg-dark col-2 border-top text-light h-100">
        //     <Row className="h-100 bg-dark"></Row>
        // </Col>
        // <ProSidebar>
        //     <Menu iconShape="square">
        //         <MenuItem >Dashboard</MenuItem>
        //         <SubMenu title="Components" >
        //             <MenuItem>Component 1</MenuItem>
        //             <MenuItem>Component 2</MenuItem>
        //         </SubMenu>
        //     </Menu>
        // </ProSidebar>;
    }
