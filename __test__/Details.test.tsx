import { expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Details from "@app/details/[slug]/page";

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

describe("Details", () => {
    it("Players List should be rendered", async () => {
        render(<Details />);
        expect(await screen.findByText("Player Details")).toBeInTheDocument();
    });
});
