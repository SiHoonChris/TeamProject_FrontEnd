<template>
  <div>
    <h3>{{title}}</h3>
    <div class='mostViewProd'>
      <div class="products">
        <div class="card" :key=i v-for='(product, i) in productList'>
          <img :src="product.img" class="card-img-top" alt="product">
          <div class="card-body" style="padding:0">
            <div class="card-text">
              <p class="product-title" style="margin:0;">{{product.name}}</p>
              <p class="product-price">{{product.price}}원</p>
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
      distance:0,
      productList: [
        {"img":require("../assets/soccer/ronaldo.png"), "name":"호날두", "price":"270,000,000,000"},
        {"img":require("../assets/soccer/jo.jpeg"), "name":"조규성", "price":"6,700,000,000"},
        {"img":require("../assets/soccer/son.png"), "name":"손흥민", "price":"114,000,000,000"},
        {"img":require("../assets/soccer/kim.png"), "name":"김민재", "price":"26,100,000,000"},
        {"img":require("../assets/soccer/jung.jpeg"), "name":"정우영", "price":"2,500,000,000"},
        {"img":require("../assets/soccer/kim2.png"), "name":"김진야", "price":"1,100,000,000"},
        {"img":require("../assets/soccer/park.jpg"), "name":"박지성", "price":"78,100,000,000"},
        {"img":"https://attach.choroc.com/web/goods/1/img4/025883_20210618161159.jpg", "name":"유기농 우유", "price":"6,250"},
        {"img":require("../assets/soccer/lee.jpeg"), "name":"이청용", "price":"16,100,000,000"},
        {"img":require("../assets/soccer/oh.jpeg"), "name":"오현규", "price":"4,100,000,000"}
      ]
    }
  },
  props: {
    title: String
  },
  mounted(){
    this.flowDisplay()
  },
  methods: {
    prodToDisplay() {
      this.$axios.post(this.$serverUrl+'서버에 맵핑된 경로', {
        "전송할 자료명":"전송할 자료"
      }).then(() => { // "받아온 데이터"
        //"받아온 데이터들을 this.productList로 저장"
      }).catch((err)=>{
        if (err.message.indexOf('Network Error') > -1) {
          alert('불편을 드려 죄송합니다.\n잠시 후에 다시 시도해주십시오')
        }
      })
    },
    flowDisplay() {
      setInterval(()=>{
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
              if(i>0) product[i].removeAttribute('style')
            }
          },800)
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
