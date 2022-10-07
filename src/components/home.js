import React from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App';
import Footer from './footer'

function Home() {
  const navigate = useNavigate()
  function setroom() {
    const roomid1 = Math.floor(10000 + Math.random() * 90000);
    let roomid2 = "./room/" + roomid1;
    navigate(roomid2);
  }

  return (
    <div className="Home text">

      <Container fluid className='home_head'>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <img draggable="false" className='rock' src='./rock.png' alt='rock'></img>
            <div className='home_text_1'>אבן נייר ומספריים אונליין</div>
            <Row>
              <Col sm={2}></Col>
              <Col sm={4}><div className='home_text_2'>יש לך מחלוקת עם חבר?</div></Col>
              <Col sm={4}><div className='home_text_3'>פתור אותה אונליין בקלות</div></Col>
              <Col sm={2}></Col>
              <div className='div_button_start' about><Button className='button_start' onClick={setroom}>התחל לשחק</Button></div>
            </Row>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
      <Container fluid className='home_footer'>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <div className='titles'>טריקים לנצח במשחק</div>
            <div>אם אתה רוצה לנצח, אתה צריך להיות פסיכולוג טוב כדי לחזות את הבחירה הבאה של היריב שלך. יש הרבה אסטרטגיות ולאנשים שונים יש דפוסי התנהגות שונים.</div>
            <div>אבל אם תמלא אחר העצה הזו תזכה ברוב המקרים. אם הבחירה האחרונה שלך הייתה...</div>
            <ul>
              <li>סלע - בחר מספריים בסיבוב הבא</li>
              <li>מספריים - בחר נייר בסיבוב הבא</li>
              <li>נייר - בחר סלע בסיבוב הבא</li>
            </ul>
            <div>זה יעבוד רק עם שחקנים לא מנוסים. האסטרטגיה מבוססת על ניסויים של אוניברסיטת ג'ג'יאנג.</div>

            <div className='titles'>עובדות מעניינות על משחק אבן ניייר ומספריים</div>
            <div>1. הידעתם שהמשחק הזה הופיע לראשונה בסין במאה ה-17? כן, זה לא הומצא באירופה או באמריקה אלא באסיה. אירופה התחילה לשחק את המשחק הזה רק במאה ה-19.</div>
            <div>2. הסטטיסטיקה אומרת שאנשים בדרך כלל בוחרים במספריים בסיבוב הראשון ובאבן בשני.</div>
            <div>3. יש רובוט שפותח ביפן שמנצח עם 100% סיכוי. זה מנתח את התנועה של שרירי היד שלך כדי לחזות את בחירתך .</div>
            <div className='text_footer'></div>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
      <div className='lll'>
        <Footer />
      </div>
    </div>
  )
}

export default Home;