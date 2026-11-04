import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { EditForm } from "@/app/components/updateTask";

vi.mock("next/navigation", () => ({
    useRouter: () => ({
        push: vi.fn(),
    }),

    usePathname: () => "/",

}))

describe("EditForm", () => {

    const task = {
        id: 1,
        title: "Test task",
        description: "Test description",
        status: "InProgress",
        dueDate: "2026-11-10T14:30"
    };

    it("displays the existing task information", async () => {

        render(<EditForm task={task} />);

        expect(
            await screen.findByDisplayValue("Test task")
        ).toBeInTheDocument();

        expect(
            await screen.findByDisplayValue("Test description")
        ).toBeInTheDocument();

        expect(
            screen.getByRole("combobox")
        ).toHaveValue("InProgress");

    });

    it("allows the user to change the task status", async () => {

        const user = userEvent.setup();

        render(<EditForm task={task} />);

        const statusDropdown = screen.getByRole("combobox");
        await user.selectOptions(statusDropdown, "Completed");
        expect(statusDropdown).toHaveValue("Completed");

    });

});