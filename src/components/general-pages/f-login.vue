<template>
<div class="login">

    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-md-6 ">
                <h2 class="mt-5 mb-3">Login</h2>
                <form  method="post" action="/login">
                    <div class="form-group">
                        <label for="checkEmail">Email address</label>
                        <input type="email"
                               class="form-control"
                               id="checkEmail"
                               name="checkEmail"
                               aria-describedby="emailHelp"
                               value=" ">
                        <small  id="emailHelp"
                                class="form-text"
                                style="color: red; opacity: 0.6;">

                        </small>
                    </div>
                    <div class="form-group">
                        <label for="checkPass">Password</label>
                        <input type="password"
                               class="form-control"
                               id="checkPass"
                               name="checkPass"
                               value="">
                    </div>
                    <div class="form-group">
                        <input type="password"
                               class="form-control"
                               id="auth_access"
                               name="auth_access"
                               value="" hidden>
                    </div>

                    <button  class="btn btn-primary btn-sm mb-2 mt-5" >Sing In</button>
                </form>
                <p>New to FastCat? Create an account.</p>
                <router-link :to="{name: 'registration'}">
                    <button class="btn btn-warning btn-sm mb-5">Sing Up</button>
                </router-link>

                <form action="/refresh">
                    <button class="btn btn-warning btn-sm mt-3 mb-5">Refresh</button>
                </form>
            </div>
        </div>

    </div>
</div>
</template>

<script>
    export default {
        name: "f-login"
    }
</script>

<style>

</style>
