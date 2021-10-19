<template>
    <div class="f-main-page">
        <div>
            <div class="main-page-title">
                <h1 class="dancing"><span style="color: red;">Fast</span><span style="color:#333">Cat</span></h1>
                <p>
                    <router-link :to="{name: 'catalog'}">
                        <span class="nav-to-catalog">to Catalog</span>
                    </router-link>
                </p>

            </div>
            <b-carousel
                    id="carousel-1"
                    class="custom-carousel"
                    v-model="slide"
                    :interval="4000"
                    controls
                    indicators
                    background="#ababab"
                    img-width="1024"
                    img-height="480"
                    style="text-shadow: 1px 1px 2px #333;"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
            >

                <b-carousel-slide
                        caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://media.istockphoto.com/photos/sushi-picture-id135849804?b=1&k=20&m=135849804&s=170667a&w=0&h=ssJ24AIse0ExehHxPRlM_eSP_b5oEAtNYd8McXXY-Yo="
                ></b-carousel-slide>


                <b-carousel-slide
                        img-src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F07%2F13%2FUltimate-Veggie-Burgers-FT-Recipe-0821.jpg">
                    <h1>Welcome!</h1>
                </b-carousel-slide>


                <b-carousel-slide
                        img-src="https://alternate-takes.com/wp-content/uploads/2021/05/s2.jpg"></b-carousel-slide>

                <b-carousel-slide>
                    <template #img>
                        <img
                                class="d-block img-fluid w-100"
                                width="1024"
                                height="480"
                                src="https://www.thespruceeats.com/thmb/W-Ur-ceUIwo0XLyBPzT2VwcwgJU=/1500x1000/filters:fill(auto,1)/gluten-free-new-york-cheesecake-1450985-hero-01-dc54f9daf38044238b495c7cefc191fa.jpg"
                                alt="image slot"
                        >
                    </template>
                </b-carousel-slide>
            </b-carousel>
        </div>
    </div>
</template>

<script>
    export default {
        name: "f-main-page",
        props: {},
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
        computed: {},
        methods: {
            onSlideStart() {
                this.sliding = true
            },
            onSlideEnd() {
                this.sliding = false
            }
        },
        mounted() {
            this.onSlideEnd()
            this.onSlideEnd()
        }
    }
</script>

<style>

    .main-page-title {
        position: fixed;
        top: 28px;
        left: 0;
        right: 0;
        z-index: 400;
    }

    .custom-carousel {
        margin-top: -55px;
        z-index: 360;
        background-color: #333;
    }
    .img-fluid{
        background-color: #333;
    }

    .nav-to-catalog {
        color: white;
        font-weight: bold;
        font-size: 17px;
        text-decoration: underline;
        text-decoration-color: red;
    }

</style>
