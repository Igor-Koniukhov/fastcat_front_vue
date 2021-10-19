<template>
    <div class="breadcrumb">
        <b-breadcrumb :items="items" light></b-breadcrumb>
    </div>

</template>

<script>
    export default {
        name:
            'breadcrumb'
        ,
        data() {
            return {
                items: [
                    {
                        text: 'main',
                        to: {name: 'mainPage'}
                    },
                    {
                        text: 'catalog',
                        to: {name: 'catalog'}
                    },
                    {
                        text: 'cart',
                        active: true
                    }
                ]
            }
        }
    }
</script>
<style>
    .breadcrumb{
        margin: 0 auto;
        max-width: 200px;
        width: 100%;
    }
</style>
