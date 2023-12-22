import { PersonContext } from "@/pages/decision";
import Link from "next/link";
import React, { useContext } from "react";
import Highlighter from "react-highlight-words";

export default function DetailCard({ node }) {
  const { searchTerm } = useContext(PersonContext);

  // Check if 'node' is defined before accessing properties
  if (!node) {
    return null; // or handle the case where 'node' is undefined
  }

  return (
    <>
      <Link href={node.redirect}>
        {/* <button>{node.name}</button> */}
        <Highlighter
          searchWords={[searchTerm]}
          autoEscape={false}
          textToHighlight={`${node.name}`}
          highlightStyle={{ backgroundColor: '#FFFF00', fontWeight: 'bold', border: 'none' }}
        />
        {/* <button>{node.name}</button> */}
      </Link>
    </>
  );
}
