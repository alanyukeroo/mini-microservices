
# Mini Microservices

a mini example of how Microservices are work. build with React & NodeJS


## API Reference (will update soon)

#### Micro services
| Service Name | Port     | Description                |
| :--------    | :------- | :------------------------- |
| client       | 3000     | React Frontend             |
| post         | 4000     | Post Backend               |
| comment      | 4001     | comment Backend            |

#### Comment Service

| Path                | Method   | Body               | Goals                      |
| :--------           | :------- |:-------            | :------------------------- |
| /posts/:id/comments | `POST`   | {content: string}  |Create comment associated with the given post ID  |
| /posts/:id/comments | `GET`   | -  | Retrive all comments associated with the given post D   |


#### Post Service

| Path | Method   | Body               | Goals                      |
| :--------| :------- |:-------            | :------------------------- |
| /posts/ | `POST`   | {title: string}  |Create a new post  |
| /posts/ | `GET`   | -  | Retrive all posts   |
  
## Appendix

Learning source : https://www.udemy.com/course/microservices-with-node-js-and-react/

Notes : https://drive.google.com/drive/u/0/folders/1iiMhq4S81PNr44SOPLDiXmemGfI5cJeE   

Course log (not played yet) : 10. Handling CORS Errors

  