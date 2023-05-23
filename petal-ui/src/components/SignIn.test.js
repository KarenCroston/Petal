/* eslint-disable no-restricted-globals */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SignIn from "./SignIn";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

describe("SignIn component", () => {
  it("submits the form successfully when both email and password are provided", () => {
    const setUserMock = jest.fn();
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    render(<SignIn setUser={setUserMock} />);
    // screen.getByRole("spread");
    const emailInput = screen.getByRole("textbox", { name: "email" });
    const passwordInput = screen.getByPlaceholderText("password");
    const submitButton = screen.getByRole("button", { name: "signin" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);
    // screen.getByRole("spread");
    expect(setUserMock).toHaveBeenCalledWith("test@example.com");
    expect(navigateMock).toHaveBeenCalledWith("/home");
  });

  it("displays an error message when either email or password is missing", () => {
    render(<SignIn />);

    const emailInput = screen.getByRole("textbox", { name: "email" });
    const passwordInput = screen.getByPlaceholderText("password");
    const submitButton = screen.getByRole("button", { name: "signin" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(submitButton);

    expect(
      screen.getByText("Please enter both username/email and password")
    ).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    expect(
      screen.getByText("Please enter both username/email and password")
    ).toBeInTheDocument();
  });

  it("does not display an error message when both email and password are provided", () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);
    render(<SignIn setUser={jest.fn()} />);

    const emailInput = screen.getByRole("textbox", { name: "email" });
    const passwordInput = screen.getByPlaceholderText("password");
    const submitButton = screen.getByRole("button", { name: "signin" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    expect(
      screen.queryByText("Please enter both username/email and password")
    ).toBeNull();
  });

  it("updates the email state when the email input field changes", () => {
    render(<SignIn />);

    const emailInput = screen.getByRole("textbox", { name: "email" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(emailInput.value).toBe("test@example.com");
  });

  it("updates the password state when the password input field changes", () => {
    render(<SignIn />);

    const passwordInput = screen.getByPlaceholderText("password");

    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(passwordInput.value).toBe("password123");
  });

  it("navigates to the signup page when the Sign up button is clicked", () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);
    render(<SignIn />);
    const signUpButton = screen.getByText("Sign up");
    fireEvent.click(signUpButton);
    expect(navigateMock).toHaveBeenCalledWith("/signup");
  });
});
