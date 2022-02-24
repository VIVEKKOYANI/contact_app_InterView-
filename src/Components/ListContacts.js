import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';

let add1;
function ListContacts() {
  const [contact, setContact] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [saveIndex, setsaveIndex] = useState('');
  useEffect(() => {
    let local = localStorage.getItem('add')
    add1 = JSON.parse(local)
    setContact(add1)
  }, [])

  const handleClick = () => {
    const list = contact.filter((item, i) => i !== saveIndex)
    setContact(list)
    localStorage.setItem('add', JSON.stringify(list))
    setIsModalVisible(false);

  }

  const showModal = (e,i) => {
    setIsModalVisible(true);
    setsaveIndex(i)
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <table id="customers">
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Type</th>
          <th>isWhatapp</th>
          <th>ProfilePicture</th>
          <th>Action</th>
        </tr>
        {contact && contact.length > 0 && contact.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.radio_group}</td>
              <td>{item.type}</td>
              {item && item.upload.map((show) => {
                return (
                  <td><img src={show.thumbUrl} alt="image" /> </td>
                )
              })}
              <td>
                <Button onClick={(e) => showModal(e, i)}>Delete</Button>
              </td>
            </tr>
          )
        })}
      </table>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleClick} onCancel={handleCancel}>
        <p>Please confirm</p>
      </Modal>
    </>
  )
}
export default ListContacts