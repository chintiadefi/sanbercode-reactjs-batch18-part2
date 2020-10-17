import React, { useState, createContext } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = props => {
    const [navbar] =  useState(['#000000', '#ffff00'])

      return(
          <NavbarContext.Provider value={[navbar]}>
              {props.children}
          </NavbarContext.Provider>
      );
}