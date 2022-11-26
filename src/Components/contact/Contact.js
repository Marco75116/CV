import React, { useEffect, useState } from "react";
import {
  ContactContainer,
  ContactSection,
  ContactTitle,
  ContainerContent,
  ContainerInfos,
  ContainerInput,
  ContainerHeader,
  Text,
  TextInput,
  ButtonSend,
} from "./Contact.styled";
import axios from "axios";

const Contact = (props) => {
  const [contact, setContact] = useState({
    id: null,
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const query = (contact) => {
    axios({
      method: "GET",
      url: "http://localhost:8080/",
      headers: {
        "Content-Type": "application/json",
      },
      params: contact,
    }).then((res) => console.log(res.data));
  };
  useEffect(() => {}, []);

  return (
    <ContactContainer>
      <ContactSection>
        <ContactTitle ref={props.refProp}>Get In Touch</ContactTitle>
        <ContainerContent>
          <ContainerInfos>
            <Text style={{ fontWeight: "bold", color: "black" }}>
              Let's talk about everything!
            </Text>
            <br />
            <Text>Don't like forms? Send me an email 👋</Text>
          </ContainerInfos>
          <ContainerInput>
            <ContainerHeader>
              <TextInput
                onChange={(e) =>
                  setContact({ ...contact, name: e.target.value })
                }
                value={contact.name}
                width={"50%"}
                placeholder="Insert your name"
              ></TextInput>
              <TextInput
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
                value={contact.email}
                width={"50%"}
                placeholder="Insert your email"
              ></TextInput>
            </ContainerHeader>
            <TextInput
              onChange={(e) =>
                setContact({ ...contact, subject: e.target.value })
              }
              value={contact.subject}
              placeholder="Insert your Subject"
            ></TextInput>
            <TextInput
              onChange={(e) =>
                setContact({ ...contact, message: e.target.value })
              }
              value={contact.message}
              height={"10rem"}
              placeholder="Write a message"
            ></TextInput>
            <ButtonSend
              onClick={() => {
                console.log(contact);
                query(contact);
                setContact({
                  id: null,
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                });
              }}
            >
              Send Message
            </ButtonSend>
          </ContainerInput>
        </ContainerContent>
      </ContactSection>
    </ContactContainer>
  );
};

export default Contact;
