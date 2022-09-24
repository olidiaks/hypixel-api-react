import {fireEvent, render, screen} from "@testing-library/react";
import SearchBar from "./SearchBar";
import {UuidContext} from "../../Conetxt/UuidContext";
import {useState} from "react";

const TestSearchBar = () => {
    const [uuid, setUuid] = useState("");
    return (
        <UuidContext.Provider value={{
        uuid: uuid,
        setUuid: (value) => setUuid(value),
    }}>
        <SearchBar/>
    </UuidContext.Provider>
    );
};

describe('Searching uuid component', ()=>{
    test("search input is in document", ()=>{
        render(<TestSearchBar/>);
        const linkElement = screen.getByLabelText(/Podaj uuid graca./i);
        expect(linkElement).toBeInTheDocument();
    });

    test("changing value of search input",()=>{
        render(<TestSearchBar/>);
        const linkElement = screen.getByLabelText(/Podaj uuid graca./i);
        fireEvent.change(linkElement, {target:{value:"efda338e-5295-472c-8c01-a765f492f570"}});
        expect(linkElement.value).toBe("efda338e-5295-472c-8c01-a765f492f570");
    })
});
