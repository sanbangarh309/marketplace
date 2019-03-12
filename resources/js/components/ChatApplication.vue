<template>
    <div class="wrapper chat-page">
        <section class="banner-box plan-box process-box">
          <div class="container">
            <div class="col-md-12 dash-block mt-2"> 
              <div class="row">
                <div id="frame" class="chat-frame">
                  <div class="col-md-3 p-0">
                    <div id="sidepanel" class="left-chatbar left-chatbar2 col-12 p-0">
                      <div id="profile" class="cp-profile">
                        <div id="search" class="ch-left-search">
                          <label for=""><i class="fa fa-search" aria-hidden="true"></i></label>
                          <input type="text" placeholder="Search contacts..." />
                        </div>
                      </div>
                      <div id="contacts" class="contacts-chat content">
                        <ul class="list-inline">
                        <li v-for="user in users"
                          class="contact active"
                          :key="user.id"
                          @click="openChat(user.id)"
                          v-scroll-to="{ 
                              el: '#san_'+scrollToId,
                              easing: [.6, .80, .30, 1.9],
                              duration: 2000 
                          }"
                          :class="{'font-weight-bold': chatUserID === user.id}">
                            <div class="wrap">
                              <span class="contact-status online"></span>
                              <img src="images/default.jpeg" alt="" />
                              <div class="meta">
                                <p class="name">{{ user.name }}<span class="badge notify-num">3</span><span class="small time-txt">6 min</span></p>
                                <p class="preview">You just got LITT up, Mike.</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="right-content col-md-9 right-content2 p-0">
                    <div class="contact-profile d-flex">
                      <div class="col-md-6">
                        <div class="current-user d-flex">
                          <p><span class="contact-status online"></span> Harvey Specter</p>
                          <a href="#" data-toggle="tooltip" title="This is information!" class="btn call-btn"><i class="fa fa-phone"></i></a>
                        </div>
                      </div>
                      <div class="social-media col-md-6">
                        <a href="single-project.html" class="proitem-link">Build me a brand new logo faux texte standard de</a>
                      </div>
                    </div>
                    <div class="messages">
                      <div class="chatsms content"  id="chats-messages" v-show="chatOpen && !loadingMessages">
                        <ul id="chat_msgs_box" ref="messageBox" v-bind:class="'#' + scrollToId" v-scroll-to="{ 
                            el: '#33',
                            easing: [.6, .80, .30, 1.9],
                            duration: 2000 
                        }">
                          <li v-for="message in messages"
                             v-bind:id="'san_'+message.id"
                             :class="{'sent': message.sender_id !== chatUserID , 'replies' :message.sender_id == chatUserID}">
                            <img src="images/default.jpeg" alt="" />
                            <p>{{ message.message }}</p>
                          </li>
                        </ul>
                      </div>
                      <div class="chatsms content" v-show="!chatOpen && !loadingMessages">
                          <ul>
                            <p id="no_msgs">Click on user list to open a chat.</p>
                          </ul>
                      </div>
                      <div class="chatsms content" v-show="loadingMessages">
                        <ul>
                          <p id="msgs_loading">Loading messages... Please wait</p>
                        </ul>
                      </div>
                    </div>
                    <div class="message-input">
                      <div class="wrap">
                      <input type="text"
                          class="form-control"
                          placeholder="Write your message..."
                          aria-label="New message"
                          v-on:keyup="sendMessageOnenter"
                          aria-describedby="button-addon2" v-model="newMessage">

                      <i class="fa fa-paperclip attachment" aria-hidden="true"></i>
                      <button class="btn btn-outline-secondary submit"
                          type="button"
                          id="button-addon2"
                          @click="sendMessage">
                          Send
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
</template>

<script>
  export default {
    name: 'ChatApplication',
    data: () => {
      return {
        users: [],
        messages: [],
        chatOpen: false,
        chatUserID: null,
        loadingMessages: false,
        scrollToId:null,
        newMessage: ''
      }
    },
    sockets:{
        connect:function(){
           console.log('Socket Connected')
        },
        message:function(val){
           let app = this
           app.loadMessages();
        }
    },
    created () {
      let app = this
      app.loadUsers()
    },
    watch: {
      messages: function () {
        let element = this.$refs.messageBox
        //console.log('Before')
        console.log(this.scrollToId)
        element.scrollTop = element.scrollHeight
        //console.log('After')
        //console.log(element)
      }
    },
    methods: {
      sendMessageOnenter(e){
        if (e.keyCode === 13) {
          let app = this
          app.sendMessage()
        } else if (e.keyCode === 50) {

        }  
      },
      openChat (userID) {
        let app = this
        if (app.chatUserID !== userID) {
          app.chatOpen = true
          app.chatUserID = userID
          
          // Start socket.io listener
          //Echo.channel('newMessage-' + app.chatUserID + '-' + app.$root.userID)
          //  .listen('MessageSent', (data) => {
          //    if (app.chatUserID) {
           //     app.messages.push(data.message)
           //   }
          //})
          // End socket.io listener
          app.loadMessages()
        }
      },
      loadUsers () {
        let app = this
        axios.get('api/users')
          .then((resp) => {
            app.users = resp.data
          })
      },
      loadMessages () {
        let app = this
        app.loadingMessages = true
        app.messages = []
        axios.post('api/messages', {
          sender_id: app.chatUserID
        }).then((resp) => {
          let lastid = resp.data[resp.data.length - 1].id; 
          console.log(resp.data[resp.data.length - 1])
          app.messages = resp.data
          app.scrollToId = lastid
          app.loadingMessages = false
        })
      },
      sendMessage () {
        let app = this
        if (app.newMessage !== '') {
          axios.post('api/messages/send', {
            sender_id: app.$root.userID,
            receiver_id: app.chatUserID,
            message: app.newMessage
          }).then((resp) => {
            let lastid = resp.data[resp.data.length - 1].id;
            app.messages.push(resp.data)
            app.scrollToId = lastid
            app.newMessage = ''
          })
        }
      }
    }
  }
</script>

<style scoped>
  #no_msgs,#msgs_loading{
    text-align:center
  }
  #chat_msgs_box{

  }
  
</style>