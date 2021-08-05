import React, { useEffect, useState } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";

//! import css
import "../../assets/css/dashboard_messages.css";

//! import img 
import ic_avatar from '../../assets/img/ic_avatar.svg'
import { GetContext } from "../../utils/ContentProvider";
import Chats from "./messages/Chats";

function Messages() {

  const [loading, setLoading] = useState(false)
  const { getMessages } = GetContext()
  const [messages, setMessages] = useState()
  const history = useHistory()

  useEffect(() => {
    let mounted = true;
    getMessages((data) => {
      setMessages(Object.entries(data).map(v => v[1]).sort((a, b) => parseInt(b.date) - parseInt(a.date)))
      setLoading(mounted)

    })

    return () => mounted = false;
  }, [getMessages])

  if (messages) {
    console.log(messages)
  }

  return (<>{loading && <div>
    <h1>Messages</h1>
    <div className="messages_area">
      <div className="messages_left_area">
        {messages && messages.map(v => {
          return (
            <div className="message_element" key={parseInt(v.date)} onClick={() => history.push(`/dashboard/messages/${v.tid}`)}>

              <div className="message_image_area">

                <div className="message_image pbc">
                  <img src={ic_avatar} alt="avatar" width={20} height={20} />
                </div>

              </div>

              <div className="message_details_area">
                <div className="message_header">
                  <h3>{v.address}</h3>
                  <p>1:58 pm</p>
                </div>
                <div className="message_footer">
                  <p className="message_text">{v.snippet}</p>
                  <div className="message_count pbc"><p>9</p></div>
                </div>
              </div>
            </div>
          )
        })}


      </div>
      <div className="messages_right_area">
        <Route path="/dashboard/messages/:chatId">
          {messages ? <Chats data={messages} /> : <Redirect to="/dashboard/messages" />}
        </Route>
      </div>
    </div>

  </div>}</>

  );
}

export default Messages;
