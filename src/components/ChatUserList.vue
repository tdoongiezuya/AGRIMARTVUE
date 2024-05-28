<template>
  <div>
    <ul class="list-unstyled mb-0">
      <li class="p-2 border-bottom" v-for="user in users" :key="user.id">
        <a href="#!" class="d-flex justify-content-between" @click="openChat(user)">
          <div class="d-flex flex-row">
            <div>
              <img
                :src="user.image"
                alt="avatar"
                class="d-flex align-self-center me-3"
                width="60"
              />
              <span class="badge bg-success badge-dot"></span>
            </div>
            <div class="pt-1">
              <p class="fw-bold mb-0">{{user.userName}}</p>
              <p class="small text-muted">
                <slot name="message" :message="user.message"></slot>
              </p>
            </div>
          </div>
          <div class="pt-1">
            <p class="small text-muted mb-1">{{user.time}}</p>
            <span class="badge bg-danger rounded-pill float-end" v-if="user.notification">{{user.notificationCount}}</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
    
  
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true
    }
 },
 methods: {
    openChat(user) {
      // Logic to open a chat with the selected user
      // This could involve emitting an event or navigating to a chat page
      //nag taka taka rako hehe change ra if unsa tama T_T

      console.log('Opening chat with', user.userName);
    }
 }
};
</script>

<style></style>