<template>
  <div>
    <section class="picture">
      <div class="container">
        <h1 class="picture-title">Картины эпохи Возрождения</h1>
        <div class="picture-box">
          <div class="picture-card">
            <div class="picture-card-img">
              <img src="../assets/img/picture1.png" alt="">
            </div>
            <h2 class="picture-card-name">«Рождение Венеры» Сандро Боттичелли</h2>
            <div class="picture-buy">
              <div>
                <p class="picture-buy-price-old">2 000 000 $</p>
                <p class="picture-buy-price-now">1 000 000 $</p>
              </div>
              <div>
                <button class="picture-buy-btn" @click="goBusket('$event')" id="0">Купить</button>
              </div>
            </div>
          </div>
          <div class="picture-card">
            <div class="picture-card-img">
              <img src="../assets/img/picture2.png" alt="">
            </div>
            <h2 class="picture-card-name">«Тайная вечеря»  Леонардо да Винчи</h2>
            <div class="picture-buy">
              <div>
                <p class="picture-buy-price-now">3 000 000 $</p>
              </div>
              <div>
                <button class="picture-buy-btn" @click="goBusket('$event')" id="1">Купить</button>
              </div>
            </div>
          </div>
          <div class="picture-card">
            <div class="picture-card-img">
              <img src="../assets/img/picture3.png" alt="">
            </div>
            <h2 class="picture-card-name">«Сотворение Адама» Микеланджело</h2>
            <div class="picture-buy">
              <div>
                <p class="picture-buy-price-old">6 000 000 $</p>
                <p class="picture-buy-price-now">5 000 000 $</p>
              </div>
              <div>
                <button class="picture-buy-btn" @click="goBusket('$event')" id="2">Купить</button>
              </div>
            </div>
          </div>
          <div class="picture-card" id="picture-card-sold">
            <div class="picture-card-img">
              <img src="../assets/img/picture4.png" alt="">
            </div>
            <h2 class="picture-card-name">«Урок анатомии»  Рембрандт</h2>
            <div class="picture-buy">
              <div>
                <p class="picture-buy-sold">Продана на аукционе</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pictures: [],
      errored: false,
      busketEl: []
    }
  },
  created() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => this.pictures = response.data)
      .catch(error => {
        console.error(error)
        this.errored = true;
      });
  },
  methods: {
    goBusket(event) {
      document.addEventListener('click', (event) => {
        console.log(event.target.id)
        if (event.target.classList == 'picture-buy-btn') {
          if (typeof window !== 'undefined') {
          this.busketEl.push(this.pictures[event.target.id])
          localStorage.setItem('busket', JSON.stringify(this.busketEl))
          if (this.busketEl.length > 0) {
            event.target.innerHTML = 'В корзине';
            event.target.classList = 'picture-buy-btn-active';
            event.target.setAttribute('disabled', 'disabled')
          }
          }
        }
      })
      console.log(event)
    }
  }
}
</script>

<style scoped lang="scss">
  .picture {
    width: 100%;
    margin-bottom: 320px;
    &-title {
      font-family: Merriweather;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      color: #343030;
      margin-top: 45px;
      margin-bottom: 39px;
    }
    &-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    &-card {
      width: 282px;
      height: auto;
      border: 1px solid #E1E1E1;
      &-img {
        width: 280px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &-name {
        font-family: Merriweather;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        color: #343030;
        margin: 20px 24px 22px 24px;
      }
    }
    &-buy {
      margin: 24px;
      display: flex;
      justify-content: space-between;
      &-price-old {
        font-family: Merriweather;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 150%;
        text-decoration-line: line-through;
        color: #A0A0A0;
      }
      &-sold {
        font-family: Merriweather;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 150%;
        color: #343030;
        margin-top: 10px;
      }
      &-price-now {
        font-family: Merriweather;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 150%;
        color: #343030;
      }
      &-btn {
        background: #382E2B;
        width: 118px;
        height: 48px;
        border: none; 
        cursor: pointer;
        font-family: Merriweather;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 150%;
        color: #F4F6F9;
      }
      &-btn:hover {
        background: #776763;
      }
      &-btn:disabled {
        background: #C1B4B1;
      }
      &-btn-active {
        background: #5B3A32;
        width: 118px;
        height: 48px;
        border: none; 
        cursor: pointer;
        font-family: Merriweather;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 150%;
        color: #F4F6F9;
      }
    }
  }
  #picture-card-sold {
    opacity: 0.5;
  }
</style>