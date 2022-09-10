import {instance} from "./axios";
import {useState} from "react";
import {render, screen} from "@testing-library/react";

const AxiosTest = () => {
    const [res, setRes] = useState();

  async function fetach() {
      try {
          const res = await instance.get("key")
          console.log(res);
          setRes(res);
      }
      catch (e) {
          console.error(e.response);
          throw new Error(e.response);
      }
  }

  return res ? <div>{res.success}</div> : null
}

function axiosTest() {
    render(<AxiosTest/>);
    setTimeout(()=>{
        const linkElement = screen.getByText(/succes/i);
        expect(linkElement).toBeInTheDocument();
    }, 2000);
}

test("Axios connection.",axiosTest);

