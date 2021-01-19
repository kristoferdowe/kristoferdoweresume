import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import logo from "./portfolio-photo.jpg";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Kris Dowe</h2>
            <img src={logo} alt="avatar" style={{ height: "250px" }} />

            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              A rare photo of me from inside a moving train. Pretty cool, right?
            </p>
          </Cell>
          <Cell col={6}>
            <h2> Reach Me</h2>
            <hr />

            <div className="contact-list">
              <List>



                <ListItem>
                  <ListItemContent  style={{fonstsize: '30 px', fontFamily: 'Anton'}}>
                      <i className='fa fa-phone-square' aria-hidden='true'/>
                        (845) 527-6818
                      </ListItemContent>
                </ListItem>



                <ListItem>
                <ListItemContent  style={{fonstsize: '30 px', fontFamily: 'Anton'}}>
                      <i className='fa fa-envelope' aria-hidden='true'/>
                        kristoferdowe@gmail.com
                      </ListItemContent>
                </ListItem>


                <ListItem>
                <ListItemContent  style={{fonstsize: '30 px', fontFamily: 'Anton'}}>
                      <i className='fab fa-discord' aria-hidden='true'/>
                        pasteboy #0037
                      </ListItemContent>
                </ListItem>



              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
