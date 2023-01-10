import React from "react";
import { Contacts } from "./Contacts/Contacts";
import { Form } from "./Form/Form";
import { Filter } from "./Filter/Filter";

export const App = () => {

  return ( 
      <div>
        <h1>Phonebook</h1>
        <Form/>
        <h2>Contacts</h2>
        <Filter/>
        <br />
        <Contacts/>
      </div>      
  )
}

