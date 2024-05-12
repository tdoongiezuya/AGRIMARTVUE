
<template>
  <nav >
    
    <ModalSearch/> 
    <!-- Navbar start -->
     <div class="container-fluid fixed-top">
            <div class="container topbar bg-primary d-none d-lg-block">
                <div class="d-flex justify-content-between">
                    <div class="top-info ps-2">
                        <small class="me-3"><i class="fas fa-map-marker-alt me-2 text-secondary"></i> <a href="#" class="text-white">General Santos City, Philippines</a></small>
                        <small class="me-3"><i class="fas fa-envelope me-2 text-secondary"></i><a href="#" class="text-white">Agrimart@gmail.com</a></small>
                    </div>
                </div>
            </div>
            <div class="container px-0">
                <nav class="navbar navbar-light bg-white navbar-expand-xl" v-bind:class=" { 'navbarOpen': show }">
                    <router-link to="/" class="navbar-brand"><img src="../../assets/img/logo.png" class="logo display-6" alt=""></router-link>
                    <button class="navbar-toggler py-2 px-3" type="button"  data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"  @click.stop="toggleNavbar()" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="fa fa-bars text-primary"></span>
                    </button>
                    <div class="collapse navbar-collapse bg-white" id="navbarCollapse" :class="{ 'show': show }"  >
                        <div class="navbar-nav mx-auto">
                            <router-link :to="{name: 'Home'}" class="nav-item nav-link" >Home</router-link>
                            <router-link :to="{name: 'Shop'}" class="nav-item nav-link" >Shop</router-link>
                            <router-link :to="{name: 'About'}" class="nav-item nav-link" >About</router-link>
                            <router-link :to="{name: 'Contact'}" class="nav-item nav-link" >Contact</router-link>
                        </div>
                        
                        <div class="d-flex m-3 me-0">
                            <!-- <button class="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fas fa-search text-primary"></i></button> -->
                            <router-link :to="{name: 'Cart'}" class="position-relative me-4 my-auto" >
                                <i class="fa fa-shopping-bag fa-2x"></i>
                                <span class="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white px-1" style="top: -5px; left: 15px; height: 20px; min-width: 20px;">3</span>
                            </router-link>
                            <router-link :to="{name: 'Chat'}" class="position-relative me-4 my-auto" >
                                <i class="fas fa-comment fa-2x"></i>
                                <span class="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white px-1" style="top: -5px; left: 15px; height: 20px; min-width: 20px;">3</span>
                            </router-link>
                            <router-link :to="{name: 'Profile'}" class="my-auto" >
                                <i class="fas fa-user fa-2x"></i>
                            </router-link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <!-- Navbar End --> 
    </nav>
</template>


<script>
import ModalSearch from '../ModalSearch.vue'
import Signin from '../../pages/Signin.vue';

export default {
    data(){
        return{
            show : false,
        }  
    },
    components: { ModalSearch },
    methods: {
        toggleNavbar() {
        this.show = !this.show;
        }
    }
}
</script>

<style>

</style>