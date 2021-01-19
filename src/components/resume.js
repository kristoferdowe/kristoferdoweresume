import React, { Component} from 'react';
import { Grid , Cell } from 'react-mdl';
import logo from './pfp3.png'
import Education from './education';
import Experience from './experience';


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "left" }}>
              <img src={logo} alt="avatar" style={{ height: "200px" }} />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Kristofer Dowe</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>

            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Hello there! If you're reading this, it's likely because I'm looking for work and have asked you to consider me for a role...so thanks for taking the time to visit my site! Here's a little bit about me: In an attempt to better understand myself and my professional path in life, I came to the conclusion that I absolutely have to understand how things work on a granular level. It was this realization that prompted me to begin learning Software Engineering. Something about being able to take seemingly huge, complex problems and, through reductiuonist techniques, isolate smaller, solvable problems is incredibly enticing to me. This mentality is present in everything I do, from producing music, to optimizing my favorite computer games, even bowling (to which I am addicted); striving to understand the nuance and complexity of a given problem is second nature for me. It is for this reason compounded by my love of learning that I believe I will be a useful addition to your team!
            </p>
            <div className= 'footNote'>
                <h5>
                    *in order to save you time, only the most relevant jobs are listed here. Please ask about my other work experience if you're curious!
                </h5>
            </div>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>136 Conarroe Street Philadelphia, PA</p>
            <h5>Phone</h5>
            <p>(845) 527-6818</p>
            <h5>Email</h5>
            <p>kristoferdowe@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2011}
              endYear={2015}
              schoolName="CUNY Brooklyn College"
              schoolDescription= "BA in Television, Radio and Emerging Media with Minors in Music Technology and Psychology "
            />
            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Thinkful Coding Bootcamp"
              schoolDescription="Studied Fullstack Web Development with a Javascript base"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Hibu"
              jobDescription=" At Hibu (formerly Yellowbook), I was a Digital Service Consultant responsible for managing budgets, analytics, and planning for some 200 small-businesses. Aside from managing my clients' SEO, I was tasked with ensuring that our web-developers created sites for our clients that met the businesses' needs. It was at this point that I realized wanted to become a developer in order to gain a deeper understanding of my technological surroundings."
              
              
            />

            <Experience
              startYear={2015}
              endYear={2018}
              jobName="The Crown Inn"
              jobDescription="At first I joined the team as a barback, then eventually became a full-time bartender. The Crown Inn in Brooklyn, NY, taught me more about the wonderful spectrum people that inhabit this world, concise communication while under pressure, and general business dealings than any college class I'd ever taken. "
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
