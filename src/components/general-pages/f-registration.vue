<template>
<div class="registration">
    <div class="main-wrapper-content">
        <section class="first-section">
            <div class="container">
                <div class="row">
                    <h1 class="text-center burger-go-background dancing-sm"><span
                            style="color: red;">Registration </span><span
                            style="color: #ffc107">form</span></h1>

                    <div class="col d-flex justify-content-center">
                        <form class="row g-3 col-md-8" method="post" action="/sign-up">
                            <div class="col-md-12">
                                <label for="user-name" class="form-label">Name</label>
                                <input
                                        type="text"
                                        class="form-control"
                                        id="user-name"
                                        name="user-name"
                                        placeholder="First name & Last name"
                                        value=""
                                >

                            </div>
                            <div class="col-md-12">
                                <label for="user-email" class="form-label">Email</label>
                                <input
                                        type="email"
                                        class="form-control"
                                        id="user-email"
                                        name="user-email"
                                        value=""

                                >
                                <small class="form-text"
                                       style="color: red; opacity: 0.6;"></small>
                            </div>
                            <div class="col-md-12">
                                <label for="user-tel" class="form-label">Phone</label>
                                <input
                                        type="tel"
                                        class="form-control"
                                        id="user-tel"
                                        name="user-tel"
                                        value=""
                                >
                                <small class="form-text"
                                       style="color: red; opacity: 0.6;"></small>
                            </div>

                            <div class="col-md-12">
                                <label for="password" class="form-label">Password</label>
                                <input
                                        type="password"
                                        class="form-control"
                                        id="password"
                                        name="password"
                                        value=""
                                >
                            </div>

                            <div class="col-12">
                                <button class="btn btn-primary btn-sm mb-5">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<script>
    export default {
        name: "f-registration"
    }
</script>

<style scoped>

</style>
