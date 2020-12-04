import React from 'react';
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';
import aboutPic from '../images/pexels-luca-nardone-3651820.jpg';
import SOT from '../images/sot_icon.png';
import SOT1 from '../images/sot_icon1.png';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="center-align headers">About</h2>
      <div className="wrap grid-wrapper">
        <Row
          style={{ marginTop: '20px'}}  
        >
          <Col
            className=""
            m={6}
            s={12}
          >
            {/* <Card
              style={{ width: '250px', height: '425px' }}
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image={ aboutPic } reveal waves="light"/>}
              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
              revealIcon={<Icon>more_vert</Icon>}
              title="Name"
            >
              <p>OWNER</p>
            </Card> */}
            <img src={SOT1} width="300px" className="center-align" />
          </Col>
          <Col
            m={6}
            s={12}
          >
            <aside>
              <h4>Sons of Thunder</h4>
              <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            </aside>
          </Col>
        </Row>
      </div>
      <hr />
    </section>
  );
};

export default About;