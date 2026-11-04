import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Task } from "@/app/components/task";
import userEvent from "@testing-library/user-event";

vi.mock("next/navigation", () => ({
    useRouter: () => ({
        push: vi.fn(),
    }),

    usePathname: () => "/",

}))

describe("Task", () => {

    const task = {
        id: 1,
        title: "Test task",
        description: "Test description",
        status: "InProgress",
        dueDate: "2026-11-10T14:30"
    };

    const refetch = vi.fn();

    it("display the information of an existing task", async () => {

        render(<Task task={task} refetch={refetch} />);

        expect(
            await screen.findByText("Test task")
        ).toBeInTheDocument();

        screen.find
        expect(
            await screen.findByText("Test description")
        ).toBeInTheDocument();

        expect(
            await screen.findByText("InProgress")
        ).toBeInTheDocument();

        expect(
            await screen.findByText("Due at 14:30 on 2026-11-10")
        ).toBeInTheDocument();
    })

    it("click on the update button", async () => {

        const user = userEvent.setup();

        const confirmSpy = vi.spyOn(window, "confirm").mockReturnValue(false);

        render(<Task task={task} refetch={refetch} />);

        await user.click(
            screen.getByRole("button", { name: /delete task/i })
        );

        expect(confirmSpy).toHaveBeenCalledWith("Are you sure you wish to delete this task? This action cannot be undone.");

        expect(refetch).not.toHaveBeenCalled();

        confirmSpy.mockRestore();
    })
})