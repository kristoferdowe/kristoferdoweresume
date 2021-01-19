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
                <CardText>Parse DayZ local file to instantaneously share your loadout with friends</CardText>
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
                <CardTitle style={{color: '#ffff', height: '176 px', background: 'url(https://venturebeat.com/wp-content/uploads/2017/05/dayz.jpg?fit=1920%2C1080&strip=all) center / cover'}}> DayZ Inventory Manager</CardTitle>
                <CardText>Parse DayZ local file to instantaneously share your loadout with friends</CardText>
                <CardActions border>
                    <Button colored href="https://github.com/kristoferdowe/dayzinventorymanager" rel="noopener noreferrer" target="_blank"> Github </Button>
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
            <CardTitle style={{color: '#ffff', height: '176 px', background: 'url(https://venturebeat.com/wp-content/uploads/2017/05/dayz.jpg?fit=1920%2C1080&strip=all) center / cover'}}> DayZ Inventory Manager</CardTitle>
            <CardText>Parse DayZ local file to instantaneously share your loadout with friends</CardText>
            <CardActions border>
                <Button colored href="https://github.com/kristoferdowe/dayzinventorymanager" rel="noopener noreferrer" target="_blank"> Github </Button>
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
                <Tab>Passion Projects</Tab>
                
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
