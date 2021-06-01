import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { newThread } from "../../reducers/threads/threads.action";

import FormInput from "../auth-form/form-input.component";

import "./thread-form.styles.css";

const ThreadForm = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    username: user.existingUser.username,
    userId: user.existingUser._id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newThread(formData, history));
    setFormData({
      title: "",
      text: "",
    });
  };

  return (
    <div className="container">
      <h2>Start a discussion</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="title"
          className="form-control"
          label="Title"
          handleChange={handleChange}
          value={formData.title}
        />
        <FormInput
          type="textarea"
          name="text"
          className="form-control"
          label="Text"
          handleChange={handleChange}
          value={formData.text}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ThreadForm;
