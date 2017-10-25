import * as React from "react";
import "./PeopleView.css";

interface PeopleViewProps {
    title: string;
    subTitle: string;
    imgSrc: string;
    href: string;
    active: boolean;
}

const PeopleView: React.SFC<PeopleViewProps> = (props) => {
    return (
        <a href={props.href} target="_blank" className={`people-view ${props.active ? "people-view--active" : ""}`}>
            <img src={props.imgSrc} alt="" className="people-view__img"/>
            <section className="people-view__info">
                <h3 className="people-view__title">{props.title}</h3>
                <p className="people-view__subtitle">{props.subTitle}</p>
            </section>
        </a>
    );
};

export default PeopleView;