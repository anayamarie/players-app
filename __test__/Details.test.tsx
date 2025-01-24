import { expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Details from "@app/details/[slug]/page";

describe("Details", () => {
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
        const { getByRole } = render(<Details />);
        expect(getByRole("heading", { name: "Player Details" })).toBeVisible();
    });

    it("Breadcrumbs should be present", async () => {
        const { getByRole } = render(<Details />);
        expect(getByRole("navigation", { name: "Breadcrumb" })).toBeVisible();
    });

    it("Should have loading spinner", async () => {
        render(<Details />);
        expect(await screen.findByText("Loading...")).toBeInTheDocument();
    });
});
