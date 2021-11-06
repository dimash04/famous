<template>
    <header>
      <div class="container">
        <div class="header">
          <div class="header-logo">
            <img src="../assets/img/logo.svg" alt="logo">
          </div>
          <div class="header-nav">
            <ul class="header-ul">
              <li><a href="#" class="header-link">Каталог</a></li>
              <li><a href="#" class="header-link">Доставка</a></li>
              <li><a href="#" class="header-link">Оплата</a></li>
              <li><a href="#" class="header-link">Контакты</a></li>
              <li><a href="#" class="header-link">О галерее</a></li>
            </ul>
          </div>
          <div class="header-search">
            <input type="text" class="header-search-input" placeholder="Поиск по названию картины">
            <button class="header-search-btn">Найти</button>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  header {
    width: 100%;
    border-bottom: 1px solid #E1E1E1;
  }
  .header {
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
    &-search {
      width: 416px;
      height: 48px;
      &-input {
        width: 70%;
        border: 1px solid #E1E1E1;
        height: inherit;
        padding: 13px 0px 14px 16px;
      }
      &-input:focus {
        border: 1px solid #B5B5B5;
      }
      &-input[placeholder] {
        font-family: Merriweather;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #343030;
      }
      &-btn {
        width: 30%;
        background: #403432;
        height: inherit;
        border: none;
        font-family: Merriweather;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
        color: #FFFFFF;
      }
      &-btn:hover {
        background: #776763;
      }
    }
  }

</style>
