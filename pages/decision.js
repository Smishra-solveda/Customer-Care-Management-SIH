import Head from "next/head";
import Layout from "@/components/Layout";
import { createContext, useState } from "react";
import Heading from "@/components/decisionTree/Heading";
import Underline from "@/components/Underline";
// import "../components/decisionTree/decision.css"

export const PersonContext = createContext();

const Decision = () => {
  const [personData, setPersonData] = useState(sampleData);
  const [personRelation, setPersonRelation] = useState(sampleRelation);
  const [relationTree, setRelationTree] = useState(generateRelTree());

  const [searchTerm, setSearchTerm] = useState('');


  function generateRelTree() {
    let relationTree = {};
    for (let i of personRelation) {
      let p = i[0];
      let c = i[1];

      if (relationTree[p] === undefined) {
        relationTree[p] = [c];
      } else {
        relationTree[p].push(c);
      }
    }
    return relationTree;
  }

  const personContextValue = {
    handlePersonDataAdd,
    handlePersonRelationAdd,
    handlePersonRelationHeadAdd,
    searchTerm,
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  function handlePersonDataAdd(newDetail) {
    setPersonData((prev) => [...prev, newDetail]);
  }

  function handlePersonRelationAdd(relation) {
    setPersonRelation((prev) => [...prev, relation]);
  }

  function handlePersonRelationHeadAdd(child) {
    const newRel = personRelation.map((x) => {
      if (x[0] === 0) x[0] = child;
      return x;
    });

    newRel.push([0, child]);

    setPersonRelation(newRel);
  }


  return (
    <div className="overflow-scroll h-screen overflow-y-scroll scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-yellow-600 scrollbar-thumb-rounded">
      <Head>
        <title>Decision Data</title>
      </Head>

      <Layout>
        <h2 className="text-4xl mt-10 font-bold text-center text-gray-800 capitalize tracking-widest lg:text-5xl">
          DECISION TREE
        </h2>

        <Underline />
        <p className="text-base text-gray-700 my-2 md:text-lg text-center">
          Decision tree for MCIP Customer Care Management Tool
        </p>
        <PersonContext.Provider value={personContextValue}>
          <center>
            <figure>
              <input
                type="text"
                className="bg-yellow-100 p-2 mt-2 w-1/3 border border-yellow-800 rounded"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search"
              />
              <ul className="tree">
                <Heading
                  searchTerm={searchTerm}
                  key="0"
                  id={0}
                  relationTree={relationTree}
                  personData={personData}
                />
              </ul>
            </figure>
          </center>
        </PersonContext.Provider>
      </Layout>
    </div>
  );
};

export default Decision;

let sampleData = [
  {
    id: 0,
    name: "Start",
    redirect: "/decision",
    age: 10,
  },
  {
    id: 1,
    name: "Customer Contacts IRCTC Helpline",
    redirect: "redirect2",
    age: 10,
  },
  {
    id: 2,
    name: "Is the Inquiry Related to Ticket Booking?",
    redirect: "/decision",
    age: 9,
  },
  {
    id: 3,
    name: "Yes",
    redirect: "/decision",
    age: 8,
  },
  {
    id: 4,
    name: "Provide Information on Train Availability",
    redirect: "/decision",
    age: 7,
  },
  {
    id: 5,
    name: "Assist with Booking Process",
    redirect: "/decision",
    age: 7.9,
  },
  {
    id: 6,
    name: "Guide through Seat/Class Selection",
    redirect: "/decision",
    age: 7.8,
  },
  {
    id: 7,
    name: "Help with Payment Issues",
    redirect: "/decision",
    age: 7.6,
  },
  {
    id: 8,
    name: "Explain Ticket Modification Process",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 9,
    name: "Address Ticket Printing/Collection Issues",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 10,
    name: "No: Proceed to the Next Question",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 11,
    name: "Is the Inquiry Related to Refunds or Cancellations?",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 12,
    name: "Yes",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 13,
    name: "Explain Refund Policies",
    redirect:
      "https:/contents.irctc.co.in/en/eticketCancel.html#:~:text=If%20the%20train%20is%20marked,by%20the%20customer%20through%20Internet.",
    age: 7.3,
  },
  {
    id: 14,
    name: "Assist with Cancellation and Refund Process",
    redirect:
      "https:/contents.irctc.co.in/en/CancellationRulesforIRCTCTrain.pdf",
    age: 7.3,
  },
  {
    id: 15,
    name: "Verify and Process Refund Requests",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 16,
    name: "Provide Refund Status Updates",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 17,
    name: "Address Failed Transaction Refunds",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 18,
    name: "No: Proceed to the Next Question",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 19,
    name: "Is the Inquiry About Special Services or Requests?",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 20,
    name: "Yes",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 21,
    name: "Assist with Special Needs Requests",
    redirect: "https:/www.irctctourism.com/wheelchair",
    age: 7.3,
  },
  {
    id: 22,
    name: "Provide Information on Wheelchair Assistance",
    redirect: "https:/www.irctctourism.com/wheelchair",
    age: 7.3,
  },
  {
    id: 23,
    name: "Guide through Traveling with Pets",
    redirect:
      "https:/er.indianrailways.gov.in/view_detail.jsp?lang=0&dcd=6652&id=0,4,268",
    age: 7.3,
  },
  {
    id: 24,
    name: "Provide Information on Special Trains",
    redirect: "https:/indiarailinfo.com/trains/special",
    age: 7.3,
  },
  {
    id: 25,
    name: "Address Other Special Service Inquiries",
    redirect:
      "https:/er.indianrailways.gov.in/cris/uploads/files/1476784439462-TEL-SMS_Contact.htm",
    age: 7.3,
  },
  {
    id: 26,
    name: "No: Proceed to the Next Question",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 27,
    name: "Is the Inquiry Regarding IRCTC Account Management?",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 28,
    name: "Yes",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 29,
    name: "Help with Login Issues",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 30,
    name: "Reset Password",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 31,
    name: "Troubleshoot Login Problems",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 32,
    name: "Address Account Access Problems",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 33,
    name: "Provide Assistance with Account Settings",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 34,
    name: "No: Proceed to the Next Question",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 35,
    name: "Is the Customer Dissatisfied or Facing Other Issues?",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 36,
    name: "Yes",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 37,
    name: "Offer Apologies and Acknowledge the Issue",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 38,
    name: "Gather Details of the Complaint",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 39,
    name: "Type of Issue (e.g., Technical, Service-related)",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 40,
    name: "Specifics of the Dissatisfaction",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 41,
    name: "Escalate the Complaint to Relevant Department",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 42,
    name: "Technical Issues: IT Support",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 43,
    name: "Service-related: Customer Relations",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 44,
    name: "Other Issues: Appropriate Department",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 45,
    name: "Provide a Reference or Complaint Number",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 46,
    name: "No: Thank the Customer for Contacting IRCTC Helpline",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 47,
    name: "Others",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 48,
    name: "Blog Search",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 49,
    name: "GPT Search",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 50,
    name: "Image Search",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 53,
    name: "Check Train Schedule",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 54,
    name: "Assist with Seat Availability",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 55,
    name: "Provide Fare Information",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 56,
    name: "Guide through Tatkal Booking",
    redirect: "/decision",
    age: 7.3,
  },
  {
    id: 57,
    name: "Assist with Group Booking",
    redirect: "/decision",
    age: 7.3,
  },
];

let sampleRelation = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [3, 5],
  [5, 6],
  [5, 7],
  [3, 8],
  [3, 9],
  [2, 10],
  [1, 11],
  [11, 12],
  [12, 13],
  [12, 14],
  [14, 15],
  [14, 16],
  [12, 17],
  [11, 18],
  [1, 19],
  [19, 20],
  [20, 21],
  [21, 22],
  [21, 23],
  [20, 24],
  [20, 25],
  [19, 26],
  [1, 27],
  [27, 28],
  [28, 29],
  [29, 30],
  [29, 31],
  [28, 32],
  [28, 33],
  [27, 34],
  [1, 35],
  [35, 36],
  [36, 37],
  [36, 38],
  [38, 39],
  [38, 40],
  [36, 41],
  [41, 42],
  [41, 43],
  [41, 44],
  [36, 45],
  [35, 46],
  [1, 47],
  [47, 48],
  [47, 49],
  [47, 50],
  [4, 53],
  [4, 54],
  [4, 55],
  [4, 56],
  [4, 57],
  [53, 58],
  [53, 59],
  [54, 60],
  [55, 61],
  [56, 62],
  [57, 63],
];
