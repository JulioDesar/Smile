import React from "react";
import "./style.css";
import { FiChevronUp } from "react-icons/fi";

function BtntTOP() {
    const top = () => {
        const pagina = document.getElementById("home");
        pagina.scrollTo(0, 0);
    };

    return (
        <div className="btn__top" onClick={top}>
            <button>
                <FiChevronUp size={25} color={"1a365d"} />
            </button>
        </div>
    );
}

export default BtntTOP;
