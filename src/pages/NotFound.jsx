import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NotFound = () => {
  return (
    <div>
    <div class = "container">
      <div class = "row">
        <div class = "col-2">
        <Card style={{marginTop: 20}}>
          <Card.Body>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">ショッピング</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">ニュース</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">マップ</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">天気</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">災害</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">ファション</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">番組</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">ボクシング</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">旅行</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">ドラマ</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">ガチャ</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">ファイナンス</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">ゲーム</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="../about">アンケート</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">掲示板</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">天気</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">知恵袋</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">占い</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">カレンダー</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">宝くじ</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">オークション</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">海外ニュース</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">音楽</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">映画</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">漫画</a></li>
              <li style={{listStyleImage: '🌐 ', marginBottom: 20}}><a href="/">アニメ</a></li>
              
            
          </Card.Body>
        </Card>
        </div>

        <div class = "col-8">
          <Card style={{marginTop: 20 }}>
            <Card.Body>
                <h1 style={{marginBottom: 50,textAlign: 'center', fontWeight: 800, fontFamily: 'Arial', fontSize: 70,}}>
                  Congratulations!!!
                </h1>
                   
                <h1 style={{fontSize: 25, textAlign: 'center', marginBottom: 20}}>  
                  You are done with the tasks but wait there's more! Answer this final servey...or else🔪💥🔫
                </h1>

                <h1 style={{fontSize: 20, textAlign: 'center'}}>  
                Thanks! 😘
                </h1>
                <Button style={{marginTop: 50, marginLeft: 'auto', marginRight:'auto', width: 300, padding: 20, fontSize: 30}} variant="success">SURVEY</Button>{''}
                
            </Card.Body>
          </Card>
        </div>

      <div style={{marginTop: 20,}} class = 'col-2'>
        <Card>
          <Card.Body>
          <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                
                <Form.Control type="email" placeholder="ユーザー名" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                 
                <Form.Control type="password" placeholder="パスワード" />
              </Form.Group>
          </Form>
          <Button variant="dark">ロッグイン</Button>{''}

          
            <img style={{width: 160, height: 250, marginTop: 20}} src={require("../assets/stonk.png")} />
            <img style={{width: 160, height: 250, marginTop: 20}} src={require("../assets/rad.png")} />
            <img style={{width: 160, height: 250, marginTop: 20}} src={require("../assets/yama.png")} />

          



          </Card.Body>
        </Card>
      </div>

      </div>
    </div>

  


  </div>
  );
};

export default NotFound;
