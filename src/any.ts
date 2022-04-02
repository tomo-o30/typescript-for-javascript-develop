import axios from "axios";

export {};

let url: string = "https://jsonplaceholder.typicode.com/posts/1";


axios.get(url)
  .then(function (response) {
    interface Post{
      userId: number,
      id: number,
      title: string,
      body: string,
    }

    let data: Post[] =  response.data;
    data = [(
      {
        userId: 2,
        id: 2,
        title: "string",
        body: "string"
      }
    )];
    console.log(data);
  })