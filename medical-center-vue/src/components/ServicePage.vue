<template>
  <main>
    <section class="service-page">
      <div class="container">
        <div class="service-page__inner">
          <h2 class="service-page__title">{{ cityid.title }}</h2>
          <img class="service-page__img" :src="cityid.photo" alt="">
          <div class="service-page__description">
            {{ cityid.description }}
          </div>
        </div>
        <div class="calcont">
          <table class="cal">
            <caption>
              <span class="prev"><a href="#">←</a></span>
              <span class="next"><a href="#">→</a></span>
              Декабрь 2019
            </caption>
            <thead>
            <tr>
              <th>Пн</th>
              <th>Вт</th>
              <th>Ср</th>
              <th>Чт</th>
              <th>Пт</th>
              <th>Сб</th>
              <th>Вс</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="off"><a href="#">26</a></td>
              <td class="off"><a href="#">27</a></td>
              <td class="off"><a href="#">28</a></td>
              <td class="off"><a href="#">29</a></td>
              <td class="off"><a href="#">30</a></td>
              <td class="off"><a href="#">31</a></td>
              <td><a href="#">1</a></td>
            </tr>
            <tr>
              <td><a href="#">2</a></td>
              <td><a href="#">3</a></td>
              <td><a href="#">4</a></td>
              <td><a href="#">5</a></td>
              <td><a href="#">6</a></td>
              <td><a href="#">7</a></td>
              <td><a href="#">8</a></td>
            </tr>
            <tr>
              <td><a href="#">9</a></td>
              <td><a href="#">10</a></td>
              <td><a href="#">11</a></td>
              <td><a href="#">12</a></td>
              <td><a href="#">13</a></td>
              <td><a href="#">14</a></td>
              <td><a href="#">15</a></td>
            </tr>
            <tr>
              <td><a href="#">16</a></td>
              <td><a href="#">17</a></td>
              <td><a href="#">18</a></td>
              <td><a href="#">19</a></td>
              <td><a href="#">20</a></td>
              <td><a href="#">21</a></td>
              <td><a href="#">22</a></td>
            </tr>
            <tr>
              <td><a href="#">23</a></td>
              <td><a href="#">24</a></td>
              <td><a href="#">25</a></td>
              <td><a href="#">26</a></td>
              <td><a href="#">27</a></td>
              <td class="active"><a href="#">28</a></td>
              <td><a href="#">29</a></td>
            </tr>
            <tr>
              <td><a href="#">30</a></td>
              <td><a href="#">31</a></td>
              <td class="off"><a href="#">1</a></td>
              <td class="off"><a href="#">2</a></td>
              <td class="off"><a href="#">3</a></td>
              <td class="off"><a href="#">4</a></td>
              <td class="off"><a href="#">5</a></td>
            </tr>
            </tbody>
          </table>
          <div class="times">
            <div class="times__inner">
              <span class="times__data"><a href="#" class="times__data-link">08:30</a></span>
              <span class="times__data"><a href="#" class="times__data-link">09:30</a></span>
              <span class="times__data"><a href="#" class="times__data-link">10:30</a></span>
              <span class="times__data"><a href="#" class="times__data-link">11:30</a></span>
              <span class="times__data"><a href="#" class="times__data-link">12:30</a></span>
              <span class="times__data"><a href="#" class="times__data-link">13:30</a></span>
              <span class="times__data"><a href="#" class="times__data-link">15:30</a></span>
            </div>
            <div class="calcont__submit">
              <input type="submit" value="Записаться" class="btn service-card_btn">
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    props: ['cityid'],
  };
</script>
