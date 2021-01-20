import React, { Component} from 'react';
import { Tabs, Tab , Grid, Cell , Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {

    constructor (props){
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
    
    
        if(this.state.activeTab === 0){
        return (
            

            <div className='project-grid'>

            <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#ffff', height: '176 px', background: 'url(https://venturebeat.com/wp-content/uploads/2017/05/dayz.jpg?fit=1920%2C1080&strip=all) center / cover'}}> SurvivaList</CardTitle>
                <CardText>Parse DayZ local files to instantaneously share your loadout with friends</CardText>
                <CardActions border>
                    <Button colored href="https://github.com/kristoferdowe/dayzinventorymanager" rel="noopener noreferrer" target="_blank"> Github </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name='share'/>
                </CardMenu>
            </Card>

            </div>
           
           
            )
  
            
                //Add future Projects here
  
            } else if (this.state.activeTab === 1) {
        return (

    <div className='project-grid'>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#ffff', height: '176 px', background: 'url(https://images.unsplash.com/photo-1594445849191-e21cd1ab1ec7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80) center / cover'}}> Quiz App</CardTitle>
                <CardText>A Simple Quiz App Using jQuery</CardText>
                <CardActions border>
                    <Button colored href="https://github.com/kristoferdowe/quizapp" rel="noopener noreferrer" target="_blank"> Github </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name='share'/>
                </CardMenu>
            </Card>
        
    </div>
        )
    
    
    } else if (this.state.activeTab === 2 ) {
        return (


            <div className='project-grid'>


            <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#ffff', height: '176 px', background: 'url(https://images.unsplash.com/photo-1594445849191-e21cd1ab1ec7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80) center / cover'}}> Scrambler</CardTitle>
            <CardText>A simple, customizable word-scrambler for sending and decoding secret messages</CardText>
            <CardActions border>
                <Button colored href="https://repl.it/@kristoferdowe/Scramble#index.html" rel="noopener noreferrer" target="_blank"> Github </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name='share'/>
            </CardMenu>
        </Card>
        </div>
          )
    }
}


   


render() {
        return (
            <div className= 'category-tabs'>
                <Tabs activeTab = {this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                <Tab> SurvivaList</Tab>
                <Tab> Quiz App</Tab>
                <Tab> Word Scrambler</Tab>
                
                </Tabs>
           

                <Grid>
                    <Cell col={12}>
                        <div className = 'content-projects'>{this.toggleCategories()}</div>
                       
                    </Cell>
                </Grid>
            </div>

        )
        
    }
   
}

export default Projects;
