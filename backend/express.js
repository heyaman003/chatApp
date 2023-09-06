const express = require("express");
const chats = require("./dummyData/data");
const connectdb=require("./config/db");
const{errorHandler,notFound}=require("./middleware/errorMiddleware")
const userRoutes=require("./routes/userRoutes")
const dotenv = require("dotenv");
dotenv.config();
const app = express();
connectdb()
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(chats);
});
app.use('/api/user',userRoutes);
app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT_NO|| 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
