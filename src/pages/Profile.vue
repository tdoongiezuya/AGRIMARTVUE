<template>
  <div>
    <!--pRofile-->
    <modal-edit-profile/>
    <div class="container-fluid py-5 profile"></div>
    <div class="container-fluid py-5">
      <div class="container py-5">
        <div class="page-content page-container" id="page-content">
          <div class="padding">
            <div class="row container d-flex justify-content-center">
              <div class="col-xl-16 col-md-12">
                <div class="card user-card-full">
                  <div class="row m-l-0 m-r-0">
                    <div class="col-sm-4 bg-c-lite-green user-profile">
                      <div class="card-block text-center text-white">
                        <div class="m-b-25">
                          <img
                            src="https://i.pinimg.com/564x/ac/5e/73/ac5e73cf17ed713ead118cba9e24da27.jpg"
                            class="img-thumbnail"
                            alt="User-Profile-Image"
                          />
                        </div>
                        <h4 class="f-w-600 text-white">Kang Seulgi</h4>
                        <p class="text-white">Farmer</p>
                        <div class="m-b-10">
                          <button
                          class="btn border border-light rounded-pill px-3 text-light " data-bs-toggle="modal" data-bs-target="#ModalEditProfile"
                          ><i
                            class="mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"
                          ></i
                          >Edit Profile</button
                        >
                        </div>
                        <div class="m-b-25">
                          <button
                          class="btn border border-light rounded-pill px-3 text-light" data-bs-toggle="modal" data-bs-target="#ModalEditProfile"
                          ><i
                            class="mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"
                          ></i
                          >Logout</button
                        >
                        </div>
                        
                      </div>
                    </div>
                    <div class="col-sm-8  bg-white">
                      <div class="card-block">
                        <h3 class="m-b-20 p-b-5 b-b-default f-w-600">
                          Information
                        </h3>
                        <div class="row">
                          <div class="col-sm-6">
                            <h6 class="m-b-10 f-w-600">Email</h6>
                            <p class="text-muted f-w-400">rntng@gmail.com</p>
                          </div>
                          <div class="col-sm-6">
                            <h6 class="m-b-10 f-w-600">Address</h6>
                            <p class="text-muted f-w-400">Seoul, South Korea</p>
                          </div>
                          <div class="col-sm-6">
                            <h6 class="m-b-10 f-w-600">Phone</h6>
                            <p class="text-muted f-w-400">98979989898</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalEditProfile from '../components/ModalEditProfile.vue';
export default {
  components: { ModalEditProfile },
};
</script>

<style scoped>
/***Profile***/
.user-card-full {
    overflow: hidden;
}

.card {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 20px 0 rgba(69,90,100,0.08);
    box-shadow: 0 1px 20px 0 rgba(69,90,100,0.08);
    border: none;
    margin-bottom: 30px;
}

.m-r-0 {
    margin-right: 0px;
}

.m-l-0 {
    margin-left: 0px;
}

.user-card-full .user-profile {
    border-radius: 5px 0 0 5px;
}

.bg-c-lite-green {
    background: -webkit-gradient(linear, left top, right top, from(#7ABA78), to(#0A6847));
    background: #9dac17;
}

.user-profile {
    padding: 20px 0;
}

.card-block {
    padding: 1.25rem;
}

.m-b-25 {
    margin-bottom: 25px;
}

.img-thumbnail{
    object-fit: cover;
    width: 200px;
    height: 200px;
    border-radius: 50%;
}

.img-radius {
    border-radius: 5px;
}

.card .card-block p {
    line-height: 25px;
}

@media only screen and (min-width: 1400px){
p {
    font-size: 14px;
}
}

.card-block {
    padding: 1.25rem;
}

.b-b-default {
    border-bottom: 1px solid #e0e0e0;
}

.m-b-20 {
    margin-bottom: 20px;
}

.p-b-5 {
    padding-bottom: 5px !important;
}

.card .card-block p {
    line-height: 50px;
}

.m-b-10 {
    margin-bottom: 10px;
}



.b-b-default {
    border-bottom: 1px solid #e0e0e0;
}

.f-w-600 {
    font-weight: 600;
}

.m-b-20 {
    margin-bottom: 20px;
}

.m-t-40 {
    margin-top: 20px;
}

.p-b-5 {
    padding-bottom: 5px !important;
}

.m-b-10 {
    margin-bottom: 10px;
}

.m-t-40 {
    margin-top: 20px;
}



.btn.border-light:hover {
    background: var(--bs-secondary) !important;
    color: var(--bs-white) !important;
}
/***End***/
</style>
