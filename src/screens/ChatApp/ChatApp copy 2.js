// import React, { useState, useEffect } from "react";
// import {
//   Drawer,
//   List,
//   ListItem,
//   TextField,
//   Button,
//   Typography,
// } from "@mui/material";
// import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
// import CloseIcon from "@mui/icons-material/Close";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import SendIcon from "@mui/icons-material/Send";

// import user from "./images/user.svg";
// import bot from "./images/bot.svg";

// const BotIcon = () => (
//   <img
//     src={bot}
//     alt="Bot"
//     style={{ width: "30px", height: "27px", marginRight: "5px" }}
//   />
// );
// const UserIcon = () => (
//   <img
//     src={user}
//     alt="User"
//     style={{ width: "30px", height: "27px", marginLeft: "5px" }}
//   />
// );

// const getCookie = (name) => {
//   let cookieValue = null;
//   if (document.cookie && document.cookie !== "") {
//     const cookies = document.cookie.split(";");
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();
//       if (cookie.substring(0, name.length + 1) === name + "=") {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   console.log("CSRF Token:", cookieValue); // Log CSRF token retrieval
//   return cookieValue;
// };

// const ChatApp = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState("");

//   useEffect(() => {
//     setMessages([
//       {
//         sender: "ChatBot",
//         message: "Hello! I am a UAE Tax Consultant. How can I assist you?",
//       },
//     ]);
//     console.log("Initial message set"); // Log initial setup
//   }, []);

//   const handleDrawerOpen = () => {
//     setIsOpen(true);
//     console.log("Drawer opened"); // Log drawer open action
//   };

//   const handleDrawerClose = () => {
//     setIsOpen(false);
//     console.log("Drawer closed"); // Log drawer close action
//   };

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     const userMessage = inputMessage.trim();
//     const csrftoken = getCookie("csrftoken"); // Get the CSRF token

//     console.log("Sending message:", userMessage); // Log the message being sent

//     if (userMessage !== "") {
//       appendMessage("You", userMessage);
//       setInputMessage("");

//       try {
//         const response = await fetch("https://taxpert-backend.brbtechnologies.pk/chatbot/chat/", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "X-CSRFToken": csrftoken,
//           },
//           body: JSON.stringify({ query: userMessage }),
//         });

//         console.log("Response status:", response.status); // Log response status

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         appendMessage("ChatBot", data.response);
//       } catch (error) {
//         console.error("Error during message sending:", error);
//         appendMessage("Error:", error.toString());
//       }
//     }
//   };

//   const appendMessage = (sender, message) => {
//     setMessages((prevMessages) => [...prevMessages, { sender, message }]);
//     console.log("Message appended:", message); // Log the message that was appended
//   };

//   const handleCloseChat = () => {
//     handleDrawerClose();
//     setMessages([]);
//     console.log("Chat closed and messages cleared"); // Log chat closure
//   };

//   const handleClearChat = () => {
//     setMessages([]);
//     console.log("Messages cleared"); // Log clearing of messages
//   };

//   return (
//     <div>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleDrawerOpen}
//         sx={{
//           borderRadius: "1rem",
//           background: "#FFB400",
//           color: "black",
//           "&:hover": { background: "#FFB400" },
//           gap: "0.4rem",
//           minWidth: "140px",
//           height: "3rem",
//           display: "flex",
//           alignItems: "center",
//           position: "relative",
//           bottom: "1.5rem",
//           marginLeft: "auto",
//           marginRight: "3.5rem",
//           justifyContent: "flex-end",
//           flexDirection: "row-reverse",
//           "@media (min-width:600px)": {
//             flexDirection: "row",
//           },
//         }}
//       >
//         <Typography variant="body1" sx={{ fontSize: "0.9rem" }}>
//           Chat With Us
//         </Typography>
//         <SmartToyOutlinedIcon
//           sx={{
//             fontSize: "1.5rem",
//             borderRadius: "50%",
//             cursor: "pointer",
//             margin: "auto",
//           }}
//         />
//       </Button>
//       <Drawer
//         anchor="right"
//         open={isOpen}
//         onClose={handleDrawerClose}
//         sx={{
//           "& .MuiDrawer-paper": {
//             top: "auto",
//             left: "auto",
//             right: 0,
//             bottom: 0,
//             maxHeight: "130%",
//             maxWidth: "30%",
//             borderTopLeftRadius: "20px",
//             borderTopRightRadius: "20px",
//             transition: "transform 0.3s ease-in-out",
//             transform: isOpen ? "translateY(0)" : "translateY(100%)",
//           },
//         }}
//       >
//         <div style={{ padding: "8px", borderBottom: "2px black solid" }}>
//           <Button
//             color="secondary"
//             style={{ background: "red" }}
//             onClick={handleCloseChat}
//           >
//             <CloseIcon style={{ color: "white" }} />
//           </Button>
//         </div>
//         <div style={{ overflowY: "auto", maxHeight: "100%" }}>
//           <List>
//             {messages.map((message, index) => (
//               <ListItem
//                 key={index}
//                 style={{
//                   justifyContent:
//                     message.sender === "ChatBot" ? "flex-start" : "flex-end",
//                   gap: "15px",
//                 }}
//               >
//                 <div
//                   style={{
//                     background:
//                       message.sender === "You" ? "#F4CB69" : "#F5F5F5",
//                     color: message.sender === "You" ? "black" : "black",
//                     borderRadius: "8px",
//                     fontWeight: "400",
//                     padding: "8px",
//                     maxWidth: "80%",
//                     wordWrap: "break-word",
//                     alignSelf:
//                       message.sender === "ChatBot" ? "flex-start" : "flex-end",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "1rem",
//                     fontSize: "14px",
//                     flexWrap: "nowrap",
//                   }}
//                 >
//                   {message.sender === "ChatBot" && <BotIcon />}
//                   {message.message}
//                   {message.sender === "You" && <UserIcon />}
//                 </div>
//               </ListItem>
//             ))}
//           </List>
//         </div>
//         <div
//           style={{
//             padding: "16px",
//             marginTop: "auto",
//             display: "flex",
//             flexDirection: "column-reverse",
//           }}
//         >
//           <form
//             onSubmit={handleSendMessage}
//             style={{ display: "flex", gap: "8px" }}
//           >
//             <TextField
//               label="Type a message"
//               variant="outlined"
//               fullWidth
//               value={inputMessage}
//               onChange={(e) => {
//                 setInputMessage(e.target.value);
//               }}
//             />
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               disabled={!inputMessage.trim()}
//             >
//               <SendIcon />
//             </Button>
//             <Button
//               variant="outlined"
//               color="secondary"
//               onClick={handleClearChat}
//             >
//               <DeleteForeverIcon />
//             </Button>
//           </form>
//         </div>
//       </Drawer>
//     </div>
//   );
// };

// export default ChatApp;
