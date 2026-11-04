import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { TaskView } from "@/app/components/retrieveTask";
import { getTaskById } from "@/app/api/_internal/actions";

vi.mock("@/app/api/_internal/actions", () => ({
    getTaskById: vi.fn()
}));

vi.mock("next/navigation", () => ({
    useRouter: () => ({
        push: vi.fn(),
        refresh: vi.fn(),
    }),

}))

describe("Task View", () => {

    const task = {
        id: 5,
        title: "Task 5",
        description: "This is task 5 description",
        status: "Pending",
        dueDate: "2026-11-10T14:30"
    };

    it("allow the user to enter an ID and retrieve a task", async () => {

        const user = userEvent.setup();

        getTaskById.mockResolvedValue(task);

        render(<TaskView />);

        const idInput = screen.getByRole("spinbutton");
        const submit = screen.getByRole("button", { name: /submit/i});
        await user.clear(idInput);
        await user.type(idInput, "5");

        expect(idInput).toHaveValue(5);

        await user.click(submit);
        expect(getTaskById).toHaveBeenCalledWith("5");

        expect(
            await screen.findByText("Task 5")
        ).toBeInTheDocument();

        expect(
            await screen.findByText("This is task 5 description")
        ).toBeInTheDocument();

        expect(
            await screen.findByText("Pending")
        ).toBeInTheDocument();

        expect(
            await screen.findByText("Due at 14:30 on 2026-11-10")
        ).toBeInTheDocument();
    })

    it("provided task could not be found", async () => {

        const user = userEvent.setup();
        getTaskById.mockRejectedValue(new Error("Unable to fetch specified task with ID: 1"));

        render(<TaskView />);

        const idInput = screen.getByRole("spinbutton");
        const submit = screen.getByRole("button", { name: /submit/i});
        await user.clear(idInput);
        await user.type(idInput, "1");

        expect(idInput).toHaveValue(1);
        await user.click(submit);
        expect(getTaskById).toHaveBeenCalledWith("1");

        await expect(getTaskById).rejects.toThrow("Unable to fetch specified task with ID: 1");

        expect(
            await screen.findByText("No task found matching that ID.")
        ).toBeInTheDocument();
    })

})