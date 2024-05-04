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
          <!-- {{ formatTime(message.time) }} -->
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
          <!-- {{ formatTime(message.time) }} -->
        </p>
      </div>
    </div>
    <!-- <div class="d-flex flex-row justify-content-start">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
        alt="avatar 1"
        style="width: 45px; height: 100%"
      />
      <div>
        <p
          class="small p-2 ms-3 mb-1 rounded-3"
          style="background-color: #f5f6f7"
        >
          {{ data.message }}
        </p>
        <p class="small ms-3 mb-3 rounded-3 text-muted float-end">
          {{ data.timeCreated }} | {{ data.dateCreated }}
        </p>
      </div>
    </div>
    <div class="d-flex flex-row justify-content-end">
      <div>
        <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
          {{ data.message }}
        </p>
        <p class="small me-3 mb-3 rounded-3 text-muted">
          {{ data.timeCreated }} | {{ data.dateCreated }}
        </p>
      </div>
    </div> -->

    <!-- <div class="d-flex flex-row justify-content-end">
      <div>
        <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </p>
        <p class="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
      </div>
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
        alt="avatar 1"
        style="width: 45px; height: 100%"
      />
    </div>

    <div class="d-flex flex-row justify-content-start">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
        alt="avatar 1"
        style="width: 45px; height: 100%"
      />
      <div>
        <p
          class="small p-2 ms-3 mb-1 rounded-3"
          style="background-color: #f5f6f7"
        >
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <p class="small ms-3 mb-3 rounded-3 text-muted float-end">
          12:00 PM | Aug 13
        </p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: ['message', 'userId']
};
</script>

<style></style>
