import React, { useState } from "react";
import Modal from "components/molecules/Modal";
import Button from "components/atoms/button";
import Input from "components/molecules/Input";
import Select from "components/molecules/Input/Select";

interface Props {
  close?: (val: any) => void;
}
const NewRoomModal: React.FC<Props> = (props) => {
  //  States
  const [roomForm, setRoomForm] = useState({
    amount: "0.00",
    privacy: "",
    coin: "ETH",
  });

  // Props
  const { close } = props;

  // Handlers
  const handleChange = (e) => {
    const { value, name } = e.target;
    setRoomForm((prevState) => ({ ...prevState, [name]: value }));
  };

  // Dummy data
  const options = [
    { id: 1, value: "Private" },
    { id: 2, value: "Public" },
  ];

  // Data to Render
  return (
    <Modal title="Create New Room">
      <>
        <Input
          label="Entry Fee"
          value={roomForm.amount}
          selectedcoin={roomForm.coin}
          name={"amount"}
          onChange={handleChange}
        />
        <Select
          label="Room Privacy"
          value={roomForm.amount}
          options={options}
          name={"privacy"}
          onChange={handleChange}
        />

        <div className="flex justify-end mt-10 gap-3">
          <Button onClick={() => close(false)} className="btn-4">
            Cancel
          </Button>
          <Button className="btn-5">Save</Button>
        </div>
      </>
    </Modal>
  );
};

export default NewRoomModal;

/**
 * label
value
selectedCoin
 */
