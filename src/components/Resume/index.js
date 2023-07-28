import React from "react";
import * as C from './styles'
import ResumeItem from "../ResumeItem";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
    return <C.Container>
        <ResumeItem title="entradas" Icon={FaRegArrowAltCircleUp}  value={income} />
        <ResumeItem title="saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
        <ResumeItem title="total" Icon={FaDollarSign} value={total} />
    </C.Container>
};

export default Resume;