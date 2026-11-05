import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { CreateTaskForm } from "../../app/components/createTask";

vi.mock("next/navigation", () => ({
    useRouter: () => ({
        push: vi.fn(),
    }),
}));

describe("CreateTaskForm component", () => {
    it("renders the form with input fields and submit button", () => {

        render(<CreateTaskForm />);

        // Check if labels are rendered properly
        expect(screen.getByText("Title")).toBeInTheDocument();
        expect(screen.getByText("Description")).toBeInTheDocument();
        expect(screen.getByText("Status")).toBeInTheDocument();
        expect(screen.getByText("Due Date")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();

        // Now check if input fields are rendered properly
        expect(screen.getByPlaceholderText("Task Title (Required)")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Task Description (Optional)")).toBeInTheDocument();
        expect(screen.getByRole("combobox")).toBeInTheDocument();
        expect(document.getElementById("dueDate")).toBeInTheDocument();
    });

    it("allows the user to enter task details", async () => {
        const user = userEvent.setup();

        render(<CreateTaskForm />);
        const titleInput = screen.getByPlaceholderText("Task Title (Required)");
        const descriptionInput = screen.getByPlaceholderText("Task Description (Optional)");
        const statusSelect = screen.getByRole("combobox");
        const dueDateInput = document.getElementById("dueDate");

        await user.type(titleInput, "New Task");
        await user.type(descriptionInput, "This is a new task description");
        await user.selectOptions(statusSelect, "InProgress");
        await user.type(dueDateInput, "2026-11-10T14:30");

        expect(titleInput).toHaveValue("New Task");
        expect(descriptionInput).toHaveValue("This is a new task description");
        expect(statusSelect).toHaveValue("InProgress");
        expect(dueDateInput).toHaveValue("2026-11-10T14:30");
    });
});