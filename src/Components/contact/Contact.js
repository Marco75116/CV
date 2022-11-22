import React from "react";
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

const Contact = (props) => {
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
                width={"50%"}
                placeholder="Insert your name"
              ></TextInput>
              <TextInput
                width={"50%"}
                placeholder="Insert your email"
              ></TextInput>
            </ContainerHeader>
            <TextInput placeholder="Insert your Subject"></TextInput>
            <TextInput
              height={"10rem"}
              placeholder="Write a message"
            ></TextInput>
            <ButtonSend>Send Message</ButtonSend>
          </ContainerInput>
        </ContainerContent>
      </ContactSection>
    </ContactContainer>
  );
};

export default Contact;
