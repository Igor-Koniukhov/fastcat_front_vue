<template>
  <div class="home">
    <div class="main-wrapper-content">
      <section class="first-section restaurant-list">
        <div class="container">
          <div class="row">
            <div class="col">
              <h2 class="text-center p-2 dancing-sm"><strong class=" text-center mb-5"><span
                class="underline-word">Fast</span> <span
                style="color: #ffc107">Cat</span>ering Company</strong></h2>

              <p>FastCat is passionate about food and bringing people evermore choice. There are amazing
                restaurants everywhere that we believe everyone should have access to.</p>
              <p>But FastCat’s mission is not only to make sure that the restaurants in your area are
                available to you when and where you want them - we want to go further and bring new
                restaurants to your area so you have even more choice of amazing food.</p>
              <p>FastCat’s Editions platform does exactly that: helping restaurants expand to new areas.
                Editions identifies the cuisines that people want but do not have access to locally and then
                invests in restaurants who excel in those foods to help them set-up in those local
                areas.</p>
            </div>
          </div>
        </div>
      </section>
      <h2 class="text-center mb-5 dancing-sm">Food delivery in Kharkiv:</h2>
      <div class="row" style="padding: 0 15px;">
        <div class="col-12 m-auto">
          <form method="post" action="/suppliers/selected">
            <div class="row p-2 all-items-inline">

              <div class="col-md-4 col-sm-12 ">
                <a class="btn btn-in-line frame" href="/products">See All products</a>
              </div>
              <div class="form-group col-md-8 col-sm-12">
                <div class="frame col-12">
                  <select class="form-control schedule" id="schedule" name="schedule">
                    <!--{{range .Suppliers}}
                    <option>{{.WorkingHours.Opening}}&#45;&#45;{{.WorkingHours.Closing}}</option>
                    {{end}}-->
                  </select>
                  <div class="col-2 ">
                    <button type="submit " class="btn btn-in-line m-auto">Choose</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <Suppliers
          class=" col-lg-4 col-md-6 mb-3"
          v-for="supplier in suppliers"
          :supplier="supplier"
          :key="supplier.id"
          v-on:get-supplier_id="GetSupplierID($event)"
        />
      </div>

      <section class="second-section">
        <div class="section-decoration section-decoration-120"
             style="background-image: url(../../public/img/section-decor/divider2_desktop.svg);"></div>
        <div class="wrapper-content wrapper-content-yellow">
          <div class="container">
            <h3 class="text-center dancing-sm"><span class="underline-word">Fast</span> <span
              style="color: #ff0000">Cat</span></h3>
            <div class="row">
              <div class="col-md-4 cos-sm-12">
                <h5 class="text-center dancing-sm">Faster than rocket</h5>
                <ul class="text-center">
                  <li>You orders we serves</li>
                  <li>You put down your phone - we on a road</li>
                  <li>Time works wonders - we makes work</li>
                  <li>No pain no gaine</li>
                  <li>All in good time</li>
                </ul>
              </div>
              <div class="col-md-4 cos-sm-12"><img class="cat-on-delivery" src="../../public/img/fast-cat-2.png"
                                                   alt="cat on a bike"></div>

              <div class="col-md-4 cos-sm-12">
                <h5 class="text-center dancing-sm">Safer than home</h5>
                <ul class="text-center">
                  <li>Every vegetable has its season</li>
                  <li>One man’s meat is another man’s poison</li>
                  <li>In skating over thin ice our safety is in our speed</li>
                  <li>A ship in harbour is safe, but that is not what ships are built for</li>
                  <li>Half a loaf is better than no bread</li>
                  <li>No song, no supper</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="section-decoration section-decoration-120"
             style="background-image: url(../../public/img/section-decor/divider3_desktop.svg);"></div>

      </section>
      <section>
        <div class="wrapper-content">
          <div class="container">
            <h3 class="text-center dancing-sm"><span class="underline-word">Fast</span> <span
              style="color: #ff0000">Cat</span> could deliver everything at time</h3>
            <div class="row">
              <div class="col-md-4 col-sm-12 d-flex justify-content-center">
                <div class="direction-col">
                  <a class="icon-reference" href="#"></a>
                  <img class="restaurant-icon" src="../../public/img/delivery.jpg" alt="">
                  <div class="icon-title">become a courier</div>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 d-flex justify-content-center">
                <div class="direction-col">
                  <a class="icon-reference" href="#"></a>
                  <img class="restaurant-icon" src="../../public/img/cook-cat.jpeg" alt="">
                  <div class="icon-title">become a partner</div>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 d-flex justify-content-center">
                <div class="direction-col">
                  <a class="icon-reference" href="#"></a>
                  <img class="restaurant-icon" src="../../public/img/vacansy.png" alt="">
                  <div class="icon-title">vacancies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
 import Suppliers from "../components/suppliers/Suppliers";


  export default {
    name: 'Home',
    components:{Suppliers},
    data() {
      return {
        suppliers: {
          type: Array,
          required: true,
        },
      }
    },
    methods:{
      generateSuppliers() {
        fetch('http://localhost:8090/suppliers-json')
          .then((resp) => resp.json())
          .then((data) => {
            this.suppliers = data
          })
      },

    },
    created() {
      this.generateSuppliers()
    }
  }
</script>
