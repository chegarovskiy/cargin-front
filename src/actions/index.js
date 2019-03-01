import axios from 'axios';






export const selectCar = (car) =>{
  alert("Now car is:" + car.model);
  axios.get("http://127.0.0.1:8000/marks/").then((response) => {
      console.log(response.data)
  });

  return{
      type: "CAR_SELECTED",
      payload: car
  }
};

export function fetchMarks() {
    const request = axios.get("http://127.0.0.1:8000/marks/");
    console.log(request.status);
    return request.body
}

