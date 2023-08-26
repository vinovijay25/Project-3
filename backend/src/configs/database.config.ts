import { connect, ConnectOptions } from 'mongoose';

export const dbConnect = () => {
    connect("mongodb://127.0.0.1:27017/foodmine", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
};
