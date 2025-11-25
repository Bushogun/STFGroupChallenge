import React from "react";
import "./size-component.css";

export default function SizeComponent() {
    return (
        <div style={{ height: '200vh', padding: '20px' }}>
            <div className="title">Selecciona tu talla</div>
            <p>Description</p>
            <div className="size-chart">
                <div>

                </div>
            </div>
        </div>
    );
}