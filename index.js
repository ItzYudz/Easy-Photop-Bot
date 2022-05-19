const { Client } = require("photop-client")
const client = new Client({ username: "bot name", password: "bot password"}, { logSocketMessages: false })

client.onPost = (post)=>{
   post.connect();
	if (post.text.match(`h!help`)) {
		post.chat(`working`)
post.onChat = (chat)=>{
  }
	if (chat.text.startsWith('bot!test')) {
		post.chat(`test completed`)
   }
  }
