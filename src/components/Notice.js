import React, { useState, useEffect } from 'react';
import './Notice.css';
import axios from 'axios';

function Notice(props) {
  const [editMode, setEditMode] = useState(false);
  const [noticeContent, setNoticeContent] = useState('');

  function clickHandler() {
    props.setPopup(false);
    fetchNoticeContent();
  }
  function fetchNoticeContent() {
    axios
      .get(process.env.REACT_APP_BASENAME+'api/notice.php')
      .then((response) => {
        setNoticeContent(response.data.infomation);
      });
  }
  function editHandler() {
    setEditMode(!editMode);
  }

  function saveHandler() {
    axios
      .post(process.env.REACT_APP_BASENAME+'api/notice.php', {
        information: noticeContent,
      })
      .then((response) => {
        if (response.data.status === 'success') {
          setEditMode(false);
          props.updateNoticeContent(noticeContent);
        }
      });
  }

  useEffect(() => {
    setNoticeContent(props.noticeContent);
    fetchNoticeContent();
  }, []);

  return props.trigger ? (
    <div className="popup">
      <div>
        <div className="popup-inner">
          <textarea
            value={noticeContent}
            onChange={(e) => setNoticeContent(e.target.value)}
            rows={10}
            cols={50}
            readOnly={!editMode}
          ></textarea>
          <br></br>
          <br></br>
          {editMode ? (
            <button onClick={saveHandler} className="btn">
              Save
            </button>
          ) : (
            <button onClick={editHandler} className="btn">
              Edit
            </button>
          )}
          &nbsp;&nbsp;
          <button onClick={clickHandler} className="btn">
            Back
          </button>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

export default Notice;
