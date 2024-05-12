<template>
  <div class="modal fade bd-example-modal-lg" id="ModalEditProfile" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true" @hidden="closeModal">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content bg-white rounded-0">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Profile</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex align-items-center">
          <div class="input-group w-75 mx-auto d-flex">
            <form @submit.prevent="submitProfile">
              <div class="row mb-3">
                <div class="col">
                  <input type="text" class="form-control" placeholder="First name" v-model="editedProfile.firstName">
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="Last name" v-model="editedProfile.lastName">
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="Middle name" v-model="editedProfile.middleName">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-6">
                  <input type="text" class="form-control" placeholder="Address" v-model="editedProfile.address">
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="City" v-model="editedProfile.city">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col">
                  <input type="tel" class="form-control" placeholder="Telephone Number" v-model="editedProfile.telephoneNumber">
                </div>
                <div class="col">
                  <input type="tel" class="form-control" placeholder="Mobile Number" v-model="editedProfile.mobileNumber">
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="Email" v-model="editedProfile.email">
                </div>
              </div>
              <div class="col-auto my-1">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: Object,
    editingProfile: Boolean
  },
  data() {
    return {
      editedProfile: { ...this.profile } 
    };
  },
  methods: {
    submitProfile() { 
      console.log('Profile data submitted:', this.editedProfile);
      this.$emit('update-profile', this.editedProfile); 
    },
    closeModal() {
      this.$emit('close-modal');
    }
  }
};
</script>

<style></style>
