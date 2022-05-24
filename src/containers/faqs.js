import React from "react";
import faqsData from "../fixture/faqs.json";
import { Accordion } from "../components";
import OptForm from "../components/opt-form";

export default function FaqsContainer() {
  return (
    <>
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
        <Accordion.Item />

        <OptForm>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break/>
          <OptForm.Text>
            Ready to watch? Enter your Email to create or restart your your
            membership
          </OptForm.Text>
        </OptForm>
      </Accordion>
    </>
  );
}
