"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTicketForm = () => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center ">
      <form action="" method="POST">
        <h3>Create your ticket</h3>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
      </form>
    </div>
  );
};

export default EditTicketForm;
