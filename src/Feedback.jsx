// import PropTypes from "prop-types";
import React, { useState } from "react";
import * as emailjs from "emailjs-com";

//import swal from "sweetalert";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    var templateParams = {
      from_name: name + "(" + email + ")",
      to_name: "vahanmkrtumyan@gmail.com",
      subject: "Website request",
      message_html: text,
    };

    if (text === "" || email === "" || text === "") return;
    emailjs.send(
      "service_qi3nfb5",
      "template_5uccncq",
      templateParams,
      "user_2oVtAZArFSDKEkVPijQjw"
    );
    //   .then(
    //     response => {
    //       swal({ icon: "success", text: "Նամակն ուղարկված է։" });
    //     },
    //     err => {
    //       swal({ icon: "error", text: "Նամակն չի ուղարկվել։" });
    //     }
    //   );

    setName("");
    setEmail("");
    setText("");

    // const callable = functions.httpsCallable("genericEmail");
    // return callable({
    //   text: text,
    //   // subject: "Email from Website",
    //   email: email
    // }).then(console.log);
  }

  return (
    <div className="contact-form">
      <p className="color-white text-center pb-30">WE WILL ANSWER YOU ASAP</p>
      <form action="">
        <div className="form-inputs pb-25">
          <div>
            <input
              name="name"
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div>
            <input
              name="email"
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="message"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />

        <div className="text-right pt-30">
          <button className="btn  btn-sm primary" onClick={(e) => sendEmail(e)}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;

//   sendMessage = event => {
//     event.preventDefault();

//     var templateParams = {
//       from_name: this.state.name + "(" + this.state.email + ")",
//       to_name: "vahanmkrtumyan@gmail.com",
//       subject: this.state.subject,
//       message_html: this.state.message
//     };

//     if (this.state.message === "") return;
//     emailjs
//       .send(
//         "gmail",
//         "template_kVfGz0wq",
//         templateParams,
//         "user_2oVtAZArFSDKEkVPijQjw"
//       )
//       .then(
//         response => {
//           swal({ icon: "success", text: "Նամակն ուղարկված է։" });
//         },
//         err => {
//           swal({ icon: "error", text: "Նամակն չի ուղարկվել։" });
//         }
//       );

//     this.setState({ name: "", email: "", subject: "", message: "" });
//   };
