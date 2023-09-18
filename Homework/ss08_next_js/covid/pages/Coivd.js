import React from "react";

export const Coivd = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Confirmed</th>
                  <th scope="col">Active</th>
                  <th scope="col">Recovered</th>
                  <th scope="col">Deaths</th>
                </tr>
              </thead>
              <tbody>
                {information.map((i) => {
                  return (
                    <>
                      <tr>
                        <td>{i.Date}</td>
                        <td>{i.namConfirmede}</td>
                        <td>{i.Active}</td>
                        <td>{i.Recovered}</td>
                        <td>{i.Deaths}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};
export const getStaticProps = async () => {
  try {
    const result = await axios.get("http://localhost:8080/information");
    return {
      props: {
        information: result.data,
      },
    };
  } catch (e) {
    console.log(e);
  }
};
