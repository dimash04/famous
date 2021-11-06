<template>
    <footer>
      <div class="container">
        <div class="footer">
          <div class="footer-logo">
            <img src="../assets/img/logo.svg" alt="logo">
          </div>
          <div class="footer-nav">
            <ul class="footer-ul">
              <li><a href="#" class="footer-link">Каталог</a></li>
              <li><a href="#" class="footer-link">Доставка</a></li>
              <li><a href="#" class="footer-link">Оплата</a></li>
              <li><a href="#" class="footer-link">Контакты</a></li>
              <li><a href="#" class="footer-link">О галерее</a></li>
            </ul>
          </div>
          <div class="footer-contact">
            <div class="footer-contact-phone">
              <img src="../assets/img/phone.svg">
              <p><a href="tel:+7(495)555-55-55" style="color: #555555">+7 (495) 555-55-55</a></p>
            </div>
            <div class="footer-contact-address">
              <img src="../assets/img/address.svg">
              <p>г. Алматы, ул. Фурманова, 24</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  footer {
    width: 100%;
    background: #ECEAEA;
    border-top: 1px solid #E1E1E1;
  }
  .footer {
    width: 100%;
    display: flex;
    height: 97px;
    align-items: center;
    justify-content: space-between;
    &-nav {
      width: auto;
    }
    &-ul {
      display: flex;
      flex-direction: row;
    }
    &-link {
      margin-right: 48px;
      font-family: Merriweather;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      color: #343030;
      text-decoration: none;
    }
    &-contact {
      width: 450px;
      height: 21px;
      display: flex;
      font-family: Merriweather;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      color: #555555;
      &-phone {
        width: 40%;
        display: flex;
        align-items: center;
        height: inherit;
        img {
          margin-right: 10px;
          width: 14px;
          height: 14px;
        }
      }
      &-address {
        width: 267px;
        display: flex;
        height: inherit;
        align-items: center;
        margin-left: 40px;
        img {
          margin-right: 10px;
          width: 14px;
          height: 14px;
        }
      }
    }
  }

</style>
