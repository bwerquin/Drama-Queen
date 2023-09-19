import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { injectLegacyEntryQueens } from "utils/injectLegacyQueens";

import { createRouter } from "./routing/router-factory";
import { RoutingStrategy } from "./routing/types";

const mount = ({
    mountPoint,
    initialPathname,
    routingStrategy
}: {
    mountPoint: HTMLElement;
    initialPathname?: string;
    routingStrategy?: RoutingStrategy;
}) => {
    console.log("Mount Drama Queen");
    injectLegacyEntryQueens();

    const router = createRouter({ strategy: routingStrategy, initialPathname });
    const root = createRoot(mountPoint);
    root.render(<RouterProvider router={router} />);

    return () => queueMicrotask(() => root.unmount());
};

export { mount };
