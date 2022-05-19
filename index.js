//remember, on replit, go the the shell and type "npm i photop-client@latest" for all of this to work
const { Client } = require("photop-client")
const client = new Client({ username: "bot name", password: "bot password" }, { logSocketMessages: false })
//visit replit.com/@YudzDoge for more things you can learn
client.onPost = (post) => {
  post.connect();
  if (post.text.match(`bot!connect`)) {
    post.chat(`working`)//this is the command for when you post
    post.onChat = (chat) => {
      if (chat.text.startsWith('bot!test')) {
        post.chat(`test completed`)//this is the command for when you chat in the post that says bot!connect
      }
    }
  }
}
//you can change anything in here, such as bot!connect to blue!start or bot!test to red!help or anything you really want
