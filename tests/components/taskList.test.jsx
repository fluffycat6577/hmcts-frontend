import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { useTask } from "@/app/hooks/useTask";
import { TaskList } from "@/app/components/tasklist";

vi.mock("@/app/hooks/useTask", () => ({
    useTask: vi.fn()
}));

vi.mock("next/navigation", () => ({
    useRouter: () => ({
        push: vi.fn(),
    }),

    usePathname: () => "/",

}))

describe("Task List", () => {

    const tasks = [
                    { id: 1, title: "Task 1", description: "Test task 1", status:     "Pending", dueDate:"2026-11-10T14:30"},
                    { id: 2, title: "Task 2", description: "Test task 2", status: "Completed", dueDate:"2026-12-20T18:00"}
    ]

    const refetch = () => { return tasks; }

    useTask.mockReturnValue(tasks, false, refetch);

    it("load a list of tasks", async () => {

        render(<TaskList tasks={tasks} refetch={refetch} />)

        expect(
            await screen.findByText("Task 1")
        ).toBeInTheDocument();

        expect(
            await screen.findByText("Test task 1")
        ).toBeInTheDocument();

        expect(
            await screen.findByText("Pending")
        ).toBeInTheDocument();

        expect(
            await screen.findByText("Due at 14:30 on 2026-11-10")
        ).toBeInTheDocument();

        expect(
            await screen.findByText("Task 2")
        ).toBeInTheDocument();

        expect(
            await screen.findByText("Test task 2")
        ).toBeInTheDocument();

        expect(
            await screen.findByText("Completed")
        ).toBeInTheDocument();

        expect(
            await screen.findByText("Due at 18:00 on 2026-12-20")
        ).toBeInTheDocument();
    })
})