import axios from "axios";

const getTodo = async (todoId: number) => {
  try{
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      const Id = res.data
      const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${Id.userId}`)
      const intel = resp.data
      const output = {
            owner: intel.name,
            title: Id.title,
            completed: Id.completed,
          }
        return output
      }
  catch(err) {
      return "INVALID TODO ID"
     }
};

const input1 = 15;
const input2 = 60;
const input3 = 250;

getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;

//นายกรรชัย คุ้มดี 660610739
