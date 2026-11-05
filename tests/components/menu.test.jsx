import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { Menu, NavigationButton } from "../../app/components/menu";

const { mockPush } = vi.hoisted(() => ({
    mockPush: vi.fn()
}));

vi.mock("next/navigation", () => ({
    useRouter: () => ({
        push: mockPush,
    }),
}));

describe("Menu component", () => {
    it("renders the menu with navigation buttons", async () => {
        render(<Menu />);

        expect(screen.getByText("Retrieve all tasks")).toBeInTheDocument();
        expect(screen.getByText("Retrieve specific task")).toBeInTheDocument();
        expect(screen.getByText("Create new task")).toBeInTheDocument();
    });

    it("navigates to create task route when a button is clicked", async () => {
        const user = userEvent.setup();

        render(<Menu />);

        const createTaskButton = screen.getByRole("button", { name: /Create new task/i });
        await user.click(createTaskButton);

        expect(mockPush).toHaveBeenCalledWith("/create_task");
    });

    it("navigates to retrieve tasks route when a button is clicked", async () => {
        const user = userEvent.setup();

        render(<Menu />);

        const retrieveTasksButton = screen.getByRole("button", { name: /Retrieve all tasks/i });
        await user.click(retrieveTasksButton);

        expect(mockPush).toHaveBeenCalledWith("/tasks");
    });

    it("navigates to retrieve specific task route when a button is clicked", async () => {
        const user = userEvent.setup();

        render(<Menu />);

        const specificTaskButton = screen.getByRole("button", { name: /Retrieve specific task/i });
        await user.click(specificTaskButton);

        expect(mockPush).toHaveBeenCalledWith("/task_view");
    });
});

describe("NavigationButton component", () => {
    it("renders a button with the provided label", () => {
        render(<NavigationButton label="Test Button" route="/test" />);
        expect(screen.getByText("Test Button")).toBeInTheDocument();
    });

    it("navigates to the provided route when clicked", async () => {
        const user = userEvent.setup();

        render(<NavigationButton label="Test Button" route="/test" />);

        const button = screen.getByText("Test Button");
        await user.click(button);

        expect(mockPush).toHaveBeenCalledWith("/test");
    });
});