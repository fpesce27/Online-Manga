import { Input } from '@nextui-org/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

function Searchbar(props : {search : string, setSearch : (value : string) => void}) {
  return (
    <Input
              clearable
              contentLeft={
                <BsSearch fill="var(--nextui-colors-accents6)" />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Buscar manga..."
              onChange={(e) => props.setSearch(e.target.value)}
              value={props.search}
            />
  )
}

export default Searchbar