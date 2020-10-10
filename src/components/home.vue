<template>
  <div class="home">

  <div class="home-background">
    <div class="greet">
      <h1>Greeting</h1>
      <div class="welcome">ようこそ、魅惑と幻想の・・・</div>
      <div class="dark-and-dark">深淵へ</div>
    </div>

    <div class="about-me">
      <h1>わたしについて</h1>
      <table border="1">
        <tr>
          <td colspan="2">
            <img src="../assets/like-luffy.jpg" alt="何が嫌いかより何が好きかで自分を語れよ!!!">
          </td>
        </tr>
        <tr>
          <th>好きなアニメ</th>
          <td>
            <ul v-for="(anime, index) in favorite.anime" :key="index">
              <li class="list-items"><strong>{{ anime }}</strong></li>
            </ul>
            <div class="etc">...etc</div>
          </td>
        </tr>
        <tr>
          <th>好きなマンガ</th>
          <td>
            <ul v-for="(manga, index) in favorite.manga" :key="index">
              <li class="list-items"><strong>{{ manga }}</strong></li>
            </ul>
            <div class="etc">...etc</div>
          </td>
        </tr>
      </table>
    </div>

    <div class="links">
      <h1>Link</h1>
      <div class="linkImage">
        <a href="https://github.com/masayasviel">
          <img src="../assets/github.png" alt="github">
        </a>
        <a href="https://qiita.com/masayasviel">
          <img src="../assets/qiita.png" alt="qiita">
        </a>
        <a href="https://atcoder.jp/users/masayasviel">
          <img src="../assets/atcoder.png" alt="AtCoder" style="border: solid black;">
        </a>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import favorite from "../assets/favorite.json"

export default {
  data() {
    return {
      favorite: favorite
    }
  }
}
</script>

<style scoped>
.home {
  margin: 0;
  padding: 0;
  height: 100%;
}

.home-background:before {
  content:"";
  display:block;
  position:fixed;
  z-index:-1;
  width:100%;
  height:100%;
  right: 0;
  bottom: 0;
  background-image: url(../assets/mizunoai.png);
  background-repeat: no-repeat;
  background-position: right bottom;
}

.greet div {
  text-align: center;
}

.welcome {
  font-size: 1.5rem;
  font-family: HG行書体;
}

.dark-and-dark {
  font-size: 7rem;
  font-family: MS Gothic;
}

.about-me table {
  margin-left: 7%;
  background:rgba(255,255, 255, 0.5);
}

.about-me table img {
  max-width: 100%;
}

.list-items {
  margin: 0;
  padding: 0;
}

.etc {
  float: right;
  margin-right: 15%;
}

.linkImage {
  display: inline-block;
  width: 100%;
  height: 6rem;
}

.linkImage img {
  float: left;
  border-radius: 50%;
  height: 100%;
  margin-left: 3%;
}

.linkImage img:hover {
  box-shadow: 1vw 1vh;
  transform: translate(-0.2vw,-0.2vh);
}

</style>