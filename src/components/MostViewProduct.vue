<template>
  <div>
    <h3>{{title}}</h3>
    <div class='mostViewProd'>
      <div class="products">
        <div class="card">
          <img src="../assets/soccer/ronaldo.png" class="card-img-top" alt="product1">
          <div class="card-body" style="padding:0">
            <div class="card-text">
              <p class="product-title" style="margin:0;">호날두</p>
              <p class="product-price">270,000,000,000원</p>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/soccer/jo.jpeg" class="card-img-top" alt="product2">
          <div class="card-body" style="padding:0">
            <div class="card-text">
              <p class="product-title" style="margin:0;">조규성</p>
              <p class="product-price">6,700,000,000원</p>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/soccer/son.png" class="card-img-top" alt="product3">
          <div class="card-body" style="padding:0">
            <div class="card-text">
              <p class="product-title" style="margin:0;">손흥민</p>
              <p class="product-price">114,000,000,000원</p>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/soccer/kim.png" class="card-img-top" alt="product4">
          <div class="card-body" style="padding:0">
            <div class="card-text">
              <p class="product-title" style="margin:0;">김민재</p>
              <p class="product-price">26,100,000,000원</p>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/soccer/jung.jpeg" class="card-img-top" alt="product5">
          <div class="card-body" style="padding:0">
            <div class="card-text">
              <p class="product-title" style="margin:0;">정우영</p>
              <p class="product-price">2,500,000,000원</p>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/soccer/kim2.png" class="card-img-top" alt="product6">
          <div class="card-body" style="padding:0">
            <div class="card-text">
              <p class="product-title" style="margin:0;">김진야</p>
              <p class="product-price">1,100,000,000원</p>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/soccer/park.jpg" class="card-img-top" alt="product7">
          <div class="card-body" style="padding:0">
            <div class="card-text">
              <p class="product-title" style="margin:0;">박지성</p>
              <p class="product-price">78,100,000,000원</p>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/soccer/cha.jpeg" class="card-img-top" alt="product8">
          <div class="card-body" style="padding:0">
            <div class="card-text">
              <p class="product-title" style="margin:0;">차범근</p>
              <p class="product-price">300,000,000,000원</p>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/soccer/lee.jpeg" class="card-img-top" alt="product9">
          <div class="card-body" style="padding:0">
            <div class="card-text">
              <p class="product-title" style="margin:0;">이청용</p>
              <p class="product-price">16,100,000,000원</p>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/soccer/oh.jpeg" class="card-img-top" alt="product10">
          <div class="card-body" style="padding:0">
            <div class="card-text">
              <p class="product-title" style="margin:0;">오현규</p>
              <p class="product-price">4,100,000,000원</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      distance:0
    }
  },
  props: {
    title: String
  },
  mounted(){
    this.flowDisplay()
  },
  methods: {
    flowDisplay() {
      setInterval(()=>{
        setTimeout(()=>{
          const product = document.querySelectorAll('.card')
          const clone = document.querySelector('.card:first-child').cloneNode(true)
          setTimeout(()=>{
            for(const i in product){
              if(i>0){
                product[i].style.transform="translateX(-270px)"
                product[i].style.transition="0.8s linear"
              }
            }
          })
          setTimeout(()=>{
            document.querySelector(".products").appendChild(clone)
            product[0].remove()
            for(const i in product){
              product[i].removeAttribute('style')
            }
          },800)
        })
      }, 1900)
    }
  }
}
</script>

<style scoped>
  h3 {
    text-align: center;
    font-weight: bold;
    margin-bottom: 16px;
  }
  .mostViewProd {
    display:flex;
    justify-content:center;
    align-items:center;
    width:1200px;
    height:360px;
    margin: 5px auto 50px;
    overflow: hidden;
  }
  .products {
    display: flex;
    justify-content:left;
    min-width: 2700px;
  }
  .card {
    display: block;
    height: 350px;
    min-width: 250px;
    max-width: 250px;
    background: white;
    border: 1px solid lightgrey;
    margin: 0 10px;
  }
  img {
    display: block;
    height: 300px;
    margin: 0;
    cursor: pointer;
  }
</style>
