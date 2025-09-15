import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;


app.use(cors({
  origin: ["http://localhost:3000"],
//   origin: ["https://chatting-3tub.onrender.com"],
  methods: ["GET","POST"],
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})