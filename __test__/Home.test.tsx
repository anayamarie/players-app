import { expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@app/page";

describe("Players List", () => {
    //mock next/navigation with next-router-mock
    vi.mock("next/navigation", async (importOriginal) => {
        const actual = await importOriginal<typeof import("next/navigation")>();
        const { useRouter } = await vi.importActual<
            typeof import("next-router-mock")
        >("next-router-mock");
        const usePathname = vi.fn().mockImplementation(() => {
            const router = useRouter();
            return router.pathname;
        });
        const useSearchParams = vi.fn().mockImplementation(() => {
            const router = useRouter();
            return new URLSearchParams(router.query?.toString());
        });
        return {
            ...actual,
            useRouter: vi.fn().mockImplementation(useRouter),
            usePathname,
            useSearchParams,
        };
    });

    it("Heading should be rendered", async () => {
        const { getByRole } = render(<Home />);
        expect(getByRole("heading", { name: "Players List" })).toBeVisible();
    });

    it("Should have loading spinner", async () => {
        render(<Home />);
        expect(await screen.findByText("Loading...")).toBeInTheDocument();
    });

    it("List should be present ", async () => {
        const { getByRole } = render(<Home />);
        expect(getByRole("main", { name: "Players Table" })).toBeVisible();
    });
});
