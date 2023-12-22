import React from "react";
import Branch from "./Branch";
import TreeHead from "./TreeHead";
import DetailCard from "./DetailCard";

export default function Heading({ searchTerm, id, relationTree, personData }) {
  const node = personData.find((e) => e.id === id);
  console.log(searchTerm, "{{{{");
  return (
    <li>
      
        {id === 0 ? (
          <TreeHead key={id} parent={id} />
        ) : (
          <DetailCard node={node} searchTerm={searchTerm}/>
        )}
      
      {relationTree[id] !== undefined ? (
        <Branch
          key={id}
          parent={id}
          childrens={relationTree[id]}
          relationTree={relationTree}
          personData={personData}
        />
      ) : (
        <ul>
        </ul>
      )}
    </li>
  );
}