import { connect, ConnectOptions } from 'mongoose'; 

export const dbConnect = () => {
  connect(process.env.MONGO_URI!, {
    dbName: 'foodmine'
  } as ConnectOptions).then(
    () => console.log("connect successfully"),
    (error) => console.log(error)
  );
}