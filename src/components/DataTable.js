import React from "react";
import playbutton from "../assets/playbutton.svg";
import cologo from "../assets/cologo.svg";
import play_circle from "../assets/play_circle.svg";
import gpt from "../assets/gpt.svg";
import addIcon from "../assets/addIcon.svg";
import Logomark0 from "../assets/Logomark.svg";
import Logomark1 from "../assets/Logomark1.svg";
import Logomark2 from "../assets/Logomark2.svg";
import Logomark3 from "../assets/Logomark3.svg";
import Logomark4 from "../assets/Logomark4.svg";
import Icon1 from "../assets/Icon1.svg";
import Icon2 from "../assets/Icon2.svg";
import Icon3 from "../assets/Icon3.svg";

const DataTable = () => {
  const data = [
    {
      id: 1,
      col1: "Oct 12, 2024 at 14:08 PM",
      col2: "Bitscale Evaluation - Account relev...",
      col3: "Bitscale Evaluation - Account r...",
    },
    {
      id: 2,
      col1: "Oct 12, 2024 at 14:08 PM",
      col2: "cell data size exceeds limit",
      col3: "BMW Evaluation - Relevancy c...",
    },
    {
      id: 3,
      col1: "Oct 12, 2024 at 14:08 PM",
      col2: "https://www.linkedin.com/bitScale.ai/sample",
      col3: "Google Evaluation - Lilevancy...",
    },
    {
      id: 4,
      col1: "Oct 12, 2024 at 14:08 PM",
      col2: "Loading data, Please wait",
      col3: "Apple Evaluation - Olvancy che...",
    },
    {
      id: 5,
      col1: "Oct 12, 2024 at 14:08 PM",
      col2: "Loading data, Please wait",
      col3: "Figma Evaluation - Evancy che...",
    },
  ];

  const images = [Logomark0, Logomark1, Logomark2, Logomark3, Logomark4];
  const icons = ["", Icon1, Icon2, Icon3, Icon3];

  const numColumns = 6;
  const numEmptyRows = 8;

  return (
    <div className="data-table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th className="header-highlight">
              <span className="badge">A</span> Input Column
            </th>
            <th>
              <div className="play-div">
                <img src={gpt} alt="icon" className="icon" /> Action Column
              </div>
            </th>
            <th>
              <div className="play-div">
                <img src={cologo} alt="logo" className="icon" /> Enrich Company
                <img
                  src={playbutton}
                  alt="button"
                  className="icon play-button"
                />
              </div>
            </th>
            <th>
              <img src={addIcon} alt="addicon" className="icon" /> Add Column
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className="cell-auto">{index + 1}</td>
              <td className="cell-auto">
                <img src={play_circle} alt="playicon" className="icon" />
              </td>
              <td>{item.col1}</td>
              <td>
                {index !== 0 ? (
                  <div className="flex">
                    <img
                      src={icons[index]}
                      alt={`icons ${index}`}
                      className="icon"
                    />
                    {item.col2.includes("http") ? (
                      <a
                        href={item.col2}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.col2}
                      </a>
                    ) : (
                      item.col2
                    )}
                  </div>
                ) : (
                  item.col2
                )}
              </td>

              <td>
                {index !== 0 ? (
                  <div className="flex">
                    <img
                      src={icons[index]}
                      alt={`icons ${index}`}
                      className="icon"
                    />
                    {item.col2.includes("http") ? (
                      <a
                        href={item.col2}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.col2}
                      </a>
                    ) : (
                      item.col2
                    )}
                  </div>
                ) : (
                  item.col2
                )}
              </td>

              <td></td>
            </tr>
          ))}
          {Array.from({ length: numEmptyRows }).map((_, rowIndex) => (
            <tr key={`empty-${rowIndex}`}>
              {Array.from({ length: numColumns }).map((_, colIndex) => (
                <td
                  key={`empty-cell-${rowIndex}-${colIndex}`}
                  className={colIndex < 2 ? "cell-auto" : ""}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
