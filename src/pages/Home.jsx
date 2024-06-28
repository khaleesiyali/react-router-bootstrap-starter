import Header from '../components/Header'
import Meta from '../components/Meta'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Home = () => {
  // page content
  const pageTitle = 'Home'
  const pageDescription = 'welcome to react bootstrap template'

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
            <Card style={{marginTop: 20}}>
              <Card.Body>
                <div class = 'row'>
                  <div style={{backgroundColor: '#9EB4DB', padding: 20,}} class = 'col-sm-12'>
                  <Button style={{marginRight: 20}} variant="light">主要</Button>{''} 
                  <Button style={{marginRight: 20}} variant="light">経済</Button>{''}
                  <Button style={{marginRight: 20}} variant="light">スポーツ</Button>{''}
                  <Button style={{marginRight: 20}} variant="light">科学</Button>{''}
                  </div>
                </div>

                <div style={{marginTop: 20}} class = 'row'>
                <li><a href="/">G7声明 伊が「中絶」の明記を拒否する可能性 </a></li>
                    <li><a href="/">能登地震 医療チームを門前払いもあるという</a></li>
                    <li><a href="/">マルチ商法の問題点と甘すぎる規制の状況について</a></li>
                    <li><a href="/">五輪観戦ツアー400万円 ほとんど完売状態になる</a></li>
                    <li><a href="/">ラーメン経営難 チェーン2社の勢いが増している</a></li>
                    <li><a href="/">子から父のことを聞かれたら 母恐怖を感じる</a></li>
                    <li><a href="/">緊急降板の由伸 明らかだった異変の理由とは</a></li>
                    <li><a href="/">時空がゆがむサザエさん 大谷の回も含めての話</a></li>
                    <li><a href="/">企業の不祥事 弁護士はコンサル化が進んでいる</a></li>
                    <li><a href="/">ラーメン経営難 チェーン2社の勢いが増している</a></li>
                    <li><a href="/">100%オレンジ飲料の市場が縮小へ向かっている</a></li>
                    <li><a href="/">アメ横 飲食店の7割が外国人経営者である現状</a></li>
                    <li><a href="/">山田うどん 健康ブームになぜ逆行するのか不明</a></li>
                    <li><a href="/">自転車の中学生が車と衝突し重体になる事件</a></li>

                </div>
              </Card.Body>
            </Card>

            <Card style={{marginTop: 20}}>
              <Card.Body>
                <div  style={{marginBottom: 15}} class = 'row'>
                    <div class = 'col-3' xs={6} md={4}>
                      <Card>
                        <Card.Body>
                        <img style={{width: 150, height: 150}} src={require("../assets/image_13.png")} />
                        </Card.Body>
                      </Card>
                    </div>
                    <div class = 'col-9'>
                    <Card>
                        <Card.Body>
                        <a href="/" style={{fontSize: 20}} >先輩から新入生へのアドバイス！新しい出会いを始める会！4/3午後12:20参加費無料！ </a>
                        <p style={{color: '#828282', fontSize: 20, marginTop: 15 }}> せんぱいぐるーぷ <br/> <br/> </p>
                        </Card.Body>
                      </Card>
                    </div>
                </div>

                <div  style={{marginBottom: 15}} class = 'row'>
                    <div class = 'col-3' xs={6} md={4}>
                      <Card>
                        <Card.Body>
                        <img style={{width: 150, height: 150}} src={require("../assets/image_10.png")} />
                        </Card.Body>
                      </Card>
                    </div>
                    <div class = 'col-9'>
                    <Card>
                        <Card.Body>
                        <a href="/" style={{fontSize: 20}} >KPOPに興味ある！？サークルに参加！初心者大歓迎！！参加費無料！/3午後12:20参加費無料！ </a>
                        <p style={{color: '#828282', fontSize: 20, marginTop: 15 }}> キムチダンスサークル <br/> <br/> </p>
                        </Card.Body>
                      </Card>
                    </div>
                </div>

                <div  style={{marginBottom: 15}} class = 'row'>
                    <div class = 'col-3' xs={6} md={4}>
                      <Card>
                        <Card.Body>
                        <img style={{width: 150, height: 150}} src={require("../assets/image_11.png")} />
                        </Card.Body>
                      </Card>
                    </div>
                    <div class = 'col-9'>
                    <Card>
                        <Card.Body>
                        <a href="/" style={{fontSize: 20}} >ボランティア活動募集中・未経験OK/3午後12:20参加費無料！ </a>
                        <p style={{color: '#828282', fontSize: 20, marginTop: 15 }}> 世界の始まりNPO <br/> <br/> </p>
                        </Card.Body>
                      </Card>
                    </div>
                </div>

                <div  style={{marginBottom: 15}} class = 'row'>
                    <div class = 'col-3' xs={6} md={4}>
                      <Card>
                        <Card.Body>
                        <img style={{width: 150, height: 150}} src={require("../assets/image_14.png")} />
                        </Card.Body>
                      </Card>
                    </div>
                    <div class = 'col-9'>
                    <Card>
                        <Card.Body>
                        <a href="/" style={{fontSize: 20}} >UI・UXワークショップ報告・参加費無料/3午後12:20参加費無料！ </a>
                        <p style={{color: '#828282', fontSize: 20, marginTop: 15 }}> テクテク株式インターネット技術会社 <br/> <br/> </p>
                        </Card.Body>
                      </Card>
                    </div>
                </div>

                <div  style={{marginBottom: 15}} class = 'row'>
                    <div class = 'col-3' xs={6} md={4}>
                      <Card>
                        <Card.Body>
                        <img style={{width: 150, height: 150}} src={require("../assets/image_12.png")} />
                        </Card.Body>
                      </Card>
                    </div>
                    <div class = 'col-9'>
                    <Card>
                        <Card.Body>
                        <a href="/" style={{fontSize: 20}} >助けて！食にアンケートを答えてくさい！ </a>
                        <p style={{color: '#828282', fontSize: 20, marginTop: 15 }}> ナットウ発酵株式会社 <br/> <br/> <br/> </p>
                        </Card.Body>
                      </Card>
                    </div>
                </div>

              </Card.Body>
            </Card>
          </div>

        <div style={{marginTop: 20}} class = 'col-2'>
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
  )
}

export default Home