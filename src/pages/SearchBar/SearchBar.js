import Input from "../../components/Inputs/Input";
import {useContext, useState} from "react";
import {UuidContext} from "../../Conetxt/UuidContext";

const SearchBar = () => {
    const {uuid, setUuid} = useContext(UuidContext);
    // const [playerUuid, setPlayerUuid] = useState("dsasas");
  return(
    <div className="form-row">
        <Input onChange={setUuid} type="text" value={uuid} label="Podaj uuid graca."/>
    </div>
  )
}

export default SearchBar;