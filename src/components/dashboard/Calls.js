import React, { useEffect, useState } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";

// !import css
import "../../assets/css/dashboard_calls.css";

// ! import img
import ic_avatar from '../../assets/img/ic_avatar.svg'

// Get context 
import { GetContext } from '../../utils/ContentProvider'
import NumberDetails from "./calls/NumberDetails";

function Calls() {
  const [loading, setLoading] = useState(false)
  const { getCalls } = GetContext()
  const [calls, setCalls] = useState()
  const history = useHistory()

  useEffect(() => {
    let mounted = true;
    getCalls((data) => {
      setCalls(Object.entries(data).map(v => v[1]).sort((a, b) => parseInt(b.date) - parseInt(a.date)))
      setLoading(mounted)

    })

    return () => mounted = false;
  }, [getCalls])


  return (
    <> {loading && <div>
      <h1>This is Calls Page</h1>
      <div className="calls_area">
        <div className="calls_left_area">
          {
            calls && calls.map(data =>
              <div className="call_element" key={parseInt(data.date)} onClick={() => history.push(`/dashboard/calls/${data.number}`)}>
                <div className="call_details">
                  <div className="call_image ">
                    <img className="pbc" src={ic_avatar} alt="avatar" width={40} height={40} />
                  </div>
                  <div className="call_text">
                    <h4>{data.name}</h4>
                    <p>{data.type}</p>
                  </div>
                </div>
                <div className="call_date"><p>{new Date(parseInt(data.date)).toLocaleString()}</p></div>
              </div>)
          }


        </div>
        <div className="calls_right_area">
          <Route path="/dashboard/calls/:number">
            {calls ? <NumberDetails data={calls} /> : <Redirect to="/dashboard/calls" />}
          </Route>
        </div>
      </div>
    </div>}

    </>
  );
}

export default Calls;
