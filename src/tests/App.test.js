import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("renders navigation", () => {
  render(<App />);
  const nav = screen.getByRole("navigation");
  expect(nav).toBeInTheDocument();
});

test("renders correct page when user changes page", async () => {
  render(<App />);
  userEvent.click(screen.getByTestId("about-page-link"));
  const aboutPage = await screen.findByText(/about our shop/i);
  expect(aboutPage).toBeInTheDocument();
});
