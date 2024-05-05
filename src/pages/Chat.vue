<template>
  <div class="container-fluid pt-5">
    <Header />

    <div style="position: relative; height: 70%">
      <section>
        <div class="container py-5">
          <div class="row">
            <div class="col-md-12">
              <div
                class="card"
                id="chat3"
                style="border-radius: 15px; background-color: white"
              >
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
                      <div class="p-3 d-md-block d-xs-none d-sm-none">
                        <div class="input-group rounded mb-3 border">
                          <input
                            type="search"
                            class="form-control rounded"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                          />
                          <span
                            class="input-group-text border"
                            id="search-addon"
                          >
                            <i class="fas fa-search"></i>
                          </span>
                        </div>
                        <div
                          data-mdb-perfect-scrollbar="true"
                          class="pt-3 pe-3 overflow-auto"
                          style="position: relative; height: 500px"
                        >
                          <!-- UserList -->
                          <!-- <chat-user-list/> -->
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 col-lg-7 col-xl-8">
                      <div class="py-2 px-4 border-bottom d-none d-lg-block">
                        <div class="d-flex align-items-center py-1">
                          <div class="position-relative mr-3">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar3.png"
                              class="rounded-circle mr-1 d-flex align-self-center"
                              alt="Sharon Lessman"
                              width="50"
                            />
                          </div>
                          <div class="flex-grow-1 pl-3 ml-2 px-3">
                            <h5>Sharon Lessman</h5>
                          </div>
                          <div>
                            <button class="btn btn-light border btn-md px-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-more-horizontal feather-lg"
                              >
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        class="pt-3 pe-3 overflow-auto"
                        data-mdb-perfect-scrollbar="true"
                        style="position: relative; height: 400px"
                      >
                        <chat-message-box
                          v-for="message in this.messages"
                          :key="message.chat_id"
                          :message="message"
                          :userId="this.currentUserId"
                        >
                        </chat-message-box>
                      </div>

                      <div
                        class="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2"
                      >
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                          alt="avatar 3"
                          style="width: 40px; height: 100%"
                        />
                        <input
                          type="text"
                          class="form-control form-control-lg border"
                          id="exampleFormControlInput2"
                          placeholder="Type message"
                          v-model="this.currentMessage"
                        />
                        <a class="ms-1 text-muted" href="#!"
                          ><i class="fas fa-paperclip"></i
                        ></a>
                        <!-- <a class="ms-3 text-muted" href="#!"
                          ><i class="fas fa-smile"></i
                        ></a> -->
                        <a class="ms-3" v-on:click="sendMessage"
                          ><i class="fas fa-paper-plane"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ChatUserList from "../components/ChatUserList.vue";
import Header from "../components/Header.vue";
import ChatMessageBox from "../components/ChatMessageBox.vue";
import { nanoid } from "nanoid";
import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";
import formattedDate from "../format_date";
import axios from "axios";

const socket = io("http://localhost:3000/");
export default {
  components: { Header, ChatUserList, ChatMessageBox },
  data() {
    return {
      messages: [],
      currentUserId: 1, // Example user ID, replace with actual user ID
      users: {},
      currentMessage: "", // Example users object, replace with actual users data
    };
  },

  methods: {
    sendMessage() {
      const newMessage = {
        sender_id: this.currentUserId,
        receiver_id: 2,
        datetime: formattedDate(),
        message: this.currentMessage,
      };
      socket.emit("message", newMessage);
      this.currentMessage = "";
    },
  },

  mounted() {
    socket.on(`message sent: ${this.currentUserId}`, (chat) => {
      this.messages.push(chat);
    });
    socket.on(this.currentUserId, (message) => {
      this.messages.push({
        chat_id: message.chat_id,
        sender_id: message.sender_id,
        receiver_id: this.currentUserId,
        datetime: formattedDate(),
        message: message.message,
      });
    });
    // Fetch messages from your backend when the component is mounted
    // This is just a placeholder, replace with actual fetching logic
    axios.get("http://localhost:3000/chat-history").then((data) => {
      this.messages = data.data;
    });
  },
};
</script>

<style scoped>
.pt-3.pe-3::-webkit-scrollbar-thumb {
  background: #888;
}
#chat3 .form-control {
  border-color: transparent;
}

#chat3 .form-control:focus {
  border-color: transparent;
  box-shadow: inset 0px 0px 0px 1px transparent;
}

.badge-dot {
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin-left: 2.9rem;
  margin-top: -0.75rem;
}
.py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}
.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}
.flex-grow-0 {
  flex-grow: 0 !important;
}
.border-top {
  border-top: 1px solid #dee2e6 !important;
}
</style>
