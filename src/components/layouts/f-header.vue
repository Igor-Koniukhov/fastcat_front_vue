<template>
  <div class='f-header'>
    <div>
      <b-navbar toggleable="lg" type="light">
        <b-navbar-brand><router-link :to="{name: 'mainPage'}">
          <img src="../../assets/fast-cat.png" alt="">
        </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="nav-color" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name: 'catalog'}" >Catalog</b-nav-item>
            <b-nav-item :to="{name: 'about'}" >About</b-nav-item>
            <b-nav-item :to="{name: 'contacts'}" >Contacts</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item :to="{name: 'profile'}">Profile</b-dropdown-item>
              <b-dropdown-item :to="{name: 'login'}">Login</b-dropdown-item>
              <b-dropdown-item :to="{name: 'registration'}">Registration</b-dropdown-item>
              <b-dropdown-item href="/sign-out">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

    </div>
    <b-nav-form>
      <div class="search-field">
        <input
                type="text"
                v-model="searchValue"
        >
        <button class="search_btn">
          <i class="material-icons icon-search" @click="search(searchValue)">search</i>
        </button>
        <button class="search_btn">
          <i class="material-icons icon-search" @click="clearSearchField">cancel</i>
        </button>
      </div>
    </b-nav-form>

  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "f-header",
    props: {},
    data() {
      return {
        searchValue: ''
      }
    },
    computed: {
      ...mapGetters([
        'SEARCH_VALUE'
      ])
    },
    methods: {
      ...mapActions([
        'GET_SEARCH_VALUE_TO_VUEX'
      ]),
      search(value) {
        this.GET_SEARCH_VALUE_TO_VUEX(value);
        if (this.$route.path !== '/catalog') {
          this.$router.push('/catalog')
        }
      },
      clearSearchField() {
        this.searchValue = ''
        this.GET_SEARCH_VALUE_TO_VUEX();
        if (this.$route.path !== '/catalog') {
          this.$router.push('/catalog')
        }
      }
    }
  }
</script>

<style lang="scss">
  .f-header {
    display: flex;
    justify-content: space-between;
    color: #333;
    align-items: center;
    background: $yellow;
    padding: 16px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 300;

    img {
      width: 50px;
    }
.nav-color{
  color: #333;
}
    .search-field {
      padding: 7px;
      position: relative;
      right: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      input{
        max-width: 200px;
        appearance: none;
        width: 100%;
        padding: 0 15px;
        line-height: unset;
        font-size: 14px;
        font-style: italic;
        letter-spacing: 1px;
        opacity: 0.7;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        [type=search] {
          outline-offset: -2px;
          -webkit-appearance: textfield;
        }
      }
    }
.icon-search{
  color:#ffecb4;
}
    .search_btn {
      margin-left: 16px;
      background: transparent;
      border: none;
    }
  }
</style>
