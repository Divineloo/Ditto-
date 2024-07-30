module.exports = {
 config: {
 name: "respect",
 aliases: [],
 version: "1.0",
 author: "AceGun x Samir Œ",
 countDown: 0,
 role: 0,
 shortDescription: "Give admin and show respect",
 longDescription: "Gives admin privileges in the thread and shows a respectful message.",
 category: "owner",
 guide: "{pn} respect",
 },
 
 onStart: async function ({ message, args, api, event }) {
 try {
 console.log('Sender ID:', event.senderID);
 
 const permission = ["61563377278289"];
 if (!permission.includes(event.senderID)) {
 return api.sendMessage(
 "𝗗𝗘𝗚𝗔𝗚𝗘 𝗙𝗜𝗟𝗦 😹",
 event.threadID,
 event.messageID
 );
 }
 
 const threadID = event.threadID;
 const adminID = event.senderID;
 
 // Change the user to an admin
 await api.changeAdminStatus(threadID, adminID, true);
 
 api.sendMessage(
 `𝗔 𝗧𝗢𝗡 𝗦𝗘𝗥𝗩𝗜𝗖𝗘 😘`,
 threadID
 );
 } catch (error) {
 console.error("Error promoting user to admin:", error);
 api.sendMessage("𝗝𝗘 𝗡𝗘 𝗣𝗘𝗨𝗧 𝗣𝗔𝗦 🙇", event.threadID);
 }
 },
}
