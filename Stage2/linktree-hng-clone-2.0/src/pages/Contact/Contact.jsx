import { useState } from "react";
import "./contact.css";

const FormTextInputComponent = ({
  inputId,
  inputValue,
  inputChange,
  placeholder,
  type = "text",
}) => {
  const idArray = inputId.split("_");
  const capitalizeIdArray = idArray.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return (
    <div id={`cmcF_${capitalizeIdArray.join("")}Container`}>
      <label htmlFor={inputId} children={capitalizeIdArray.join(" ")} />
      <input
        id={inputId}
        name={inputId}
        type={type}
        placeholder={
          placeholder ? placeholder : `Enter your ${idArray.join(" ")}`
        }
        value={inputValue}
        onChange={inputChange}
        required
      />
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    confirm: false,
  });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // 0: input#first_name
    // 1: input#last_name
    // 2: input#email
    // 3: textarea#message
    // 4: input#confirm  target.checked

    // 5: button#btn__submit
    alert(`Successfully submitted!!
    Name: ${e.target[0].value + " " + e.target[1].value} 
    Email: ${e.target[2].value}
    Message: ${e.target[3].value}
    Would you like to share your information? ${
      e.target[4].value == true ? "Yes" : "No"
    }
    `);

    return;
  };

  return (
    <div className="contactPageContainer">
      <div className="contactContainer">
        <main className="contactMainContent">
          <div className="cmc_Header">
            <h1>Contact Me</h1>
            <p>
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </div>
          <form
            className="cmc_Form"
            onSubmit={(e) => formSubmitHandler(e)}
            method="post"
          >
            <div id="cmcF_NamesContainer">
              <FormTextInputComponent
                inputId="first_name"
                inputValue={formData.firstName}
                inputChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    firstName: e.target.value,
                  }))
                }
              />
              <FormTextInputComponent
                inputId="last_name"
                inputValue={formData.lastName}
                inputChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    lastName: e.target.value,
                  }))
                }
              />
            </div>
            <FormTextInputComponent
              inputId="email"
              type="email"
              placeholder="yourname@email.com"
              inputValue={formData.email}
              inputChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
            <div id="cmcF_MessageContainer">
              <label htmlFor="message" children="Message" />
              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder="Send me a message and I'll reply you as soon as possible..."
                value={formData.message}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    message: e.target.value,
                  }))
                }
                required
              />
              {/* <span className="error">Please enter a message</span> */}
            </div>
            <div id="cmcF_CheckboxContainer">
              <input
                id="confirm"
                name="confirm"
                type="checkbox"
                value={formData.confirm}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    confirm: !prevState.confirm,
                  }))
                }
              />
              <label
                htmlFor="confirm"
                children="You agree to providing your data to Jemeni11 who may contact you."
              />
            </div>
            <button id="btn__submit" type="submit">
              Send Message
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Contact;
