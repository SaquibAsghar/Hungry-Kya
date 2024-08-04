import React from "react";

const Header = () => <h1>React With Parcel ⚛️ + 📦 = 🚀 </h1>;

const Description = () => (
  <>
    <p>This is a simple example of React application bundled with Parcel.</p>
    <a href="https://react.dev/" target="blank">
      Learn React
    </a>
    &nbsp;
    <a href="https://parceljs.org/" target="blank">
      Learn Parcel
    </a>
    <br />
    <h3>This is a simple example of React application bundled with Parcel</h3>
  </>
);
const App = () => {
  const keys = Object.keys(DATA);
  return (
    <div>
      <Header />
      <Description />
      {keys.map((key) => {
        console.log(key);
        {
          key === "React" && console.log(DATA[key]);
        }
        return <Table header={key} data={DATA[key]} />;
      })}
    </div>
  );
};

export default App;

const count = () => {
  pageCount = 0;
  return () => ++pageCount;
};

const getPageCount = count();

const MAX_ROW = 4;
let rowCount = 0;

const Table = (props) => {
  const calculateRow = () => {
    start = 0;
    return () => {
      start++;
      return MAX_ROW - start;
    };
  };
  const getRow = calculateRow();
  let currentPage;
  return (
    <main>
      {rowCount >= 0 && !!props.data.length && (
        <section
          style={{
            borderBottom: "1px solid red",
            marginBottom: "15px",
            backgroundColor: "plum",
          }}
        >
          {(currentPage = getPageCount())}
          <h2>Current Page: {currentPage}</h2>
          <div className="header">Outside Header - {props.header}</div>
          <div className="sub-header">
            <span>Search</span> &nbsp;&nbsp;
            <span>Count</span>
          </div>
          <div>
            {props.data.slice(0, MAX_ROW).map((item, indx) => {
              rowCount = getRow();
              return (
                <div
                  key={item.term + indx}
                  style={{ marginBlock: "10px", padding: "20px" }}
                >
                  <span className="search-term--key">{item.term}</span>{" "}
                  &nbsp;&nbsp;
                  <span className="search-term--count">{item.count}</span>{" "}
                  &nbsp;&nbsp;
                </div>
              );
            })}
          </div>
          {console.log(rowCount, currentPage)}
          {rowCount > 0 &&
            printOnSamePage(rowCount, Object.keys(DATA)[1], getRow)}
        </section>
      )}
      {console.log(rowCount, props.header)}
      {getRow() < 0 && printOnNextPage(currentPage, props)}
    </main>
  );
};

const printOnSamePage = (remainingRows, nextHeader, getRow) => {
  const data = DATA[nextHeader].slice(0, remainingRows);
  DATA[nextHeader] = DATA[nextHeader].splice(remainingRows);
  console.log(DATA[nextHeader]);
  return (
    <>
      <div className="header">Inside Header - {nextHeader}</div>
      <div className="sub-header">
        <span>Search</span> &nbsp;&nbsp;
        <span>Count</span>
      </div>
      <div>
        {data.map((item, indx) => {
          rowCount = getRow();
          return (
            <div
              key={item.term + indx}
              style={{ marginBlock: "10px", padding: "20px" }}
            >
              <span className="search-term--key">{item.term}</span> &nbsp;&nbsp;
              <span className="search-term--count">{item.count}</span>{" "}
              &nbsp;&nbsp;
            </div>
          );
        })}
      </div>
    </>
  );
  // return <Table header={nextHeader} data={data} />;
};

const printOnNextPage = (pageCount, props) => {
  const nextPage = pageCount;
  const lowerLimit = MAX_ROW * nextPage;
  const upperLimit = MAX_ROW * nextPage + MAX_ROW;
  const sliceNewData = DATA[props.header].slice(lowerLimit, upperLimit);
  startIndexFrom = 0;
  return (
    sliceNewData.length > 0 && (
      <Table header={props.header} data={sliceNewData} />
    )
  );
};

const DATA = {
  Any: [
    {
      term: "saquib 1 ==>",
      count: 2,
    },
    {
      term: "saquib 2 ==>",
      count: 2,
    },
    {
      term: "saquib 3 ==>",
      count: 2,
    },
    {
      term: "saquib 4 ==>",
      count: 2,
    },
    {
      term: "saquib 5 ==>",
      count: 2,
    },
    {
      term: "saquib 6 ==>",
      count: 2,
    },
    {
      term: "saquib 7 ==>",
      count: 2,
    },
    {
      term: "saquib 8 ==>",
      count: 2,
    },
    {
      term: "saquib 9 ==>",
      count: 2,
    },
    {
      term: "saquib 10 ==>",
      count: 2,
    },
  ],
  React: [
    {
      term: "react 1 ==>",
      count: 89,
    },
    {
      term: "react 2 ==>",
      count: 1,
    },
    {
      term: "react 3 ==>",
      count: 90000,
    },
    {
      term: "react 4 ==>",
      count: 100,
    },
    {
      term: "react 5 ==>",
      count: 10000,
    },
    {
      term: "react 6 ==>",
      count: 45,
    },
  ],
  Breach: [
    {
      term: "Breach 1 ==>",
      count: 100,
    },
    {
      term: "Breach 2 ==>",
      count: 10000,
    },
    {
      term: "Breach 3 ==>",
      count: 45,
    },
    {
      term: "Breach 4 ==>",
      count: 100,
    },
    {
      term: "Breach 5 ==>",
      count: 10000,
    },
    {
      term: "Breach 6 ==>",
      count: 45,
    },
  ],
};
