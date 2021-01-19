import React, { Component} from 'react';
import { Grid, Cell} from 'react-mdl';
import logo from './pfp3.png';



class Landing extends Component {
    render() {
        return (
            <div style = {{ width: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col = {12}>
                        <img className="avatar-img"
                            src={logo}
                            alt="logo"
                            
                         />
                         <div className ="banner-text">
                             <h1> Hi, I'm Kris </h1>
                            <h2>Full Stack Web Developer</h2>
                            <h3>Sound Designer</h3>
                            
                             <hr/>
                             <p>
                                 HTML/CSS | JavaScript | React | NodeJS | Express | PostgreSQL
                                 </p>
                             
                                <div className ="social-links">

                                 {/*social links*/}
                                 <a href="http://github.com/kristoferdowe" rel="noopener noreferrer" target="_blank">
                                     <i className = "fa fa-github" aria-hidden="true"/>
                                 </a>

                                 <a href="https://www.linkedin.com/in/kristofer-dowe-542805189/" rel="noopener noreferrer" target="_blank">
                                     <i className = "fa fa-linkedin" aria-hidden="true"/>
                                 </a>

                                 <a href="https://shysignals.bandcamp.com/album/throwaways" rel="noopener noreferrer" target="_blank">
                                     <i className = "fa fa-bandcamp" aria-hidden="true"/>
                                 </a>



                                </div>
                             

                            
                         </div>
                    </Cell>
                </Grid>
             </div>

        )
    }
}

export default Landing;
