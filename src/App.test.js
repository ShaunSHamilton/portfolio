import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders name", () => {
  const { getByText } = render(<App />);
  const name = getByText(/Shaun Hamilton/i);
  expect(name).toBeInTheDocument();
});

test("renders 9 projects", () => {
  const { getAllByText } = render(<App />);
  const projects = getAllByText(/View/);
  expect(projects.length).toEqual(9);
});

test("renders Certifications section", () => {
  const { getAllByText } = render(<App />);
  const certificationText = getAllByText(/Certifications/);
  expect(certificationText).toHaveLength(2);
});

test("renders Modules section", () => {
  const { getAllByText } = render(<App />);
  const modulesText = getAllByText(/Modules/);
  expect(modulesText).toHaveLength(2);
});

test("renders Contact section", () => {
  const { getAllByText } = render(<App />);
  const contactText = getAllByText(/Contact/);
  expect(contactText).toHaveLength(2);
});

test("renders 3 clickable contact element icons", () => {
  render(<App />);
  const icons = document.querySelectorAll(".icon-btn");
  expect(icons).toHaveLength(3);
});
