// src/pages/dashboard/DashboardPage.jsx
import { useAuth } from "../../context/AuthContext";
import { useLayout } from "../../components/layout/AppLayout";

export default function DashboardPage() {
    const { user } = useAuth();
    const { openNewProject } = useLayout();

    return (
        <div className="max-w-2xl mx-auto py-16 text-center space-y-5">
            {/* Greeting */}
            <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-black mx-auto"
                style={{ background: "linear-gradient(135deg,#0051ae,#0969da)" }}
            >
                {(user?.fullName || user?.email || "D")[0].toUpperCase()}
            </div>

            <h1 className="text-3xl font-black text-on-surface">
                Welcome back, {user?.fullName?.split(" ")[0] || "there"} 👋
            </h1>

            <p className="text-on-surface-variant text-base">
                Phase 3 — Workspaces &amp; Projects Dashboard — will be built here next.
                The sidebar, header, and auth flows are fully wired.
            </p>

            <div className="flex flex-wrap gap-3 justify-center pt-2">
                <button
                    onClick={openNewProject}
                    className="btn-primary px-6 py-3 rounded-xl"
                >
                    <span className="material-symbols-outlined text-sm">add</span>
                    New Project
                </button>
            </div>

            {/* Feature checklist */}
            <ul className="text-left mt-8 space-y-3 inline-block">
                {[
                    ["check_circle", "green-600", "Phase 1 — Auth (Login / Register)"],
                    ["check_circle", "green-600", "Phase 2 — Sidebar + Top Header"],
                    ["radio_button_unchecked", "slate-400", "Phase 3 — Workspaces & Projects"],
                    ["radio_button_unchecked", "slate-400", "Phase 4 — Kanban Board"],
                ].map(([icon, color, label]) => (
                    <li key={label} className="flex items-center gap-3 text-sm">
                        <span
                            className={`material-symbols-outlined text-${color}`}
                            style={{ fontVariationSettings: icon === "check_circle" ? "'FILL' 1" : "'FILL' 0" }}
                        >
                            {icon}
                        </span>
                        <span className={icon === "check_circle" ? "text-slate-800 font-semibold" : "text-slate-400"}>
                            {label}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}