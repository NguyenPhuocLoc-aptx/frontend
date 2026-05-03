// src/components/layout/AppLayout.jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";
import { useToast } from "../../context/ToastContext";

// Context so child pages can trigger "open new project modal"
import { createContext, useContext } from "react";
export const LayoutContext = createContext({ openNewProject: () => { } });
export const useLayout = () => useContext(LayoutContext);

export default function AppLayout() {
    const [newProjectOpen, setNewProjectOpen] = useState(false);

    // Phase 3 will render the actual modal here.
    // For now we just expose the toggle so the Sidebar CTA works.
    const openNewProject = () => setNewProjectOpen(true);
    const closeNewProject = () => setNewProjectOpen(false);

    return (
        <LayoutContext.Provider value={{ openNewProject, closeNewProject }}>
            <div className="min-h-screen bg-background font-body text-on-surface flex">

                {/* ── Sidebar (fixed, 256 px wide) ── */}
                <Sidebar onNewProject={openNewProject} />

                {/* ── Main area offset by sidebar width ── */}
                <div className="ml-64 flex-1 flex flex-col min-h-screen">
                    <TopHeader />

                    {/* ── Page content ── */}
                    <main className="flex-1 p-6 overflow-auto">
                        <Outlet />
                    </main>
                </div>

            </div>
        </LayoutContext.Provider>
    );
}