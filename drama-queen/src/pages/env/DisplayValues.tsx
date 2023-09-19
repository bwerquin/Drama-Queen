import "./env.css";

import React from "react";

export function EnvPage() {
    return (
        <div className="App">
            <h1>Drama Queen v{APP_VERSION}</h1>
            <div className="card">
                <p>Les variables d&aposenvironnements</p>
                <p className="read-the-docs">
                    {Object.entries(import.meta.env)
                        .filter(([k]) => k.startsWith("VITE"))
                        .map(([k, v]) => (
                            <React.Fragment key={k}>
                                <b>{k}</b> : {v}
                                <br />
                            </React.Fragment>
                        ))}
                </p>
            </div>
        </div>
    );
}
