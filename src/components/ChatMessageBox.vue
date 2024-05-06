<template>
  <div>

    <!-- Message sent by the user -->
    <div
      v-if="message.sender_id === userId"
      class="d-flex flex-row justify-content-end"
    >
      <div>
        <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
          {{ message.message }}
        </p>
        <p class="small me-3 mb-3 rounded-3 text-muted">
          {{ message.datetime }}
        </p>
      </div>
    </div>

    <!-- Message received by the user -->
    <div v-else class="d-flex flex-row justify-content-start">
      <!-- <img :src="user.profile" alt="avatar 1" class="user-avatar" /> -->
      <div>
        <p class="small p-2 ms-3 mb-1 rounded-3 bg-light">
          {{ message.message }}
        </p>
        <p class="small ms-3 mb-3 rounded-3 text-muted float-end">
          {{ message.datetime }}
        </p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ['message', 'userId']
};
</script>

<style></style>
