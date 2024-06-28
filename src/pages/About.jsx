import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const About = () => {
  // page content
  const pageTitle = 'About'
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
                  <li><a href="/">社会問題・意識調査</a></li>
                    <ol style={{listStyleType: 'lower-alpha', marginLeft: 50}}>
                      <li><a href="/"> 環境保護に対する意識と行動に関するアンケート</a></li>
                      <li><a href="/">ジェンダー平等に対する意識と経験についてのアンケート</a></li>
                      <li><a href="/">人種差別と多様性に関する意識アンケート</a></li>
                    </ol>
                    
                    <li><a href="/">エンターテイメント</a></li>
                    <ol style={{listStyleType: 'lower-alpha', marginLeft: 50}}>
                      <li><a href="/">好きな映画のジャンルとその理由に関するアンケート</a></li>
                      <li><a href="/">音楽の聴取習慣と好みのアーティストに関するアンケート</a></li>
                      <li><a href="/">ゲームのプレイ頻度と好みのジャンルについてのアンケート</a></li>
                      <li><a href="/">趣味・特技の種類とその継続期間に関するアンケート</a></li>
                      <li><a href="/">テレビ番組の視聴習慣と好みの番組についてのアンケート</a></li>
                    </ol>

                    <li><a href="/">テクノロジー</a></li>
                    <ol style={{listStyleType: 'lower-alpha', marginLeft: 50}}>
                      <li><a href="/">スマートフォンの使用頻度と最も利用するアプリアンケート</a></li>
                      <li><a href="/">サイバーセキュリティの意識と対策についてのアンケート</a></li>
                      <li><a href="../NotFound">日本のウエブサイトのレイアウトについて（HTI）のアンケート</a></li>
                    </ol>

                    <li><a href="#">旅行・レジャー</a></li>
                    <ol style={{listStyleType: 'lower-alpha', marginLeft: 50}}>
                      <li><a href="#">最近の旅行の計画と実行状況についてのアンケート</a></li>
                      <li><a href="#">旅行先での観光地の満足度とおすすめポイントに関するアンケート</a></li>
                      <li><a href="#">旅行にかける予算と実際の支出に関するアンケート</a></li>
                    </ol>

                    <li><a href="#">人間関係</a></li>
                    <ol style={{listStyleType: 'lower-alpha', marginLeft: 50}}>
                      <li><a href="#">友人関係の維持方法とその満足度に関するアンケート</a></li>
                      <li><a href="#">家族との関係性とコミュニケーション方法に関するアンケート</a></li>
                      <li><a href="#">恋愛・結婚に関する意識と経験についてのアンケート</a></li>
                    </ol>

                    <li><a href="#">パーソナルデベロップメント</a></li>
                    <ol style={{listStyleType: 'lower-alpha', marginLeft: 50}}>
                      <li><a href="#">自己啓発のための活動とその効果についてのアンケート</a></li>
                      <li><a href="#">モチベーションの維持方法とその成功体験に関するアンケート</a></li>
                      <li><a href="#">効果的なタイムマネジメント方法に関するアンケート</a></li>
                    </ol> 

                </div>
              </Card.Body>
            </Card>

            
          </div>

        <div style={{marginTop: 20}} class = 'col-2'>
          <Card>
            <Card.Body>

              <img style={{width: 160, height: 250, marginTop: 20}} src={require("../assets/beer.png")} />
              <img style={{width: 160, height: 250, marginTop: 20}} src={require("../assets/baby.png")} />
              <img style={{width: 160, height: 250, marginTop: 20}} src={require("../assets/jam.png")} />
              <img style={{width: 160, height: 250, marginTop: 20}} src={require("../assets/yama.png")} />
 
            </Card.Body>
          </Card>
        </div>

        </div>
      </div>

    


    </div>
  )
}

export default About