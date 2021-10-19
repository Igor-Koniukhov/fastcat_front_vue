<template>
    <div class='f-catalog-item'>

        <f-popup
                v-if="isInfoPopupVisible"
                rightBtnTitle="Add to cart"
                :popupTitle="product_data.suppliers_id"
                @closePopup="closeInfoPopup"
                @rightBtnAction="addToCart"
        >
            <img class="f-catalog-item__image" :src=" ( product_data.image) " alt="img">
            <div>
                <p class="f-catalog-item__name">{{product_data.name}}</p>
                <p class="f-catalog-item__price">Price: {{product_data.price | toFix | formattedPrice}}</p>
                <p class="f-catalog-item__price">{{product_data.type}}</p>
                <p class="ingredients">
                    <f-ingredients
                            v-for="( ingredient, index) in product_data.ingredients"
                            :ingredient="ingredient"
                            :key="index"/>

                </p>
            </div>
        </f-popup>
        <div class="product row">
            <div class="col">
                <div class="product__image">
                    <h3 class=" icon-title text-center">{{product_data.name}}</h3>
                    <div class="ingredients-title">
                        <p><span class="product__term">{{product_data.type}} </span><span class="product-price">{{product_data.price | toFix | formattedPrice}}</span></p>
                        <p><span class="product-id" hidden>{{product_data.id}}</span><span></span></p>
                        <p><span class="supplier-id" hidden>{{product_data.suppliers_id}}</span><span></span></p>

                        <button class="v-catalog-item__show-info show-info" @click="showPopupInfo">
                            Show info
                        </button>

                    </div>
                    <div class="image-switch">
                        <div class=" items-cover background-img "
                             :style="`background-image:url(`+product_data.image+`)`"
                             @click="productClick">
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <button class="view-product-button btn col-12 " @click="addToCart"
            >Add to cart
            </button>
        </div>

</template>

<script>
    import fPopup from '../popup/f-popup'
    import toFix from '../../filters/toFix'
    import formattedPrice from "../../filters/price-format";
    import fIngredients from "./f-ingredients";

    export default {
        name: "f-catalog-item",
        components: {
            fPopup,
            fIngredients
        },
        props: {
            product_data: {
                type: Object,
                ingredients: {
                    type: Array,
                    required: true
                },
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                isInfoPopupVisible: false
            }
        },
        filters: {
            toFix,
            formattedPrice
        },
        computed: {},
        methods: {
            productClick() {
                this.$emit('productClick', this.product_data.id)
            },
            showPopupInfo() {
                this.isInfoPopupVisible = true;
            },
            closeInfoPopup() {
                this.isInfoPopupVisible = false;
            },
            addToCart() {
                this.$emit('addToCart', this.product_data);
            }
        },
        mounted() {
            this.$set(this.product_data, 'quantity', 1)
        }
    }
</script>

<style lang="scss">
    .f-catalog-item {
        flex-basis: 33%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        margin: 1px;

        &__image {
            width: 100px;
        }
    }

    .image-switch {
        left: 0;
        top: 0;
        z-index: 20;
        width: 100%;
        height: 100%;
        display: flex;
    }

    .content {
        padding: 90px 0;
    }

    .product__image {
        position: relative;
        height: 240px;
    }

    .product {
        display: flex;
        flex-direction: column;
        padding: 1px;
        justify-content: center;
        border-radius: 5px;
    }

    .view-product-button {
        background-color: #ffc107;
        margin: 1px;
        border: unset;
        padding: 6px;
        box-shadow: -2px 2px 2px rgba(0, 0, 0, .3);

        &:hover {
            background-color: #b98d09;
            color: #fff;
        }

        &:active {
            box-shadow: -1px 1px 1px rgba(0, 0, 0, .3);
        }
    }


    .background-img {
        width: 100%;
        content: '';
        background-position: center;
        position: absolute;
        display: block;
        background-repeat: no-repeat;
        background-size: cover;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    .items-cover {
        position: relative;
    }

    .items-cover:before {
        background-image: url(../../assets/images/deep-space.jpg);
        display: block;
        content: '';
        opacity: .4;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }

    .icon-title {
        position: absolute;
        display: block;
        padding-top: 14px;
        width: 100%;
        color: #ffc107;
        font-size: 21px;
        font-weight: bold;
        z-index: 24;
        text-decoration: underline red;
    }

    .ingredients-title {
        position: absolute;
        display: block;
        bottom: 0;
        width: 100%;
        min-height: 50px;
        color: #ffffff;
        font-size: 16px;
        padding: 0 0 7px 14px;
        z-index: 24;
    }
    .show-info{
        border-radius: 5px;
        bottom:0;
        background: none;
        color: white;
        border-color: white;
        padding: 0 2px;
        &:hover{
            background-color: rgba(0,0,0,.3) ;
        }
    }


</style>
